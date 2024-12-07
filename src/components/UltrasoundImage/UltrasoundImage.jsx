import { useRef, useState } from 'react';
import upload from '../../assets/uploadImg.png';

const UltrasoundImage = () => {
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [result, setResult] = useState('');
  const [confidence, setConfidence] = useState(null);
  const hiddenFileInput = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setImageUrl(reader.result); // Display preview
      setImage(file); // Store file for upload
    };
    reader.readAsDataURL(file);
  };

  const handleUploadButtonClick = () => {
    if (!image) {
      alert('No image selected for upload');
      return;
    }

    const formData = new FormData();
    formData.append('image', image);

    fetch('http://127.0.0.1:5000/', { // Update to match backend URL
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data.result);
        setConfidence(data.confidence.toFixed(2));
      })
      .catch((error) => console.error('Upload failed:', error));
  };

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <h1 className="text-3xl text-pink-900 font-bold mb-4">Upload Ultrasound Image</h1>
        <div className="flex flex-col items-center">
          <div className="relative w-70 h-60 mb-4">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt="Uploaded Preview"
                className="w-full h-full object-cover border rounded"
              />
            ) : (
              <img
                src={upload}
                alt="Upload Placeholder"
                className="w-full h-full object-cover border rounded"
              />
            )}
          </div>
          <input
            type="file"
            ref={hiddenFileInput}
            onChange={handleImageChange}
            style={{ display: 'none' }}
          />
          <button
            onClick={handleClick}
            className="bg-pink-800 text-white px-4 py-2 rounded mb-2"
          >
            Select Image
          </button>
          <button
            onClick={handleUploadButtonClick}
            className="bg-pink-800 text-white px-4 py-2 rounded hover:bg-pink-700"
          >
            Upload Image
          </button>
        </div>
        {result && (
          <div className="mt-4">
            <p className="text-xl font-semibold">Prediction: {result}</p>
            <p className="text-lg">Confidence: {confidence}%</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UltrasoundImage;
