<template>
    <div class="topics">
        <Markdown
            title="发布话题"
            @submit="handleSubmit"
        >
            <div slot="header">
                请选择版块:
                <Select v-model="tab" size="default" :transfer="false" style="width: 260px">
                    <Option
                        v-for="item in tabList"
                        :value="item.value"
                        :key="item.value"
                    >
                        {{ item.label }}
                    </Option>
                </Select>
                <Input
                    v-model="title"
                    :maxlength="50"
                    placeholder="标题字数10字以上"
                    size="default"
                    style="margin: 10px 0"
                />
            </div>
        </Markdown>
    </div>
</template>

<script>
import { Input, Select, Option } from 'iview';
import Markdown from '@/components/Markdown';

export default {
  name: 'CreateTopic',
  components: {
    Markdown,
    Input,
    Select,
    Option,
  },
  data() {
    return {
      tabList: [
        { label: '分享', value: 'share' },
        { label: '问答', value: 'ask' },
        { label: '招聘', value: 'job' },
        { label: '客户端测试', value: 'dev' },
      ],
      tab: '',
      title: '',
    };
  },
  methods: {
    async handleSubmit(content) {
      try {
        if (!this.tab) {
          alert('请选择版块');
          return;
        }
        if (this.title.length < 10) {
          alert('标题字数10字以上');
          return;
        }
        const result = await this.$api.postTopic(
          this.$store.state.accesstoken,
          this.tab,
          this.title,
          content,
        );
        if (result.success) {
          this.$router.push({ name: 'topic', params: { id: result.topic_id } });
        } else {
          console.log(result);
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped lang="stylus">
</style>
