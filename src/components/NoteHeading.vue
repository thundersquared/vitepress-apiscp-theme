<script setup>
import { useData } from 'vitepress'
import VPBadge from 'vitepress/dist/client/theme-default/components/VPBadge.vue';
const { page, site } = useData()
</script>

<template>
    <header>
        <h1 class="page-title" v-if="site.themeConfig.autoTitle && !page.frontmatter.hide_title">
            <span v-show="page.frontmatter.emoji" class="page-emoji">
                {{ page.frontmatter.emoji }}
            </span>
            {{ page.title }}
        </h1>
    </header>
    <div class="tags" v-show="page.frontmatter.tags">
        <VPBadge type="info" v-for="tag in page.frontmatter.tags">{{ tag }}</VPBadge>
    </div>
</template>

<style scoped>
.page-title {
    font-size: 2rem;
    margin-bottom: 2.125rem;
}

.page-emoji {
    font-family: sans-serif, "Apple Color Emoji", "Android Emoji", "Segoe UI";
}

.tags {
    display: flex;
    flex-direction: row;
    gap: 5px;
    margin-bottom: 1.625rem;
}
</style>