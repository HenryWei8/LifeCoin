<script lang="ts">
    import logo from "$lib/images/logo.jpg";
</script>

<header class="flex justify-between items-center py-9 sm:py-10 z-50">
    <div class="flex gap-12 items-center">
        <a class="flex gap-4 sm:gap-6 items-center" href="/">
            <img src={logo} alt="Logo" class="size-12" />
            <h3 class="text-xl sm:text-2xl font-bold tracking-wide">
                Life Coin
            </h3>
        </a>

        <nav class="gap-12 items-center text-zinc-600 hidden lg:flex">
            <a href="/">Dashboard</a>
            <a href="/leaderboards">About</a>
        </nav>
    </div>
</header>
