<template>
    <va-card>
        <va-card-content>
            <div class="row">
                <VaInput v-model="input" placeholder="" label="Url Post" class="mb-6" />
                <va-button @click="getData(input)">Получить данные</va-button>
            </div>
        </va-card-content>
    </va-card>
    <VaCarousel v-model="value" :items="items" />
    <div class="flex flex-col sm:flex-row gap-2 items-start">
        <VaButton v-for="tag in tags">
            {{ tag }}
        </VaButton>
    </div>
    <div class="row">
        <va-button color="warning" @click="publishAnimePost()">Опубликовать</va-button>
    </div>
</template>
<script>

import { array } from '@amcharts/amcharts5';
import axios from 'axios'
import debounce from 'lodash/debounce.js'
import qs from 'qs'

export default {
    name: 'TumblrReblogAnime',
    components: {},
    data() {
        const input = '';
        return {
            input,
            count: { type: Number },
            loading: false,
            selectedItemsEmitted: [],
            listPrice: Array,
            currentPage: 1,
            serverParams: {
                url: "",
                list_img: Array,
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
            this.updateParams({ list_img: this.items, tags: this.tags});
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
                            this.$vaToast.init({ message: 'Запись скрыта', color: 'danger' })
                            this.fetchRows();
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