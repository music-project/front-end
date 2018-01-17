<template>
    <div class="card m-t-2">
        <div class="card-content">
            <p>Music: 每日分享你最爱的音乐! </p>

            <p class="has-text-grey-light m-t-1">
                <small>&copy; {{ appName }}, by <a href="www.misakar.me" target="_blank"><small>廖志鑫, 邓苡, 周若玮, 张思雨, 朱承浩</small></a></small>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SideFooter',
        computed: {
            appName() {
                return this.$store.getters.appName;
            }
        }
    }
</script>
