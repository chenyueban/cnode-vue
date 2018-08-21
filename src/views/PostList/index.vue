<template>
    <div class="postlist">
        <Card icon="ios-options">
            <div class="head" slot="title">
                <Tab :page="current" :tab="$route.query.tab || 'all'" @changetab="routerTo"/>
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
                @on-change="routerTo"
            />
        </Card>
    </div>
</template>

<script>
import { Time, Page, Card } from 'iview';
import Cell from '@/components/Cell';
import Tab from '@/components/Tab';

export default {
  name: 'PostList',
  components: {
    Time,
    Page,
    Cell,
    Card,
    Tab,
  },
  data() {
    return {
      isLoading: false,
      datas: null,
      current: 1,
    };
  },
  methods: {
    routerTo(page = 1, tab = this.$route.query.tab || 'all') {
      this.$router.push({ path: '/', query: { tab, page } });
    },
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
  watch: {
    $route() {
      const { tab, page } = this.$route.query;
      if (tab && page) this.getTopics(page, tab);
    },
  },
  mounted() {
    const { tab, page } = this.$route.query;
    if (tab && page) this.getTopics(page, tab);
    else this.getTopics(this.current);
  },
};
</script>

<style scoped lang="stylus">
    .postlist
        .page
            margin-top 10px
</style>
