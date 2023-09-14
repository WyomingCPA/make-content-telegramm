<template>
  <va-card>
    <va-card-content>
      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <va-input v-model="input" placeholder="Filter..." class="w-full" />

        <div class="flex flex-col gap-6">
          <va-checkbox v-model="isCustomFilteringFn" label="Use custom filtering function (looks for an exact match)" />
          <va-checkbox v-model="isDebounceInput" label="Debounce input" />
        </div>
      </div>
      <div class="flex flex-wrap gap-6 mb-6">
        <span v-for="(thing, index) in listPrice" :key="index"><a href="#" @click="filterPrice(index)"> {{ index }}({{
          thing }}) </a></span>
      </div>

      <va-data-table :items="items" :columns="columns" :filter="filter" :filter-method="customFilteringFn"
        v-model:sort-by="sortBy" v-model:sorting-order="sortingOrder" @filtered="filteredCount = $event.items.length">
        <template #cell(actions)="{ rowData }">
          <va-button @click="setLearn(rowData.id)">Повторил</va-button>
        </template>
        <template #cell(isFavorite)="{ rowData }">
          <va-switch v-model="rowData.isFavorite" @click="setFavorite(rowData.id, rowData.isFavorite)" />
        </template>
      </va-data-table>

      <va-alert class="!mt-6" color="info" outline>
        Number of filtered items:
        <va-chip>{{ filteredCount }}</va-chip>
      </va-alert>
    </va-card-content>
  </va-card>
</template>
<script>
import { array } from '@amcharts/amcharts5'
import axios from 'axios'
import debounce from 'lodash/debounce.js'

export default {
  name: 'ProductAll',
  components: {},
  data() {
    const items = []
    const input = ''
    const columns = [
      { key: 'price', sortable: true },
      { key: 'name', sortable: true },
      { key: 'count_learn', sortable: true, width: 20 },
      { key: 'actions', width: 80 },
      { key: 'isFavorite', width: 50, sortable: true, },
    ]
    const sortingOrderOptions = [
      { text: "asc", value: "asc" },
      { text: "desc", value: "desc" },
      { text: "no sorting", value: null },
    ];
    return {
      value: true,
      items,
      columns,
      input,
      filter: input,
      isDebounceInput: false,
      isCustomFilteringFn: false,
      filteredCount: items.length,
      listPrice: Array,
      sortBy: "isFavorite",
      sortingOrder: "desc",
      sortingOrderOptions,

    }
  },
  methods: {
    filterExact(source) {
      if (this.filter === '') {
        return true
      }
      return source?.toString?.() === this.filter
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

    setLearn(id) {
      this.loading = true
      this.idProduct = id
      console.log(id)
      let self = this
      axios.get('/sanctum/csrf-cookie').then((response) => {
        axios
          .post('/api/product/set-learn', {
            id_product: self.idProduct,
          })
          .then((response) => {
            if (response.status) {
              console.log('Вызвали алерт')
              this.getWashProduct()
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
    setFavorite(id, isFavorite) {
      this.loading = true
      this.idProduct = id
      this.isFavor = isFavorite
      console.log(id)
      let self = this
      axios.get('/sanctum/csrf-cookie').then((response) => {
        axios
          .post('/api/product/set-favorite', {
            id_product: self.idProduct,
            is_favorite: self.isFavor,

          })
          .then((response) => {
            if (response.status) {
              console.log('Вызвали алерт')
              this.getWashProduct()
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
    getWashProduct() {
      let self = this
      axios
        .get('/api/product/washmashine')
        .then(function (response) {
          self.items = response.data.products
          self.listPrice = response.data.price
          console.log(response.data.groups)
        })
        .catch(function (error) {
          console.error(error)
        })
    },
    resetInfoModal() {
      this.infoModal.title = ''
      this.infoModal.content = ''
    },
    async handleSubmit() {
      let self = this
      axios.get('/sanctum/csrf-cookie').then((response) => {
        axios
          .post('/api/group/set-subscriber', {
            count_subscriber: this.countSubscriber,
            id_group: self.idGroup,
          })
          .then((response) => {
            if (response.status) {
              console.log('Вызвали алерт')
              this.getGroups()
              this.$refs['my-modal'].hide()
            } else {
              console.log('Не работает')
              console.log(response.status)
            }
          })
          .catch(function (error) {
            console.log(response)
            console.error(error)
          })
      })
    },
    sortByOptions() {
      return this.columns
        .map(({ name, key, sortable }) => sortable && (name || key))
        .filter(Boolean);
    },
  },
  computed: {
    customFilteringFn() {
      return this.isCustomFilteringFn ? this.filterExact : undefined
    },
  },
  watch: {
    input(newValue) {
      if (this.isDebounceInput) {
        this.debouncedUpdateFilter(newValue)
      } else {
        this.updateFilter(newValue)
      }
    },
  },
  mounted: function () {
    this.getWashProduct()
  },
}
</script>
<style lang="scss" scoped></style>
