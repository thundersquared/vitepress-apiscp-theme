<script lang="ts" setup>
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps<{
    title: string
    icon?: string
    iconType?: string
    color: string
    href?: string
}>()

const tag = computed(() => props.href ? 'a' : 'div')
</script>

<template>
    <component :is="tag" class="card" :class="{ link: props.href }" :href="props.href || undefined">
        <FontAwesomeIcon :icon="props.icon" v-if="props.icon" class="card-icon"></FontAwesomeIcon>
        <h3 class="card-title">{{ props.title }}</h3>
        <span class="card-body">
            <slot></slot>
        </span>
    </component>
</template>

<style scoped>
.card {
    --vp-c-brand: initial;
    border: 1px solid var(--vp-custom-block-info-border);
    padding: 1rem;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    border-radius: 0.75rem;
    display: block;
}

.card-title {
    margin-bottom: 0.5rem;
}

.card-icon {
    color: v-bind('props.color');
    height: 1.25rem;
}

a.card:hover {
    border-color: v-bind('props.color');
    text-decoration: none;
}
</style>
