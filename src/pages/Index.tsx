import Hero from "@/components/Hero";
import InvitationSection from "@/components/InvitationSection";
import Countdown from "@/components/Countdown";
import EventDetails from "@/components/EventDetails";
import MeetTheCouple from "@/components/MeetTheCouple";
import OurStory from "@/components/OurStory";
import Gallery from "@/components/Gallery";
import RSVPForm from "@/components/RSVPForm";
import Accommodations from "@/components/Accommodations";
import ThingsToKnow from "@/components/ThingsToKnow";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Hero />
      <div className="relative z-40 bg-background">
        <InvitationSection />
        <Countdown />
        <EventDetails />
        <MeetTheCouple />
        <OurStory />
        <Gallery />
        <RSVPForm />
        <Accommodations />
        <ThingsToKnow />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
