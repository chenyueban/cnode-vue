import Vue from 'vue';
import Vuex from 'vuex';
import Service from '@/service';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    accesstoken: null,
    userinfo: null,
    collects: null,
  },
  mutations: {
    login(state, { accesstoken, userinfo }) {
      state.accesstoken = accesstoken;
      state.userinfo = userinfo;
    },
    logout(state) {
      state.accesstoken = null;
      state.userinfo = null;
    },

    getCollects(state, collects) {
      state.collects = collects;
    },
  },
  actions: {
    async login(context, accesstoken) {
      try {
        const result = await Service.postAccessToken(accesstoken);
        context.commit('login', { accesstoken, userinfo: result });
        window.localStorage.setItem('accesstoken', accesstoken);
        return await { success: true, accesstoken, userinfo: result };
      } catch (e) {
        return await { success: false, msg: e };
      }
    },
    async logout(context) {
      try {
        context.commit('logout');
        window.localStorage.removeItem('accesstoken');
        return await { success: true };
      } catch (e) {
        return await { success: false, msg: e };
      }
    },

    async getCollects(context, loginname) {
      try {
        const result = await Service.getCollects(loginname);
        context.commit('getCollects', result.data);
        return await { success: true, collects: result.data };
      } catch (e) {
        return await { success: false, msg: e };
      }
    },
  },
});
