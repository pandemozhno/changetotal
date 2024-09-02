<template>
    <div class="layout">
        <nav class="layout__nav bg-light-subtle">
            <slot name="nav"/>
        </nav>
        <main class="layout__main">
            <slot />
        </main>
    </div>
</template>


<style lang="scss">
.layout {
    &__nav {
        width: 100%;
        display: flex;
        height: 55px;
        align-items: center;
    }
    &__main {
        padding-top: 3rem;
        max-width: 600px;
        margin: 0 auto;
        padding: 1rem;
    }
}

</style>
  