<script lang="ts" setup>
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps<{
    title?: string
    level: string
}>()

const icons: { [key: string]: string } = {
    'info': 'circle-info',
    'note': 'circle-exclamation',
    'warning': 'triangle-exclamation',
    'tip': 'lightbulb',
    'check': 'check',
    'error': 'xmark',
}

const icon = computed(() => icons[props.level])
</script>

<template>
    <div :class="['callout', level]">
        <ClientOnly>
            <div class="callout-icon" v-if="level">
                <FontAwesomeIcon :icon="icon"></FontAwesomeIcon>
            </div>
        </ClientOnly>
        <div class="callout-body">
            <h3 class="callout-title" v-if="props.title">{{ props.title }}</h3>
            <slot></slot>
        </div>
    </div>
</template>

<style>
.callout {
    display: flex;
    align-items: flex-start;
    padding: 1rem 1.25rem;
    border-radius: 0.75rem;
    border-width: 1px;
    border-style: solid;
    margin-bottom: 1rem;
}

.callout .callout-icon {
    margin-top: .125rem;
}

.callout .callout-icon svg {
    width: 1rem;
    height: 1rem;
}

.callout .callout-title {
    margin: 0;
    font-size: 1rem;
}

.callout .callout-body {
    margin-left: 0.75rem;
    line-height: 1.75rem;
}

.callout .callout-body>p:first-of-type {
    margin-top: 0;
}

.callout .callout-body>p:last-of-type {
    margin-bottom: 0;
}

.callout .callout-body a,
.callout .callout-body code {
    color: inherit;
}

.callout.info {
    background-color: var(--vp-custom-block-info-bg);
    color: var(--vp-custom-block-info-text);
    border-color: var(--vp-custom-block-info-border);
}

.callout.note {
    background-color: var(--vp-custom-block-note-bg);
    color: var(--vp-custom-block-note-text);
    border-color: var(--vp-custom-block-note-border);
}

.callout.note code {
    background-color: var(--vp-custom-block-note-code-bg);
}

.callout.check,
.callout.tip {
    background-color: var(--vp-custom-block-tip-bg);
    color: var(--vp-custom-block-tip-text);
    border-color: var(--vp-custom-block-tip-border);
}

.callout.check code,
.callout.tip code {
    background-color: var(--vp-custom-block-tip-code-bg);
}

.callout.warning {
    background-color: var(--vp-custom-block-warning-bg);
    color: var(--vp-custom-block-warning-text);
    border-color: var(--vp-custom-block-warning-border);
}

.callout.warning code {
    --vp-c-mute: var(--vp-custom-block-warning-code-bg);
}

.callout.error {
    background-color: var(--vp-custom-block-danger-bg);
    color: var(--vp-custom-block-danger-text);
    border-color: var(--vp-custom-block-danger-border);
}

.callout.error code {
    --vp-c-mute: var(--vp-custom-block-danger-code-bg);
}
</style>
