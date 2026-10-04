<script setup>
import { ref } from 'vue';
import heroImg from '../assets/hero.png';

// get essential favicon by domain name
let getFavicon = (domain = `hassanbiswas.github.io`, size = 24) =>
    `https://www.google.com/s2/favicons?domain=${domain}&sz=${size}`;

const faviconFacebook = getFavicon(`facebook.com`),
    faviconInstagram = getFavicon(`instagram.com`),
    faviconThreads = getFavicon(`threads.com`),
    faviconX = getFavicon(`x.com`);
const urlReviews = `https://g.page/r/CbEdPSgyd93iEBI/review`;
</script>

<template>
    <section
        id="hero"
        className="bg-brand-primary text-white flex flex-col gap-5 justify-center items-center px-6 min-h-screen overflow-x-clip py-20"
    >
        <div className="relative p-0 aspect-square logo-wrapper brand-logo-wrapper w-fit">
            <svg
                data-visible
                className="logo brand-logo spin3DInfinite"
                fill="none"
                height="192"
                viewbox="0 0 192 192"
                width="192"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0 0h192v192H0z"
                    fill="transparent"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
                <path
                    d="M65.417 63.247h-.512l-.323-.33.252.099.173-.04c-.098.004-33.414-31.814-33.414-31.814h63.814V31c35.9 0 65 29.101 65 65s-29.1 65-65 65v-.735l-30.68-31.213c-1.723-1.43-9.063-8.893-16.258-16.173-8.185-8.29-16.325-16.612-16.325-16.612v-33.02h32.761l30.502 30.991v3.086c-8.395-.277-30.833-1.134-30.833-1.134-.189-.181.448 29.206.526 32.749h30.307v-.435c17.949 0 32.5-14.548 32.5-32.5s-14.551-32.5-32.5-32.5v-.475H64.865zm33.11 34.162c0 .013-1.19-.021-3.12-.088v-3.085z"
                    fill="transparent"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="3"
                ></path>
            </svg>
        </div>

        <span className="tag flex gap-1.5 items-center justify-center"
            ><i className=" rounded-[100dvw] w-3.5 h-3.5 bg-green-400"></i> Available for
            projects</span
        >
        <h1
            data-animate="scaleI"
            className="font-extrabold text-center splitWord text-4xl max-w-[640px]"
            id="brand-title"
        >
            Crafting digital experiences that inspire, connect, and grow brands worldwide
        </h1>
        <p className="text-center lineClamp splitText">✼ Elevating Modern Digital Experiences.</p>
        <div className="flex justify-center items-center gap-4">
            <a className="btn bg-black splitText" href="/resume">Resume </a>
            <a className="btn splitText " href="/#contact">Contact</a>
        </div>

        <div className="flex justify-center items-center componentReviews gap-3">
            <ul className="list-none flex flex-nowrap  gap-0">
                <li className="bg-black  rounded-[100dvw] p-1">
                    <img className=" size-6" :src="faviconFacebook" />
                </li>
                <li className="bg-black  rounded-[100dvw] p-1">
                    <img className=" size-6" :src="faviconInstagram" />
                </li>
                <li className="bg-black  rounded-[100dvw] p-1">
                    <img className=" size-6" :src="faviconThreads" />
                </li>
                <li className="bg-black  rounded-[100dvw] p-1">
                    <img className=" size-6" :src="faviconX" />
                </li>
                <li className="bg-black rounded-[100dvw] p-1 ">10+</li>
            </ul>
            <div className="flex flex-col justify-start gap-1 ">
                <b className="txt-primary ">★★★★★ • 4.9/5</b>
                <p>25+ Projects &amp; 15+ Reviews</p>
            </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 max-w-[375px]">
            <span className="tag">HTML</span>
            <span className="tag">CSS</span>
            <span className="tag">JavaScript</span>
            <span className="tag">VScode</span>
            <span className="tag">Bootstrap</span>
            <span className="tag">Tailwind</span>
            <span className="tag">Vue</span>
            <span className="tag">Figma</span>
            <span className="tag">Webflow</span>
            <span className="tag">Framer</span>
            <span className="tag">GitHub</span>
        </div>
    </section>
</template>

<style scoped>
#hero {
    color-scheme: dark;
}
</style>
