"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState(null);

  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  };

  return (
    <div className="flex flex-col gap-4 items-end mb-10">
      <label htmlFor={name}>{label}</label>
      <div className="relative flex justify-center p-4 text-center items-center text-sm w-44 h-44 xl:w-72 xl:h-72 border-2 border-neutral-300 opacity-70">
        {!pickedImage && <p>No image picked yet.</p>}
        {pickedImage && (
          <Image
            className="absolute w-full h-full object-cover"
            fill
            src={pickedImage}
            alt="The image picked bu the user"
          />
        )}
      </div>

      <div>
        <input
          className="hidden"
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg"
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          onClick={handlePickClick}
          type="button"
          className=" bg-orange-100 bg-opacity-10 py-2 px-4 text-sm sm:text-xl rounded-full text-orange-400 text-opacity-80 hover:text-orange-300  transition-all duration-300 ease-in-out "
        >
          Pick an image
        </button>
      </div>
    </div>
  );
}
