<template>
  <va-card>
    <VaCardTitle>Anime</VaCardTitle>
    <va-card-content>
      <div class="row">
        <VaInput v-model="input" placeholder="" label="Url Post" class="mb-6" />
        <va-button @click="getData(input)">Получить данные</va-button>
      </div>
    </va-card-content>
    <VaCarousel v-model="value" :items="items" />
    <div class="flex flex-col sm:flex-row gap-2 items-start">
      <VaButton v-for="tag in tags">
        {{ tag }}
      </VaButton>
    </div>
    <div class="row">
      <va-button color="danger" @click="publishAnimePost()">Опубликовать Anime</va-button>
      <va-button color="warning" @click="publishSexyPost()">Опубликовать Sexy</va-button>
      <va-button color="primary" @click="publishNaturePost()">Опубликовать Nature</va-button>
      <va-button color="primary" @click="publishCatsPost()">Опубликовать Cats</va-button>
    </div>
  </va-card>
</template>
<script>
  import { array } from '@amcharts/amcharts5'
  import axios from 'axios'
  import debounce from 'lodash/debounce.js'
  import qs from 'qs'

  export default {
    name: 'TumblrReblogAll',
    components: {},
    data() {
      const input = ''
      return {
        input,
        count: { type: Number },
        loading: false,
        selectedItemsEmitted: [],
        listPrice: Array,
        currentPage: 1,
        serverParams: {
          url: '',
          list_img: Array,
          list_video: Array,
          tags: Array,
        },
        value: 0,
        items: [],
        listVideo: [],
      }
    },
    methods: {
      updateParams(newProps) {
        this.serverParams = Object.assign({}, this.serverParams, newProps)
      },
      publishCatsPost() {
        this.updateParams({ list_img: this.items, list_video: this.listVideo, tags: this.tags })
        console.log(this.items)
        let self = this
        this.loading = true
        axios
          .request({
            method: 'post',
            url: '/api/tumblr/publish-cats-post',
            params: this.serverParams,
            paramsSerializer: (params) => {
              return qs.stringify(params)
            },
          })
          .then((response) => {
            if (response.status) {
              console.log('Вызвали алерт')
              this.$vaToast.init({ message: 'Запись опубликована', color: 'success' })
              window.location.reload()
              self.input = ''
              self.loading = false
            } else {
              console.log('Не работает')
              console.log(response.status)
              self.loading = false
            }
          })
          .catch((error) => {
            console.log(error)
            self.loading = false
          })
      },
      publishNaturePost() {
        this.updateParams({ list_img: this.items, list_video: this.listVideo, tags: this.tags })
        console.log(this.items)
        let self = this
        this.loading = true
        axios
          .request({
            method: 'post',
            url: '/api/tumblr/estetic-vibes-post',
            params: this.serverParams,
            paramsSerializer: (params) => {
              return qs.stringify(params)
            },
          })
          .then((response) => {
            if (response.status) {
              console.log('Вызвали алерт')
              this.$vaToast.init({ message: 'Запись опубликована', color: 'success' })
              window.location.reload()
              self.input = ''
              self.loading = false
            } else {
              console.log('Не работает')
              console.log(response.status)
              self.loading = false
            }
          })
          .catch((error) => {
            console.log(error)
            self.loading = false
          })
      },
      publishSexyPost() {
        this.updateParams({ list_img: this.items, list_video: this.listVideo, tags: this.tags })
        console.log(this.items)
        let self = this
        this.loading = true
        axios
          .request({
            method: 'post',
            url: '/api/tumblr/sexy-post',
            params: this.serverParams,
            paramsSerializer: (params) => {
              return qs.stringify(params)
            },
          })
          .then((response) => {
            if (response.status) {
              console.log('Вызвали алерт')
              this.$vaToast.init({ message: 'Запись опубликована', color: 'success' })
              window.location.reload()
              self.input = ''
              self.loading = false
            } else {
              console.log('Не работает')
              console.log(response.status)
              self.loading = false
            }
          })
          .catch((error) => {
            console.log(error)
            self.loading = false
          })
      },
      publishAnimePost() {
        this.updateParams({ list_img: this.items, list_video: this.listVideo, tags: this.tags })
        console.log(this.items)
        let self = this
        this.loading = true
        axios
          .request({
            method: 'post',
            url: '/api/tumblr/publish-anime-post',
            params: this.serverParams,
            paramsSerializer: (params) => {
              return qs.stringify(params)
            },
          })
          .then((response) => {
            if (response.status) {
              console.log('Вызвали алерт')
              this.$vaToast.init({ message: 'Запись опубликована', color: 'success' })
              window.location.reload()
              self.list_img = []
              this.tags.splice(0)
              self.input = ''
              self.loading = false
            } else {
              console.log('Не работает')
              console.log(response.status)
              self.loading = false
            }
          })
          .catch((error) => {
            console.log(error)
            self.loading = false
          })
      },
      getData(url) {
        this.updateParams({ url: url })
        console.log(url)
        let self = this
        this.loading = true
        axios
          .request({
            method: 'post',
            url: '/api/tumblr/get-post',
            params: this.serverParams,
            paramsSerializer: (params) => {
              return qs.stringify(params)
            },
          })
          .then((response) => {
            self.items = response.data.list_img
            self.listVideo = response.data.list_video
            self.tags = response.data.tags

            self.loading = false
            console.log(this.pages)
          })
          .catch((error) => {
            console.log(error)
            self.loading = false
          })
      },
    },
  }
</script>
