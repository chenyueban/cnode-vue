<template>
    <div class="header">
        <Menu mode="horizontal" theme="dark" active-name="1" @on-select="onSelect">
            <MenuItem name="logo" class="logo" to="/">
                <img src="@/assets/cnodejs_light.svg" alt="cnode">
            </MenuItem>
            <div class="group">
                <MenuItem name="index" to="/">
                    首页
                </MenuItem>
                <MenuItem v-if="!$store.state.userinfo" name="login" to="/login">
                    登录
                </MenuItem>
                <Submenu name="user" v-if="$store.state.userinfo">
                    <template slot="title">
                        <Icon size="18" type="md-contact" />
                    </template>
                    <MenuItem name="message" to="/message">
                        <Badge :count="unreadCount" dot>
                            未读消息
                        </Badge>
                    </MenuItem>
                    <MenuItem name="center" :to="`/user/${$store.state.userinfo.loginname}`">
                        个人中心
                    </MenuItem>
                    <MenuItem name="logout">
                        注销
                    </MenuItem>
                </Submenu>
            </div>
        </Menu>
    </div>
</template>

<script>
import { Menu, MenuItem, Submenu, Badge, Icon } from 'iview';

export default {
  name: 'Header',
  components: {
    Menu,
    MenuItem,
    Submenu,
    Badge,
    Icon,
  },
  data() {
    return {
      unreadCount: 0,
    };
  },
  methods: {
    onSelect(name) {
      switch (name) {
        case 'logout':
          this.logout();
          break;
        default:
          break;
      }
    },
    async getUnreadCount(accesstoken) {
      try {
        const result = await this.$api.getUnreadCount(accesstoken);
        if (result.success) this.unreadCount = result.data;
      } catch (e) {
        console.log(e);
      }
    },
    async login(accesstoken) {
      try {
        await this.$store.dispatch('login', accesstoken);
      } catch (e) {
        console.log(e);
      }
    },
    async logout() {
      try {
        await this.$store.dispatch('logout');
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    const { accesstoken, userinfo } = this.$store.state;
    if (accesstoken && userinfo) {
      this.getUnreadCount(accesstoken);
    }

    // 检查 localStorage 内有没有存的 accesstoken 有就登录
    const accesstokenLocal = window.localStorage.getItem('accesstoken');
    if (accesstokenLocal && !accesstoken) this.login(accesstokenLocal);
  },
};
</script>

<style scoped lang="stylus">
    .header
        position sticky
        top 0
        z-index 100
        & > ul
            display flex
            justify-content space-between
            align-items center
            padding 0 5%
        .logo
            width 160px
</style>
