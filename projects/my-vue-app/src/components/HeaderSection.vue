<script setup>
import { ref } from 'vue';
import vueLogo from '../assets/vue.svg';

const locationPrimary = ref(`https://maps.app.goo.gl/Q3pP1HzDSEdKv1Zr8`);
const siteUrl = ref(`hassanbiswas.github.io`);
const urlMessenger = ref(`https://m.me/hassanbiswas.github.io`);
</script>

<template>
    <header className="w-full text-sm" id="header">
        <div className="flex flex-nowrap gap-6 justify-between px-6 py-2 mx-auto max-w-[1024px]">
            <a aria-label="Messenger" :href="urlMessenger" className="text-lg font-bold">webDev</a>

            <nav className="flex items-center justify-center gap-4" id="header-nav-list">
                <a className="" href="#">Home</a>
                <a className="" href="">About</a>
                <a className="" href="">Services</a>
                <a className="" href="">Contact</a>
            </nav>
        </div>
    </header>
</template>

<style scoped></style>
