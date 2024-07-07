<script lang="ts">
    import "./global.css";

    import Header from "$lib/components/Header.svelte";
</script>

<div
    class="grid min-h-screen px-12 xl:px-24"
    style="grid-template-rows: auto 1fr auto;"
>
    <Header />

    <main class="w-full h-full">
        <slot />
    </main>
</div>
