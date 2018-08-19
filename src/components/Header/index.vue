<template>
    <div class="header">
        <Menu mode="horizontal" theme="dark" active-name="1">
            <MenuItem name="logo" class="logo" to="/">
                <img src="@/assets/cnodejs_light.svg" alt="cnode">
            </MenuItem>
            <div class="group">
                <MenuItem name="index" to="/">
                    首页
                </MenuItem>
                <MenuItem name="login" to="/login">
                    登录
                </MenuItem>
                <MenuItem name="signin" to="/signin">
                    注册
                </MenuItem>
            </div>
        </Menu>
    </div>
</template>

<script>
import { Menu, MenuItem } from 'iview';

export default {
  name: 'Header',
  components: { Menu, MenuItem },
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
