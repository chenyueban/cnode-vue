<template>
    <div class="cell">
        <router-link
            class="avatar"
            :to="{
                name: 'user',
                params: {
                    loginname: datas.author.loginname
                }
            }"
        >
            <img :src="datas.author.avatar_url" :alt="datas.author.loginname">
        </router-link>
        <div
            class="reply"
            v-if="hasCount"
        >
            <span class="reply-count">{{ datas.reply_count }}</span>
            /
            <span class="visit-count">{{ datas.visit_count }}</span>
        </div>
        <Put :data="datas" v-if="datas.tab"/>
        <div
            class="title"
            :style="!(hasCount && datas.tab) && {maxWidth: '90%'}"
        >
            <router-link
                class="title-a"
                :to="{
                    name: 'topic',
                    params: {
                        id: datas.id,
                        username: datas.author.loginname
                    }
                }"
            >
                {{ datas.title }}
            </router-link>
        </div>
        <Time class="time" :time="datas.last_reply_at"/>
    </div>
</template>

<script>
import Put from '@/components/Put';

export default {
  name: 'Cell',
  props: ['datas'],
  components: {
    Put,
  },
  computed: {
    hasCount() {
      return typeof this.datas.reply_count === 'number' && typeof this.datas.visit_count === 'number';
    },
  },
};
</script>

<style scoped lang="stylus">
    .cell
        background-color #fff
        padding 10px
        font-size 14px
        display flex
        align-items center
        border-bottom 1px solid #f0f0f0
        .avatar
            width 30px
            height 30px
            border-radius 4px
            overflow hidden
        .reply
            width 80px
            text-align center
            .reply-count
                color #9e78c0
        .title
            max-width 80%
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            flex 1
            text-align left
            .title-a
                padding-left 10px
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
        .time
            width 60px
            text-align right
</style>
