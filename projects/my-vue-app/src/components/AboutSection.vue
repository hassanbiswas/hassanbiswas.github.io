<script setup>
import { ref } from 'vue';
</script>

<template>
    <section
        className="min-h-screen py-28 px-6 flex flex-col justify-center items-center gap-7"
        id="about"
    >
        <div className="max-w-4xl flex flex-col justify-center gap-2">
            <p data-animate="scaleIn" className="text-sm h6">
                Hassan Biswas <i>2001 - {{ new Date().getFullYear() }}</i>
            </p>
            <div className="grid md:columns-2 py-0 gap-2">
                <h2 data-animate="scaleIn" className="text-5xl font-bold h3 splitWord pt-1">
                    Driven by Quality,<br />
                    Precision & Modern Aesthetics
                </h2>
                <div className="flex flex-col gap-2">
                    <p data-animate="scaleIn" className="splitWord">
                        Having earned a <b>Diploma in Computer Science & Technology</b> and received
                        specialized certification from <b>Utshob Technology Ltd</b> at Sheikh Hasina
                        Software Technology Park, I help clients around the globe establish strong
                        digital identities.
                    </p>
                    <a data-visible className="p text-sm splitText" href="#"> ❯ View Story </a>
                </div>
            </div>
        </div>

        <div class="max-w-4xl grid md:columns-2 gap-4">
            <div
                className="flex flex-col gap-4 justify-start shadow p-4 rounded-2xl overflow-clip relative"
            >
                <p className="h6 text-sm"><span className=" h2 text-2xl font-bold">01</span>/7</p>
                <h3 data-animate="scaleIn" className="h1 text-4xl font-bold splitWord py-0 inline">
                    Roots & Passion for Technology
                </h3>
                <p className=" h6 lineClamp splitWord">
                    I born with core values of discipline, continuous learning, and creative
                    problem-solving.
                </p>
                <a data-visible className="splitText text-sm" href="#">View Place ↗</a>
            </div>
            <div
                className="flex flex-col gap-4 justify-start shadow p-4 rounded-2xl overflow-clip relative"
            >
                <p className="h6 text-sm"><span className=" h2 text-2xl font-bold">02</span>/7</p>
                <h3 data-animate="scaleIn" className="h1 text-4xl font-bold splitWord py-0 inline">
                    Secondary School Certificate
                </h3>
                <p className=" h6 lineClamp splitWord">
                    I got SSC of Vocational Education Board, Dhaka on top of Electrical Engineering
                    Fundamentals from <b>Jashore Technical School &amp; College</b>.
                </p>
                <a data-visible className="splitText text-sm" href="#">View College ↗</a>
            </div>
            <div
                className="flex flex-col gap-4 justify-start shadow p-4 rounded-2xl overflow-clip relative"
            >
                <p className="h6 text-sm"><span className=" h2 text-2xl font-bold">03</span>/7</p>
                <h3 data-animate="scaleIn" className="h1 text-4xl font-bold splitWord py-0 inline">
                    Web Design & UI Architecture
                </h3>
                <p className=" h6 lineClamp splitWord">
                    Deep-dived into self-directed UI/UX design, mastering Figma wireframing and
                    frontend logic.
                </p>
                <a data-visible className="splitText text-sm" href="#">View Channels ↗</a>
            </div>
            <div
                className="flex flex-col gap-4 justify-start shadow p-4 rounded-2xl overflow-clip relative"
            >
                <p className="h6 text-sm"><span className=" h2 text-2xl font-bold">04</span>/7</p>
                <h3 data-animate="scaleIn" className="h1 text-4xl font-bold splitWord py-0 inline">
                    Diploma in CS and Technology.
                </h3>
                <p className=" h6 lineClamp splitWord">
                    Formalized technical foundation in software logic, database structures, and
                    system engineering.
                </p>
                <a data-visible className="splitText text-sm" href="#">View Institute ↗</a>
            </div>
            <div
                className="flex flex-col gap-4 justify-start shadow p-4 rounded-2xl overflow-clip relative"
            >
                <p className="h6 text-sm"><span className=" h2 text-2xl font-bold">05</span>/7</p>
                <h3 data-animate="scaleIn" className="h1 text-4xl font-bold splitWord py-0 inline">
                    Utshob Tech Certified & Freelance
                </h3>
                <p className=" h6 lineClamp splitWord">
                    Building high-performing client sites at Sheikh Hasina Software Technology Park
                    and serving international contracts.
                </p>
                <a data-visible className="splitText text-sm" href="#">View Place ↗</a>
            </div>
            <div
                className="flex flex-col gap-4 justify-start shadow p-4 rounded-2xl overflow-clip relative"
            >
                <p className="h6 text-sm"><span className=" h2 text-2xl font-bold">06</span>/7</p>
                <h3 data-animate="scaleIn" className="h1 text-4xl font-bold splitWord py-0 inline">
                    Designing and developing website.
                </h3>
                <p className=" h6 lineClamp splitWord">...</p>
                <a data-visible className="splitText text-sm" href="#">View projects ↗</a>
            </div>
            <div
                className="flex flex-col gap-4 justify-start shadow p-4 rounded-2xl overflow-clip relative"
            >
                <p className="h6 text-sm"><span className=" h2 text-2xl font-bold">07</span>/7</p>
                <h3 data-animate="scaleIn" className="h1 text-4xl font-bold splitWord py-0 inline">
                    Junior Front-End Developer
                </h3>
                <p className=" h6 lineClamp splitWord">
                    Actively seeking roles where I can apply my focus on performance and
                    SEO-friendly architecture.
                </p>
                <a data-visible className="splitText text-sm" href="#">Download Resume ↗</a>
            </div>
        </div>
    </section>
</template>

<style scoped></style>
