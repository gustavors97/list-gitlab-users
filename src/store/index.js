import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiBaseUrl: "https://gitlab.com/api/graphql",
    form: {
      data: [],
      usersList: [],
      pageInfo: {},
    }
  },
  getters: {
    usersList: (state) => {
      return state.usersList;
    }
  },
  mutations: {
    setData(state, payload) {
      if (payload) {
        state.form.data.push(payload);
      }
    },
    setUsersList(state, payload) {
      if (payload && payload.length > 0) {
        const list = state.form.usersList;
        state.form.usersList.push.apply(list, payload);
      }
    },
    setPageInfo(state, payload) {
      if (payload) {
        state.form.pageInfo = payload;
      }
    }
  },
  actions: {
    async getUsersList({ state, commit }, data = { search: "", limit: 10, after: "" }) {
      try {
        const response = await axios.post(state.apiBaseUrl, {
          query: `{
            users(search: "${data.search}", first: ${data.limit}, after: "${data.after}") {
              edges {
                 node {
                  avatarUrl
                  username
                  name
                  webUrl
                }
              }
              pageInfo {
                endCursor
                hasNextPage
              }
            }
          }`
        });

        commit('setPageInfo', response?.data?.data?.users?.pageInfo);
        commit('setUsersList', response?.data?.data?.users?.edges);

      } catch (error) {
        console.error(
          "store.js - Exception on method getUsersList",
          error
        );
        commit('setUsersList', []);
        commit('setPageInfo', {});
      }
    }
  },
})
