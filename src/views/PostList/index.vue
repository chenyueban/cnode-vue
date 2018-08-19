<template>
    <div class="postlist">
        <Card icon="ios-options">
            <div class="head" slot="title">
                <ButtonGroup size="default">
                    <Button size="default" @click="getTopics(1, 'all')">全部</Button>
                    <Button size="default" @click="getTopics(1, 'good')">精华</Button>
                    <Button size="default" @click="getTopics(1, 'share')">分享</Button>
                    <Button size="default" @click="getTopics(1, 'ask')">问答</Button>
                    <Button size="default" @click="getTopics(1, 'job')">招聘</Button>
                    <Button size="default" @click="getTopics(1, 'dev')">客户端测试</Button>
                </ButtonGroup>
            </div>
            <div class="list" v-if="datas">
                <Cell v-for="data in datas" :datas="data" :key="data.in"/>
            </div>
            <Page
                class-name="page"
                :total="1000"
                size="small"
                show-elevator
                :transfer="false"
                @on-change="getTopics"
            />
        </Card>
    </div>
</template>

<script>
import { Time, Page, Card, ButtonGroup, Button } from 'iview';
import Cell from '@/components/Cell';

export default {
  name: 'PostList',
  components: {
    Time,
    Page,
    Cell,
    Card,
    ButtonGroup,
    Button,
  },
  data() {
    return {
      isLoading: false,
      datas: null,
      current: 1,
    };
  },
  methods: {
    async getTopics(page = 1, tab = 'all') {
      try {
        const result = await this.$api.getTopics({
          limit: 20,
          page,
          tab,
        });
        this.datas = result.data;
      } catch (e) {
        this.$Message.error(e);
      }
    },
  },
  mounted() {
    this.getTopics(this.current);
  },
};
</script>

<style scoped lang="stylus">
    .postlist
        .page
            margin-top 10px
</style>
