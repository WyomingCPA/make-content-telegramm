<template>
    <va-card>
        <va-card-content>
            <VaFileUpload v-model="basic">
                <div class="custom-upload-file-area">
                    <p class="mb-2">
                        This is slot, click or drag'n'drop file to upload
                    </p>
                    <img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png" width="100"
                        height="100" alt="">
                </div>
            </VaFileUpload>
        </va-card-content>
    </va-card>

    <div class="row">
        <va-button color="warning" @click="publishAnimePost()">Опубликовать</va-button>
    </div>
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
                url: "",
                list_img: Array,
                list_video: Array,
                tags: Array,
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
        publishAnimePost() {
            this.updateParams({ list_img: this.items, list_video: this.listVideo, tags: this.tags});
            console.log(this.items);
            let self = this;
            this.loading = true;
            axios
                .request({
                    method: "post",
                    url: "/api/tumblr/publish-anime-post",
                    params: this.serverParams,
                    paramsSerializer: (params) => {
                        return qs.stringify(params);
                    },
                })
                .then((response) => {
                    if (response.status) {
                            console.log("Вызвали алерт");
                            this.$vaToast.init({ message: 'Запись опубликована', color: 'success' });
                            window.location.reload();
                            self.list_img = [];
                            this.tags.splice(0);
                            self.input = '';
                            self.loading = false;
                        } else {
                            console.log("Не работает");
                            console.log(response.status);
                            self.loading = false;
                        }
                })
                .catch((error) => {
                    console.log(error);
                    self.loading = false;
                });
        },
        getData(url) {
            this.updateParams({ url: url });
            console.log(url);
            let self = this;
            this.loading = true;
            axios
                .request({
                    method: "post",
                    url: "/api/tumblr/get-post",
                    params: this.serverParams,
                    paramsSerializer: (params) => {
                        return qs.stringify(params);
                    },
                })
                .then((response) => {
                    self.items = response.data.list_img;
                    self.tags = response.data.tags;
                    self.listVideo = response.data.list_video;

                    self.loading = false;
                    console.log(this.pages);
                })
                .catch((error) => {
                    console.log(error);
                    self.loading = false;
                });
        },
    },
}
</script>