import { useEffect, useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    city: "",
    message: "",
    error: "",
  });

  useEffect(() => {
    if (formData.name.length > 0 && formData.name.length < 3) {
      setFormData({
        ...formData,
        error: "Name must be at least 3 character long",
      });
    } else if (formData.name.length > 20) {
      setFormData({
        ...formData,
        error: "Name must be less than 20 characters long",
      });
    } else if (formData.age && formData.age < 18) {
      setFormData({ ...formData, error: "You must be at least 18 years old" });
    } else if (formData.age > 60) {
      setFormData({ ...formData, error: "Age must be less than 60 years old" });
    } else {
      setFormData({ ...formData, error: "" });
    }
  }, [formData.name, formData.age]);

  useEffect(() => {
    const storeData = localStorage.getItem("userData");
    if (storeData) {
      const parseData = JSON.parse(storeData);
      setFormData({
        ...formData,
        name: parseData.name || "",
        age: parseData.age || "",
      });
    }
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-start p-5 bg-gray-100">
      <div className="w-[300px] h-[600px] bg-red-100 rounded-2xl p-4">
        <h1 className="text-xl font-semibold mb-1">Hello, {formData.name}</h1>
        

        <input
          type="text"
          placeholder="Enter your name"
          className="w-full px-5 py-2 border border-black rounded-lg mb-2 focus:outline-none focus:border-red-500"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          required
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full px-5 py-2 border border-black  rounded-lg focus:outline-none"
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          required
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <input
          type="number"
          placeholder="Enter your age"
          className="w-full px-5 py-2 border border-black rounded-full mb-2 focus:outline-none focus:border-blue-500"
          value={formData.age}
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
        />

        {/* City */}
        <select
          className="w-full px-5 py-2 border border-black rounded-full mb-3 focus:outline-none focus:border-blue-500"
          value={formData.city}
          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
        >
          <option value="">Select your city</option>
          <option value="Nagpur">Nagpur</option>
          <option value="Pune">Pune</option>
          <option value="Bhandara">Bhandara</option>
          <option value="Bengaluru">Bengaluru</option>
        </select>

        {/* Error */}
        {formData.error && (
          <p className="text-red-700 text-xs mt-1">{formData.error}</p>
        )}

        <p className="font-medium">Select Gender:</p>
        <div className="flex gap-4 mb-3">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === "male"}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            />
            Male
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === "female"}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            />
            Female
          </label>
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          rows="4"
          value={formData.message}
          required
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-900 text-white py-3 rounded-lg hover:bg-blue-800 transition"
        >
          Send Message
        </button>

        
      </div>
    </div>
  );
}

export default Contact;
