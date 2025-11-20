import Doctor from "./doctors";
import HeroSection from "./hero";
import OpenHour from "./openHour";
import ServiceSection from "./services";

const HomePage = () => {
  return (
    <main className="w-full h-full">
      <HeroSection />
      <ServiceSection />
      <OpenHour />
      <Doctor />
    </main>
  );
};

export default HomePage;
