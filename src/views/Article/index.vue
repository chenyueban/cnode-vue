<template>
    <div class="mains">
        <div id="content" class="article">
            <Card class="head" v-if="post">
                <div slot="title" class="title">
                    <Put :data="post"/>
                    {{ post.title }}
                    <div class="changes">
                        <div class="left">
                            <span>
                                <Icon type="md-egg" size="16" />发布于<Time :time="post.create_at" />
                            </span>
                                <span>
                                <Icon type="ios-happy" size="16" />作者 {{ post.author.loginname }}
                            </span>
                                <span>
                                <Icon type="ios-podium" size="16" />{{ post.visit_count }} 次浏览
                            </span>
                                <span>
                                <Icon type="md-subway" size="16" />来自 {{ post.tab | formatTab }}
                            </span>
                        </div>
                        <div class="right">
                            <Button
                                v-if="isCollected"
                                size="large"
                                type="text"
                                icon="ios-happy"
                                shape="circle"
                                @click="deCollect($store.state.accesstoken, $route.params.id)"
                            >
                                取消收藏
                            </Button>
                            <Button
                                v-else
                                size="large"
                                type="text"
                                icon="ios-sad-outline"
                                shape="circle"
                                @click="collect($store.state.accesstoken, $route.params.id)"
                            >
                                收藏
                            </Button>
                        </div>
                    </div>
                </div>

                <div class="detail" v-if="post">
                    <div class="content" v-html="post.content"></div>
                </div>
            </Card>

            <Card class="reply" v-if="post">
                <div slot="title">
                    <Icon type="md-git-commit" size="18" />
                    {{ post.reply_count }} 回复
                </div>
                <div
                    class="cell"
                    v-for="(user, index) in post.replies"
                    :key="user.id"
                    :id="user.id"
                >
                    <router-link
                        class="avatar"
                        :to="{
                            name: 'user',
                            params: {
                                loginname: user.author.loginname
                            }
                        }"
                    >
                        <Avatar size="default" :src="user.author.avatar_url" />
                    </router-link>
                    <div class="details">
                        <div class="info">
                            <div class="left">
                                <div class="name">{{ user.author.loginname }}</div>
                                <Time class="time" :time="user.create_at"/>
                                <a :href="`#${user.id}`">
                                    <span class="index">{{ index + 1 }}楼</span>
                                </a>
                                <Tag
                                    color="success"
                                    v-if="post.author.loginname === user.author.loginname"
                                >作者</Tag>
                            </div>
                            <Button
                                size="default"
                                type="text"
                                class="ups"
                                @click="handleUps(user)"
                            >
                                <Icon type="ios-thumbs-up" size="16" />
                                {{ user.ups.length }}
                            </Button>
                        </div>
                        <div class="content" v-html="user.content"></div>
                    </div>
                </div>
            </Card>

            <Reply/>
        </div>
        <User :username="post.author.loginname" v-if="post"/>
    </div>
</template>

<script>
import { Time, Icon, Button, Card, Avatar, Tag } from 'iview';
import Put from '@/components/Put';
import Reply from '@/components/Reply';
import User from '@/views/User';

export default {
  name: 'Article',
  components: {
    Time,
    Icon,
    Button,
    Card,
    Avatar,
    Tag,
    Put,
    Reply,
    User,
  },
  data() {
    return {
      post: null,
    };
  },
  filters: {
    formatTab(value) {
      switch (value) {
        case 'ask':
          return '问答';
        case 'share':
          return '分享';
        case 'job':
          return '招聘';
        default:
          return '客户端测试';
      }
    },
  },
  computed: {
    isCollected() {
      const { collects } = this.$store.state;
      if (collects && collects.find(v => v.id === this.$route.params.id)) return true;
      return false;
    },
  },
  methods: {
    async getTopic(id) {
      try {
        const result = await this.$api.getTopic(id);
        document.title = result.data.title;
        this.post = result.data;
      } catch (e) {
        console.log(e);
      }
    },

    async collect(accesstoken, topicId) {
      try {
        const result = await this.$api.postCollect(accesstoken, topicId);
        console.log(result);
        // if (result.success) this.$Message.success('成功收藏啦');
        // else this.$Message.error('好像哪里出了点问题呢');
        this.$store.dispatch('getCollects', this.$store.state.userinfo.loginname);
      } catch (e) {
        console.log(e);
      }
    },
    async deCollect(accesstoken, topicId) {
      try {
        const result = await this.$api.postDeCollect(accesstoken, topicId);
        console.log(result);
        // if (result.success) this.$Message.success('取消收藏啦');
        // else this.$Message.error('好像哪里出了点问题呢');
        this.$store.dispatch('getCollects', this.$store.state.userinfo.loginname);
      } catch (e) {
        console.log(e);
      }
    },

    async handleUps(user) {
      try {
        const result = await this.$api.postUps(user.id, this.$store.state.accesstoken);
        if (result) {
          if (result.action === 'up') {
            user.ups.push(this.$store.state.userinfo.id);
          }
          if (result.action === 'down') {
            user.ups.pop();
          }
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.getTopic(this.$route.params.id);
    const { accesstoken, userinfo, collects } = this.$store.state;
    if (accesstoken && userinfo && !collects) {
      this.$store.dispatch('getCollects', userinfo.loginname);
    }
  },
};
</script>

<style scoped lang="stylus">
.mains
    display flex
    justify-content space-between
.article
    border-radius 4px
    overflow hidden
    width calc(100% - 305px)
    min-width calc(100% - 305px)
    max-width calc(100% - 305px)
    flex-grow 0
    margin-right 15px
    & > div
        margin-bottom 15px
    .head
        padding 10px
        background-color #fff
        .title
            font-size 22px
            font-weight 700
            margin 8px 0
            vertical-align bottom
            line-height 130%
        .changes
            display flex
            justify-content space-between
            span
                font-size 12px
                color #838383
                margin-right 6px
                display inline-flex
                align-items center
    .detail
        padding 10px
        background-color #fff
        .content
            margin 0 10px
            font-size 14px
    .reply
        .head
            padding 10px
            background-color #f6f6f6
            font-size 14px
        .cell
            padding 10px
            background-color #fff
            font-size 14px
            display flex
            justify-content space-between
            align-items flex-start
            &:not(:first-child)
                border-top 1px solid #f0f0f0
            .avatar
                margin 12px 10px 0
            .details
                flex 1
                display flex
                flex-direction column
                .info
                    display flex
                    justify-content space-between
                    align-items center
                    .left
                        display flex
                        align-items center
                        & > *
                            padding-right 10px
                        .name
                            font-weight 700
                    .ups
                        font-size 14px
            .content
                width 100%
</style>

<style>
    @import "../../assets/markdown-github.css";
</style>
