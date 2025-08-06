<script setup lang="ts">
    import { ref, computed } from 'vue'
    import type { StandStatus } from './types'

    import Header from './components/Header.vue'

    import InfoPanel from './panels/InfoPanel.vue'
    import ParamsPanel from './panels/ParamsPanel.vue'
    import VisPanel from './panels/VisPanel.vue'

    const standStatus = ref<StandStatus>("active")
</script>

<template>
    <Header :status="standStatus" />

    <div class="layout">
        <InfoPanel />
        <ParamsPanel :status="standStatus" @standStatus="(s) => standStatus = s" />
        <section class="panels-transition-arrow" />
        <VisPanel />
    </div>
</template>

<style lang="postcss">
    html {
        display: flex;
        width: 100%; height: 100%;
        font-size: 14px;
    }
    body, #app {
        flex: 1;
        display: flex; flex-direction: column;
        min-width: 100%; min-height: 100%;
        font-family: var(--fonts);
    }
    .layout {
        flex: 1;
        display: flex; flex-direction: row;
    }

    h1 {
        font-size: 1.4rem;
        font-weight: 500;
        margin: 0;
    }
    h2 {
        font-size: 1.2rem;
        font-weight: 700;
        margin: 0;
    }
    h3 {
        font-size: 1.1rem;
        font-weight: 700;
        margin: 0;
    }
    hr {
        border: 1px solid var(--gray50);
    }
</style>
