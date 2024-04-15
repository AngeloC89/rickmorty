<template>
    <div class="container">
        <h2>List of Characters</h2>
        <div class="row" v-if="!store.loading">
            <div class="col-12 col-md-6 col-lg-3" v-for="character in store.character" :key="character.id">

                <CardComponent :id="character.id" :title="character.name" :image="character.image" :status="character.status" :text="character.species" :subtext="character.gender" />

            </div>
          
        </div>
        <ApiLoader v-else />
    </div>
</template>

<script>
    import { store } from '../store.js'
    import ApiLoader from './APiLoader.vue'
    import CardComponent from './CardComponent.vue'
    export default {
        name: "CharacterList",
        components: {
            CardComponent,
            ApiLoader
        },
        data() {
            return {
                store
            }
        },
    }
</script>

<style lang="scss" scoped></style>