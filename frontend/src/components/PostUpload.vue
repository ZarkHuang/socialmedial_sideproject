<template>
    <TheModal>
        <div class="postUpload">
            <label class="upload">
                <!-- <img v-if="imageObjUrl" :src="imageObjUrl" class="preview" /> -->
                <img src="../assets/imageIcon.svg" class="preview" alt="">
                <!-- <TheIcon icon="posts" /> -->
                <input type="file" accept="image/*" class="fileChooser" />
            </label>
            <div class="postContent">
                <textarea placeholder="say something....." class="postContentInput"></textarea>
                <TheButton class="pubBtn">確定</TheButton>
            </div>
        </div>
    </TheModal>
</template>


<script setup>
import TheModal from "./TheModal.vue"
import TheIcon from "./TheIcon.vue"
import TheButton from "./TheButton.vue";
</script>


<style scoped>
.postUpload {
    width: 50vw;
    height: 70vh;
    display: grid;
    grid-template-rows: 4fr 1fr;
}

.preview {
    width: 50%;
    height: 50%;
    object-fit: cover;
    min-height: 0;
}

.upload {
    display: grid;
    place-items: center;
    cursor: pointer;
    min-height: 0;
}

.upload>svg {
    width: 254px;
    height: 316px;
}

.fileChooser {
    opacity: 0;
    position: absolute;
}

.postContent {
    display: grid;
}

.postContentInput {
    border-bottom: none;
    resize: none;
    padding: 12px 24px;
}

.postContentInput::placeholder {
    color: #757575;
}

.pubBtn {
    align-self: end;
    justify-self: end;
    position: relative;
    right: 24px;
    bottom: 32px;
}
</style>
