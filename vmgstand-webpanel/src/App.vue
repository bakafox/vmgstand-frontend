<script setup lang="ts">
    import { RouterView } from 'vue-router'
</script>

<template>
    <RouterView />
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
        background-color: var(--bg); color: var(--white-ish);
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
        border: 2px solid var(--white-pale);
    }

    button, input[type=checkbox], input[type=radio], label, a, select, option {
        cursor: pointer;

        & :disabled {
            cursor: not-allowed;
        }
    }
</style>
