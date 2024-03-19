import { defineStore } from "pinia";
import {
  createPost,
  loadPosts,
  likePost,
  favorPost,
  loadPostsLikedOrFavoredByMe,
} from "../../apis/post";

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

        post.liked_bies = updatedStatus
          ? post.liked_bies + 1
          : Math.max(post.liked_bies - 1, 0);
        this.list = [...this.list];
      }
    },
    async toggleFavor(id) {
      const updatedStatus = await favorPost(id);
      const postIndex = this.list.findIndex((post) => post.id === id);
      if (postIndex !== -1) {
        const post = this.list[postIndex];
        post.favoredByMe = updatedStatus;
        post.favored_bies = updatedStatus
          ? post.favored_bies + 1
          : Math.max(post.favored_bies - 1, 0);
        this.list = [...this.list];
      }
    },
    async loadLikedPosts() {
      this.liked = await loadPostsLikedOrFavoredByMe("likes");
    },
    async loadFavoredPosts() {
      this.favored = await loadPostsLikedOrFavoredByMe("favors");
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
