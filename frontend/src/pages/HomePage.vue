<template>
    <div>
        <PostList>
            <PostItem v-for="n in 10" />
        </PostList>
        <!-- <PostDetails /> -->
        <!-- <PostUpload /> -->
    </div>
</template>

<script setup lang="ts">
import PostDetails from '../components/PostDetails.vue';
import PostUpload from '../components/PostUpload.vue';
import PostList from '../components/PostList.vue';
import PostItem from '../components/PostItem.vue';

</script>

<style scoped></style>