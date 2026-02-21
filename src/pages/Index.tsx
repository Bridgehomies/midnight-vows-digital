import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import OurStory from "@/components/OurStory";
import EventDetails from "@/components/EventDetails";
import Gallery from "@/components/Gallery";
import RSVPForm from "@/components/RSVPForm";
import Accommodations from "@/components/Accommodations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-night-deep min-h-screen overflow-x-hidden">
      <Hero />
      <Countdown />
      <OurStory />
      <EventDetails />
      <Gallery />
      <RSVPForm />
      <Accommodations />
      <Footer />
    </main>
  );
};

export default Index;
