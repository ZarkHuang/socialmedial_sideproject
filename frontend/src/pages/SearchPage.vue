<template>
    <div>
        <h2 class="title">搜尋結果：Gene</h2>
        <PostList>
            <PostItem v-for="n in 10" />
        </PostList>
        <!-- <PostDetails />
        <PostUpload /> -->
    </div>
</template>

<script setup lang="ts">
import PostList from '../components/PostList.vue';
import PostItem from '../components/PostItem.vue';

</script>

<style scoped>
.title {
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 44px;
}
</style>
