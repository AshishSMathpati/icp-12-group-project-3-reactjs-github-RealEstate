import { useState } from "react";
import { properties } from "../config/properties";
import PropertyCard from "../component/PropertyCard";

function Property() {
  const [data] = useState(properties);

  return (
    <div className="bg-gray-100 min-h-screen p-6">

      {/* Top row */}
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p className="font-semibold">
          Showing {data.length} properties
        </p>
      </div>

      {/* Property Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {data.map((item) => (
          <PropertyCard key={item.id} property={item} />
        ))}
      </div>
    </div>
  );
}

export default Property;