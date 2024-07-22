<template>
    <b-card>
        <div class="card-title">
            {{ ticket.reference + " - " + ticket.title }}
            <span
                :class="
                    ticket.status === 'pending ml-3'
                        ? 'text-warning ml-3'
                        : ticket.status === 'answered ml-3'
                        ? 'text-success ml-3'
                        : ticket.status === 'closed ml-3'
                        ? 'text-danger ml-3'
                        : 'text-info ml-3'
                "
            >
                {{ ticket.status }}
            </span>
        </div>
        <b-col md="6" lg="5">
            <p class="main-message">
                {{ ticket.description }}
                <small class="message-time text-primary">{{
                    ticket.created_at_readable
                }}</small>
            </p>
        </b-col>
        <b-col md="6" lg="12">
            <div
                ref="overflow"
                :style="{ height: '800px' }"
                class="d-flex overflow-auto border flex-column gap-1 w-full p-3"
            >
                <div
                    v-for="(message, id) in ticket.messages"
                    :key="id"
                    class="comments"
                >
                    <div v-if="message.customer">
                        <div class="shadow w-50 border rounded  p-1">
                            <div class="mb-1">
                                <b-avatar size="21" :variant="'primary'">
                                    <feather-icon size="15" icon="UserIcon" />
                                </b-avatar>
                                {{ message.customer.first_name }}
                                {{ message.customer.last_name }}
                            </div>

                            {{ message.content }}

                            <p class="small text-right m-0 text-primary">
                                {{ message.created_at_readable }}
                            </p>
                        </div>
                    </div>

                    <div v-else class="d-flex justify-content-end">
                        <div
                            class="shadow bg-secondary rounded text-light w-50 border p-1"
                        >
                            <div class="mb-1">
                                <b-avatar size="21" :variant="'primary'">
                                    <feather-icon size="15" icon="UserIcon" />
                                </b-avatar>
                                Support agent
                            </div>
                            {{ message.content }}
                            <p class="small text-right m-0">
                                {{ message.created_at_readable }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </b-col>
        <b-form v-if="ticket.status != 'closed'" @submit.prevent="sendMessage">
            <b-row>
                <b-col md="6">
                    <b-form-group label="Message" label-for="mc-message">
                        <b-form-textarea
                            id="mc-message"
                            v-model="details.body"
                            placeholder="Message"
                        />
                    </b-form-group>
                </b-col>

                <b-col md="12">
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        class="mr-1"
                    >
                        Submit
                        <b-spinner v-show="loading" variant="light" small />
                    </b-button>
                </b-col>
            </b-row>
        </b-form>
    </b-card>
</template>

<script>
import {
    BRow,
    BCol,
    BFormGroup,
    BFormTextarea,
    BForm,
    BButton,
    BCard,
    BSpinner,
    BAvatar,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import router from "@/router";
import Echo from "laravel-echo";
import Pusher from "pusher-js";

export default {
    components: {
        BRow,
        BAvatar,
        BCol,
        BFormGroup,
        BFormTextarea,
        BForm,
        BButton,
        BCard,
        BSpinner,
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            comments: [],
            service: {},
            ticket: {},
            details: {},
            user: {},
            loading: false,
            echo: {},
        };
    },
    created() {
        this.getComments();
        this.echo = new Echo({
            broadcaster: "pusher",
            key: "LaravelOkPayKey",
            cluster: "mt1",
            wsHost: "api.okpay.ng",
            wsPort: 443,
            disableStats: true,
            forceTLS: false,
            encrypted: false,
            authEndpoint: "http://api.okpay.ng/api/broadcasting/auth",
            auth: {
                headers: {
                    Authorization:
                        "Bearer " + localStorage.getItem("accessToken"),
                },
            },
        });

        this.echo.connector.pusher.connection.bind("error", function(err) {
            console.error("Connection error:", err);
        });

        this.echo
            .join(`Support.Chat.${router.currentRoute.params.id}`)
            .listen("NewSupportMessage", (data) => {
                this.getComments();
                setTimeout(() => {
                    this.$refs.overflow.scrollTop = this.$refs.overflow.scrollHeight;
                }, 600);
            });
    },
    methods: {
        // getToken() {
        //     return localStorage.getItem("accessToken");
        // },
        getComments() {
            this.$http
                .get(`${this.$url}/support/${router.currentRoute.params.id}`)
                .then((response) => {
                    this.ticket = response.data.data;
                });
        },
        sendMessage() {
            this.loading = true;
            this.$http
                .post(
                    `${this.$url}/support/${router.currentRoute.params.id}/send`,
                    {
                        content_type: "text",
                        content: this.details.body,
                    }
                )
                .then((response) => {
                    this.details.body = "";
                    this.getComments();
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        scrollToBottom(element) {
            element.scrollTop = element.scrollHeight;
        },
    },
};
</script>

<style lang="scss">
.main-message {
    font-size: 16px;
    color: #000;
    font-weight: 500;
}
.message-time {
    font-size: 11px;
    text-transform: italic;
    font-weight: 700;
}

.comments {
    margin: 15px 0;
    .message-time {
        display: block;
    }
}

.support-comment {
    font-weight: 500;
    text-transform: italic;
}
</style>
