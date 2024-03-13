<template>
    <TheModal @close="closeMoal">
        <div class="postDetails">
            <img class="postImage" src="../assets/test.jpg" alt="" />
            <div class="postMeta">
                <div class="author">
                    <TheAvatar :src="post.user?.avatar" />
                    <span> {{ user.name }}</span>
                </div>
                <pre class="postDesc">{{ post.description }}</pre>
                <div class="comments">
                    <div class="comment" v-for="n in 10">
                        <TheAvatar />
                        <span class="user">機器人一號</span>
                        <span class="commentDate">03/04</span>
                        <p class="commentContent">Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
                <div class="actions">
                    <PostActions :likes="post.liked_bies" :comments="post.comments" :favors="post.favored_bies"
                        :likedByMe="post.likedByMe" :favoredByMe="post.favoredByMe" @likeClick="toggleLike(post.id)"
                        @favorClick="toggleFavor(post.id)" @commentsClick="showPostDetails(post.id)" />
                    <span class="postPubDate">{{ dateToRelative(post.publishedAt) }}</span>
                    <input type="text" name="comment" id="" class="commentInput" placeholder="留言" />
                    <button @click="addComment" class="commentPubBtn">
                        確定
                    </button>
                </div>
            </div>
        </div>
    </TheModal>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import TheAvatar from "../components/base/Avatar.vue";
import PostActions from "./PostActions.vue";
import TheModal from "./TheModal.vue";
import { usePostStore } from '../store/post/index.js';
import { useMainStore } from '../store/index.js';
import { dateToRelative } from "../utils/date";



const user = ref({});
const postStore = usePostStore();
const mainStore = useMainStore();
const content = ref("");
const post = ref(postStore.postDetails);
const comments = ref([]);

const toggleLike = (id) => {
    postStore.toggleLike(id);
};

const toggleFavor = (id) => {
    postStore.toggleFavor(id);
};

const closeMoal = () => {
    mainStore.changeShowPostDetails(false);
}

// 添加评论的方法
const addComment = () => {
    postStore.addComment({ content: content.value, postId: postStore.currentId });
    content.value = '';
};

onMounted(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        user.value = JSON.parse(storedUser);
    }
});

</script>>

<style scoped>
.postDetails {
    display: grid;
    grid-template-columns: 1fr minmax(auto, 300px);
    grid-template-rows: minmax(0, 1fr);
    width: 80vw;
    height: 80vh;
}

.postImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.postMeta {
    padding: 24px;
    padding-top: 36px;
    display: grid;
    align-items: start;
    grid-template-rows: max-content max-content 1fr max-content;
    max-height: 100%;
    height: 100%;
}

.author {
    display: flex;
    align-items: center;
    gap: 10px;
}

.postDesc {
    width: 100%;
    white-space: pre-wrap;
    margin-top: 24px;
    margin-bottom: 24px;
}

.comments {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    grid-gap: 28px;
    align-items: start;
    overflow-y: auto;
    height: 100%;
}

.comment {
    display: grid;
    grid-template-areas:
        "avatar name date"
        "comment comment comment";
    grid-template-columns: 34px 1fr 1fr;
    align-items: center;
    column-gap: 10px;
    row-gap: 14px;
}

.commentDate {
    grid-area: date;
    justify-self: end;
    color: #a7a7a7;
}

.commentContent {
    grid-area: comment;
}

.actions {
    border-top: 1px solid #eaeaea;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    margin: 20px -24px 0px -24px;
    padding: 20px 24px 0 24px;
    row-gap: 16px;
}

.postActions> :deep(svg) {
    transform: scale(0.8125);
}

.postPubDate {
    color: #9f9f9f;
    grid-column: 2 / 6;
    justify-self: end;
    font-size: 14px;
}

.commentInput {
    background: #f7f7f7;
    border-radius: 16px;
    border: none;
    grid-column: 1 / 4;
}

.commentInput::placeholder {
    color: #b9b9b9;
    border: none;
}

.commentPubBtn {
    color: #1da0ff;
    border: none;
    background: none;
    font-size: 16px;
    margin-left: 20px;
    grid-column: 4 / 6;
}


.postDetails {
    display: grid;
    grid-template-columns: 1fr minmax(auto, 300px);
    grid-template-rows: minmax(0, 1fr);
    width: 80vw;
    height: 80vh;
}

.postImage {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.postMeta {
    padding: 24px;
    padding-top: 36px;
    display: grid;
    align-items: start;
    grid-template-rows: max-content max-content 1fr max-content;
    max-height: 100%;
    height: 100%;
}

.author {
    display: flex;
    align-items: center;
    gap: 10px;
}

.postDesc {
    width: 100%;
    white-space: pre-wrap;
    margin-top: 24px;
}

.comments {
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: max-content;
    grid-gap: 28px;
    align-items: start;
    overflow-y: auto;
    height: 100%;
}

.comment {
    display: grid;
    grid-template-areas:
        "avatar name date"
        "comment comment comment";
    grid-template-columns: 34px 1fr 1fr;
    align-items: center;
    column-gap: 10px;
    row-gap: 14px;
}

.commentDate {
    grid-area: date;
    justify-self: end;
    color: #a7a7a7;
}

.commentContent {
    grid-area: comment;
}

.actions {
    border-top: 1px solid #eaeaea;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    margin: 20px -24px 0px -24px;
    padding: 20px 24px 0 24px;
    row-gap: 16px;
}

.postActions> :deep(svg) {
    width: 32px;
    height: 32px;
    transform: scale(0.8125);
    grid-row: 1 / 2;
    stroke: black;
    cursor: pointer;
}

.postPubDate {
    color: #9f9f9f;
    grid-column: 2 / 6;
    justify-self: end;
    font-size: 14px;
}

.commentInput {
    background: #f7f7f7;
    border-radius: 16px;
    border: none;
    grid-column: 1 / 4;
}

.commentInput::placeholder {
    color: #b9b9b9;
    border: none;
}

.commentPubBtn {
    color: #1da0ff;
    border: none;
    background: none;
    font-size: 16px;
    margin-left: 20px;
    grid-column: 4 / 6;
}
</style>