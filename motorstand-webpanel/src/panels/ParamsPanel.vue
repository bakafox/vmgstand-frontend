<script setup lang="ts">
    import type { StandStatus } from '../types'

    import CollapsiblePanel from '../components/CollapsiblePanel.vue'

    const { status } = defineProps<{
        "status": StandStatus,
    }>()

    const emit = defineEmits()
</script>

<template>
    <CollapsiblePanel class="darker">
        <template #title>Параметры запуска</template>

        <div>
            Если тест уже запущен, новые алгоритмы тестов
            будут применены только при следующем запуске.

            <hr>

            <section>
                <h3>Алгоритмы:</h3>

                <label>
                    <input type="checkbox"> FFT
                </label>
                <label>
                    <input type="checkbox"> FFT
                </label>
                <label>
                    <input type="checkbox"> FFT
                </label>
                <label>
                    <input type="checkbox"> FFT
                </label>
                <label>
                    <input type="checkbox"> FFT
                </label>
            </section>

            <hr>

            <section>
                <h3>Визуализации:</h3>

                <label>
                    <input type="checkbox"> Зависимость по FFT
                </label>
                <label>
                    <input type="checkbox"> Поиск оптимума
                </label>
                <label>
                    <input type="checkbox"> Ещё что-нибудь, хсхс браток нада подумать
                </label>
            </section>

            <hr>

            <section>
                <button @click="emit('standStatus', 'active')" v-show="status !== 'active'">
                    Запустить выбранные тесты
                </button>
                <button @click="emit('standStatus', 'pending')" v-show="status !== 'pending'">
                    Прервать выполнение тестов
                </button>
            </section>
        </div>
    </CollapsiblePanel>
</template>

<style lang="postcss" scoped>
    section {
        display: flex; flex-direction: column;
    }
</style>
