<template>
    <div class="postItem">
        <img :src="post.image" @click="showPostDetails(post.id)" alt="" width="100%" height="100%"
            style="background: #eee" />
        <div class="postInfo">
            <div class="postMeta">
                <Avatar :src="post?.user?.avatar" />
                <span> {{ user.name }}</span>
                <span class="postPubDate">{{ dateToRelative(post.publishedAt) }}</span>
                <PostActions :likes="post.liked_bies" :comments="post.comments" :favors="post.favored_bies"
                    :likedByMe="post.likedByMe" :favoredByMe="post.favoredByMe" @likeClick="toggleLike(post.id)"
                    @favorClick="toggleFavor(post.id)" @commentsClick="showPostDetails(post.id)" />
            </div>
            <div class="postDesc">
                <p>{{ post.description }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import PostActions from '../components/PostActions.vue';
import Avatar from '../components/base/Avatar.vue';
import { dateToRelative } from '../utils/date.js'
import { usePostStore } from '../store/post/index.js'
import { useMainStore } from '../store/index.js'
import { ref, onMounted } from 'vue'

const props = defineProps({
    post: {
        type: Object,
        default: () => ({}),
    },
});

const user = ref({});
const mainStore = useMainStore()
const postStore = usePostStore()


const toggleLike = (id) => {
    postStore.toggleLike(id)
}

const toggleFavor = (id) => {
    postStore.toggleFavor(id)
}

const showPostDetails = (id) => {
    postStore.setCurrentId(id);
    mainStore.changeShowPostDetails(true);
}


</script>
<style scoped>
.postItem {
    box-shadow: 0px 12px 24px rgba(0, 0, 0, 0.08);
    border-radius: 8px;
}

.postInfo {
    padding: 24px;
}

.postItem>img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    background: #eee;
    cursor: pointer;
}

.postMeta {
    display: grid;
    grid-template-areas:
        "avatar name actions"
        "pubDate pubDate actions";
    grid-template-columns: 42px 1fr 3fr;
    row-gap: 6px;
}

.postMeta span {
    display: flex;
    align-items: center;
}

.postMeta .avatar {
    grid-area: avatar;
}

.postMeta .postPubDate {
    grid-area: pubDate;
    color: #9f9f9f;
    font-size: 14px;
}

.postActions {
    grid-area: actions;
    justify-self: end;
}

.postDesc {
    margin-top: 28px;
    white-space: pre-line;
}
</style>
