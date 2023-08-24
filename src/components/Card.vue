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
        <ClientOnly>
            <div v-if="props.icon" class="card-icon">
                <FontAwesomeIcon :icon="props.icon"></FontAwesomeIcon>
            </div>
        </ClientOnly>
        <h3 class="card-title">{{ props.title }}</h3>
        <div class="card-body">
            <slot></slot>
        </div>
    </component>
</template>

<style>
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

.card .card-body>p:first-of-type {
    margin-top: 0;
}

.card .card-body>p:last-of-type {
    margin-bottom: 0;
}

a.card:hover {
    border-color: v-bind('props.color');
    text-decoration: none;
}
</style>
