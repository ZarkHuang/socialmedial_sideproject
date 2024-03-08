<template>
    <div class="postItem">
        <img v-if="dogImageUrl" :src="dogImageUrl" width="100%" height="100%" style="background-color: #eee;"
            alt="Random Dog">
        <div class="postInfo">
            <div class="postMeta">
                <Avatar />
                <span>Cheng Yu Fon</span>
                <span class="postPubDate">12小時前發布</span>
                <PostActions />
            </div>
        </div>

        <div class="postDesc">
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum quam debitis omnis nesciunt,
                adipisci
                natus iusto vero odit culpa aperiam temporibus eaque iste cupiditate esse repellat, unde fuga!
                Dicta
                facilis distinctio aperiam earum est! Quia, ad, at itaque assumenda sapiente animi nulla vitae
                quos
                veniam illum doloribus dolores dicta autem?</p>
        </div>

    </div>
</template>

<script setup lang="ts">

import { onMounted, ref } from 'vue';
import PostActions from '../components/PostActions.vue';
import Avatar from '../components/base/Avatar.vue';


const dogImageUrl = ref(null)
onMounted(async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random')
    // console.log(response)
    const data = await response.json()
    dogImageUrl.value = data.message
})

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

.postMeta .avatar {
    grid-area: avatar;
}

.postMeta .postPubDate {
    grid-area: pubDate;
    color: #9f9f9f;
    font-size: 14px;
}

.postDesc {
    margin-top: 28px;
    white-space: pre-line;
    padding: 0 24px;
}

.postActions {
    grid-area: actions;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;
    justify-self: end;
    column-gap: 16px;
    row-gap: 4px;
}

.postActions>svg {
    width: 32px;
    height: 32px;
    grid-row: 1 / 2;
    cursor: pointer;
}

.postActions>span {
    font-size: 14px;
}

.postActions {
    grid-area: actions;
    justify-self: end;
}
</style>