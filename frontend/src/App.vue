<template>
    <header>
        <Navbar />
    </header>
    <router-view></router-view>
</template>

<script setup lang="ts">
import './assets/base.css'
import Navbar from './components/base/Navbar.vue';
</script>

<style scoped>
.footer {
    text-align: center;
    padding: 38px 0;
    color: #828282;
}

.footer.inside {
    position: absolute;
    bottom: 0;
    width: 100%;
}
</style>
