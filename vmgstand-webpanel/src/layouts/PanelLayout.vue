<script setup lang="ts">
    import { RouterView, RouterLink } from 'vue-router'
    import { ref } from 'vue'
    // import { PanelRightClose } from 'lucide-vue-next'
    import { Menu, LogOut, House, ChartSpline, FileChartColumn, BookOpen, UsersRound } from 'lucide-vue-next'

    import Header from '@/components/Header.vue'
    import Sidebar from '@/components/Sidebar.vue'

    const isSidebarVisisble = ref<boolean>(false)

    const isNavigationAllowed = ref<boolean>(true)
</script>

<template>
        <Header>
            <button class="header-nav" @click="isSidebarVisisble = true"
                :disabled="!isNavigationAllowed || isSidebarVisisble"
                :title="isNavigationAllowed
                    ? 'Открыть меню нафигации' 
                    : 'Навигация не доступна, пока выполняется тестирование'"
            >
                <Menu v-if="isNavigationAllowed" /> НазвРаздела
            </button>

            <span class="header-row">
                ИмяПользователя

                <RouterLink to="/login">
                    <button class="header-nav" title="Выйти">
                        <LogOut />
                    </button>
                </RouterLink>
            </span>
        </Header>

        <Sidebar :is-visible="isSidebarVisisble"
            @show="isSidebarVisisble = true" @hide="isSidebarVisisble = false"
        >
            <RouterLink to="/" class="sidebar-nav">
                <span class="sidebar-nav__inner"><House :size="16" /> Главная</span>
            </RouterLink>
            <RouterLink to="/testing" class="sidebar-nav">
                <span class="sidebar-nav__inner"><ChartSpline :size="16" /> Тестирование</span>
            </RouterLink>
            <RouterLink to="/analysis" class="sidebar-nav">
                <span class="sidebar-nav__inner"><FileChartColumn :size="16" /> Анализ</span>
            </RouterLink>
            <RouterLink to="/docs" class="sidebar-nav">
                <span class="sidebar-nav__inner"><BookOpen :size="16" /> Документация</span>
            </RouterLink>
            <RouterLink to="/team" class="sidebar-nav">
                <span class="sidebar-nav__inner"><UsersRound :size="16" /> Команда</span>
            </RouterLink>
        </Sidebar>

        <main>
            <RouterView />
        </main>
</template>

<style scoped lang="postcss">

</style>
