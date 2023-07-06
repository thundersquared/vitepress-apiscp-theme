<script lang="ts" setup>
import Callout from './Callout.vue'

defineProps<{
    title?: string
}>()
</script>

<template>
    <Callout level="error" :title="title">
        <slot></slot>
    </Callout>
</template>
