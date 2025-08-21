<script lang="ts" setup>
    import { defineProps, defineEmits } from 'vue'

    import CollapsiblePanel from '@/components/CollapsiblePanel.vue'

    const { isVisible } = defineProps<{
        isVisible: boolean
    }>()

    const emit = defineEmits(['show', 'hide'])

    function checkForNavClicked(e: { target: HTMLElement }) {
        if (e.target.className.includes('sidebar-nav')) {
            emit('hide')
        }
    }
</script>

<template>
    <Transition name="sidebar">
        <aside class="sidebar__wrap" v-if="isVisible" @click.self="emit('hide')">
            <CollapsiblePanel class="sidebar" :collapsible="false" @click="checkForNavClicked">
                <slot />
            </CollapsiblePanel>
        </aside>
    </Transition>
</template>

<style lang="postcss" scoped>
    .sidebar__wrap {
        position: absolute;
        width: 100%; height: 100%;
        background-color: color-mix(in srgb, var(--bg-dark), transparent 50%);
        z-index: 9;
    }

    .sidebar {
        width: fit-content; min-width: 240px; height: 100%;
        padding: 16px 8px;
        transform: translateX(0);

        &.closed {
            transform: translateX(-400px);
        }
    }

    .sidebar-enter-active, .sidebar-leave-active {
        transition: opacity var(--TR-slow) ease;
    }
    .sidebar-enter-from, .sidebar-leave-to {
        opacity: 0;
    }

    .sidebar-enter-active .sidebar, .sidebar-leave-active .sidebar {
        transition: transform var(--TR-regular) ease;
    }
    .sidebar-enter-from .sidebar, .sidebar-leave-to .sidebar {
        transform: translateX(-100%);
    }
</style>

<style lang="postcss">
    .sidebar-nav {
        display: flex;
        padding: 4px 0;
        text-decoration: none;
    }

    .sidebar-nav__inner {
        flex: 1;
        display: flex; flex-direction: row;
        align-items: center; gap: 8px;
        padding: 8px 12px;
        color: var(--white-ish);
        font-weight: 500; font-size: 1.1rem;
        border-radius: var(--BR-round);
        transition: var(--TR-regular);

        .sidebar-nav:hover & {
            background-color: color-mix(in srgb, var(--white-pale), transparent 90%);
            color: var(--white);
        }
        .sidebar-nav:hover:active & {
            background-color: color-mix(in srgb, var(--white-pale), transparent 80%);
        }
        .router-link-exact-active & {
            color: var(--accent-light) !important;
        }
    }
</style>