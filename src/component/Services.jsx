import React from "react";
import { Shield } from "lucide-react";

function Services({ icon, title, description}) {
  return (
    <div className="w-70 bg-white py-8 px-2 flex flex-col justify-between items-center rounded-2xl shadow-2xl my-2 md:my-5 mx-2">
      {icon}
      <p className="text-xl font-bold my-2 ">{title}</p>
      <p className="text-sm text-center text-gray-500 ">{description}</p>
    </div>
  );
}

export default Services;
