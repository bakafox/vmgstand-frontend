<script setup lang="ts">
    import type { StandStatus } from '../types'

    const { status } = defineProps<{
        "status": StandStatus,
    }>()
</script>

<template>
    <header :class="status">
        <h1>Панель управления стендом ВМГ НГУ</h1>
        •
        <h1><b>Выполняется тест 4 из 197…</b></h1>
    </header>
</template>

<style lang="postcss" scoped>
    header {
        width: 100%; height: 48px;
        display: flex; align-items: center;
        padding: 0 16px 2px; gap: 8px;
        background: var(--dark); color: var(--white90);
        transition: var(--TR-slow);

        &.active {
            background-color: var(--accent); color: var(--white);
        }
    }
</style>