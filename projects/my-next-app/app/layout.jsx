import "@/app/globals.css";
import { VERSION } from "@/lib/utils";
import Navbar from "@/components/navigation/navbar";
import Footer from "@/components/navigation/footer";

export const metadata = {
  title: "Hassan Biswas — Web Developer",
  description: "Freelance Front-End Developer & UI/UX Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-version={VERSION}>
      <head>
        <link rel="icon" href="/favicon.svg" sizes="any" />
      </head>
      <body className="min-h-screen bg-background text-foreground flex flex-col justify-between antialiased">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

