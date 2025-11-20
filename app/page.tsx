import Contact from "./contact";
import Doctor from "./doctors";
import HeroSection from "./hero";
import Map from "./location";
import OpenHour from "./openHour";
import ServiceSection from "./services";

const HomePage = () => {
  return (
    <main className="w-full h-full">
      <HeroSection />
      <ServiceSection />
      <OpenHour />
      <Doctor />
      <Map />
      <Contact />
    </main>
  );
};

export default HomePage;
