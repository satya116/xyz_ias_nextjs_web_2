import Annoucement from "./_components/Announcement";
import DividerText from "./_components/DividerText";
import Faqs from "./_components/Faqs";
import Footer from "./_components/Footer";
import HeroBanner from "./_components/HeroBanner";
import NavBar from "./_components/NavBar";
import Pricing from "./_components/Pricing";
import RadioButton from "./_components/RadioButton";
import SendEnquiry from "./_components/SendEnquiry";
import Stats from "./_components/Stats";
import Testimonials from "./_components/Testimonials";
import VideoThumbnail from "./_components/VideoThumbnail";

export default function Home() {
  return (
    <>
    <Annoucement />

    <NavBar />
    <HeroBanner />
    <Stats />
    <DividerText />


    {/* <VideoThumbnail /> */}
    <Pricing />
    {/* <RadioButton /> */}

    <Testimonials />
    <Faqs />
    {/* <SendEnquiry />  giving error */}
    <Footer />

    </>

  );
}
