import React, { useState } from "react";
import rgbHex from "rgb-hex";

const ImageDisplay = ({ uploadedImage, colorPalette, uploadImage }) => {
  const [copied, setCopied] = useState("");

  return (
    <div className="h-full flex flex-col items-center justify-center ">
      {uploadedImage ? (
        <div className="flex flex-col items-center justify-center">
          <img
            className="h-[50vh] w-[50vw] rounded-2xl overflow-hidden object-cover"
            src={uploadedImage}
            alt="uploaded"
          />
          <div className="flex gap-4 m-10">
            {colorPalette.map((color, index) => {
              const colorStr = color.join(",");
              return (
                <div
                  style={{ backgroundColor: `rgb(${colorStr})` }}
                  className="h-32 w-32 rounded-full ease-in-out duration-[2000ms] flex items-center justify-center cursor-pointer"
                  onClick={() => {
                    setCopied(`#${rgbHex(color[0], color[1], color[2])}`);
                    setTimeout(() => {
                      setCopied("");
                    }, 1000);
                    navigator.clipboard.writeText(
                      `#${rgbHex(color[0], color[1], color[2])}`
                    );
                  }}
                >
                  <div>
                    {copied == `#${rgbHex(color[0], color[1], color[2])}` ? (
                      <span className="material-symbols-outlined ">
                        check_circle
                      </span>
                    ) : (
                      <div className="flex items-center justify-center ">
                        <span className="material-symbols-outlined ">
                          content_copy
                        </span>
                        <span>
                          {" "}
                          {`#${rgbHex(color[0], color[1], color[2])}`}{" "}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center">
          <label
            htmlFor="file"
            className="rounded-xl  border-2 border-neutral-600 cursor-pointer"
          >
            <div className="flex flex-col items-center justify-between gap-2 h-[30vh] w-[30vh] p-4">
              <span className="material-symbols-outlined text-[3vh] border-2 border-neutral-600 rounded-lg h-full w-full flex-1 flex items-center justify-center">
                image
              </span>

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
