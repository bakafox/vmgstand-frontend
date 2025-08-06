<script setup lang="ts">
    import { ref } from 'vue'

    const { collapsible = true } = defineProps<{
        "collapsible"?: boolean,
    }>() 

    const isCollapsed = ref(false)
</script>

<template>
    <aside v-if="!isCollapsed">
        <header>
            <h2><slot name="title"></slot></h2>

            <button v-if="collapsible" title="Свернуть панель"
                @click="() => isCollapsed = !isCollapsed"
            >–</button>
        </header>

        <main>
            <slot />
        </main>
    </aside>

    <aside v-else class="collapsed">
        <button v-if="collapsible" title="Развернуть панель"
            @click="() => isCollapsed = !isCollapsed"
        >+</button>

        <h2><slot name="title"></slot></h2>
    </aside>
</template>

<style lang="postcss" scoped>
    aside {
        flex: 1;
        display: flex; flex-direction: column;
        background-color: var(--dark80); color: var(--white90);

        &.darker {
            background-color: var(--dark90);
        }
    }

    .collapsed {
        max-width: 40px !important;
        align-items: center;
        margin-top: 8px; gap: 8px;

        & h2 {
            writing-mode: vertical-lr;
        }
    }

    header {
        display: flex;
        justify-content: space-between;
        width: 100%; min-height: 32px;
        padding: 4px 8px;
    }

    main {
        display: flex; flex-direction: column;
        padding: 0 8px;
    }
</style>
