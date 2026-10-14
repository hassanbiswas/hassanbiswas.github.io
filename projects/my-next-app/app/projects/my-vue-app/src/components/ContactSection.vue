<script setup>
import { ref } from 'vue';
import heroImg from '../assets/hero.png';

const count = ref(0);
</script>

<template>
    <section id="contact" className="px-6 py-28 flex flex-col gap-10 items-center justify-center">
        <div className="flex flex-col max-w-3xl">
            <div className="ph-wrapper">
                <h2 data-animate="scaleIn" className="h2 inline font-bold text-4xl">
                    I help ambitious brands stand out through bold design and digital strategies.
                </h2>
                <p data-animate="scaleIn" className="h2 inline font-bold text-4xl opacity-80">
                    Ready to scale your brand with Hassan Biswas?
                </p>
            </div>
        </div>

        <div className="grid md:columns-2 items-start gap-6 w-full max-w-3xl">
            <div className="flex flex-col grow gap-3 justify-start">
                <h3 className="p opacity-80">Languages:</h3>
                <ul className="flex flex-col gap-3 list-none">
                    <li>[01] English</li>
                    <li>[02] Bangla</li>
                    <li>[03] Hindi</li>
                </ul>
            </div>

            <div className="flex flex-col grow gap-3 justify-start">
                <h3 className="p opacity-80">Links:</h3>
                <div className="flex flex-col gap-3 items-start">
                    <a href="">+880 1602 873384</a>
                    <a href="">hassanbiswss.github.io@gmail.com</a>
                    <a href="">Jashore Khulna Bangladesh</a>
                </div>
            </div>
        </div>

        <div className="flex justify-center items-center max-w-3xl flex-wrap gap-6">
            <a href="">❯ Download VCF</a>
            <p className="opacity-80">or connect</p>
            <a
                aria-label="messenger"
                href=""
                className="decoration-0 text-brand-primary font-semibold text-lg"
            >
                Messenger
            </a>
        </div>
    </section>
</template>

<style scoped></style>
