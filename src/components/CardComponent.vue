<template>
    <div class="card">
        <img :src="image" :alt="title">
        <div class="card-body">
            <h5 class="card-title">{{title}}</h5>
            <p class="card-text">
                <span>Status: {{status}}</span>
                <br>
                <span>{{text}}</span>
                <br>
                <span>{{ subtext }}</span>
            </p>
            <a href="#" class="btn btn-primary ">Go somewhere</a>
        </div>

    </div>
</template>

<script>
    export default {
        name: "cardComponent",
        props: [
            'id',
            'title',
            'image',
            'status',
            'text',
            'subtext'

        ],
    }
</script>

<style lang="scss" scoped></style>