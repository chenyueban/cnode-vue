<template>
    <div class="login">
        <Card title="登录" icon="ios-glasses">
            <a href="https://cnodejs.org/setting" slot="extra">获取Access Token?</a>
            <Input size="default" autofocus v-model="accesstoken" @on-enter="login">
                <Button
                    size="default"
                    slot="append"
                    icon="ios-paper-plane"
                    @click="login"
                ></Button>
            </Input>
        </Card>
    </div>
</template>

<script>
import { Card, Input, Button } from 'iview';

export default {
  name: 'Login',
  components: {
    Card,
    Input,
    Button,
  },
  data() {
    return {
      accesstoken: '44eb5a69-b322-42f2-adc4-8b1e33d4a21d',
    };
  },
  methods: {
    async login() {
      try {
        const result = await this.$store.dispatch('login', this.accesstoken);
        if (result.success) this.$router.push('/');
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>

<style scoped lang="stylus">
.login
    width 600px
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -150%)
</style>
