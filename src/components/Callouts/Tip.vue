<script lang="ts" setup>
import Callout from './Callout.vue'

defineProps<{
    title?: string
}>()
</script>

<template>
    <Callout level="tip" :title="title">
        <slot></slot>
    </Callout>
</template>
