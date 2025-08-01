<template>
  <va-card>
    <va-card-content>
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <va-input v-model="input" placeholder="Filter..." class="w-full" />
      </div>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <va-select
          v-model="value"
          label="Removable chips"
          :options="options"
          @create-new="addNewOption"
          :track-by="(option) => option"
          allow-create="unique"
          multiple
        >
          <template #content="{ value }">
            <va-chip
              v-for="chip in value"
              :key="chip"
              size="small"
              class="mr-1 my-1"
              closeable
              @update:modelValue="deleteChip(chip)"
            >
              {{ chip }}
            </va-chip>
          </template>
        </va-select>
      </div>

      <va-data-table
        :items="items"
        :columns="columns"
        :filter="filter"
        :filter-method="customFilteringFn"
        @filtered="filteredCount = $event.items.length"
        :loading="loading"
        selectable
        selected-color="warning"
        @selectionChange="selectedItemsEmitted = $event.currentSelectedItems"
      >
        <template #cell(title)="{ rowData }">
          <a class="link" target="_blank" :href="rowData.link">{{ rowData.title }}</a>
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
  import { array } from '@amcharts/amcharts5'
  import axios from 'axios'
  import debounce from 'lodash/debounce.js'
  import qs from 'qs'

  export default {
    name: 'StockAll',
    components: {},
    data() {
      const items = []
      const input = ''
      const columns = [
        { key: 'title', sortable: true },
        { key: 'created_at', sortable: true },
      ]
      return {
        count: { type: Number },
        perPage: { type: Number },
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
          name: '',
        },
        options: [],
        value: ['laravel', 'php'],
      }
    },
    methods: {
      addNewOption(newOption) {
        const option = {
          id: String(this.options.length),
          text: newOption,
          value: newOption,
        }
        this.options = [...this.options, option]
      },
      deleteChip(chip) {
        this.value = this.value.filter((v) => v !== chip)
      },
      filterExact(source) {
        if (this.filter === '') {
          return true
        }
        return source?.toString?.() === this.filter
      },
      updateParams(newProps) {
        this.serverParams = Object.assign({}, this.serverParams, newProps)
      },
      onPageChange(params) {
        console.log(this.currentPage)
        this.updateParams({ page: this.currentPage })
        this.fetchRows()
      },
      onPerPageChange(params) {
        this.updateParams({ perPage: params.currentPerPage })
        this.fetchRows()
      },

      onSearch(params) {
        this.updateParams({ name: params })
        this.fetchRows()
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
        let self = this
        this.loading = true
        axios
          .request({
            method: 'post',
            url: '/api/post/rss-habr-all',
            params: this.serverParams,
            paramsSerializer: (params) => {
              return qs.stringify(params)
            },
          })
          .then((response) => {
            self.items = response.data.posts
            self.count = response.data.count
            self.perPage = response.data.perPage
            self.options = response.data.categories
            self.loading = false
            console.log(this.pages)
          })
          .catch((error) => {
            console.log(error)
            self.loading = false
          })
      },
      resetInfoModal() {
        this.infoModal.title = ''
        this.infoModal.content = ''
      },
    },
    computed: {
      customFilteringFn() {
        return this.isCustomFilteringFn ? this.filterExact : undefined
      },
      pages() {
        return this.perPage && this.perPage !== 0 ? Math.ceil(this.count / this.perPage) : this.count
      },
    },
    watch: {
      input(newValue) {
        if (this.isDebounceInput) {
          this.debouncedUpdateFilter(newValue)
        } else {
          console.log(newValue)
          this.updateParams({ name: newValue })
          this.fetchRows()
          this.updateFilter(newValue)
        }
      },
      value(newValue) {
        if (this.isDebounceInput) {
          this.debouncedUpdateFilter(newValue)
        } else {
          console.log(newValue)
          this.updateParams({ category_value: newValue })
          this.fetchRows()
        }
      },
      currentPage: function (page) {
        this.updateParams({ page: page })
        this.fetchRows()
      },
    },

    created() {
      this.updateParams({ publish_habr: true })
      this.fetchRows()
    },
  }
</script>
<style lang="scss" scoped>
  .table-crud {
    --va-form-element-default-width: 0;

    .va-input {
      display: block;
    }

    &__slot {
      th {
        vertical-align: middle;
      }
    }
  }

  .modal-crud {
    .va-input {
      display: block;
    }
  }

  .link {
    color: #f5f5f5;
  }
</style>
