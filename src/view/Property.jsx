import { useState } from "react";
import { properties } from "../config/properties";
import PropertyCard from "../component/PropertyCard";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

function Property() {
  const [data] = useState(properties);

  return (
    <>
      <Navbar />

      <div className="bg-gray-100 min-h-screen p-6 mt-15 ">
        {/* Top row */}
        <div className="max-w-6xl mx-auto flex justify-between gap-5 flex-col">
          <p className="font-semibold text-4xl">Brows Properties</p>
          <p className="font-semibold text-2xl">Explore our extensive collection of <span className="text-red-500"> residential and commercial</span> propeties.</p>
        </div>

        {/* Property Grid */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {data.map((item) => (
            <PropertyCard key={item.id} property={item} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Property;
