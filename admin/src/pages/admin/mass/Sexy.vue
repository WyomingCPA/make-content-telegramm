<template>
    <VaForm @submit.prevent="handleSubmit">
        <va-card>
            <form class="cover__form" id="form">
                <va-card-content>
                    <VaFileUpload v-model="basic" dropzone />
                </va-card-content>
            </form>
        </va-card>

        <div class="row">
            <va-button color="warning" @click="createPost()">Опубликовать</va-button>
        </div>
    </VaForm>
</template>
<script>


import axios from 'axios'
import debounce from 'lodash/debounce.js'
import qs from 'qs'

export default {
    name: 'MassCreatePostAnime',
    components: {},
    data() {
        const input = '';
        return {
            basic: [],
            input,
            count: { type: Number },
            loading: false,
            selectedItemsEmitted: [],
            listPrice: Array,
            currentPage: 1,
            serverParams: {
                list_file: Array,
            },
            value: 0,
            items: [

            ],
        }
    },
    methods: {
        updateParams(newProps) {
            this.serverParams = Object.assign({}, this.serverParams, newProps);
        },
        createPost() {
            this.updateParams({ list_file: this.basic, });
            console.log(this.basic);
            let self = this;
            this.loading = true;
            axios
                .request({
                    method: "post",
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    },
                    url: "/api/mass/publish-sexy-post",
                    params: this.serverParams,
                    paramsSerializer: (params) => {
                        return qs.stringify(params);
                    },
                })
                .then((response) => {
                    if (response.status) {
                        console.log("Вызвали алерт");

                    } else {
                        console.log("Не работает");
                        self.loading = false;
                    }
                })
                .catch((error) => {
                    console.log(error);
                    self.loading = false;
                });
        },
    },
}
</script>