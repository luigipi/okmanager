<template>
    <b-card title="Update Blog">
        <b-form @submit.prevent="updateBlog">
            <b-row>
                <b-col md="12">
                    <b-form-group label="Title" label-for="title">
                        <b-form-input
                            id="title"
                            v-model="blog.title"
                            placeholder="Title"
                        />
                    </b-form-group>
                </b-col>

                <b-col md="12">
                    <b-form-group label="Category" label-for="blog-category">
                        <b-form-select
                            v-model="blog.category.id"
                            :options="getComputedCategories"
                            class=""
                            @input=""
                        />
                    </b-form-group>
                    Didnt find category?
                    <b-button
                        v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                        v-b-modal.modal-multi-1
                        class="text-primary"
                    >
                        Create one
                    </b-button>
                </b-col>

                <b-col md="12">
                    <b-form-group
                        label="Short Description"
                        label-for="blog-short-description"
                    >
                        <b-form-textarea
                            id="blog-text-area"
                            v-model="blog.short_description"
                            placeholder="Enter short description"
                            rows="3"
                        ></b-form-textarea>
                    </b-form-group>
                </b-col>

                <b-col md="12">
                    <b-form-group label="Body" label-for="blog-body">
                        <ckeditor
                            :editor="editor"
                            v-model="blog.body"
                            :config="editorConfig"
                        ></ckeditor>
                    </b-form-group>
                </b-col>
                <b-col md="12">
                    <div v-if="blog.image && !previewImage">
                        <img :src="blog.image" class="img" />
                        <button @click="clearImage" class="btn btn-link">
                            Clear Image
                        </button>
                    </div>

                    <div v-else-if="previewImage">
                        <img :src="previewImage" class="img" />
                        <button @click="clearImage" class="btn btn-link">
                            Clear Image
                        </button>
                    </div>

                    <div v-else>
                        <input
                            id="blog-image"
                            ref="image"
                            @input="uploadFile"
                            class="d-none"
                            type="file"
                        />

                        <div
                            class="img-uploader d-flex justify-content-center align-items-center"
                        >
                            Click
                            <label for="blog-image" class="text-primary"
                                >here</label
                            >
                            to upload image
                        </div>
                    </div>
                </b-col>

                <!-- submit and reset -->
                <b-col>
                    <b-button
                        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                        type="submit"
                        variant="primary"
                        class="mr-1 mt-2"
                    >
                        Submit
                        <b-spinner v-show="loading" variant="light" small />
                    </b-button>
                </b-col>
            </b-row>
        </b-form>

        <!-- modal -->
        <b-modal
            id="modal-multi-1"
            size="lg"
            title="Category"
            ok-only
            no-stacking
        >
            <b-form @submit.prevent="createCategory">
                <b-row>
                    <b-col md="12">
                        <b-form-group
                            label="Category"
                            label-for="category-name"
                        >
                            <b-form-input
                                id="category-name"
                                v-model="category"
                                placeholder="Enter Category"
                            />
                        </b-form-group>
                    </b-col>
                    <b-col>
                        <b-button
                            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                            type="submit"
                            variant="primary"
                            class="mr-1"
                        >
                            Create
                        </b-button>
                    </b-col>
                </b-row>
            </b-form>

            <div class="mt-2 d-flex flex-wrap gap">
                <div
                    v-for="category in categories"
                    :key="category.slug"
                    class="pill"
                >
                    <div class="">{{ category.name }}</div>
                    <a
                        href="javascript:void(0)"
                        @click="deleteCategory(category.slug)"
                        >X</a
                    >
                </div>
            </div>
        </b-modal>
    </b-card>
</template>

<script>
import {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BForm,
    BButton,
    BCard,
    BSpinner,
    BFormTextarea,
    BFormSelect,
    BModal,
} from "bootstrap-vue";
import Ripple from "vue-ripple-directive";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Swal from "sweetalert2";

export default {
    components: {
        BRow,
        BCol,
        BFormGroup,
        BFormInput,
        BForm,
        BButton,
        BCard,
        BSpinner,
        BFormTextarea,
        BFormSelect,
        BModal,
    },
    directives: {
        Ripple,
    },
    data() {
        return {
            blog: {},
            categories: [],
            loading: false,
            editor: ClassicEditor,
            editorData: "",
            editorConfig: {
                modules: {
                    toolbar: "#toolbar",
                },
            },
            previewImage: "",
            category: "",
        };
    },
    computed: {
        getComputedCategories() {
            return this.categories.map((item) => {
                return {
                    text: item?.name,
                    value: item?.id,
                };
            });
        },
    },
    created() {
        this.getBlog();
        this.getCategories();
    },
    methods: {
        async getBlog() {
            try {
                const response = await this.$http.get(
                    `${this.$url}/blog/${this.$route.params.id}`
                );
                this.blog = response.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getCategories() {
            try {
                const response = await this.$http.get(
                    `${this.$url}/blog-category`
                );
                this.categories = response.data.data;
            } catch (error) {
                console.log(error);
            }
        },
        async handleUploadFile(e) {
            let dt = e.dataTransfer;
            let files = dt.files;
            let file = files[0];

            this.previewImage = URL.createObjectURL(file);
            this.blog.image = file;
        },
        async uploadFile() {
            let file = this.$refs.image.files[0];
            this.previewImage = URL.createObjectURL(file);
            this.blog.image = file;
        },
        clearImage() {
            this.blog.image = "";
            this.previewImage = "";
        },
        async updateBlog() {
            this.loading = true;

            const formData = new FormData();
            formData.append("title", this.blog.title);
            formData.append("short_description", this.blog.short_description);
            if (this.blog.image instanceof File) {
                formData.append("image", this.blog.image ?? "");
            }
            formData.append("body", this.blog.body);
            formData.append("category_id", this.blog.category.id);

            try {
                const response = await this.$http.post(
                    `${this.$url}/blog/${this.$route.params.id}?_method=PUT`,
                    formData
                );
                Swal.fire({
                    icon: "success",
                    text: "Successfully updated blog",
                });
            } catch (error) {
                console.log(error);

                if (error.response.data.message) {
                    Swal.fire({
                        icon: "error",
                        text: error.response.data.message,
                    });
                }
            } finally {
                this.loading = false;
            }
        },
        async createCategory() {
            try {
                const response = await this.$http.post(
                    `${this.$url}/blog-category`,
                    {
                        name: this.category,
                    }
                );
                this.category = "";
                await this.getCategories();
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        },
        async deleteCategory(slug) {
            try {
                const response = await this.$http.delete(
                    `${this.$url}/blog-category/${slug}`
                );
                await this.getCategories();
            } catch (error) {
                console.log(error);
            } finally {
                this.loading = false;
            }
        },
    },
};
</script>

<style scoped>
.img-uploader,
.img {
    height: 200px;
    width: 400px;
    border: 1px solid #eeee;
}

.pill {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    border: 1px solid #eeee;
    padding: 8px;
}

.gap {
    gap: 0.75rem;
}

@media (max-width: 576px) {
    .img,
    .img-uploader {
        width: 100%;
    }
}
</style>
