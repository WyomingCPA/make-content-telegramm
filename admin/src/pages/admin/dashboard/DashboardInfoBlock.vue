<template>
  <div class="row row-equal">
    <div class="flex xl6 xs12 lg6">
      <div class="row">
        <div class="flex xs12 sm6 md6">
          <va-card>
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ total_all_product_count }}</h2>
              <p class="no-wrap">Всего продуктов в БД</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm6 md6">
          <va-card>
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ all_active_product_count }}</h2>
              <p class="no-wrap">В наличий</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm6 md6">
          <va-card>
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ all_favorite_product_count }}</h2>
              <p class="no-wrap">Избранные</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm6 md6">
          <va-card>
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ count_all_research_product }}</h2>
              <p class="no-wrap">Кол-во иследований</p>
            </va-card-content>
          </va-card>
        </div>
      </div>
    </div>
  </div>
  <div class="row row-equal">
      <div class="flex xl8 xs12 lg8">
        <va-card square outlined>
          <va-card-title>Статистика</va-card-title>
          <va-card-content>
            <va-data-table :items="items" :columns="columns" :filter-method="customFilteringFn"
              v-model:sort-by="sortBy" v-model:sorting-order="sortingOrder"
              >

            </va-data-table>
          </va-card-content>
        </va-card>
      </div>
    </div>
</template>

<script>

import { array } from "@amcharts/amcharts5";
import axios from "axios";

import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    const items = [];
    const input = '';
    const columns = [
      { key: 'id', sortable: true },
      { key: 'total_all_product', sortable: true },
      { key: 'total_favorite_product', sortable: true, width: 20 },
      { key: 'count_all_research_product', width: 80 },
      { key: 'count_available_product', width: 50, sortable: true, },
      { key: 'created_at', width: 50, sortable: true, }
    ]
    const sortingOrderOptions = [
      { text: "asc", value: "asc" },
      { text: "desc", value: "desc" },
      { text: "no sorting", value: null },
    ];
    return {
      items,
      columns,
      input,
      filter: input,
      sortBy: "isFavorite",
      total_all_product_count: { type: Number },
      all_active_product_count: { type: Number },
      all_favorite_product_count: { type: Number },
      count_all_research_product: { type: Number },
      isCustomFilteringFn: false,
      sortingOrder: "desc",
    }
  },
  methods: {
    filterExact(source) {
      if (this.filter === '') {
        return true
      }
      console.log(this.filter);
      return source?.toString?.() === this.filter
    },
    fetchData() {
      let self = this;
      axios
        .get("/api/dashboard/index")
        .then(function (response) {
          self.items = response.data.statistics;
          self.total_all_product_count = response.data.total_all_product_count;
          self.all_active_product_count = response.data.all_active_product_count;
          self.all_favorite_product_count = response.data.all_favorite_product_count;
          self.count_all_research_product = response.data.count_all_research_product;

          console.log(response.data.all_active_product_count);
        })
        .catch(function (error) {
          console.error(error);
        });
    },
  },
  created() {
    this.fetchData();
  },
  computed: {
    customFilteringFn() {
      return this.isCustomFilteringFn ? this.filterExact : undefined
    },
  },
})

  
</script>

<style lang="scss" scoped>
  .row-separated {
    .flex + .flex {
      border-left: 1px solid var(--va-background-primary);
    }
  }

  .rich-theme-card-text {
    line-height: 1.5;
  }

  .gallery-carousel {
    width: 80vw;
    max-width: 100%;

    @media all and (max-width: 576px) {
      width: 100%;
    }
  }
</style>
