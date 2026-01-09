// import { useEffect, useState } from "react";

// function Home() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     age: "",
//     gender: "",
//     city:""
//     message: "",
//     error:"",
//   });

//   useEffect(() => {
//     if (formData.name.length > 0 && formData.name.length < 3) {
//       setFormData({
//         ...formData,
//         error: "Name must be at least 3 character long",
//       });
//     } else if (formData.name.length > 20) {
//       setFormData({
//         ...formData,
//         error: "Name must be less than 20 characters long",
//       });
//     } else if (formData.age && formData.age < 18) {
//       setFormData({ ...formData, error: "You must be at least 18 years old" });
//     } else if (formData.age > 60) {
//       setFormData({ ...formData, error: "Age must be less than 60 years old" });
//     } else {
//       setFormData({ ...formData, error: "" });
//     }
//   }, [formData.name, formData.age]);

//   useEffect(() => {
//     const storeData = localStorage.getItem("userData");
//     if (storeData) {
//       const parseData = JSON.parse(storeData);
//       setFormData({
//         ...formData,
//         name: parseData.name || "",
//         age: parseData.age || "",
//       });
//     }
//   }, []);

//   const saveName = () => {
//     if (formData.error) {
//       alert(formData.error);
//       return;
//     }
//     localStorage.setItem("userData", JSON.stringify(formData));
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-start p-5 bg-gray-100">
//       <div className="w-[300px] h-[600px] bg-amber-100 rounded-2xl p-4">
//         <h1 className="text-xl font-semibold mb-1">Hello, {formData.name}</h1>
//         <p className="text-sm">
//           You are {formData.age || "unknown"} years old.
//         </p>
//         <p className="text-sm">{formData.city} is a great place to live!</p>
//         <p className="text-sm mb-3">
//           You choose to learn {formData.subjects.join(", ") || "no subjects"}.
//         </p>

        
//         <input
//           type="text"
//           placeholder="Enter your name"
//           className="w-full px-5 py-2 border border-black rounded-full mb-2 focus:outline-none focus:border-blue-500"
//           value={formData.name}
//           onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//         />

    
//         <input
//           type="number"
//           placeholder="Enter your age"
//           className="w-full px-5 py-2 border border-black rounded-full mb-2 focus:outline-none focus:border-blue-500"
//           value={formData.age}
//           onChange={(e) => setFormData({ ...formData, age: e.target.value })}
//         />

//         {/* City */}
//         <select
//           className="w-full px-5 py-2 border border-black rounded-full mb-3 focus:outline-none focus:border-blue-500"
//           value={formData.city}
//           onChange={(e) => setFormData({ ...formData, city: e.target.value })}
//         >
//           <option value="">Select your city</option>
//           <option value="Nagpur">Nagpur</option>
//           <option value="Pune">Pune</option>
//           <option value="Bhandara">Bhandara</option>
//           <option value="Bengaluru">Bengaluru</option>
//         </select>

//         {/* Gender */}
//         <p className="font-medium">Select Gender:</p>
//         <div className="flex gap-4 mb-3">
//           <label className="flex items-center gap-1">
//             <input
//               type="radio"
//               name="gender"
//               value="male"
//               checked={formData.gender === "male"}
//               onChange={(e) =>
//                 setFormData({ ...formData, gender: e.target.value })
//               }
//             />
//             Male
//           </label>
//           <label className="flex items-center gap-1">
//             <input
//               type="radio"
//               name="gender"
//               value="female"
//               checked={formData.gender === "female"}
//               onChange={(e) =>
//                 setFormData({ ...formData, gender: e.target.value })
//               }
//             />
//             Female
//           </label>
//         </div>

//         {/* Subjects */}
//         <p className="font-medium">Choose optional subjects:</p>
//         <div className="space-y-1 mb-2">
//           {["Marathi", "Hindi", "English"].map((sub) => (
//             <label key={sub} className="flex items-center gap-2">
//               <input
//                 type="checkbox"
//                 value={sub}
//                 checked={formData.subjects.includes(sub)}
//                 onChange={(e) => {
//                   const value = e.target.value;
//                   setFormData({
//                     ...formData,
//                     subjects: formData.subjects.includes(value)
//                       ? formData.subjects.filter((s) => s !== value)
//                       : [...formData.subjects, value],
//                   });
//                 }}
//               />
//               {sub}
//             </label>
//           ))}
//         </div>

//         {/* Images */}
//         <div className="flex gap-2 my-2">
//           {formData.subjects.includes("Marathi") && (
//             <img src={imgMarathi} alt="Marathi" className="h-24" />
//           )}
//           {formData.subjects.includes("Hindi") && (
//             <img src={imgHindi} alt="Hindi" className="h-24" />
//           )}
//           {formData.subjects.includes("English") && (
//             <img src={imgEnglish} alt="English" className="h-24" />
//           )}
//         </div>

//         {/* Error */}
//         {formData.error && (
//           <p className="text-red-700 text-xs mt-1">{formData.error}</p>
//         )}

//         {/* Buttons */}
//         <div className="flex justify-between mt-4">
//           <button
//             onClick={saveName}
//             disabled={formData.error}
//             className={`px-5 py-2 rounded text-white ${
//               formData.error
//                 ? "bg-gray-400 cursor-not-allowed"
//                 : "bg-blue-600 hover:bg-blue-700"
//             }`}
//           >
//             Save
//           </button>

//           <button
//             className="px-5 py-2 rounded bg-red-500 text-white hover:bg-red-600"
//             onClick={() => {
//               localStorage.clear();
//               setFormData({
//                 name: "",
//                 age: "",
//                 city: "",
//                 gender: "",
//                 subjects: [],
//                 error: "",
//               });
//             }}
//           >
//             Clear
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
