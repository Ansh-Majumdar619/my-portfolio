import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import ProjectPage from "./projects/page";
import HomePage from "./home/page";
import { FloatingDockDemo } from "@/components/FloatingDock";

export default function Home() {
  return (
   <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]" >
    <HomePage />
    <AboutPage/>
    <ProjectPage />
    <ContactPage />
    <FloatingDockDemo />
   </main>
  );
}
