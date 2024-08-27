<template>
    <va-card>
        <va-card-content>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
                <VaInput v-model="nameSource" placeholder="" label="Name Source" class="mr-2" />
                <VaInput v-model="urlSource" placeholder="" label="Url Source" class="mr-2" />
                <VaInput v-model="ownerId" placeholder="" label="Owner ID" class="mr-2" />
            </div>
            <div class="row">
                <div class="col mt-2 ml-2">
                    <va-button color="success" @click="updateSource()">Обновить</va-button>
                </div>
            </div>
        </va-card-content>
    </va-card>

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
        const nameSource = '';
        const urlSource = '';
        const ownerId = 0;
        return {
            nameSource,
            urlSource,
            ownerId,
            loading: false,
            serverParams: {
                name_source: "",
                url_source: "",
                owner_id: "", 
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
        getSourceData() {
            let self = this;
            axios
                .get('api/groups/source-edit/' + this.$route.params.id)
                .then(function (response) {
                    self.nameSource = response.data.source.name;
                    self.urlSource = response.data.source.url_source;
                    self.ownerId = response.data.source.owner_id;
                })
                .catch(function (error) {
                    console.error(error)
                })
                
        },
        updateSource() {
            this.updateParams({
                name_source: this.nameSource,
                url_source: this.urlSource,
                owner_id: this.ownerId,
                id_source: this.$route.params.id,
            });

            let self = this;
            this.loading = true;
            axios
                .request({
                    method: "post",
                    url: "/api/groups/source-update",
                    params: this.serverParams,
                    paramsSerializer: (params) => {
                        return qs.stringify(params);
                    },
                })
                .then((response) => {
                    if (response.status) {
                        this.$vaToast.init({ message: 'Источник обновлен', color: 'success' })
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
    },
    mounted: function () {
        this.getSourceData();
    },
}
</script>