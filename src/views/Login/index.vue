<template>
    <div class="login">
        <Card title="登录" icon="ios-glasses">
            <a href="javascript:" slot="extra" @click="getHelp">获取Access Token?</a>
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
      accesstoken: '',
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
    getHelp() {
      alert('PC端登录 cnodejs.org 后, 在设置页面可找到 Access Token');
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
