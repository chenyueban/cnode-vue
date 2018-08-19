<template>
    <div
        id="content"
        class="article"
        :class="$route.params.username && 'mains'"
    >
        <div class="head" v-if="post">
            <div class="title">
                <Put :data="post"/>
                {{ post.title }}
            </div>
            <div class="changes">
                <span>发布于<Time :time="post.create_at" /></span>
                <span>作者 {{ post.author.loginname }}</span>
                <span>{{ post.visit_count }} 次浏览</span>
                <span>来自 {{ post.tab | formatTab }}</span>
            </div>
        </div>
        <div class="detail" v-if="post">
            <div class="content" v-html="post.content"></div>
        </div>
        <div class="reply" v-if="post">
            <div class="head">{{ post.reply_count }} 回复</div>
            <div class="cell" v-for="(user, index) in post.replies" :key="user.id" :id="user.id">
                <div class="avatar">
                    <img :src="user.author.avatar_url" :alt="user.author.loginname">
                </div>
                <div class="details">
                    <div class="info">
                        <div class="left">
                            <div class="name">{{ user.author.loginname }}</div>
                            <a :href="`#${user.id}`">
                                <span class="index">{{ index + 1 }}楼</span>
                                <Time class="time" :time="user.create_at"/>
                            </a>
                        </div>
                        <Button type="text" class="ups">
                            <Icon type="ios-thumbs-up" />
                            <span>{{ user.ups.length }}</span>
                        </Button>
                    </div>
                    <div class="content" v-html="user.content"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Time, Icon, Button } from 'iview';
import Put from '@/components/Put';

export default {
  name: 'Article',
  components: {
    Time,
    Icon,
    Button,
    Put,
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
  methods: {
    async getTopic(id) {
      try {
        const result = await this.$api.getTopic({ id });
        document.title = result.data.title;
        this.post = result.data;
      } catch (e) {
        this.$Message.error(e);
      }
    },
  },
  mounted() {
    this.getTopic(this.$route.params.id);
  },
};
</script>

<style scoped lang="stylus">
.article
    border-radius 4px
    overflow hidden
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
            span
                font-size 12px
                color #838383
                margin-right 3px
                &::before
                    content '• '
    .detail
        padding 10px
        background-color #fff
        border-top 1px solid #e5e5e5
        .content
            margin 0 10px
            font-size 14px
    .reply
        margin-top 15px
        .head
            padding 10px
            background-color #f6f6f6
            font-size 14px
        .cell
            padding 10px
            background-color #fff
            border-top 1px solid #f0f0f0
            font-size 14px
            display flex
            justify-content space-between
            align-items center
            .avatar
                width 30px
                border-radius 5px
                overflow hidden
                margin 0 10px
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
                        a
                            .time
                                &::before
                                    content: ' • '
                    .ups
                        font-size 14px
            .content
                width 100%
.mains
    width calc(100% - 300px)
    float left
</style>

<style>
    @import "../../assets/markdown-github.css";
</style>
