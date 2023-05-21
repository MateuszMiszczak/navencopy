import Hero from "./components/Hero";
import Who from "./components/Who";
import What from "./components/What";

function HomePage() {
  return (
    <div className="snap-y snap-proximity h-screen w-screen overflow-x-hidden body-font font-montserrat">
      <div className="snap-center w-screen h-screen flex items-center justify-center">
        <Hero />
      </div>
      <div className="snap-center w-screen h-screen flex items-center justify-center">
        <Who />
      </div>
      <div className="snap-center w-screen h-screen flex items-center justify-center">
        <What />
      </div>
    </div>
  );
}

export default HomePage;