<template>
    <section>
        <b-row class="match-height">
            <div class="col-12">
                <div class="card">
                    <div class="card-header border-bottom">
                        <h4 class="card-title">Tasks ({{ totalCount }})</h4>
                    </div>
                    <div class="card-datatable table-responsive">
                        <table class="datatables-ajax table ">
                            <thead>
                                <tr>
                                    <th>Customer</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <!-- <th>Description</th> -->
                                    <th>Platform</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Customer</th>
                                    <th>Title</th>
                                    <th>Category</th>
                                    <!-- <th>Description</th> -->
                                    <th>Platform</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                    <th>Status</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr
                                    v-for="(service, index) in services"
                                    :key="index"
                                >
                                    <td>
                                        <strong class="text-primary"
                                            >{{ index + 1 }}.
                                        </strong>
                                        <a
                                            :href="service.link"
                                            target="_blank"
                                            >{{ service.created_by }}</a
                                        >
                                    </td>
                                    <td>
                                        {{ service.title }} <br />
                                        <p class="text-primary m-0">
                                            <a
                                                :href="service.link"
                                                target="_blank"
                                                >View Task</a
                                            >
                                        </p>
                                    </td>
                                    <td>{{ service.category.name }}</td>
                                    <!-- <td>{{ service.description }}</td> -->
                                    <td>{{ service.social_media }}</td>
                                    <td>N{{ service.amount }}</td>
                                    <td>{{ service.action }}</td>
                                    <td
                                        class="d-flex align-items-center justify-content-between"
                                    >
                                        {{ service.status }}
                                        <b-dropdown
                                            variant="link"
                                            no-caret
                                            class="p-0"
                                        >
                                            <template #button-content>
                                                <feather-icon
                                                    icon="MoreVerticalIcon"
                                                    size="16"
                                                    class="align-middle text-body"
                                                />
                                            </template>
                                            <b-dropdown-item
                                                v-if="
                                                    service.status.toLowerCase() !==
                                                        'approved'
                                                "
                                                @click="
                                                    actionConfirmation(
                                                        service.id,
                                                        'approve'
                                                    )
                                                "
                                                class="text-primary"
                                            >
                                                <feather-icon
                                                    icon="CheckCircleIcon"
                                                    class="text-success"
                                                />
                                                <span
                                                    class="align-middle ml-50 text-success"
                                                    >Approve</span
                                                >
                                            </b-dropdown-item>

                                            <b-dropdown-item
                                                v-if="
                                                    service.status.toLowerCase() ===
                                                        'pending'
                                                "
                                                @click="
                                                    actionConfirmation(
                                                        service.id,
                                                        'rejected'
                                                    )
                                                "
                                                class="text-primary"
                                            >
                                                <feather-icon
                                                    icon="CheckCircleIcon"
                                                    class="text-primary"
                                                />
                                                <span
                                                    class="align-middle ml-50 text-primary"
                                                    >Reject</span
                                                >
                                            </b-dropdown-item>

                                            <b-dropdown-item
                                                v-if="
                                                    service.status.toLowerCase() ===
                                                        'approved'
                                                "
                                                @click="
                                                    actionConfirmation(
                                                        service.id,
                                                        'rejected'
                                                    )
                                                "
                                                class="text-primary"
                                            >
                                                <feather-icon
                                                    icon="XCircleIcon"
                                                    class="text-primary"
                                                />
                                                <span
                                                    class="align-middle ml-50 text-primary"
                                                    >Unpublish</span
                                                >
                                            </b-dropdown-item>

                                            <b-dropdown-item
                                                @click="
                                                    actionConfirmation(
                                                        service.id,
                                                        'delete'
                                                    )
                                                "
                                                class="text-danger"
                                            >
                                                <feather-icon
                                                    icon="TrashIcon"
                                                    class="text-danger"
                                                />
                                                <span
                                                    class="align-middle ml-50 text-danger"
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
                        v-for="link in links"
                        :class="link.active ? 'page-item active' : 'page-item'"
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
    </section>
</template>

<script>
import { BRow, BLink, BAvatar, BDropdown, BDropdownItem } from "bootstrap-vue";
import Swal from "sweetalert2";

export default {
    components: {
        BRow,
        BLink,
        BAvatar,
        BDropdown,
        BDropdownItem,
    },
    data() {
        return {
            data: {},
            services: [],
            totalCount: 0,
            links: [],
            url: "",
        };
    },
    mounted() {
        this.url = this.$url + "/tasks";
        this.getServices();
    },
    methods: {
        getServices() {
            this.$http.get(`${this.url}`).then((response) => {
                this.services = response.data.data;
                this.totalCount = response.data.meta.total;
                this.links = response.data.meta.links;
            });
        },
        async paginate(url) {
            this.url = url;
            this.getServices();
        },
        approveTask(document_id, option) {
            this.loading = true;
            this.$http
                .post(`${this.$url}/tasks/status/${document_id}`, {
                    option: option,
                })
                .then((response) => {
                    if (response.status) {
                        Swal.fire({
                            icon: "success",
                            text: "Task updated successfully",
                        });
                        this.getServices();
                    }
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        deleteTask(document_id) {
            this.loading = true;
            this.$http
                .delete(`${this.$url}/tasks/${document_id}`)
                .then((response) => {
                    if (response.status) {
                        Swal.fire({
                            icon: "success",
                            text: "Task deleted successfully",
                        });
                        this.getServices();
                    }
                })
                .finally(() => {
                    this.loading = false;
                });
        },
        actionConfirmation(document_id, option) {
            Swal.fire({
                title: `Are you sure?`,
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes! Proceed",
            }).then((result) => {
                if (result.isConfirmed && option === "delete") {
                    this.deleteTask(document_id);
                } else if (
                    (result.isConfirmed && option === "approve") ||
                    (result.isConfirmed && option === "rejected")
                ) {
                    this.approveTask(document_id, option);
                } else {
                    Swal.close();
                }
            });
        },
    },
};
</script>

<style>
table tr td:first-child {
    padding: 10px;
}
table tr td:last-child {
    padding: 0;
}
</style>
