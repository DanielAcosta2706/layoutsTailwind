import "./App.css";
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Home } from "./components/home/Home";
import { Qualification } from "./components/qualification/Qualification";
import { ScrollUp } from "./components/scrollup/ScrollUp";
import { Services } from "./components/services/Services";
import { Skills } from "./components/skills/Skills";
import { Testimonials } from "./components/testimonials/Testimonials";
import { Work } from "./components/work/Work";

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Work />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default App;
