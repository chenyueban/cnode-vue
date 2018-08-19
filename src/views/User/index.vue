<template>
    <div class="user" :class="$route.params.username && 'slides'">
        <Card class="card user-card" title="用户信息" v-if="datas">
            <div class="info">
                <router-link
                    class="avatar"
                    :to="{
                        name: 'user',
                        params: {
                            loginname: datas.loginname
                        }
                    }"
                >
                    <Avatar size="default" class="avatar" :src="datas.avatar_url" />
                </router-link>
                <span class="name">{{ datas.loginname }}</span>
            </div>
            <div class="info">
                {{ datas.score }}
                <span>积分</span>
            </div>
            <div class="info">
                <Icon type="logo-github" size="20" />
                <span>
                    <a target="_blank" :href="`https://github.com/${datas.githubUsername}`">@{{ datas.githubUsername }}</a>
                </span>
            </div>
            <div class="info">
                注册时间
                <Time :time="datas.create_at" type="date"/>
            </div>
        </Card>

        <Card class="card topics-card" title="最近创建的话题" v-if="datas && datas.recent_topics.length">
            <Cell v-for="data in limitTopics" :datas="data" :key="data.in"/>
        </Card>

        <Card class="card replies-card" title="最近参与的话题" v-if="datas && datas.recent_replies.length">
            <Cell v-for="data in limitReplies" :datas="data" :key="data.in"/>
        </Card>
    </div>
</template>

<script>
import { Card, Avatar, Time, Icon } from 'iview';
import Cell from '@/components/Cell';

export default {
  name: 'User',
  components: {
    Card,
    Avatar,
    Time,
    Cell,
    Icon,
  },
  data() {
    return {
      datas: null,
    };
  },
  methods: {
    async getUserInfo(loginName) {
      try {
        const result = await this.$api.getUserInfo(loginName);
        this.datas = result.data;
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    if (this.$route.params.loginname) this.getUserInfo(this.$route.params.loginname);
    else this.getUserInfo(this.$route.params.username);
  },
  computed: {
    limitTopics() {
      if (this.datas.recent_topics.length > 5) {
        return this.datas.recent_topics.slice(0, 5);
      }
      return this.datas.recent_topics;
    },
    limitReplies() {
      if (this.datas.recent_replies.length > 5) {
        return this.datas.recent_replies.slice(0, 5);
      }
      return this.datas.recent_replies;
    },
  },
};
</script>

<style scoped lang="stylus">
    .user
        .card
            margin-bottom 15px
        .info
            display flex
            align-items center
            line-height 2em
            span
                margin-left 5px
    .slides
        width 290px
        float right
        p
            margin 0
</style>
