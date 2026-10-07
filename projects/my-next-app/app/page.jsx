import Hero from '@/components/sections/hero';
import About from '@/components/sections/about';
import Services from '@/components/sections/services';
import Projects from '@/components/sections/projects';
import Contact from '@/components/sections/contact';
import Faqs from '@/components/sections/faqs';

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Projects />
            <Contact />
            <Faqs />
        </>
    );
}
