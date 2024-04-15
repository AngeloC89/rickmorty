<template>
  <HeaderComponent />
  <MainComponent />

</template>

<script>
  import { store } from './store.js'
  import axios from 'axios'
  import HeaderComponent from './components/HeaderComponent.vue'
  import MainComponent from './components/MainComponent.vue'

  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent
    },
    data() {
      return {
        store
      }
    },
    methods: {
      getCharacter() {
        this.store.loading = true;
        axios.get(this.store.apiUrl + this.store.endPoint.characters)
          .then((res) => {
            this.store.character = res.data.results
            console.log(this.store.character)
          }).catch ((error) => {
            console.log(error)
          }).finally(() => {
              this.store.loading = false;
            })
    }
  },
  created() {
    this.getCharacter()
  }
  }
</script>

<style lang="scss" scoped></style>