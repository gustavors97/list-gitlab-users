import DataSourceAPI from './DataSourceAPI';
import store from "@/store/index";

export default class UserDataSource extends DataSourceAPI {

  async search(term, isLoadingMore = false) {
    if (isLoadingMore && !this.hasMore || !term) {
      return
    }

    if (!isLoadingMore) {
      this.endCursor = ""
    }

    await store.dispatch('getUsersList', {
      search: term || this.term, limit: 10, after: this.endCursor, isLoadingMore
    });

    const pageInfo = store.state.form.pageInfo
    this.endCursor = pageInfo?.endCursor || ""
    this.hasMore = pageInfo?.hasNextPage || false
    this.term = !term ? term : this.term

    this.items = store.state.form?.usersList || []
  }
}