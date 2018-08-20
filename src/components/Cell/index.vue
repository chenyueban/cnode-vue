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
            <Avatar size="default" :src="datas.author.avatar_url" />
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
        <Time
            class="time"
            :key="datas.id"
            :time="datas.last_reply_at"
            :type="datas.last_reply_at | formatType"
        />
    </div>
</template>

<script>
import Put from '@/components/Put';
import { Avatar, Time } from 'iview';
import dayjs from 'dayjs';

export default {
  name: 'Cell',
  props: ['datas'],
  components: {
    Put,
    Avatar,
    Time,
  },
  filters: {
    formatType(value) {
      const now = dayjs();
      const diff = now.diff(dayjs(value), 'months');
      return diff > 0 ? 'date' : 'relative';
    },
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
        &:not(:last-child)
            border-bottom 1px solid #f0f0f0
        .reply
            width 80px
            font-size 12px
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
            width 75px
            font-size 12px
            text-align right
</style>
