import Navbar from "@/components/navbar";
import Introduction from "@/components/introduction";
import AboutMe from "@/components/about-me";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <main className="pb-60">
      <Navbar />
      <Introduction />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
