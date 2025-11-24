"use client";

import { NepaliDatePicker } from "nepali-datepicker-reactjs";
import { useState } from "react";
import "nepali-datepicker-reactjs/dist/index.css"
import  doctors  from "./constant/doctor.js";
import { Bounce, toast } from "react-toastify";


// const DefaultFormData = {
//     name: "",
//     age: "",
//     gender: "",
//     phone: "",
//     email: "",
//     doctor: "",
//     nepaliDate: "",
//     visitType: "",
//     labs: [],
//     message: "",
//     consent: false,
//   }
const DefaultFormData = {
    name: "milan",
    age: "12",
    gender: "18",
    phone: "988987",
    email: "milanbhattarai0007@gmail.com",
    doctor: "nilesh",
    nepaliDate: "2342/234",
    visitType: "first",
    labs: ["lab1", "lab2"],
    message: "asdlf",
    consent: true,
  }

const labFacilities = [
  // Diagnostic Services (सुविधाहरु)
  "औषधि (Pharmacy)",
  "प्याथोलोजी ल्याब (Pathology Lab)",
  "डिजिटल एक्स-रे (Digital X-Ray)",
  "4D भिडियो एक्स-रे (4D Video X-Ray)",
  "पि.पि.सि ECHO (PPC ECHO)",
  "12-Lead ECG",
  "दिशा तथा रगत सम्बन्धिको जाँच (Sputum and Blood related checkup)",
  
  // Routine Blood Tests (अन्य रगत जाँचहरु)
  "Blood Sugar",
  "RFT (Renal Function Test)",
  "LFT (Liver Function Test)",
  "CBC (Complete Blood Count)",
  "Lipid Profile",
  "Calcium",
  "Uric Acid",
  
  // Specialized Panels and Markers
  "Diabetic Profile",
  "Fertility Panel (LH, FSH, Prolactin, B-HCG)",
  "Hormonal Analysis (TFT-थाइराइड)",
  "Anemia Panel (Ferritin, Vit-B12)",
  "Allergy Panel",
  "Tumor Marker (AFP, PSA [Prostate], CEA, CA 125)",
  "Vit-D",
  "Infectious Disease Markers",
  "Rheumatology Panel (ANA, Anti-CCP, Ds DNA, ENA Profile)",
  "Metabolic Panel",
  "Cardiac Markers",
  
  // Vaccination/Treatment
  "रेविज (Rabies), टिटानस (Tetanus) र तिन महिने सुई (सरमिनि) साथै बाफ (Nebulizer) को सेवा"
];


export default function AppointmentForm() {
  const [formData, setFormData] = useState(DefaultFormData);


  const handleChange = (e) => {
    let { name, value, type, checked } = e.target;


    if (type === "checkbox" && name === "labs") {
      const updatedLabs = checked
        ? [...formData.labs, value]
        : formData.labs.filter((lab) => lab !== value);

      setFormData({ ...formData, labs: updatedLabs });
      return;
    }

  
    if (name === "consent") {
      setFormData({ ...formData, consent: checked });
      return;
    }
    

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {

    e.preventDefault();
    
    try {



      const response =  await fetch ("/api/appoinment",{
        method : "POST",
        headers : {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          formData
        )
      })
      const data = await response.json();
      if(response.ok){
        toast.success(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }else{
        toast.error(data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    }catch(error){
      console.error(error,"something went wrong");
      toast.error("Something went wrong", {
         position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
      });
    }finally{
      setFormData(DefaultFormData);
    }

    



   
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Doctor Appointment Form
      </h1>

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg p-6 space-y-6"
      >
        {/* PERSONAL DETAILS */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Personal Details</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              className="border p-3 rounded w-full"
              value={formData.name}
              required
            />

            <input
              type="number"
              name="age"
              placeholder="Age"
              onChange={handleChange}
              value={formData.age}
              className="border p-3 rounded w-full"
              required
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            <select
              name="gender"
              onChange={handleChange}
              className="border p-3 rounded w-full"
              required
              value={formData.gender}
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              value={formData.phone}
              className="border p-3 rounded w-full"
              required
            />
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            value={formData.email}
            className="border p-3 rounded w-full mt-4"
          />
        </div>

        {/* DOCTOR SELECTION */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Doctor Selection</h2>

          <select
            name="doctor"
            onChange={handleChange}
            
            className="border p-3 rounded w-full"
            value={formData.doctor}
            
          >
            <option >Select Doctor</option>
            {doctors.map((doc, idx) => (
              <option key={idx} value={doc.name}>
                {doc.name}
              </option>
            ))}
          </select>
        </div>

        {/* DATE AND TIME */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Appointment Details</h2>

          <div className="grid  gap-4">
            <label htmlFor="date">Date</label>
            <NepaliDatePicker
              
              inputClassName="border p-3 rounded w-full"
              value={formData.nepaliDate}
              onChange={(value) =>
                setFormData({ ...formData, nepaliDate: value })
              }
              options={{ calenderLocale: "ne", valueLocale: "en" }}
              required
            />
           

            
          </div>
             <select
            name="visitType"
            onChange={handleChange}
            className="border p-3 rounded w-full mt-4"
            value={formData.visitType}
            required
          >
            <option value="">Visit Type</option>
            <option>First Visit</option>
            <option>Follow-up</option>
            <option>Emergency</option>
          </select>

         
        </div>

        {/* LAB FACILITIES */}
        <div>
          <h2 className="text-xl font-semibold mb-3">Lab Facilities</h2>
            <div className="overflow-y-scroll h-[400px]">
          <div className="grid grid-cols-2 sm:grid-cols-3  rounded-2xl   gap-2">
            {labFacilities.map((lab, idx) => (
                <div key={idx} className="bg-indigo-50 p-4 rounded-md">  
              <label key={idx} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="labs"
                  value={lab}
                  onChange={handleChange}
                  
                />
                <span>{lab}</span>
              </label>
              </div>
            ))}
          </div>
          </div>
        </div>

       

        {/* MESSAGE BOX */}
        <textarea
          name="message"
          placeholder="Additional Message (Optional)"
          onChange={handleChange}
          value={formData.message}
          className="border p-3 rounded w-full h-28"
        ></textarea>

        {/* CONSENT */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="consent"
            onChange={handleChange}
            checked={formData.consent}
            required
          />
          <label>
            I agree to the clinic’s appointment terms and privacy policy.
          </label>
        </div>

        {/* SUBMIT BUTTON */}
        <button
          type="submit"
          className="bg-blue-600 text-white w-full py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Submit Appointment
        </button>
      </form>
    </div>
  );
}
