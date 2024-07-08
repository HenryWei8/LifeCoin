<script>
    import "@fortawesome/fontawesome-free/css/all.min.css";
</script>

<!-- svelte-ignore a11y-missing-attribute -->
<div class="container">
    <div class="left">
        <div class="button-container">
            <div class="vertical-line"></div>
            <div class="button-content">
                <i class="fas fa-th-large"></i>
                <span>Dashboard</span>
            </div>
        </div>
        <div class="button-container">
            <div class="vertical-line"></div>
            <div class="button-content">
                <i class="fas fa-paper-plane"></i>
                <span>Send</span>
            </div>
        </div>
        <div class="button-container">
            <div class="vertical-line"></div>
            <div class="button-content">
                <i class="fas fa-link"></i>
                <span>Blockchain</span>
            </div>
        </div>
    </div>
    <div class="center"></div>
    <div class="right"></div>
</div>

<style>
    .body {
        background-color: #1e1e2d;
        margin: 0;
    }

    .container {
        display: flex;
        flex-direction: row;
        height: 80vh;
        width: 100vw;
        padding: 0;
    }

    .left {
        display: flex;
        flex-direction: column;
        margin-left: 0;
        background-color: #1e1e27;
        width: 20%;
        gap: 5%;
        padding: 10px;
        border-radius: 20px;
    }

    .center {
        margin-left: 5%;
        background-color: #262732;
        width: 50%;
        border-radius: 20px;
    }

    .right {
        margin-left: 5%;
        background-color: #262732;
        width: 30%;
        border-radius: 20px;
    }

    .button-container {
        display: flex;
        align-items: center;
        background-color: #1e1e27;
        border-radius: 8px;
        padding: 10px 20px;
        color: #fff;
        font-family: Arial, sans-serif;
        position: relative;
        height: 80px;
        width: 300px;
    }

    .button-container:hover {
        background-color: #101014;
    }

    .vertical-line {
        width: 4px;
        background-color: #ffc107;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
    }

    .button-content {
        display: flex;
        align-items: center;
        margin-left: 10px;
    }

    .button-content i {
        margin-right: 10px;
        font-size: 24px;
    }
</style>
