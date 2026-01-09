function Button({ property }) {
  const handleBuy = () => {
    alert(`You selected ${property.title} for ${property.price}`);
  };

  return (
    <button
      onClick={handleBuy}
      className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg  cursor-pointer transition"
    >
      Buy Now
    </button>
  );
}

export default Button;
