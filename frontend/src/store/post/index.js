import { defineStore } from "pinia";
import { createPost, loadPosts, likePost, favorPost } from "../../apis/post";

export const usePostStore = defineStore("post", {
  state: () => ({
    list: [],
    searchResult: [],
    currentId: null,
  }),
  actions: {
    async uploadPost(image, description) {
      await createPost(image, description);
      this.loadAllPosts();
    },
    async loadAllPosts() {
      const posts = await loadPosts();
      this.list = posts;
    },
    async toggleLike(id) {
      const updatedStatus = await likePost(id);
      const postIndex = this.list.findIndex((post) => post.id === id);
      if (postIndex !== -1) {
        const post = this.list[postIndex];
        post.likedByMe = updatedStatus;
      }
    },
    async toggleFavor(id) {
      const updatedStatus = await favorPost(id); // 同上，假设这会返回最新的 favored 状态
      const postIndex = this.list.findIndex((post) => post.id === id);
      if (postIndex !== -1) {
        const post = this.list[postIndex];
        post.favoredByMe = updatedStatus; // 更新收藏状态
        // 更新收藏数
        post.favored_bies = updatedStatus
          ? post.favored_bies + 1
          : Math.max(post.favored_bies - 1, 0);
        // 为了触发响应式更新，重新赋值 list
        this.list = [...this.list];
      }
    },
    setCurrentId(id) {
      this.currentId = id;
    },
    async searchPosts(term) {
      const posts = await loadPosts(`filters[description][$contains]=${term}`);
      this.searchResult = posts;
    },
  },
  getters: {
    postDetails: (state) =>
      state.list.find((post) => post.id === state.currentId),
  },
});
