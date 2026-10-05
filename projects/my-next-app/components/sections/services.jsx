import { VERSION } from '@/lib/utils';

export default function Services() {
    return (
        <section className="py-20 bg-background text-foreground text-center" data-version={VERSION}>
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
                    Front-End Architecture & Design
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                    Transforming ideas into high-performance web experiences.
                </p>
            </div>
        </section>
    );
}
