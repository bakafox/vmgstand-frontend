<script setup lang="ts">
    import { RouterView, RouterLink } from 'vue-router'
    import { ref } from 'vue'
    // import { PanelRightClose } from 'lucide-vue-next'
    import { Menu, LogOut } from 'lucide-vue-next'

    import CollapsiblePanel from '@/components/CollapsiblePanel.vue'

    const isSidebarClosed = ref<boolean>(true)
    const open = () => isSidebarClosed.value = false
    const close = () => isSidebarClosed.value = true

    const isNavigationAllowed = ref<boolean>(true)
</script>

<template>
        <header>
            <div class="header-inner">
                <button class="header-nav" @click="open()"
                :disabled="!isNavigationAllowed || !isSidebarClosed"
                >
                    <Menu /> НазвРаздела
                </button>

                <span>
                    ИмяПользователя

                    <RouterLink to="/login">
                        <button class="header-nav" @click="open()">
                            <LogOut />
                        </button>
                    </RouterLink>
                </span>
            </div>
        </header>

        <Transition name="aside-anim">
            <aside v-if="!isSidebarClosed" @click.self="close()">
                <Transition name="sidebar-anim">
                    <CollapsiblePanel :collapsible="false" class="sidebar">
                        <!-- <template #title>VMGSTAND WEBPANEL</template> -->

                        <RouterLink to="/" class="sidebar-nav" @click="close()">
                            <span>Главная</span>
                        </RouterLink>
                        <RouterLink to="/testing" class="sidebar-nav" @click="close()">
                            <span>Тестирование</span>
                        </RouterLink>
                        <RouterLink to="/analysis" class="sidebar-nav" @click="close()">
                            <span>Анализ</span>
                        </RouterLink>
                        <RouterLink to="/docs" class="sidebar-nav" @click="close()">
                            <span>Документация</span>
                        </RouterLink>
                        <RouterLink to="/login" class="sidebar-nav" @click="close()">
                            <span>Выйти</span>
                        </RouterLink>
                    </CollapsiblePanel>
                </Transition>
            </aside>
        </Transition>

        <main>
            <RouterView />
        </main>
</template>

<style scoped lang="postcss">
    header {
        display: flex; flex-direction: row;
        background-color: var(--bg-dark);
        min-height: 48px;
    }
    .header-inner {
        width: 100%; height: 100%;
        display: flex; flex-direction: row;
        justify-content: space-between;
        font-size: 1.1rem;
    }
    .header-inner > span {
        display: flex; flex-direction: row;
        align-items: center;
        /* gap: 8px; */
    }

    .header-nav {
        display: flex;
        align-items: center;
        appearance: none;
        padding: 8px 12px; gap: 8px;
        border: none;
        background-color: transparent; color: var(--white);
        font-size: 1.1rem; font-weight: 600;
        transition: var(--TR-regular);

        &:hover {
            background-color: color-mix(in srgb, var(--white-pale), transparent 90%);
        }
    }

    aside {
        position: absolute;
        width: 100%; height: 100%;
        background-color: color-mix(in srgb, var(--bg-dark), transparent 50%);
        z-index: 9;
    }

    .sidebar {
        width: fit-content; min-width: 240px;
        padding: 16px 8px;
        transform: translateX(0);

        &.closed {
            transform: translateX(-400px);
        }
    }

    .sidebar-nav {
        display: flex;
        padding: 4px 0;
        text-decoration: none;

        & > span {
            flex: 1;
            padding: 8px 12px;
            color: var(--white-ish);
            font-weight: 500; font-size: 1.1rem;
            border-radius: var(--BR-round);
            transition: var(--TR-regular);
        }
    }

    .sidebar-nav:hover > span {
        background-color: color-mix(in srgb, var(--white-pale), transparent 90%);
        color: var(--white)
    }

    .sidebar-nav:active > span {
        background-color: color-mix(in srgb, var(--white-pale), transparent 80%);
    }

    .aside-anim-enter-active, .aside-anim-leave-active {
        transition: opacity var(--TR-slow) ease;
    }
    .aside-anim-enter-from, .aside-anim-leave-to {
        opacity: 0;
    }

    .aside-anim-enter-active .sidebar, .aside-anim-leave-active .sidebar {
        transition: transform var(--TR-regular) ease;
    }
    .aside-anim-enter-from .sidebar, .aside-anim-leave-to .sidebar {
        transform: translateX(-100%);
    }
</style>
