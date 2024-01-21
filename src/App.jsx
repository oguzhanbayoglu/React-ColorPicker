import React, { useState } from "react";
import ColorThief from "colorthief";
import ImageDisplay from "./components/ImageDisplay";

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPalette, setPalette] = useState(null);
  const [dominantColor, setDominantColor] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();

      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 10);
        setUploadedImage(event.target.result);
        setPalette(colorPalette);
        console.log(colorPalette);
      };
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="h-full min-h-full flex flex-col">
      <header className="bg-black text-white flex justify-between items-center p-4">
        <h1 className=" text-xl ">Header</h1>
        <div className="flex items-center justify-center">
          <label
            htmlFor="file"
            className="p-2 px-4 rounded-xl  border-2 border-neutral-600 cursor-pointer"
          >
            <div className="flex items-center justify-between gap-2">
              <span className="material-symbols-outlined text-lg">image</span>
              <p>Upload Image</p>
            </div>
          </label>
          <input hidden type="file" id="file" onChange={uploadImage} />
        </div>
      </header>

      <main className=" bg-black text-white flex justify-center items-center flex-[1] h-full">
        <div>
          <ImageDisplay
            uploadImage={uploadImage}
            uploadedImage={uploadedImage}
            colorPalette={colorPalette}
          />
        </div>
      </main>
    </div>
  );
};

export default App;
