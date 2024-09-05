import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import CardWrapper from '../ui/CardWrapper';

const initialImages = [
  "/src/assets/test.jpeg",
  "/src/assets/test.jpeg",
  "/src/assets/test.jpeg",
  "/src/assets/test.jpeg",
];

const PhotoWidget = () => {
  const [images, setImages] = useState(initialImages);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

  const handleNext = () => {
    if (currentIndex < images.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageUrl = URL.createObjectURL(file);
      setImages([...images, newImageUrl]);

      // Show success alert
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000); // Hide alert after 3 seconds
    }
  };

  return (
    <CardWrapper className="w-full xl:w-[720px] xl:h-[316px]">
      <div className="flex justify-between items-center">
        <p className='text-xl bg-[#171717] inline-block py-3.5 px-10 rounded-2xl text-white'>Gallery</p>
        <div className="flex justify-between w-1/2 items-center">
          <label
            htmlFor="image-upload"
            className='uppercase text-white text-xs py-3 px-7 rounded-full bg-[#3B434E] flex items-center shadow-[0_-2px_4px_#FFFFFF60,0_4px_6px_#00000080] cursor-pointer'
          >
            <span>+ add image</span>
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleAddImage}
          />
          <div className="flex space-x-4 text-xl">
            <button
              onClick={handlePrev}
              className="p-2 bg-[#26292e] rounded-full shadow-[0_0_10px_#B0BEC560,0_0_20px_#00000080]"
            >
              <FaArrowLeft className="text-[#9AA5B1]" />
            </button>
            <button
              onClick={handleNext}
              className="p-2 bg-[#26292e] rounded-full shadow-[0_0_10px_#B0BEC560,0_0_20px_#00000080]"
            >
              <FaArrowRight className="text-[#9AA5B1]" />
            </button>
          </div>
        </div>
      </div>

      {showAlert && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
          Image added successfully!
        </div>
      )}

      <div className="overflow-hidden mt-10">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="flex-none w-1/3 px-2">
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="rounded-2xl shadow-lg grayscale object-cover h-[179px] w-[190px]"
              />
            </div>
          ))}
        </div>
      </div>
    </CardWrapper>
  );
};

export default PhotoWidget;
