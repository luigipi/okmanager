<template>
    <section>
        <b-row class="match-height">
            <div class="col-md-12 col-lg-12">
                <div class="card">
                    <div class="card-header border-bottom">
                        <h4 class="card-title">
                            Support Tickets ({{ meta.total }})
                        </h4>
                        <form>
                            <div class="form-group">
                                <input
                                    v-model="searchParam"
                                    name="search"
                                    placeholder="Search"
                                    class="form-control"
                                />
                            </div>
                        </form>
                    </div>
                    <div class="card-datatable">
                        <table
                            class="datatables-ajax table table-responsive-lg w-100 "
                        >
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Ticket ID</th>
                                    <th>Subject</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>SN</th>
                                    <th>Ticket ID</th>
                                    <th>Subject</th>
                                    <th>Priority</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr
                                    v-for="(ticket, index) in ticketList"
                                    :key="index"
                                >
                                    <td>{{ index + 1 }}</td>
                                    <td>
                                        {{ ticket.reference }}
                                    </td>
                                    <td>{{ ticket.title }}</td>
                                    <td>{{ ticket.priority }}</td>
                                    <td
                                        :class="
                                            ticket.status === 'new'
                                                ? 'text-warning'
                                                : ticket.status === 'progress'
                                                ? 'text-success'
                                                : ticket.status === 'closed'
                                                ? 'text-danger'
                                                : 'text-info'
                                        "
                                    >
                                        {{ ticket.status }}
                                    </td>
                                    <td>{{ ticket.created_at_readable }}</td>
                                    <td>
                                        <b-button-group>
                                            <b-link
                                                :to="{
                                                    name: 'apps-ticket-edit',
                                                    params: { id: ticket.id },
                                                }"
                                                class="btn btn-sm btn-primary"
                                            >
                                                Message
                                            </b-link>
                                            <a
                                                :id="ticket.id"
                                                href="javascript:;"
                                                data-status="close"
                                                class="btn btn-sm btn-danger"
                                                @click="manageTicket(ticket.id)"
                                            >
                                                Close
                                            </a>
                                        </b-button-group>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </b-row>
        <div v-show="loading" class="overlay">
            Please wait ....
        </div>
    </section>
</template>

<script>
import { BRow, BLink, BButtonGroup } from "bootstrap-vue";

export default {
    components: {
        BRow,
        BLink,
        BButtonGroup,
    },
    data() {
        return {
            data: {},
            tickets: [],
            meta: {},
            links: {},
            loading: false,
            searchParam: "",
        };
    },
    computed: {
        ticketList() {
            return this.tickets.filter(
                (ticket) =>
                    ticket.reference.includes(this.searchParam) ||
                    ticket.reference.toLowerCase().includes(this.searchParam)
            );
        },
    },
    mounted() {
        this.getTickets();
    },
    methods: {
        getTickets() {
            this.$http.get(`${this.$url}/support`).then((response) => {
                this.tickets = response.data.data;
                this.meta = response.data.meta;
                this.links = response.data.links;
            });
        },
        manageTicket(id) {
            this.loading = true;
            this.$http
                .put(`${this.$url}/support/${id}`, { status: "closed" })
                .then((response) => {
                    if (response.data.status) {
                        window.location.reload();
                    }
                })
                .finally(() => {
                    this.loading = false;
                });
        },
    },
};
</script>

<style lang="scss">
.overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    font-size: 20px;
    color: #fff;
}
</style>
