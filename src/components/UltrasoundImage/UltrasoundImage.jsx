
import { useRef, useState } from 'react'
import upload from '../../assets/uploadpic2.png'

const UltrasoundImage = () => {
  const inputRef = useRef(null);
  const [image, setImage] = useState("");

  const handleImageClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = () => {
    const file = event.target.file[0];
    console.log(file);
    setImage('');
  };
  return (
    <>
      <div className='p-2 flex justify-content-center align-items-center h-10'>
        <div>
          <label htmlFor="image-upload-input" className="image-upload-label">
            {image ? image.name : "Choose an image"}
          </label>
          <div onClick={handleImageClick} style={{ cursor }}>
            <img src={upload} alt="" />
            {image ? (
              <img src={URL.createObjectURL(image)} alt="" />
            ) : (
              <img src={upload} alt="" />
            )}
            <input type="file" ref={inputRef} onChange={handleImageChange} style={{ display: 'none' }} />
            <div>
              <button className='bg-pink-800 border rounded-lg text-white p-3'>Upload Image</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default UltrasoundImage