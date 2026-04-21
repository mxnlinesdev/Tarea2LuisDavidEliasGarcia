import HeaderModule from "./components/header/header";
import Hero from "./components/hero/hero";
import Interests from "./components/interests/interests";
import CV from "./components/cv/cv";
import Projects from "./components/projects/projects";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import ScrollTop from "./components/scroll-top/scroll-top";

export default function Home() {
  return (
    <>
      <HeaderModule />
      <main className="main">
        <Hero />
        <Interests />
        <CV />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ScrollTop />
    </>
  );
}
