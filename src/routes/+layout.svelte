<script lang="ts">
    import "./global.css";

    import { page } from "$app/stores";
    import { fade } from "svelte/transition";
    import { createDropdownMenu, melt } from "@melt-ui/svelte";

    import logo from "$lib/images/logo.png";
    import dummyUserAvatar from "$lib/images/dummy-user-avatar.jpg";

    import IonGrid from "~icons/ion/grid";
    import PhWallet from "~icons/ph/wallet";
    import MdiPigVariant from "~icons/mdi/pig-variant";
    import MaterialSymbolsWebhook from "~icons/material-symbols/webhook";
    import IcBaselineNotificationsNone from "~icons/ic/baseline-notifications-none";
    import MaterialSymbolsKeyboardArrowDownRounded from "~icons/material-symbols/keyboard-arrow-down-rounded";
    import MaterialSymbolsKeyboardArrowUpRounded from "~icons/material-symbols/keyboard-arrow-up-rounded";
    import MaterialSymbolsLightSettingsRounded from "~icons/material-symbols-light/settings-rounded";
    import PhSignOutBold from "~icons/ph/sign-out-bold";

    interface Link {
        href: string;
        text: string;
        icon: any;
    }

    const {
        elements: { menu, item, trigger, arrow },
        states: { open },
    } = createDropdownMenu({
        forceVisible: true,
        positioning: {
            placement: "bottom-end",
        },
    });

    const links: Link[] = [
        { href: "/", text: "Dashboard", icon: IonGrid },
        { href: "/send", text: "Send", icon: PhWallet },
        { href: "/stake", text: "Stake", icon: MdiPigVariant },
        { href: "/tangle", text: "Tangle", icon: MaterialSymbolsWebhook },
    ];

    const getActivePage = (pathName: string) => {
        return links.find((link) => link.href === pathName) || null;
    };

    $: activePage = getActivePage($page.url.pathname);
</script>

<div
    class="grid min-h-screen px-11 pb-11"
    style="grid-template-columns: auto 1fr auto;"
>
    <div class="flex flex-col pr-12">
        <div class="flex items-center gap-4 h-32 min-w-60">
            <img src={logo} alt="Logo" class="size-11" />
            <h1 class="text-3xl font-semibold">
                <span class="text-primary">Life</span>
                <span class="text-white">Coin</span>
            </h1>
        </div>
        <nav class="flex flex-col grow">
            {#each links as link}
                {@const active = activePage?.href === link.href}
                <a
                    class="px-6 py-5 flex gap-4 items-center hover:text-white transition-colors rounded-xl relative {active
                        ? 'text-white bg-bg-very-dark'
                        : 'text-text-dark'}"
                    href={link.href}
                >
                    <svelte:component this={link.icon} class="size-7" />
                    <div>{link.text}</div>
                    {#if active}
                        <div
                            class="absolute h-full left-0 bg-primary w-1.5"
                        ></div>
                    {/if}
                </a>
            {/each}
        </nav>
    </div>

    <div class="grid" style="grid-template-rows: auto 1fr auto;">
        <div class="h-32 flex items-center justify-between">
            <h2 class="text-4xl text-white font-semibold">
                {activePage?.text || "Unknown Page"}
            </h2>
            <div class="flex items-center gap-8">
                <div class="relative">
                    <IcBaselineNotificationsNone class="size-10 text-white" />
                    <div
                        class="absolute bg-red-500 rounded-full top-0 right-0 text-white size-2.5"
                    ></div>
                </div>
                <button
                    class="flex gap-2 items-center"
                    use:melt={$trigger}
                    aria-label="Open navigation"
                >
                    <img
                        src={dummyUserAvatar}
                        alt="User Avatar"
                        class="size-10 rounded-full"
                    />

                    <div class="relative text-white mt-0.5">
                        <div
                            class="duration-200 transition-opacity {$open &&
                                'opacity-0'}"
                        >
                            <MaterialSymbolsKeyboardArrowDownRounded
                                class="size-8"
                            />
                        </div>
                        <div
                            class="absolute inset-0 duration-200 transition-opacity {!$open &&
                                'opacity-0'}"
                        >
                            <MaterialSymbolsKeyboardArrowUpRounded
                                class="size-8"
                            />
                        </div>
                    </div>
                </button>
                {#if $open}
                    <div
                        class="mt-3.5 p-8 w-56 z-10 rounded-lg bg-bg-light text-white"
                        use:melt={$menu}
                        transition:fade={{ duration: 150 }}
                    >
                        <div
                            use:melt={$item}
                            class="truncate tracking-wide mb-6"
                        >
                            <span class="text-white font-medium">
                                Signed in as
                            </span>
                            <span class="text-text-dim font-bold">
                                TmwiFiw23jh2rFi2jf9smfbmE
                            </span>
                        </div>
                        <div class="flex flex-col gap-6">
                            <a
                                class="text-text-dim hover:text-white transition-colors flex gap-6 items-center"
                                href="/settings"
                                use:melt={$item}
                            >
                                <MaterialSymbolsLightSettingsRounded
                                    class="size-7"
                                />
                                <div>Settings</div>
                            </a>
                            <button
                                class="text-text-dim hover:text-white transition-colors flex gap-6 items-center"
                                use:melt={$item}
                            >
                                <PhSignOutBold class="size-7" />
                                <div>Logout</div>
                            </button>
                        </div>
                        <div use:melt={$arrow} />
                    </div>
                {/if}
            </div>
        </div>
        <main class="w-full h-full grow">
            <slot />
        </main>
    </div>
</div>
