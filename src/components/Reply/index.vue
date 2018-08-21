<template>
    <Card title="添加回复" icon="md-add">
        <a href="javascript:" slot="extra" @click="previewToggle">
            <Icon :type="previewVisible ? 'md-eye-off' : 'md-eye'" size="20"></Icon>
        </a>
        <div class="editor">
            <textarea class="code" v-model="input"></textarea>
            <div class="preview" v-show="previewVisible" v-html="compiledMarkdown"></div>
        </div>
        <Button
            type="info"
            size="default"
            icon="md-jet"
            style="margin-top: 10px"
            long
            @click="handleReply"
        >
            回复
        </Button>
    </Card>
</template>

<script>
import { Card, Icon, Button } from 'iview';
import marked from 'marked';

export default {
  name: 'Markdown',
  components: {
    Card,
    Icon,
    Button,
  },
  data() {
    return {
      input: '',
      previewVisible: false,
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input, { sanitize: true });
    },
  },
  methods: {
    previewToggle() {
      this.previewVisible = !this.previewVisible;
    },
    async handleReply() {
      try {
        const result = await this.$api.postReplies(
          this.$route.params.id,
          this.$store.state.accesstoken,
          this.input,
        );
        if (result.success) this.$router.go(0);
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped lang="stylus">
    .editor
        height 300px
        display flex
        justify-content space-between
        align-items center

    .code, .preview
        height 100%
        flex 1
        vertical-align top
        padding 0 15px
    .code
        border none
        resize none
        outline none
        background-color #f6f6f6
        font-size 14px
        font-family 'Monaco', courier, monospace
        padding 15px

    code {
        color: #f66;
    }
</style>
