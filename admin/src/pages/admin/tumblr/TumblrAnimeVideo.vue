<template>
    <va-card>
        <va-card-content>
            <div class="grid md:grid-cols-2 gap-6 mb-6">
                <va-input v-model="input" placeholder="Filter..." class="w-full" />
            </div>

            <div class="grid md:grid-cols-2 gap-6 mb-6">
                <va-select v-model="value" label="Removable chips" :options="options" @create-new="addNewOption"
                    :track-by="(option) => option" allow-create="unique" multiple>
                    <template #content="{ value }">
                        <va-chip v-for="chip in value" :key="chip" size="small" class="mr-1 my-1" closeable
                            @update:modelValue="deleteChip(chip)">
                            {{ chip }}
                        </va-chip>
                    </template>
                </va-select>
            </div>

            <div class="row">
                <div class="col">
                    <va-button @click="publish">
                        Опубликовать в Телеграмм
                    </va-button>
                </div>
                <div class="col">
                    <va-button @click="addQueue">
                        Добавить в очередь
                    </va-button>
                </div>
                <div class="col">
                    <va-button color="danger" @click="hidden">
                        Скрыть
                    </va-button>
                </div>
            </div>
            <va-data-table :items="items" :columns="columns" :filter="filter" :filter-method="customFilteringFn"
                @filtered="filteredCount = $event.items.length" :loading=loading selectable selected-color="warning"
                @selectionChange="selectedItemsEmitted = $event.currentSelectedItems">

                <template #cell(attachments)="{ rowData }">
                    <va-image :src="getOneImage(rowData.attachments)" :sizes="150" />
                </template>
                <template #cell(count_attachments)="{ rowData }">
                    <span>{{ getCountAttachments(rowData.attachments) }}</span>
                </template>
                <template #cell(text)="{ rowData }">
                    <div v-if="rowData.text == ''"><a class="link" target="_blank"
                            :href="rowData.link">Посмотреть</a></div>
                    <div v-else><a class="link" target="_blank" :href="rowData.link">{{
                    rowData.text }}</a></div>
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

import axios from 'axios'
import debounce from 'lodash/debounce.js'
import qs from 'qs'

export default {
    name: 'StockAll',
    components: {},
    data() {
        const items = [];
        const input = '';
        const columns = [
            { key: 'id', sortable: true },
            { key: 'attachments', sortable: true },
            { key: 'count_attachments', sortable: true },
            { key: 'text', sortable: true },
            { key: 'created_at', sortable: true },
        ]
        return {
            count: { type: Number },
            loading: false,
            items,
            columns,
            input,
            filter: input,
            isDebounceInput: false,
            isCustomFilteringFn: false,
            filteredCount: items.length,
            filtered: items,
            selectedItemsEmitted: [],
            listPrice: Array,
            currentPage: 1,
            serverParams: {
                name: "",
            },
            options: [],
            value: ["laravel", "php"],
        }
    },
    methods: {
        getOneImage(stringObject) {
            let arr = Array.from(Object.entries(stringObject), ([key, value]) => value);
            return arr[0];
        },
        getCountAttachments(stringObject) {
            let arr = Array.from(Object.entries(stringObject), ([key, value]) => value);
            var count = arr.filter(function () { return true; }).length;
            return count;
        },
        addNewOption(newOption) {
            const option = {
                id: String(this.options.length),
                text: newOption,
                value: newOption,
            };
            this.options = [...this.options, option];
        },
        deleteChip(chip) {
            this.value = this.value.filter((v) => v !== chip);
        },
        filterExact(source) {
            if (this.filter === '') {
                return true
            }
            return source?.toString?.() === this.filter
        },
        updateParams(newProps) {
            this.serverParams = Object.assign({}, this.serverParams, newProps);
        },
        onPageChange(params) {
            console.log(this.currentPage);
            this.updateParams({ page: this.currentPage });
            this.fetchRows();
        },
        onPerPageChange(params) {
            this.updateParams({ perPage: params.currentPerPage });
            this.fetchRows();
        },

        onSearch(params) {
            this.updateParams({ name: params });
            this.fetchRows();
        },

        updateFilter(filter) {
            this.filter = filter
        },

        debouncedUpdateFilter: debounce(function (filter) {
            this.updateFilter(filter)
        }, 600),

        filterPrice: function (param) {
            this.filter = param
            this.input = param
        },

        fetchRows() {
            let self = this;
            this.loading = true;
            axios
                .request({
                    method: "post",
                    url: "/api/tumblr/anime-video-all",
                    params: this.serverParams,
                    paramsSerializer: (params) => {
                        return qs.stringify(params);
                    },
                })
                .then((response) => {
                    self.items = response.data.posts;
                    self.count = response.data.count;
                    self.options = response.data.categories;
                    self.loading = false;
                    console.log(this.pages);
                })
                .catch((error) => {
                    console.log(error);
                    self.loading = false;
                });
        },
        resetInfoModal() {
            this.infoModal.title = ''
            this.infoModal.content = ''
        },
        hidden: function (event, rows) {
            let self = this;
            this.loading = true;
            console.log(self.selectedItemsEmitted);
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios
                    .post("/api/post/post-hidden", { selRows: self.selectedItemsEmitted })
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
                    });
            });
        },
        publish: function (event, rows) {
            let self = this;
            this.loading = true;
            console.log(self.selectedItemsEmitted);
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios
                    .post("/api/tumblr/anime-video-tumblr-publish", { selRows: self.selectedItemsEmitted })
                    .then((response) => {
                        if (response.status) {
                            console.log("Вызвали алерт");
                            this.$vaToast.init({ message: 'Запись добавлена в телеграмм', color: 'success' })
                            this.fetchRows();
                            self.loading = false;
                        } else {
                            console.log("Не работает");
                            console.log(response.status);
                            self.loading = false;
                        }
                    });
            });
        },
        addQueue: function (event, rows) {
            let self = this;
            this.loading = true;
            console.log(self.selectedItemsEmitted);
            axios.get("/sanctum/csrf-cookie").then((response) => {
                axios
                    .post("/api/queue/set", { selRows: self.selectedItemsEmitted })
                    .then((response) => {
                        if (response.status) {
                            console.log("Вызвали алерт");
                            this.$vaToast.init({ message: 'Запись добавлена в очередь', color: 'success' })
                            this.fetchRows();
                            self.loading = false;
                        } else {
                            console.log("Не работает");
                            console.log(response.status);
                            self.loading = false;
                        }
                    });
            });
        },
    },
    computed: {
        customFilteringFn() {
            return this.isCustomFilteringFn ? this.filterExact : undefined
        },
        pages() {
            return this.perPage && this.perPage !== 0
                ? Math.ceil(this.count / this.perPage)
                : this.count;
        },
    },
    watch: {
        input(newValue) {
            if (this.isDebounceInput) {
                this.debouncedUpdateFilter(newValue)
            } else {
                console.log(newValue);
                this.updateParams({ name: newValue });
                this.fetchRows();
                this.updateFilter(newValue)
            }
        },
        value(newValue) {
            if (this.isDebounceInput) {
                this.debouncedUpdateFilter(newValue)
            } else {
                console.log(newValue);
                this.updateParams({ category_value: newValue });
                this.fetchRows();

            }
        },
        currentPage: function (page) {
            this.updateParams({ page: page });
            this.fetchRows();
        }
    },

    created() {
        this.fetchRows();
    },
}


</script>