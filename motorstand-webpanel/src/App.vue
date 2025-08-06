<script setup lang="ts">
    import { ref, computed } from 'vue'

    import Header from './components/Header.vue'
    import CollapsiblePanel from './components/CollapsiblePanel.vue'

    const status = ref("active")
</script>

<template>
    <Header :status="status" />

    <div class="layout">
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

        <CollapsiblePanel class="darker">
            <template #title>Параметры запуска</template>

            <div>
                Если тест уже запущен, новые алгоритмы тестов
                будут применены только при следующем запуске.
                <hr>

                <section class="todo-move-panel-contents-to-sep-components">
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

                <section class="todo-move-panel-contents-to-sep-components">
                    <h3>Визуализации:</h3>

                    <label>
                        <input type="checkbox"> Зависимость по FFT
                    </label>
                    <label>
                        <input type="checkbox"> Поиск оптимума
                    </label>
                    <label>
                        <input type="checkbox"> Ещё чонибудь, хсхс браток нада подумать
                    </label>
                </section>

                <hr>

                <section class="todo-move-panel-contents-to-sep-components">
                    <button @click="status = 'active'">
                        Запустить выбранные тесты
                    </button>
                    <button @click="status = 'pending'">
                        Прервать выполнение тестов
                    </button>
                </section>
            </div>
        </CollapsiblePanel>

        <section class="panels-transition-arrow" />

        <CollapsiblePanel :collapsible="false">
            <template #title>Визуализация</template>
        </CollapsiblePanel>
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

    .todo-move-panel-contents-to-sep-components {
        display: flex; flex-direction: column;
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
