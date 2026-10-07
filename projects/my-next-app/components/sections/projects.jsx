import { VERSION } from '@/lib/utils';

export default function Portfolio() {
    return (
        <section className="py-20 bg-background text-foreground text-center" data-version={VERSION}>
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">Portfolio Section</h2>
                <p className="mt-4 text-lg text-muted-foreground">
                    Transforming ideas into high-performance web experiences.
                </p>
            </div>
        </section>
    );
}
