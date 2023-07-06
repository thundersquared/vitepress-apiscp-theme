<script lang="ts" setup>
import Callout from './Callout.vue'

defineProps<{
    title?: string
}>()
</script>

<template>
    <Callout level="note" :title="title">
        <slot></slot>
    </Callout>
</template>
