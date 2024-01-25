import React, { useState } from "react";
import rgbHex from "rgb-hex";

const ImageDisplay = ({ uploadedImage, colorPalette, uploadImage }) => {
  const [copied, setCopied] = useState("");

  return (
    <div className="h-full flex flex-col items-center justify-center ">
      {uploadedImage ? (
        <div className="flex flex-col items-center justify-center relative">
          <img
            className="h-[50vh] w-[50vw] rounded-2xl overflow-hidden object-cover"
            src={uploadedImage}
            alt="uploaded"
          />
          <img
            className="h-[70vh] w-[70vw] rounded-2xl overflow-hidden object-cover absolute blur-[10rem] z-[-1] mt-[-17rem] opacity-50"
            src={uploadedImage}
            alt="uploaded"
          />

          <div className="flex gap-4 m-10 flex-row flex-wrap h-[10vh] w-[50vw] justify-center">
            {colorPalette.map((color, index) => {
              const colorStr = color.join(",");
              return (
                <div
                  style={{ backgroundColor: `rgb(${colorStr})` }}
                  className="h-32 w-32 rounded-full ease-in-out duration-[500ms] flex items-center justify-center cursor-pointer hover:scale-110"
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
                  <div className="flex items-center justify-center">
                    {copied == `#${rgbHex(color[0], color[1], color[2])}` ? (
                      <span
                        className="material-symbols-outlined "
                        style={{ transition: "ease-in-out, 1000ms" }}
                      >
                        check_circle
                      </span>
                    ) : (
                      <div
                        className="flex items-center justify-center "
                        style={{ transition: "ease-in-out, 1000ms" }}
                      >
                        <span
                          className="material-symbols-outlined mr-1"
                          style={{ transition: "ease-in-out, 1000ms" }}
                        >
                          content_copy
                        </span>
                        <span
                          style={{ transition: "ease-in-out, 1000ms" }}
                          className="font-[300]"
                        >
                          {"  "}
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

              <p className="mt-2 text-lg font-[200]">Upload Image to Start</p>
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
