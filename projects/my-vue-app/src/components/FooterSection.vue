<script setup>
import { ref } from 'vue';

const count = ref(0);
</script>

<template>
    <footer className="flex flex-col justify-center items-center pt-28 pb-4 px-6 gap-6" id="footer">
        <div className="max-w-4xl flex flex-col gap-6 pb-9">
            <div className="grid md:columns-2 gap-6">
                <div className="flex flex-col relative overflow-clip rounded-2xl gap-4">
                    <h2 className="p text-lg">
                        I craft marketing strategies that elevate brands, attract audiences, and
                        drive measurable business growth.
                    </h2>
                    <div>
                        <h3 class="p opacity-80">
                            Providing high-quality web design and front-end development services to
                            clients in Dhaka Bangladesh &amp; Worldwide.
                        </h3>
                    </div>

                    <div className="flex flex-col">
                        <div className="flex items-center justify-start">
                            <a href="#" className="h-full btn bg-brand-primary txt-center splitText"
                                >Resume
                            </a>
                        </div>
                    </div>
                </div>

                <div className="flex items-start flex-wrap justify-between gap-6">
                    <nav className="flex flex-col gap-2">
                        <h4 className="p opacity-80">Pages</h4>
                        <div className="flex flex-col items-start flex-wrap navigation-links gap-2">
                            <a className="h6 decoration-0" href="#">[01] Home ↗ </a>
                            <a className="h6 decoration-0" href="">[02] About ↗ </a>
                            <a className="h6 decoration-0" href="">[03] Contact ↗ </a>
                        </div>
                    </nav>

                    <nav className="flex flex-col gap-2">
                        <h4 className="p opacity-80">Conference &amp; Payment</h4>
                        <div className="flex flex-col items-start flex-wrap methode-links gap-2">
                            <a className="h6 decoration-0" href="">Meet ↗ </a>
                            <a className="h6 decoration-0" href="">bKash ↗ </a>
                        </div>
                    </nav>

                    <nav className="flex flex-col gap-2">
                        <h4 className="p opacity-80">Socials</h4>
                        <div className="flex flex-col items-start flex-wrap social-links gap-2">
                            <a className="underline" href="">Facebook</a>
                            <a className="underline" href="">Instagram</a>
                            <a className="underline" href="">Threads</a>
                            <a className="underline" href="">X(Twitter)</a>
                        </div>
                    </nav>
                </div>
            </div>

            <nav className="flex flex-col gap-2">
                <h4 className="p opacity-80">Legals</h4>
                <div className="flex items-start flex-wrap justify-start legal-links gap-3">
                    <a className="h6 decoration-0" href=""> [01] Terms of Services ↗ </a>
                    <a className="h6 decoration-0" href=""> [02] Privacy Policy ↗ </a>
                    <a className="h6 decoration-0" href="">
                        [03] Refund &amp; Cancelation Policy ↗
                    </a>
                </div>
            </nav>

            <div className="flex items-center justify-center">
                <div className="flex items-stretch gap-3 py-6">
                    <input
                        className="btn text-center text-sm font-bold text-brand-primary border border-brand-primary p-1.5 bg-brand-primary/10"
                        placeholder="@hassanbiswas.github.io"
                        readonly
                        type="text"
                    />
                    <a className="decoration-0 h-full" href="">
                        <button
                            className="btn btn-primary bg-brand-primary splitWord border border-brand-primary"
                        >
                            Subscribe
                        </button>
                    </a>
                </div>
            </div>
        </div>

        <p className="text-sm text-center">
            &copy; {{ new Date().getFullYear() }} Web Developer |
            <span className="text-brand-primary">Hassan Biswas</span> — UI/UX &amp; Front-End
            Architecture.
        </p>
    </footer>
</template>

<style scoped>
a {
    white-space: nowrap;
}
</style>
