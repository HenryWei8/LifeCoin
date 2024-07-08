<script lang="ts">
    import logo from "$lib/images/logo.png";
</script>

<header class="flex justify-between items-center py-9 sm:py-10 z-50">
    <div class="flex gap-12 items-center">
        <a class="flex gap-4 sm:gap-6 items-center" href="/">
            <img src={logo} alt="Logo" class="size-12" />
            <h3 class="text-xl sm:text-2xl font-bold tracking-wide">
                <span style="color: #ffc107; font-style: normal;">Life</span>
                <span style="color: white; font-style: normal;">Coin</span>
            </h3>
        </a>

        <nav class="gap-20 items-center text-zinc-600 hidden lg:flex">
            <a href="/">Dashboard</a>
            <a href="/leaderboards"></a>
        </nav>
    </div>
</header>

<style>
    h3 {
        font-size: 30px;
        font-family: "Poppins", sans-serif;
        font-weight: 100;
    }
    nav {
        margin-left: 150px;
        font-size: 35px;
        font-family: "Poppins", sans-serif;
        font-weight: 90;
        color: white;
    }
</style>
