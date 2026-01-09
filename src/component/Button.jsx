function Button({ title , onClick}) {
  return (
    <button
    onClick={onClick}
      className="mt-4 w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg  cursor-pointer transition"
    >
      {title}
    </button>
  );
}

export default Button;
 
