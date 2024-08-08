<template>
    <va-card>
        <va-card-content>
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 items-end">
                <VaInput v-model="nameSource" placeholder="" label="Name Source" class="mr-2" />
                <VaInput v-model="urlSource" placeholder="" label="Url Source" class="mr-2" />
            </div>
            <div class="row">
                <div class="col mt-2 ml-2">
                    <va-button color="success" @click="createSource()">Добавить</va-button>
                </div>
            </div>
        </va-card-content>
    </va-card>
    <va-card>
        <va-card-content>
            <va-data-table :items="items" :columns="columns" :filter="filter" :filter-method="customFilteringFn"
                @filtered="filteredCount = $event.items.length" :loading=loading selectable selected-color="warning"
                @selectionChange="selectedItemsEmitted = $event.currentSelectedItems">

                <template #cell(id)="{ rowData }">
                    <a target="_blank" :href="'edit/' + rowData.id">{{ rowData.id }}</a>
                </template>
                <template #cell(name)="{ rowData }">
                    <a target="_blank" :href="rowData.url_source">{{ rowData.name }}</a>
                </template>
                <template #cell(actions)="{ rowData }">
                    <va-button color="danger" @click="deleteSource(rowData.id)">Удалить</va-button>
                </template>
                <template #bodyAppend>
                    <tr>
                        <td colspan="6">
                            <div class="flex justify-center mt-4">
                                <va-pagination v-model="currentPage" :pages="pages" />
                            </div>
                        </td>
                    </tr>
                </template>
            </va-data-table>

            <va-alert class="!mt-6" color="info" outline>
                Number of filtered items:
                <va-chip>{{ count }}</va-chip>
            </va-alert>
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
        const items = [];
        const columns = [
            { key: 'id', sortable: true },
            { key: 'name', sortable: true },
            { key: 'is_parce', sortable: true },
            { key: 'updated_at', sortable: true },
            { key: 'actions', width: 50 },
        ]
        return {
            nameSource,
            urlSource,
            columns,
            items,
            loading: false,
            serverParams: {
                name_source: "",
                url_source: "",
            },
            value: 0,
        }
    },
    methods: {
        updateParams(newProps) {
            this.serverParams = Object.assign({}, this.serverParams, newProps);
        },
        deleteSource(id)
        {
            let self = this;
            this.loading = true;
            console.log(self.selectedItemsEmitted);
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios
                    .post("/api/groups/delete-source", { id_source: id })
                    .then((response) => {
                        if (response.status) {
                            console.log("Вызвали алерт");
                            this.$vaToast.init({ message: 'Источник удален', color: 'success' })
                            this.getData();
                            self.loading = false;
                        } else {
                            console.log("Не работает");
                            console.log(response.status);
                            self.loading = false;
                        }
                    });
            });
        },
        createSource() {
            this.updateParams({
                name_source: this.nameSource,
                url_source: this.urlSource,
                id_group: this.$route.params.id,
            });

            let self = this;
            this.loading = true;
            axios
                .request({
                    method: "post",
                    url: "/api/groups/add-source",
                    params: this.serverParams,
                    paramsSerializer: (params) => {
                        return qs.stringify(params);
                    },
                })
                .then((response) => {
                    if (response.status) {
                        console.log("Вызвали алерт");
                        this.$vaToast.init({ message: 'Источник добавлен', color: 'success' })
                        self.loading = false;
                        this.getData();
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
        getData() {
            let self = this;
            this.loading = true;
            axios
                .request({
                    method: "post",
                    url: "/api/groups/get-source",
                    params: this.serverParams,
                    paramsSerializer: (params) => {
                        return qs.stringify(params);
                    },
                })
                .then((response) => {
                    self.items = response.data.source;
                    self.count = response.data.count;
                    self.loading = false;
                    console.log(this.pages);
                })
                .catch((error) => {
                    console.log(error);
                    self.loading = false;
                });
        },
    },
    created() {
        this.getData();
    },
}
</script>