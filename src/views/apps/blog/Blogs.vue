<template>
    <div>
        <b-row class="match-height mt-4">
            <div class="col-12">
                <div class="card">
                    <div
                        class="card-header d-flex justify-content-between border-bottom"
                    >
                        <h4 class="card-title">Blogs</h4>
                        <div>
                            <router-link
                                :to="{
                                    name: 'apps-blogs-create',
                                }"
                                class="btn-primary btn"
                            >
                                Create
                            </router-link>
                        </div>
                    </div>

                    <div class="card-datatable table-responsive">
                        <table class="datatables-ajax table">
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>Title</th>
                                    <th>Short Description</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>SN</th>
                                    <th>Title</th>
                                    <th>Short Description</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr v-for="(blog, index) in blogs" :key="index">
                                    <td>{{ index + 1 }}</td>
                                    <td>
                                        <router-link
                                            :to="{
                                                name: 'apps-blogs-update',
                                                params: { id: blog.slug },
                                            }"
                                        >
                                            {{ blog.title }}
                                        </router-link>
                                    </td>
                                    <td>{{ blog.short_description }}</td>
                                    <td>{{ blog.category.name }}</td>
                                    <td>
                                        <b-dropdown
                                            variant="link"
                                            no-caret
                                            :right="
                                                $store.state.appConfig.isRTL
                                            "
                                        >
                                            <template #button-content>
                                                <feather-icon
                                                    icon="MoreVerticalIcon"
                                                    size="16"
                                                    class="align-middle text-body"
                                                />
                                            </template>

                                            <b-dropdown-item
                                                :to="{
                                                    name: 'apps-blogs-update',
                                                    params: { id: blog.slug },
                                                }"
                                            >
                                                <feather-icon icon="EditIcon" />
                                                <span class="align-middle ml-50"
                                                    >Edit</span
                                                >
                                            </b-dropdown-item>

                                            <b-dropdown-item
                                                @click="
                                                    deleteAccount(blog.slug)
                                                "
                                            >
                                                <feather-icon
                                                    icon="TrashIcon"
                                                />
                                                <span class="align-middle ml-50"
                                                    >Delete</span
                                                >
                                            </b-dropdown-item>
                                        </b-dropdown>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </b-row>
        <div class="mx-2 mb-2">
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li
                        :class="link.active ? 'page-item active' : 'page-item'"
                        v-for="link in links"
                        :key="link.id"
                    >
                        <a
                            class="page-link"
                            href="javascript:;"
                            @click="paginate(link.url)"
                            v-html="link.label"
                        ></a>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import {
    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BDropdown,
    BDropdownItem,
    BPagination,
    BCardText,
    BMediaAside,
    BCardBody,
    BMediaBody,
    BSpinner,
    BInputGroup,
    BInputGroupAppend,
    BInputGroupPrepend,
} from "bootstrap-vue";
import vSelect from "vue-select";
import store from "@/store";
import { ref, onUnmounted } from "@vue/composition-api";
import { avatarText } from "@core/utils/filter";
import Swal from "sweetalert2";

export default {
    components: {
        BCardBody,
        BMediaBody,
        BCardText,
        BMediaAside,
        BCard,
        BRow,
        BCol,
        BFormInput,
        BButton,
        BTable,
        BMedia,
        BAvatar,
        BLink,
        BBadge,
        BDropdown,
        BDropdownItem,
        BPagination,
        BSpinner,
        vSelect,
        BInputGroup,
        BInputGroupAppend,
        BInputGroupPrepend,
    },
    setup() {
        return;
    },

    data() {
        return {
            blogs: [],
            current_page: 1,
            prev_page_url: null,
            next_page_url: null,
            links: [],
        };
    },

    created() {
        this.url = this.$url + "/blog";
        this.getBlogs();
    },
    methods: {
        async getBlogs() {
            try {
                const response = await this.$http.get(this.url);
                this.blogs = response.data.data.data;
                this.current_page = response.data.data.current_page;
                this.prev_page_url = response.data.data.prev_page_url;
                this.next_page_url = response.data.data.next_page_url;
                this.links = response.data.data.links;
            } catch (error) {
                console.log(error);
            }
        },
        async paginate(url) {
            this.url = url;
            this.getBlogs();
        },
        deleteAccount(slug) {
            Swal.fire({
                icon: "warning",
                html: `<p>Are you sure you want to do this?</p>`,
                showConfirmButton: true,
                showCancelButton: true,
                cancelButtonText: "No, Cancel",
                confirmButtonText: "Yes, Proceed",
                preConfirm: (val) => {
                    this.$http
                        .delete(`${this.$url}/blog/${slug}`)
                        .then((response) => {
                            if (response.data.status) {
                                Swal.fire({
                                    icon: "success",
                                    text: "Data deleted successfully",
                                }).then(() => {
                                    window.location.reload();
                                });
                            }
                        })
                        .catch((err) => {
                            if (err.response.data) {
                                let message;
                                if (err.response.data.errors) {
                                    let errors = err.response.data.errors;
                                    let errorList = Object.values(errors);
                                    errorList.map((msg) => {
                                        message = msg;
                                    });
                                }
                                Swal.fire({
                                    icon: "error",
                                    text: message || err.response.data.message,
                                });
                            }
                        });
                },
            });
        },
    },
};
</script>

<style lang="scss" scoped>
.per-page-selector {
    width: 90px;
}
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
