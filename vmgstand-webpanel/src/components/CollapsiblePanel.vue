<script setup lang="ts">
    import { ref } from 'vue'

    const { collapsible = true } = defineProps<{
        "collapsible"?: boolean,
    }>() 

    const isCollapsed = ref(false)
</script>

<template>
    <aside v-if="!isCollapsed" class="panel">
        <header v-if="$slots.title">
            <h2><slot name="title"></slot></h2>

            <button class="collapse-btn" title="Свернуть панель"
                v-if="collapsible" @click="() => isCollapsed = !isCollapsed"
            >–</button>
        </header>

        <main>
            <slot />
        </main>
    </aside>

    <aside v-else class="collapsed">
        <button class="collapse-btn" title="Развернуть панель"
            v-if="collapsible" @click="() => isCollapsed = !isCollapsed"
        >+</button>

        <h2><slot name="title"></slot></h2>
    </aside>
</template>

<style lang="postcss" scoped>
    .panel {
        flex: 1;
        display: flex; flex-direction: column;
        background-color: var(--bg); color: var(--white-ish);

        &.darker {
            background-color: var(--bg-darker);
        }
    }
    .panel.collapsed {
        max-width: 40px !important;
        align-items: center;
        padding-top: 8px; gap: 8px;

        & h2 {
            writing-mode: vertical-lr;
        }
    }

    header {
        display: flex;
        justify-content: space-between;
        width: 100%; min-height: 32px;
        padding: 8px;
        line-height: 20px;
    }
    main {
        display: flex; flex-direction: column;
        padding: 0 8px;
    }

    .collapse-btn {
        appearance: none;
        width: 24px; height: 24px;
        border: 0px solid transparent;
        border-radius: var(--BR-round);
    }
</style>
