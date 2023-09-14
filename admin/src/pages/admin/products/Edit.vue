<template>
    <va-card>
        <va-card-content>
            <va-form class="flex flex-col gap-6" ref="formRef">
                <editor
                      id="description-idea"
                      api-key="no-api-key"
                      v-model="description"
                      value="descriptionIdea"
                      :init="{
                        height: 700,
                        menubar: true,
                        plugins: [
                          'advlist link autolink lists image charmap print preview anchor',
                          'searchreplace visualblocks code fullscreen',
                          'insertdatetime media table paste code help wordcount',
                          'codesample toc autosave',
                        ],
                        toolbar:
                          'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image \
                          formatselect | bold italic backcolor | \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help | link |',
                      }"
                    />
                <va-button @click="update()">
                    Обновить
                </va-button>
            </va-form>
        </va-card-content>
    </va-card>
</template>
<script>
import axios from "axios";
import Editor from "@tinymce/tinymce-vue";

export default {
    name: "group-create",
    components: {
        editor: Editor,
    },
    data() {
        return {
            loading: false,
            description: "",
        };
    },
    methods: {
        getProductData() {
            let self = this;
            axios
                .get("/api/product/edit/" + this.$route.params.id)
                .then(function (response) {
                    self.description = response.data.product.description;
                    console.log(response.data.product.updated_at);
                })
                .catch(function (error) {
                    console.error(error);
                });
        },
        async update() {
            let self = this;
            this.loading = true;
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios
                    .post("/api/product/update", {
                        id: this.$route.params.id,
                        description: self.description,
                    })
                    .then((response) => {
                        if (response.status) {
                            this.$vaToast.init({ message: 'Описание обновлено', color: 'success' })
                            self.loading = false;
                        } else {
                            console.log("Не работает");
                            console.log(response.status);
                        }
                    })
                    .catch(function (error) {
                        console.log(response);
                        console.error(error);
                    });
            });
        },
    },
    mounted: function () {
        this.getProductData();
    },
};
</script>