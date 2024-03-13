// src/stores/commentStore.ts
import { defineStore } from "pinia";
import { createComment, loadComments } from "../apis/comment";

export const useCommentStore = defineStore("comment", {
  state: () => ({
    list: [],
  }),
  actions: {
    async addComment(content, postId) {
      await createComment(content, postId);
      this.loadAllComments(postId);
      dispatch("loadAllComments", postId);
      commit("increaseCommentCount", postId);
    },
    async loadAllComments(postId) {
      const comments = await loadComments(postId);
      this.list = comments;
    },
  },
});
