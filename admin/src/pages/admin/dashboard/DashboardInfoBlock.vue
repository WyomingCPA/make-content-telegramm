<template>
  <div class="row row-equal">
    <div class="flex xl6 xs12 lg6">
      <div class="col-md-4 grid-margin stretch-card">
        <va-card>
          <va-card-title>Статистика по категориям</va-card-title>
          <va-card-content>
            <va-data-table :items="all_category_stat"> </va-data-table>
          </va-card-content>
        </va-card>
      </div>
    </div>
    <div class="flex xl6 xs12 lg6">
      <div class="row">
        <div class="flex xs12 sm6 md6">
          <va-card>
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ total_all_post_count }}</h2>
              <p class="no-wrap">Всего постов в БД</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm6 md6">
          <va-card>
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ all_publish_post_count }}</h2>
              <p class="no-wrap">Всего опубликованно постов</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm6 md6">
          <va-card>
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ all_hide_post_count }}</h2>
              <p class="no-wrap">Всего скрыто постов</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm6 md6">
          <va-card>
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ add_today_post_count }}</h2>
              <p class="no-wrap">Добавлено сегодня постов</p>
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
          <va-data-table :items="items" :columns="columns" :filter-method="customFilteringFn" v-model:sort-by="sortBy"
            v-model:sorting-order="sortingOrder">
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

    const sortingOrderOptions = [
      { text: "asc", value: "asc" },
      { text: "desc", value: "desc" },
      { text: "no sorting", value: null },
    ];
    return {
      total_all_post_count: { type: Number },
      all_publish_post_count: { type: Number },
      all_hide_post_count: { type: Number },
      add_today_post_count: { type: Number },
      items,
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
          self.total_all_post_count = response.data.total_all_post_count;
          self.all_publish_post_count = response.data.all_publish_post_count;
          self.all_hide_post_count = response.data.all_hide_post_count;
          self.add_today_post_count = response.data.add_today_post_count;

          console.log(response.data.all_hide_post_count);
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

  },
})


</script>

<style lang="scss" scoped>
.row-separated {
  .flex+.flex {
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
