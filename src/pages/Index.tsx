import Hero from "@/components/Hero";
import InvitationSection from "@/components/InvitationSection";
import EventDetails from "@/components/EventDetails";
import MeetTheCouple from "@/components/MeetTheCouple";
import Gallery from "@/components/Gallery";
import RSVPForm from "@/components/RSVPForm";
import ThingsToKnow from "@/components/ThingsToKnow";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background min-h-screen overflow-x-hidden">
      <Hero />
      <InvitationSection />
      <EventDetails />
      <MeetTheCouple />
      <Gallery />
      <RSVPForm />
      <ThingsToKnow />
      <Footer />
    </main>
  );
};

export default Index;
