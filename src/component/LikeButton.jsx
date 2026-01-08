import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

 function LikeButton({ id }) {
  const [liked, setLiked] = useState(false);


  useEffect(() => {
    const saved = localStorage.getItem(`liked-${id}`);
    if (saved === "true") setLiked(true);
  }, [id]);


  useEffect(() => {
    localStorage.setItem(`liked-${id}`, liked);
  }, [liked, id]);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow"
    >
      <Heart
        size={20}
        className={liked ? "text-red-500 fill-red-500" : "text-gray-700"}
      />
    </button>
  );
}

export default LikeButton;