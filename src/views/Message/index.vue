<template>
    <div class="message">
        <Card title="新消息" icon="ios-mail" style="margin-bottom: 10px">
        </Card>
        <Card title="过往消息" icon="ios-mail-open">
        </Card>
    </div>
</template>

<script>
import { Card } from 'iview';

export default {
  name: 'Message',
  components: {
    Card,
  },
  methods: {
    async getMessages(accesstoken) {
      try {
        const result = await this.$api.getMessages(accesstoken);
        console.log(result);
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    const { accesstoken, userinfo } = this.$store.state;
    if (accesstoken && userinfo) {
      this.getMessages(accesstoken);
    }
  },
};
</script>

<style scoped>

</style>
