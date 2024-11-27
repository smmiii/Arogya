// ./src/components/PCOSSurveyForm.jsx


import React, { useState } from 'react';

const PCOSSurveyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    menstrualCycle: '',
    symptoms: {
      heavyBleeding: '',
      cramps: '',
      weightGain: '',
      hairGrowth: '',
      hairLoss: '',
      acne: '',
      skinDarkening: '',
      skinTags: '',
      moodSwings: '',
      fatigue: '',
      fertility: '',
      androgenLevels: '',
    },
    lifestyle: {
      diet: '',
      exercise: '',
      treatment: '',
    },
    generalHealth: {
      menstruationStartAge: '',
      menstrualCramps: '',
    },
  });

  const [resultMessage, setResultMessage] = useState(''); // State to store the result message

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => {
      const newData = { ...prevData };
      if (name.includes('.')) {
        const [section, field] = name.split('.');
        newData[section][field] = value;
      } else {
        newData[name] = value;
      }
      return newData;
    });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // List of all symptoms/questions related to PCOS
    const pcosRelatedQuestions = [
      formData.symptoms.heavyBleeding,
      formData.symptoms.cramps,
      formData.symptoms.weightGain,
      formData.symptoms.hairGrowth,
      formData.symptoms.hairLoss,
      formData.symptoms.acne,
      formData.symptoms.skinDarkening,
      formData.symptoms.skinTags,
      formData.symptoms.moodSwings,
      formData.symptoms.fatigue,
      formData.symptoms.fertility,
      formData.symptoms.androgenLevels,
    ];

    // Count positive answers
    const positiveAnswers = pcosRelatedQuestions.filter((answer) => answer === 'yes' || answer === 'frequently').length;

    // Calculate if positive answers meet or exceed 80%
    const isPCOS = (positiveAnswers / pcosRelatedQuestions.length) >= 0.8;

    // Set result message
    setResultMessage(isPCOS ? "You may have PCOS, Consult to doctor" : "You likely don't have PCOS");
  };


  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">PCOS Symptoms Survey Form</h1>

      {/* Basic Information Section */}
      <div className="mb-6">
        <label className="block font-medium">Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-6">
        <label className="block font-medium">Age:</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
          placeholder="Enter your age"
        />
      </div>

      {/* Section 1: General Health and Menstrual History */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Section 1: General Health and Menstrual History</h2>

      <div className="mb-6">
        <label className="block font-medium">1. How regular is your menstrual cycle?</label>
        <select
          name="menstrualCycle"
          value={formData.menstrualCycle}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="very-regular">Very regular (every 28-35 days)</option>
          <option value="irregular">Irregular (less than every 21 days or more than every 35 days)</option>
          <option value="unpredictable">Highly unpredictable</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-medium">2. At what age did you start menstruating?</label>
        <select
          name="generalHealth.menstruationStartAge"
          value={formData.generalHealth.menstruationStartAge}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="under-10">Under 10</option>
          <option value="10-12">10-12</option>
          <option value="13-15">13-15</option>
          <option value="over-15">Over 15</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block font-medium">3. Do you experience heavy menstrual bleeding?</label>
        <select
          name="generalHealth.heavyBleeding"
          value={formData.generalHealth.heavyBleeding}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="sometimes">Sometimes</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-medium">4. Do you experience menstrual cramps that interfere with daily activities?</label>
        <select
          name="menstrualCramps"
          value={formData.menstrualCramps}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="often">Yes, often</option>
          <option value="rarely">Rarely</option>
          <option value="no">No</option>
        </select>
      </div>
      {/* Section 2: Physical Symptoms */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Section 2: Physical Symptoms</h2>

      <div className="mb-6">
        <label className="block font-medium">5. Have you experienced unexplained weight gain?</label>
        <select
          name="symptoms.weightGain"
          value={formData.symptoms.weightGain}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>

      <div className="mb-6">
        <label className="block font-medium">6. Do you experience hair loss on the scalp?</label>
        <select
          name="symptoms.hairLoss"
          value={formData.symptoms.hairLoss}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block font-medium">7. Do you experience hair thinning or hair loss on the scalp?</label>
        <select
          name="symptoms.hairLoss"
          value={formData.symptoms.hairLoss}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>

        </select>
      </div>

      <div className="mb-6">
        <label className="block font-medium">8. Do you have frequent acne or oily skin?</label>
        <select
          name="symptoms.acne"
          value={formData.symptoms.acne}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="somewhat">Occasionally</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block font-medium">9. Do you have darkened skin or patches on the neck, underarms, or other areas (acanthosis nigricans)?</label>
        <select
          name="symptoms.skinDarkening"
          value={formData.symptoms.skinDarkening}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>

        </select>
      </div>

      <div className="mb-6">
        <label className="block font-medium">10. Have you noticed skin tags in areas like the neck or armpits?</label>
        <select
          name="symptoms.skinDarkening"
          value={formData.symptoms.skinDarkening}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>

        </select>
      </div>


      {/* Section 3: Emotional and Psychological Health */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Section 3: Emotional and Psychological Health</h2>

      <div className="mb-6">
        <label className="block font-medium">11. How often do you experience mood swings?</label>
        <select
          name="symptoms.moodSwings"
          value={formData.symptoms.moodSwings}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="frequently">Frequently</option>
          <option value="rarely">Rarely</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block font-medium">12. Do you experience feelings of fatigue or low energy levels?</label>
        <select
          name="symptoms.fatigue"
          value={formData.symptoms.fatigue}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="yesFrequently">Yes, Frequently</option>
          <option value="Occasionally">Occasionally</option>
          <option value="no">No</option>
        </select>
      </div>

      {/* Section 4: Emotional and Psychological Health */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Section 4: Fertility and Hormonal Health</h2>

      <div className="mb-6">
        <label className="block font-medium">13. Have you experienced difficulty conceiving or irregular ovulation patterns?</label>
        <select
          name="symptoms.fertility"
          value={formData.symptoms.fertility}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="notApplicable">Not Applicable</option>

        </select>
      </div>

      <div className="mb-6">
        <label className="block font-medium">14. Have you been diagnosed with high levels of androgens (male hormones) by a doctor??</label>
        <select
          name="symptoms.androgenLevels"
          value={formData.symptoms.androgenLevels}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="notSure">Not Sure</option>
        </select>
      </div>

      {/* Section 5: Lifestyle and Management */}
      <h2 className="text-xl font-semibold mt-8 mb-4">Section 5: Lifestyle and Management</h2>

      <div className="mb-6">
        <label className="block font-medium">15. Do you currently follow any specific diet or lifestyle changes to manage symptoms?</label>
        <select
          name="lifestyle.diet"
          value={formData.lifestyle.diet}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
          <option value="consideringIt">Considering it</option>

        </select>
      </div>

      <div className="mb-6">
        <label className="block font-medium">16. Do you exercise regularly?</label>
        <select
          name="lifestyle.exercise"
          value={formData.lifestyle.exercise}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="Yes, 3 or more times a week">Yes, 3 or more times a week</option>
          <option value="Occasionally">Occasionally</option>
          <option value="No">No</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block font-medium">17. Have you sought or are you currently receiving treatment for PCOS symptoms?
        </label>
        <select
          name="lifestyle.treatment"
          value={formData.lifestyle.treatment}
          onChange={handleChange}
          className="w-full mt-2 p-2 border rounded-md"
        >
          <option value="">Select</option>
          <option value="Yes, receving treatment">Yes, receving treatment</option>
          <option value="Yes,Considering treatement">Yes,Considering treatement</option>
          <option value="No">No</option>
        </select>
      </div>


      {/* Submit Button */}
      <div className="flex justify-center mt-8">
        <button onClick={handleSubmit} className="bg-pink-900 text-white py-2 px-6 rounded-md hover:bg-blue-600">
          Submit
        </button>
      </div>

      {/* Result Message */}
      {resultMessage && (
        <div className="mt-6 text-center text-lg font-semibold">
          {resultMessage}
        </div>
      )}
    </div>
  );
};

export default PCOSSurveyForm;

