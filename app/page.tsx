import AboutPreview from "@/components/AboutPreview";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import SelectedWork from "@/components/SelectedWork";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <AboutPreview />
      <SelectedWork />
      <Footer />
    </main>
  );
}
