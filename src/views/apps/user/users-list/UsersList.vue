<template>
    <div>
        <b-row class="match-height">
            <b-col xl="12" md="12">
                <b-card class="card-statistics">
                    <b-card-body class="statistics-body">
                        <b-row>
                            <b-col xl="4" sm="4" class="mb-2 mb-xl-0 mt-1">
                                <b-media no-body>
                                    <b-media-aside class="mr-2">
                                        <b-avatar
                                            size="48"
                                            :variant="'light-success'"
                                        >
                                            <feather-icon
                                                size="24"
                                                icon="UsersIcon"
                                            />
                                        </b-avatar>
                                    </b-media-aside>
                                    <b-media-body class="my-auto">
                                        <h4 class="font-weight-bolder mb-0">
                                            {{ analytics.active || 0 }}
                                        </h4>
                                        <b-card-text class="font-small-3 mb-0">
                                            Verified
                                        </b-card-text>
                                    </b-media-body>
                                </b-media>
                            </b-col>

                            <b-col xl="4" sm="4" class="mb-2 mb-xl-0 mt-1">
                                <b-media no-body>
                                    <b-media-aside class="mr-2">
                                        <b-avatar
                                            size="48"
                                            :variant="'light-danger'"
                                        >
                                            <feather-icon
                                                size="24"
                                                icon="UsersIcon"
                                            />
                                        </b-avatar>
                                    </b-media-aside>
                                    <b-media-body class="my-auto">
                                        <h4 class="font-weight-bolder mb-0">
                                            {{ analytics.inactive || 0 }}
                                        </h4>
                                        <b-card-text class="font-small-3 mb-0">
                                            Unverified
                                        </b-card-text>
                                    </b-media-body>
                                </b-media>
                            </b-col>
                            <b-col xl="4" sm="4" class="mb-2 mb-xl-0 mt-1">
                                <b-media no-body>
                                    <b-media-aside class="mr-2">
                                        <b-avatar
                                            size="48"
                                            :variant="'light-success'"
                                        >
                                            <feather-icon
                                                size="24"
                                                icon="UsersIcon"
                                            />
                                        </b-avatar>
                                    </b-media-aside>
                                    <b-media-body class="my-auto">
                                        <h4 class="font-weight-bolder mb-0">
                                            {{ analytics.approved || 0 }}
                                        </h4>
                                        <b-card-text class="font-small-3 mb-0">
                                            Approved KYC
                                        </b-card-text>
                                    </b-media-body>
                                </b-media>
                            </b-col>
                            <b-col xl="4" sm="4" class="mb-2 mb-xl-0 mt-1">
                                <b-media no-body>
                                    <b-media-aside class="mr-2">
                                        <b-avatar
                                            size="48"
                                            :variant="'light-danger'"
                                        >
                                            <feather-icon
                                                size="24"
                                                icon="UsersIcon"
                                            />
                                        </b-avatar>
                                    </b-media-aside>
                                    <b-media-body class="my-auto">
                                        <h4 class="font-weight-bolder mb-0">
                                            {{ analytics.declined || 0 }}
                                        </h4>
                                        <b-card-text class="font-small-3 mb-0">
                                            Declined KYC
                                        </b-card-text>
                                    </b-media-body>
                                </b-media>
                            </b-col>
                        </b-row>
                    </b-card-body>
                </b-card>
            </b-col>
        </b-row>

        <user-list-add-new
            :is-add-new-user-sidebar-active.sync="isAddNewUserSidebarActive"
            :role-options="roleOptions"
            :plan-options="planOptions"
            @refetch-data="refetchData"
        />

        <b-row class="match-height mt-4">
            <div class="col-12">
                <div class="card">
                    <div class="card-header border-bottom">
                        <h4 class="card-title">Customers</h4>
                        <div
                            class="mb-1 d-flex align-items-center justify-content-center mx-1"
                        >
                            <div class="col-md-5">
                                <label>Start Date</label>
                                <input
                                    type="date"
                                    class="form-control"
                                    v-model="details.start_date"
                                />
                            </div>
                            <div class="col-md-5">
                                <label>End Date</label>
                                <input
                                    type="date"
                                    class="form-control"
                                    v-model="details.end_date"
                                />
                            </div>
                            <div class="col-md-4 mt-2">
                                <button
                                    type="button"
                                    class="btn-primary btn"
                                    @click="generateReport"
                                >
                                    Download
                                    <b-spinner
                                        v-show="loading"
                                        variant="light"
                                        small
                                    />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div class="m-2">
                        <!-- Table Top -->
                        <b-row>
                            <!-- Per Page -->
                            <b-col
                                cols="12"
                                md="4"
                                class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
                            >
                                <!-- <label>entries</label> -->
                                <b-button
                                    variant="primary"
                                    :disabled="accountIds.length == 0"
                                    class="ml-3"
                                    @click="deleteAccount"
                                >
                                    <span class="text-nowrap">Delete</span>
                                </b-button>
                            </b-col>

                            <!-- Search -->
                            <b-col cols="12" md="8">
                                <div
                                    class="d-flex align-items-center justify-content-end"
                                >
                                    <b-input-group class="mx-1">
                                        <b-input-group-prepend>
                                            <select
                                                class="form-control"
                                                @change="
                                                    handleFilterOptions($event)
                                                "
                                            >
                                                <option value="">
                                                    --Search By--
                                                </option>
                                                <option value="name">
                                                    Name
                                                </option>
                                                <option value="tag">
                                                    Username
                                                </option>
                                                <option value="email">
                                                    Email
                                                </option>
                                                <option value="phone_number">
                                                    Phone Number
                                                </option>
                                                <option value="status">
                                                    Profile Status
                                                </option>
                                                <option value="kyc_status">
                                                    KYC Status
                                                </option>
                                            </select>
                                        </b-input-group-prepend>
                                        <b-form-input
                                            v-model="searchQuery"
                                            class="d-inline-block mr-0"
                                            placeholder="Search by name, email or profile status e.g approved or declined"
                                        />
                                        <b-input-group-append>
                                            <b-button
                                                variant="primary"
                                                class="mr-1"
                                                @click="searchList"
                                            >
                                                <span class="text-nowrap"
                                                    >Search</span
                                                >
                                            </b-button>
                                        </b-input-group-append>
                                    </b-input-group>

                                    <!-- <b-button
                    variant="primary"
                    @click="isAddNewUserSidebarActive = true"
                  >
                    <span class="text-nowrap">Add User</span>
                  </b-button> -->
                                </div>
                            </b-col>
                        </b-row>
                    </div>

                    <div class="card-datatable table-responsive">
                        <table class="datatables-ajax table">
                            <thead>
                                <tr>
                                    <th>SN</th>
                                    <th>
                                        <small class="mr-1">
                                            <input
                                                type="checkbox"
                                                class="checks"
                                                value="all"
                                                @change="populateIds($event)"
                                            />
                                            Select all
                                        </small>
                                        Name
                                    </th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>SN</th>
                                    <th>
                                        <small class="mr-1">
                                            <input
                                                type="checkbox"
                                                class="checks"
                                                value="all"
                                                @change="populateIds($event)"
                                            />
                                            Select all
                                        </small>
                                        Name
                                    </th>
                                    <th>Email</th>
                                    <th>Phone Number</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr
                                    v-for="(customer, index) in customers"
                                    :key="index"
                                >
                                    <td>{{ index + 1 }}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            class="mr-1 checks"
                                            :value="customer.id"
                                            @change="populateIds($event)"
                                        />
                                        <b-avatar
                                            size="32"
                                            :src="customer.avatar"
                                            :text="
                                                avatarText(
                                                    customer.first_name +
                                                        ' ' +
                                                        customer.last_name
                                                )
                                            "
                                            :variant="`light-${resolveUserRoleVariant(
                                                customer.role
                                            )}`"
                                            :to="{
                                                name: 'apps-users-view',
                                                params: { id: customer.id },
                                            }"
                                        />
                                        <router-link
                                            :to="{
                                                name: 'apps-users-view',
                                                params: { id: customer.id },
                                            }"
                                        >
                                            {{
                                                customer.first_name +
                                                " " +
                                                customer.last_name
                                            }}
                                        </router-link>
                                    </td>
                                    <td>{{ customer.email }}</td>
                                    <td>{{ customer.phone_number }}</td>
                                    <td
                                        :class="
                                            customer.kyc.filter(
                                                (x) =>
                                                    x.verification_status ===
                                                    'APPROVED'
                                            ).length > 1 &&
                                            customer.kyc_status === 'approved'
                                                ? 'text-success'
                                                : 'text-danger'
                                        "
                                    >
                                        <b-badge
                                            pill
                                            :variant="
                                                !customer.kyc.length &&
                                                customer.avatar == null
                                                    ? 'danger'
                                                    : !customer.kyc &&
                                                      !customer.kyc.length &&
                                                      customer.accounts.length
                                                    ? 'info'
                                                    : customer.kyc.filter(
                                                          (x) =>
                                                              x.verification_status !==
                                                              'APPROVED'
                                                      ).length >= 1
                                                    ? 'primary'
                                                    : customer.kyc.length < 2
                                                    ? 'warning'
                                                    : customer.kyc.filter(
                                                          (x) =>
                                                              x.verification_status ===
                                                              'APPROVED'
                                                      ).length > 1 &&
                                                      customer.kyc_status ===
                                                          'approved'
                                                    ? 'success'
                                                    : 'danger'
                                            "
                                            class="text-capitalize"
                                        >
                                            {{
                                                !customer.kyc.length &&
                                                customer.avatar == null
                                                    ? "NO KYC"
                                                    : !customer.kyc.length &&
                                                      customer.accounts.length
                                                    ? "NO DOCUMENT"
                                                    : customer.kyc.filter(
                                                          (x) =>
                                                              x.verification_status !==
                                                              "APPROVED"
                                                      ).length >= 1
                                                    ? "PENDING KYC"
                                                    : customer.kyc.length < 2
                                                    ? "INCOMPLETE KYC"
                                                    : customer.kyc.filter(
                                                          (x) =>
                                                              x.verification_status ===
                                                              "APPROVED"
                                                      ).length > 1 &&
                                                      customer.kyc_status ===
                                                          "approved"
                                                    ? "COMPLETE KYC"
                                                    : "AWAITING"
                                            }}
                                            <!-- {{ 
                        customer.profile_status == 'APPROVED' ?  
                        customer.profile_status : (customer.kyc.filter(x => x.document_type !== 'profile_photo').length === 1 &&  customer.avatar !== null ? 
                        'INCOMPLETE KYC' : (customer.kyc.filter(x => x.document_type !== 'profile_photo').length > 1 && customer.avatar !== '' ? 
                        'PENDING KYC' : 
                        (customer.kyc.filter(x => x.document_type !== 'profile_photo').length > 1 && customer.avatar === null ? 
                        'INCOMPLETE KYC' : 'NO KYC'))) 
                      }} -->
                                        </b-badge>
                                    </td>
                                    <td>
                                        <div class="d-flex align-items-center">
                                            <a
                                                href="javascript:void(0)"
                                                class="text-primary font-bold"
                                                @click="
                                                    sendMail(
                                                        customer.name,
                                                        customer.id
                                                    )
                                                "
                                                v-if="
                                                    (customer.profile_status !=
                                                        'APPROVED' &&
                                                        customer.avatar !==
                                                            '') ||
                                                    customer.kyc.filter(
                                                        (x) =>
                                                            x.document_type !==
                                                            'profile_photo'
                                                    ).length < 2
                                                "
                                            >
                                                <feather-icon
                                                    icon="SendIcon"
                                                    size="16"
                                                    class="align-middle text-body"
                                                />
                                                <b-spinner
                                                    v-show="loading"
                                                    variant="primary"
                                                    small
                                                />
                                            </a>

                                            <a
                                                href="javascript:void(0)"
                                                class="text-success font-bold"
                                                v-else
                                            >
                                                <feather-icon
                                                    icon="UserCheckIcon"
                                                    size="16"
                                                    class="align-middle text-success"
                                                />
                                            </a>
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
                                                        name: 'apps-users-view',
                                                        params: {
                                                            id: customer.id,
                                                        },
                                                    }"
                                                >
                                                    <feather-icon
                                                        icon="FileTextIcon"
                                                    />
                                                    <span
                                                        class="align-middle ml-50"
                                                        >Details</span
                                                    >
                                                </b-dropdown-item>

                                                <b-dropdown-item
                                                    :to="{
                                                        name: 'apps-users-edit',
                                                        params: {
                                                            id: customer.id,
                                                        },
                                                    }"
                                                >
                                                    <feather-icon
                                                        icon="EditIcon"
                                                    />
                                                    <span
                                                        class="align-middle ml-50"
                                                        >Edit</span
                                                    >
                                                </b-dropdown-item>

                                                <b-dropdown-item
                                                    @click="
                                                        deleteAccount(
                                                            customer.id
                                                        )
                                                    "
                                                >
                                                    <feather-icon
                                                        icon="TrashIcon"
                                                    />
                                                    <span
                                                        class="align-middle ml-50"
                                                        >Delete</span
                                                    >
                                                </b-dropdown-item>
                                            </b-dropdown>
                                        </div>
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
                        v-for="link in meta.links"
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
import useUsersList from "./useUsersList";
import userStoreModule from "../userStoreModule";
import UserListAddNew from "./UserListAddNew.vue";

export default {
    components: {
        UserListAddNew,
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
        const USER_APP_STORE_MODULE_NAME = "app-user";

        // Register module
        if (!store.hasModule(USER_APP_STORE_MODULE_NAME))
            store.registerModule(USER_APP_STORE_MODULE_NAME, userStoreModule);

        // UnRegister on leave
        onUnmounted(() => {
            if (store.hasModule(USER_APP_STORE_MODULE_NAME))
                store.unregisterModule(USER_APP_STORE_MODULE_NAME);
        });

        const isAddNewUserSidebarActive = ref(false);

        const roleOptions = [
            { label: "Admin", value: "admin" },
            { label: "Author", value: "author" },
        ];

        const planOptions = [
            { label: "Basic", value: "basic" },
            { label: "Company", value: "company" },
            { label: "Enterprise", value: "enterprise" },
            { label: "Team", value: "team" },
        ];

        const statusOptions = [
            { label: "Pending", value: "pending" },
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
        ];

        const {
            fetchUsers,
            tableColumns,
            perPage,
            currentPage,
            totalUsers,
            dataMeta,
            perPageOptions,
            sortBy,
            isSortDirDesc,
            refUserListTable,
            refetchData,

            // UI
            resolveUserRoleVariant,
            resolveUserRoleIcon,
            resolveUserStatusVariant,

            // Extra Filters
            roleFilter,
            planFilter,
            statusFilter,
        } = useUsersList();

        return {
            // Sidebar
            isAddNewUserSidebarActive,

            fetchUsers,
            tableColumns,
            perPage,
            currentPage,
            totalUsers,
            dataMeta,
            perPageOptions,
            sortBy,
            isSortDirDesc,
            refUserListTable,
            refetchData,

            // Filter
            avatarText,

            // UI
            resolveUserRoleVariant,
            resolveUserRoleIcon,
            resolveUserStatusVariant,

            roleOptions,
            planOptions,
            statusOptions,

            // Extra Filters
            roleFilter,
            planFilter,
            statusFilter,
        };
    },

    data() {
        return {
            agents: [],
            meta: {},
            links: {},
            url: "",
            searchQuery: "",
            param: "",
            verified: 0,
            unverified: 0,
            loading: false,
            all: [],
            accountIds: [],
            customers: [],
            details: {
                start_date: "",
                end_date: "",
            },
            loading: false,
            analytics: {
                active: 0,
                inactive: 0,
                approved: 0,
                declined: 0,
            },
        };
    },

    computed: {
        lisFilter() {
            return this.agents.filter(
                (agent) =>
                    agent.email.includes(this.searchQuery) ||
                    agent.email.toLowerCase().includes(this.searchQuery) ||
                    agent.phone_number.includes(this.searchQuery)
            );
        },
        merchantList() {
            return this.all.filter(
                (agent) =>
                    agent.email.includes(this.searchQuery) ||
                    agent.email.toLowerCase().includes(this.searchQuery) ||
                    agent.phone_number.includes(this.searchQuery)
            );
        },
    },

    created() {
        this.url = this.$url + "/customers";
        this.getCustomers();
        this.getAnalytics();
    },
    methods: {
        populateIds(event) {
            let elem = document.getElementsByClassName("checks");
            if (event.target.value === "all" && event.target.checked === true) {
                // this.accountIds = this.customers.map(e => {return e.id})
                elem.forEach((element) => {
                    element.setAttribute("checked", true);
                    element.value !== "all"
                        ? this.accountIds.push(element.value)
                        : null;
                });
            } else if (
                event.target.value === "all" &&
                event.target.checked === false
            ) {
                elem.forEach((element) => {
                    element.removeAttribute("checked");
                    this.accountIds = this.accountIds.filter(
                        (acc) => acc !== element.value
                    );
                });
            }
            if (event.target.checked === true && event.target.value !== "all") {
                this.accountIds.push(event.target.value);
            } else if (event.target.checked === false) {
                this.accountIds = this.accountIds.filter(
                    (acc) => acc !== event.target.value
                );
            }

            // console.log(this.accountIds)
        },
        paginate(url) {
            console.log(this.url);
            this.url = url;
            this.getCustomers();
        },
        searchList() {
            this.url = `${this.$url}/customers?param=${this.param}&filter=${this.searchQuery}`;
            this.getCustomers();
        },
        getCustomers() {
            console.log(this.url);
            this.$http.get(this.url).then((response) => {
                this.customers = response.data.data.data;
                const customers = response.data.data.data;
                // console.log("M", customers)
                this.meta = response.data.data.meta;
                this.links = response.data.data.links;
                this.agents = customers.map((agent) => ({
                    id: agent.id,
                    agent_id: agent.agent_id,
                    name: agent.name,
                    phone_number: agent.phone_number,
                    email: agent.email,
                    avatar: agent.profile_avatar,
                    referral_code: agent.referral_code,
                    date: agent.created_at_formatted,
                    city: agent.city,
                    status: agent.is_verified,
                    role: "user",
                }));
                this.verified = response.data.active_accounts;
                this.unverified = response.data.inactive_accounts;
            });
        },
        getAll() {
            this.$http.get(this.$url + "/customers").then((response) => {
                // console.log("RESPONE", response.data.data)
                this.customers = response.data.data.data;
                this.all = response.data.data.data.map((customer) => ({
                    id: customer.id,
                    agent_id: customer.customer_id,
                    name: customer.name,
                    phone_number: customer.phone_number,
                    email: customer.email,
                    avatar: customer.profile_avatar,
                    referral_code: customer.referral_code,
                    date: customer.created_at_formatted,
                    city: customer.city,
                    status:
                        customer.profile_status.toLowerCase() === "approved"
                            ? "Active"
                            : "Inactive",
                    role: "user",
                }));
            });
        },
        getAnalytics() {
            this.$http.get(this.$url + "/analytics").then((response) => {
                console.log("Analtycics", response);
                if (response.data.data) {
                    this.analytics.active = response.data.data.active_customers;
                    this.analytics.inactive =
                        response.data.data.inactive_customers;
                    this.analytics.approved = response.data.data.approved_kycs;
                    this.analytics.declined = response.data.data.declined_kycs;
                }
            });
        },
        deleteAccount() {
            Swal.fire({
                icon: "warning",
                html: `<p>Are you sure you want to do this?</p> <p>Data count: <strong>(${this.accountIds.length})</strong></p>`,
                showConfirmButton: true,
                showCancelButton: true,
                cancelButtonText: "No, Cancel",
                confirmButtonText: "Yes, Proceed",
                preConfirm: (val) => {
                    this.$http
                        .post(`${this.$url}/customers/bulk-delete`, {
                            accounts: this.accountIds,
                        })
                        .then((response) => {
                            console.log("resp", response);
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
        generateReport() {
            if (this.details.start_date == "" || this.details.end_date == "") {
                Swal.fire({
                    icon: "error",
                    text: "Select a start and end date",
                });
                return;
            }
            this.loading = true;
            this.$http
                .post(this.$url + "/reports/export-customers", this.details, {
                    responseType: "arraybuffer",
                })
                .then((response) => {
                    this.loading = false;
                    var fileURL = window.URL.createObjectURL(
                        new Blob([response.data])
                    );
                    var fileLink = document.createElement("a");
                    fileLink.href = fileURL;
                    fileLink.setAttribute(
                        "download",
                        "Customers_" +
                            this.details.start_date +
                            "_to_" +
                            this.details.end_date +
                            ".xlsx"
                    );
                    document.body.appendChild(fileLink);
                    fileLink.click();
                })
                .finally(() => (this.loading = false));
        },
        handleFilterOptions(event) {
            this.param = event.target.value;
        },
        sendMail(name, id) {
            Swal.fire({
                icon: "warning",
                html: `Are you sure to send notifications to <strong> ${name}</strong>?`,
                showCancelButton: true,
                confirmButtonText: `Yes, proceed`,
                cancelButtonText: `No, Cancel`,
            }).then((result) => {
                if (result.isConfirmed) {
                    this.loading = true;
                    this.$http
                        .post(`${this.$url}/customers/notifications/send`, {
                            customer_id: id,
                        })
                        .then((response) => {
                            console.log("resp", response);
                            if (response.data.status) {
                                Swal.fire({
                                    icon: "success",
                                    text: response.data.message,
                                });
                            } else {
                                Swal.fire({
                                    icon: "error",
                                    text: response.data.message,
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
                        })
                        .finally(() => (this.loading = false));
                }
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
