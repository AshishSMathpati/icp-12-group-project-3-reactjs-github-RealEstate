import { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Button from "../component/Button";

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

  const sendMessage = () => {
    alert("Thank you! We will contact you soon.");
    setFormData({
      name: "",
    email: "",
    phone: "",
    age: "",
    gender: "",
    city: "",
    message: "",
    error: "",
    });
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex justify-center items-start p-5 bg-gray-100 mt-15">
        <div className="w-100 bg-gray-200 rounded-2xl mt-10 p-4">
          <h1 className="text-xl font-semibold mb-1">Hello, <span className="text-red-500">{formData.name}</span></h1>

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
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-5 py-2 border border-black rounded-lg mb-2 focus:outline-none focus:border-red-500"
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            required
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-5 py-2 border border-black rounded-lg mb-2 focus:outline-none focus:border-red-500"
          />

          <input
            type="number"
            placeholder="Enter your age"
            className="w-full px-5 py-2 border border-black rounded-lg mb-2 focus:outline-none focus:border-red-500"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          />

      
          <select
            className="w-full px-5 py-2 border border-black rounded-lg mb-2 focus:outline-none focus:border-red-500"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
          >
            <option value="">Select your city</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Pune">Pune</option>
            <option value="Bhandara">Bhandara</option>
            <option value="Bengaluru">Bengaluru</option>
          </select>

        
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
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>

          <Button onClick={sendMessage} title="Send Message"  />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
