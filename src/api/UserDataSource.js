import DataSourceAPI from './DataSourceAPI';
import store from "@/store/index";

export default class UserDataSource extends DataSourceAPI {

  async search(term, isLoadingMore = false) {
    if (isLoadingMore && !this.hasMore) {
      return;
    }

    await store.dispatch('getUsersList', {
      search: term, limit: 10, after: this.endCursor
    });

    const pageInfo = store.state.form.pageInfo
    this.endCursor = pageInfo?.endCursor || ""
    this.hasMore = pageInfo?.hasNextPage || false

    this.items = store.state.form?.usersList || []
  }
}