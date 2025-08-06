<script setup lang="ts">
    import CollapsiblePanel from '../components/CollapsiblePanel.vue'
</script>

<template>
    <CollapsiblePanel style="max-width: 200px;">
        <template #title>Информация</template>

        <div>
            <ul>
                <li>Тяга: 1234567890</li>
                <li>Обороты: 1234567890</li>
                <li>Температура: 1234567890</li>
                <li>…</li>
            </ul>
        </div>
    </CollapsiblePanel>
</template>
