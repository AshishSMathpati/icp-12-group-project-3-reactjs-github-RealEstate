import LikeButton from "./LikeButton";

function PropertyCard({ property }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden relative">

      <img
        src={property.image}
        alt={property.title}
        className="h-52 w-full object-cover"
      />

      <LikeButton id={property.id} />

      {/* Tag */}
      <span className="absolute top-3 left-3 bg-green-700 text-white text-xs px-3 py-1 rounded-full">
        {property.tag}
      </span>

      <div className="p-4">
        <p className="text-green-700 font-bold">{property.price}</p>

        <h2 className="font-semibold text-lg mt-1">{property.title}</h2>

        <p className="text-gray-500 text-sm">📍 {property.location}</p>
      </div>
    </div>
  );
}

export default PropertyCard;