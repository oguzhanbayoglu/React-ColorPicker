import React, { useState } from "react";
import ColorThief from "colorthief";
import ImageDisplay from "./components/ImageDisplay";
import Footer from "./components/Footer";

const App = () => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [colorPalette, setPalette] = useState(null);
  // const [dominantColor, setDominantColor] = useState(null);

  const uploadImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const img = new Image();

      img.onload = () => {
        const colorThief = new ColorThief();
        const colorPalette = colorThief.getPalette(img, 9);
        setUploadedImage(event.target.result);
        setPalette(colorPalette);
        console.log(colorPalette);
      };
      img.src = event.target.result;
    };

    reader.readAsDataURL(file);
  };

  return (
    <div className="h-full min-h-full flex flex-col items-center justify-center ">
      <header className=" text-white flex flex-col justify-between items-center p-4 gap-4">
        <h1 className="text-[2rem] md:text-[3rem] lg:text-[5rem] mt-16">
          <span className="font-thin">Color</span>{" "}
          <span className="font-black">Palette</span>{" "}
          <span className="font-thin">Generator</span>
        </h1>
        <div className="flex items-center justify-center">
          <label
            htmlFor="file"
            className="p-2 px-4 rounded-xl border-2 border-[rgba(255,255,255,0.25)] cursor-pointer"
          >
            <div className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-lg">image</span>
              <p className="mt-1 font-thin">Upload Image</p>
            </div>
          </label>
          <input hidden type="file" id="file" onChange={uploadImage} />
        </div>
      </header>

      <main className="  text-white flex justify-center items-start lg:items-center flex-[1] h-full">
        <div className="mt-[3rem] lg:mt-[-5rem]">
          <ImageDisplay
            uploadImage={uploadImage}
            uploadedImage={uploadedImage}
            colorPalette={colorPalette}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
