import HeaderModule from "./components/header/header";
import Hero from "./components/hero/hero";
import Interests from "./components/interests/interests";
import CV from "./components/cv/cv";

export default function Home() {
  return (
    <>
      <HeaderModule />
      <main className="main">
        <Hero />
        <Interests />
        <CV />
      </main>
    </>
  );
}
