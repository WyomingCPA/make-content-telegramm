<template>
  <va-card>
    <va-card-content>
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <va-input v-model="input" placeholder="Filter..." class="w-full" />
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
        <template #cell(id)="{ rowData }">
          <a target="_blank" :href="'edit/' + rowData.id">{{ rowData.id }}</a>
        </template>
        <template #cell(group)="{ rowData }">
          <a target="_blank" :href="rowData.url_group">{{ rowData.group }}</a>
        </template>
        <template #cell(list_source)="{ rowData }">
          <VaChip :color="success" class="mr-6 mb-2">
            {{ rowData.count_source }}
          </VaChip>
          <va-button :color="primary" @click="goToManageSourcePage(rowData.id)">Добавить</va-button>
        </template>
        <template #cell(status)="{ rowData }">
          <va-button
            v-if="rowData.is_start == 1"
            :color="getStatusColor(rowData.is_start)"
            @click="updateStatus(rowData.id)"
            >Запущен</va-button
          >
          <va-button v-else :color="getStatusColor(rowData.is_start)" @click="updateStatus(rowData.id)"
            >Остановлен</va-button
          >
        </template>
        <template #cell(actions)="{ rowData }">
          <va-button color="danger" @click="deleteGroup(rowData.id)">Удалить</va-button>
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
    name: 'GroupsAll',
    components: {},
    data() {
      const items = []
      const input = ''
      const columns = [
        { key: 'id', sortable: true },
        { key: 'group', sortable: true },
        { key: 'status', sortable: true },
        { key: 'last_view_post_telegramm', sortable: true },
        { key: 'list_source', sortable: true },
        { key: 'updated_at', sortable: true },
        { key: 'actions', width: 50 },
      ]
      return {
        count: { type: Number },
        countSource: { type: Number },
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
      goToManageSourcePage(id) {
        this.$router.push('source-edit/' + id)
      },
      getStatusColor(status) {
        console.log(status)
        if (status == 1) {
          return 'success'
        } else {
          return 'danger'
        }
      },
      updateStatus(id) {
        this.loading = true
        this.idGroup = id
        console.log(id)
        let self = this
        axios.get('/sanctum/csrf-cookie').then((response) => {
          axios
            .post('/api/groups/update-status', {
              id_group: self.idGroup,
            })
            .then((response) => {
              if (response.status) {
                console.log('Вызвали алерт')
                this.fetchRows()
                this.loading = false
              } else {
                console.log('Не работает')
                console.log(response.status)
                this.loading = false
              }
            })
            .catch(function (error) {
              console.log(response)
              console.error(error)
              this.loading = false
            })
        })
      },
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
            url: '/api/groups/index',
            params: this.serverParams,
            paramsSerializer: (params) => {
              return qs.stringify(params)
            },
          })
          .then((response) => {
            self.items = response.data.groups
            self.count = response.data.count
            self.options = response.data.categories
            self.loading = false
            console.log(this.pages)
          })
          .catch((error) => {
            console.log(error)
            self.loading = false
          })
      },
      deleteGroup(id) {
        let self = this
        this.loading = true
        console.log(self.selectedItemsEmitted)
        axios.get('/sanctum/csrf-cookie').then((response) => {
          axios.post('/api/groups/delete-group', { id_group: id }).then((response) => {
            if (response.status) {
              console.log('Вызвали алерт')
              this.$vaToast.init({ message: 'Группа удалена', color: 'success' })
              this.fetchRows()
              self.loading = false
            } else {
              console.log('Не работает')
              console.log(response.status)
              self.loading = false
            }
          })
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
