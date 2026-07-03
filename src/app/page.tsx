import Hero from "./components/landingPage";
import OurServices from "./components/OurServices";
import WhoWeAre from "./components/WhoWeAre";
import OurTrucks from "./components/OurTruck";
import FrieghtStates from "./components/FrieghtStates";
import WhyChooseUs from "./components/WhyChooseUs";
import HowWeWork from "./components/HowWeWork";
import FAQs from "./components/FAQs";
import QuestionStats from "./components/QuestionStats";

export default function Home() {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <OurServices />
      <OurTrucks />
      <FrieghtStates />
      <WhyChooseUs />
      <HowWeWork />
      <FAQs/>
      <QuestionStats />
    </>
  );
}
