<script lang="ts" setup>
defineProps({
    cols: {
        type: Number,
        default: 2,
        required: false
    }
})
</script>

<template>
    <div class="card-group">
        <slot></slot>
    </div>
</template>

<style scoped>
.card-group {
    display: grid;
    grid-template-columns: repeat(v-bind(cols), minmax(0, 1fr));
    column-gap: 1rem;
}
</style>
