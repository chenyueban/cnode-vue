<template>
    <div id="app">
        <Header/>
        <div class="main">
            <router-view name="main" :key="$route.params.id"></router-view>
            <router-view name="user"></router-view>
        </div>
        <BackTop />
    </div>
</template>

<script>
import { BackTop } from 'iview';
import Header from '@/components/Header';

export default {
  name: 'App',
  components: {
    Header,
    BackTop,
  },
};
</script>

<style lang="stylus">
    *
        margin 0
        padding 0
        box-sizing border-box

    img
        width 100%
        display block

    ul, ol
        list-style none
        line-height 1
    a
        color inherit
        text-decoration none

    body
        background-color #e1e1e1

    .main
        width 90%
        margin 15px auto
        max-width 1400px
        min-width 960px
        min-height 400px
        &::after
            content: ''
            display block
            clear both
</style>
