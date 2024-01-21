import React from "react";

const ImageDisplay = ({ uploadedImage, colorPalette, uploadImage }) => {
  return (
    <div className="h-full flex flex-col items-center justify-center">
      {uploadedImage ? (
        <div className="flex flex-col items-center justify-center">
          <img
            className="h-[50vh] w-[50vw] border-2 border-white rounded-2xl overflow-hidden object-cover"
            src={uploadedImage}
            alt="uploaded"
          />
          <div className="flex gap-4">
            {colorPalette.map((color, index) => {
              const colorStr = color.join(",");
              console.log(colorStr);
              return (
                <div
                  style={{ backgroundColor: `rgb(${colorStr})` }}
                  className="h-16 w-16 rounded-full"
                ></div>
              );
            })}
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default ImageDisplay;

//className={`h-4 w-4 bg-[rgb(${color[0]},1,1)]`}
