<template>
    <div class="header__wrap">
        <header>
            <slot />
        </header>
    </div>
</template>

<style lang="postcss" scoped>
    .header__wrap {
        display: flex; flex-direction: row;
        background-color: var(--bg-dark);
        min-height: 48px;
    }

    header {
        width: 100%; height: 100%;
        display: flex; flex-direction: row;
        justify-content: space-between;
        font-size: 1.1rem;
    }
</style>

<style lang="postcss">
    .header-nav {
        display: flex;
        align-items: center;
        appearance: none;
        padding: 8px 12px; gap: 8px;
        border: none;
        background-color: transparent; color: var(--white);
        font-size: 1.1rem; font-weight: 600;
        transition: var(--TR-regular);

        &:not(:disabled):hover {
            background-color: color-mix(in srgb, var(--white-pale), transparent 90%);
        }
        &:disabled {
            cursor: not-allowed;
        }
    }

    .header-row {
        display: flex;
        justify-content: center; align-items: center;
    }
</style>
