<template>
    <div class="tweets card-content p-x-1">
        <tweet v-for="tweet in tweets" v-bind:tweet="tweet" :key="tweet.id"></tweet>
        <p v-if="!tweets.length && !loading"
           class="has-text-centered has-text-grey-light">
        <i class="fa fa-notification"></i> no tweets found...
        </p>
    </div>
</template>

<script>
import Tweet from "./Tweet";

export default {
    components: {Tweet},
    name: 'TweetList',
    props: ['tweets'],
    computed: {
        loading() {
            return this.$store.getters.isLoading;
        }
    },
    created() {
        console.log('TweetList Component created.')
    }
}
</script>
