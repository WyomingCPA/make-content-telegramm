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
          <va-data-table
            :items="items"
            :columns="columns"
            :filter-method="customFilteringFn"
            v-model:sort-by="sortBy"
            v-model:sorting-order="sortingOrder"
          >
          </va-data-table>
        </va-card-content>
      </va-card>
    </div>
  </div>
  <div class="row row-equal">
    <div class="flex xl12 xs12 lg12">
      <div class="row">
        <div class="flex xs12 sm3 md3">
          <va-card :color="getStatusClass(favorite_anime_post_count)">
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ favorite_anime_post_count }}</h2>
              <p class="no-wrap">Anime from VK</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm3 md3">
          <va-card :color="getStatusClass(favorite_sexy_post_count)">
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ favorite_sexy_post_count }}</h2>
              <p class="no-wrap">Sexy from VK</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm3 md3">
          <va-card :color="getStatusClass(favorite_estetic_post_count)">
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ favorite_estetic_post_count }}</h2>
              <p class="no-wrap">Estetic from VK</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm3 md3">
          <va-card :color="getStatusClass(favorite_cats_post_count)">
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ favorite_cats_post_count }}</h2>
              <p class="no-wrap">Cats from VK</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm3 md3">
          <va-card :color="getStatusClass(favorite_sexy_tumblr_video_count)">
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ favorite_sexy_tumblr_video_count }}</h2>
              <p class="no-wrap">Sexy Tumblr Video</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm3 md3">
          <va-card :color="getStatusClass(favorite_sexy_tumblr_photo_count)">
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ favorite_sexy_tumblr_photo_count }}</h2>
              <p class="no-wrap">Sexy Tumblr Photo</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm3 md3">
          <va-card :color="getStatusClass(favorite_anime_tumblr_photo_count)">
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ favorite_anime_tumblr_photo_count }}</h2>
              <p class="no-wrap">Anime Tumblr Photo</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm3 md3">
          <va-card :color="getStatusClass(favorite_cats_tumblr_video_count)">
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ favorite_cats_tumblr_video_count }}</h2>
              <p class="no-wrap">Cats Tumblr Video</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm3 md3">
          <va-card :color="getStatusClass(favorite_sexy_telegramm_video_count)">
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ favorite_sexy_telegramm_video_count }}</h2>
              <p class="no-wrap">Sexy Telegramm Video</p>
            </va-card-content>
          </va-card>
        </div>
        <div class="flex xs12 sm3 md3">
          <va-card :color="getStatusClass(favorite_sexy_telegramm_photo_count)">
            <va-card-content>
              <h2 class="va-h2 ma-0">{{ favorite_sexy_telegramm_photo_count }}</h2>
              <p class="no-wrap">Sexy Telegramm Photo</p>
            </va-card-content>
          </va-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import { array } from '@amcharts/amcharts5'
  import axios from 'axios'

  import { defineComponent } from 'vue'

  export default defineComponent({
    data() {
      const items = []
      const input = ''

      const sortingOrderOptions = [
        { text: 'asc', value: 'asc' },
        { text: 'desc', value: 'desc' },
        { text: 'no sorting', value: null },
      ]
      return {
        total_all_post_count: { type: Number },
        all_publish_post_count: { type: Number },
        all_hide_post_count: { type: Number },
        add_today_post_count: { type: Number },
        favorite_anime_post_count: { type: Number },
        favorite_sexy_post_count: { type: Number },
        favorite_estetic_post_count: { type: Number },
        favorite_cats_post_count: { type: Number },
        favorite_sexy_tumblr_video_count: { type: Number },
        favorite_sexy_tumblr_photo_count: { type: Number },
        favorite_anime_tumblr_photo_count: { type: Number },
        favorite_cats_tumblr_video_count: { type: Number },
        favorite_sexy_telegramm_video_count: { type: Number },
        favorite_sexy_telegramm_photo_count: { type: Number },
        items,
      }
    },
    methods: {
      filterExact(source) {
        if (this.filter === '') {
          return true
        }
        console.log(this.filter)
        return source?.toString?.() === this.filter
      },
      fetchData() {
        let self = this
        axios
          .get('/api/dashboard/index')
          .then(function (response) {
            self.total_all_post_count = response.data.total_all_post_count
            self.all_publish_post_count = response.data.all_publish_post_count
            self.all_hide_post_count = response.data.all_hide_post_count
            self.add_today_post_count = response.data.add_today_post_count
            self.favorite_anime_post_count = response.data.favorite_anime_post_count
            self.favorite_sexy_post_count = response.data.favorite_sexy_post_count
            self.favorite_estetic_post_count = response.data.favorite_estetic_post_count
            self.favorite_cats_post_count = response.data.favorite_cats_post_count
            self.favorite_sexy_tumblr_video_count = response.data.favorite_sexy_tumblr_video_count
            self.favorite_sexy_tumblr_photo_count = response.data.favorite_sexy_tumblr_photo_count
            self.favorite_anime_tumblr_photo_count = response.data.favorite_anime_tumblr_photo_count
            self.favorite_cats_tumblr_video_count = response.data.favorite_cats_tumblr_video_count
            self.favorite_sexy_telegramm_video_count = response.data.favorite_sexy_telegramm_video_count
            self.favorite_sexy_telegramm_photo_count = response.data.favorite_sexy_telegramm_photo_count
            console.log(response.data.all_hide_post_count)
          })
          .catch(function (error) {
            console.error(error)
          })
      },
      getStatusClass(count) {
        console.log(count)
        if (count <= 10) {
          return 'danger'
        } else if (count >= 10 && count <= 20) {
          return 'primary'
        } else if (count >= 20) {
          return 'success'
        } else {
          return ''
        }
      },
    },
    created() {
      this.fetchData()
    },
    computed: {},
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
