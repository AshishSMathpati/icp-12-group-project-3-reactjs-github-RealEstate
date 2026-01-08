function BuyButton({ property }) {
  const BuyProperty = () => {
    alert(`You selected ${property.title} for ${property.price}`);
  };

  return (
    <button
      onClick={BuyProperty}
      className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg hover:bg-red-450, cursor-pointer transition"
    >
      Buy Now
    </button>
  );
}

export default BuyButton;
