<template>

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

  },
  computed: {

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
