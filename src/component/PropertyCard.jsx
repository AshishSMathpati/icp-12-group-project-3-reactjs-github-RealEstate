import { MapPin } from "lucide-react";
import LikeButton from "./LikeButton";
import Button from "./Button";
import toast, { Toaster } from "react-hot-toast";

function PropertyCard({ property }) {
  const handleBuy = () => {
    toast.success(`You selected ${property.title} for ${property.price}`);
  };
  return (
    <>
      <Toaster />
      <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden relative">
        <img
          src={property.image}
          alt={property.title}
          className="h-52 w-full object-cover"
        />

        <LikeButton id={property.id} />

        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
          {property.tag}
        </span>

        <div className="p-4">
          <p className="text-gray-500 font-bold">{property.price}</p>

          <h2 className="font-semibold text-red-500 text-lg mt-1">
            {property.title}
          </h2>

          <p className="text-gray-500 text-sm flex gap-1">
            {" "}
            <MapPin /> {property.location}
          </p>

          <Button onClick={handleBuy} title="Buy Now" />
        </div>
      </div>
    </>
  );
}

export default PropertyCard;
