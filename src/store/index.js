import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import env from '@/env.json'

axios.defaults.headers.common['Authorization'] = `Bearer ${env.GITLAB_ACCESS_TOKEN}`;

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiBaseUrl: "https://gitlab.com/api/graphql",
    isLoadingMore: false,
    form: {
      data: [],
      usersList: [],
      pageInfo: {},
    },
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
      if (state.isLoadingMore) {
        const list = state.form.usersList;
        state.form.usersList.push.apply(list, payload);
      } else {
        state.form.usersList = payload;
      }
    },
    setPageInfo(state, payload) {
      if (payload) {
        state.form.pageInfo = payload;
      }
    }
  },
  actions: {
    async getUsersList({ state, commit }, data = { search: "", limit: 10, after: "", isLoadingMore: false }) {
      state.isLoadingMore = data.isLoadingMore;
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
