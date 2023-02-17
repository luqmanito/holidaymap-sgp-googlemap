import { useLoadScript } from "@react-google-maps/api";
import Sidebar from "../components/left-sidebar";
import Sidebar2 from "../components/second-left-sidebar";
import { Navbar } from "../components/navbar";
import Map from "../components/map";

export default function Home() {

  // load googlemap script
  const libraries = ["places"];
  const { isLoaded } = useLoadScript({
    // apiKey is provided, better use from env file
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
    libraries,
  });

  // make a simple loading text if map doesnt load
  if (!isLoaded) return <div>Loading...</div>;
  return (
    <>
      <main className="main-app">
        {/* below is our sidebar components */}
        <Sidebar />
        <Sidebar2 />
        <section className="content">
          {/* below is our navbar components */}
          <Navbar />
          {/* below is our map components */}
          <Map />
        </section>
      </main>
    </>
  );
}
