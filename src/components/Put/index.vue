<template>
    <Tag :color="formatTab(data).color">{{ formatTab(data).label }}</Tag>
</template>

<script>
import { Tag } from 'iview';

export default {
  name: 'Put',
  props: ['data'],
  components: {
    Tag,
  },
  methods: {
    formatTab(data) {
      if (data.good) {
        return {
          color: 'gold',
          label: '精华',
        };
      } else if (data.top) {
        return {
          color: 'green',
          label: '置顶',
        };
      } else if (data.tab === 'ask') {
        return {
          color: 'purple',
          label: '问答',
        };
      } else if (data.tab === 'share') {
        return {
          color: 'blue',
          label: '分享',
        };
      } else if (data.tab === 'job') {
        return {
          color: 'magenta',
          label: '招聘',
        };
      }
      return {
        color: 'default',
        label: '测试',
      };
    },
  },

};
</script>

<style scoped lang="stylus">
    .put
        width 32px
        padding 2px 4px
        border-radius 3px
        font-size 12px
        line-height 1.2
        display inline-flex
</style>
