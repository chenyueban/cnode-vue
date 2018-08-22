<template>
    <div class="markdown">
        <Card :title="title" icon="md-add">
            <a href="javascript:" slot="extra" @click="previewToggle">
                <Icon :type="previewVisible ? 'md-eye-off' : 'md-eye'" size="20"></Icon>
            </a>
            <slot name="header"></slot>
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
                @click="handleSubmit"
            >
                提交
            </Button>
        </Card>
    </div>
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
  props: {
    title: {
      type: String,
      required: true,
    },
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
    handleSubmit() {
      if (!this.input) {
        alert('请添加主题内容');
        return;
      }
      this.$emit('submit', this.input);
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
