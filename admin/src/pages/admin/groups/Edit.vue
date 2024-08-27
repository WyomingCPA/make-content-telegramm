<template>
    <va-card>
        <va-card-content>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
                <VaInput v-model="nameGroup" placeholder="" label="Name Groups" class="mr-2" />
                <VaInput v-model="urlGroup" placeholder="" label="Url Groups" class="mr-2" />
                <VaInput v-model="slugGroup" placeholder="" label="Slug" class="mr-2" />
            </div>
            <div class="row">
                <div class="col mt-2 ml-2">
                    <va-button color="success" @click="updateGroups()">Обновить</va-button>
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
        const nameGroup = '';
        const urlGroup = '';
        const slugGroup = '';
        return {
            nameGroup,
            urlGroup,
            loading: false,
            serverParams: {
                id: "",
                name_group: "",
                url_group: "",
                slug_group: "",
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
        getGroupData() {
            let self = this
            axios
                .get('api/groups/edit/' + this.$route.params.id)
                .then(function (response) {
                    self.nameGroup = response.data.group.group;
                    self.urlGroup = response.data.group.url_group;
                    self.slugGroup = response.data.group.slug;
                    console.log(response.data.group.updated_at)
                })
                .catch(function (error) {
                    console.error(error)
                })
        },
        updateGroups() {
            this.updateParams({ id: this.$route.params.id, 
                name_group: this.nameGroup, 
                url_group: this.urlGroup,
                slug_group: this.slugGroup });

            let self = this;
            this.loading = true;
            axios
                .request({
                    method: "post",
                    url: "/api/groups/update",
                    params: this.serverParams,
                    paramsSerializer: (params) => {
                        return qs.stringify(params);
                    },
                })
                .then((response) => {
                    if (response.status) {
                        console.log("Вызвали алерт");
                        this.$vaToast.init({ message: 'Группа создана', color: 'success' })
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
        this.getGroupData()
    },
}
</script>