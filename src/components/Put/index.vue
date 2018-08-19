<template>
    <div :class="['put', formatTab(data).class]">
        {{ formatTab(data).label }}
    </div>
</template>

<script>
export default {
  name: 'Put',
  props: ['data'],
  methods: {
    formatTab(data) {
      if (data.good) {
        return {
          class: 'put-good',
          label: '精华',
        };
      } else if (data.top) {
        return {
          class: 'put-top',
          label: '置顶',
        };
      } else if (data.tab === 'ask') {
        return {
          class: 'put-ask',
          label: '问答',
        };
      } else if (data.tab === 'share') {
        return {
          class: 'put-share',
          label: '分享',
        };
      } else if (data.tab === 'job') {
        return {
          class: 'put-job',
          label: '招聘',
        };
      }
      return {
        class: 'put-test',
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
        &.put-good, &.put-top
            background-color #80bd01
            color #fff
        &.put-ask, &.put-share, &.put-job, &.put-test
            background-color #e5e5e5
            color #999
</style>
