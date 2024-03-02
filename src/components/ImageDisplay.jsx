import React, { useState } from "react";
import rgbHex from "rgb-hex";

const ImageDisplay = ({ uploadedImage, colorPalette, uploadImage }) => {
  const [copied, setCopied] = useState("");

  return (
    <div className="h-full flex flex-col items-center justify-center ">
      {uploadedImage ? (
        <div className="flex flex-col 2xl:flex-row min-[2100px]:flex-col items-center justify-center relative">
          <img
            className="h-[60vh] w-[100vw] md:h-[50vh] md:w-[90vw] xl:w-[60vw] rounded-2xl overflow-hidden object-cover"
            src={uploadedImage}
            alt="uploaded"
          />
          <img
            className="h-[70vh] w-[70vw] rounded-2xl overflow-hidden object-cover absolute blur-[10rem] z-[-1] mt-[-17rem] opacity-50"
            src={uploadedImage}
            alt="uploaded"
          />

          <div className="flex gap-4 m-10 flex-row  flex-wrap  w-[100vw] lg:w-[90vw] xl:w-[60vw] 2xl:h-[50vh] 2xl:w-[22vw] 2xl:max-w-[30rem] min-[2100px]:h-[10vh] min-[2100px]:w-[50vw] min-[2100px]:max-w-[150rem] min-[2100px]:mt-16 justify-center items-center">
            {colorPalette.map((color, index) => {
              const colorStr = color.join(",");
              return (
                <div
                  style={{ backgroundColor: `rgb(${colorStr})` }}
                  className="md:h-32 md:w-32 h-28 w-28 min-[2100px]:h-[12rem] min-[2100px]:w-[12rem] rounded-full  ease-in-out duration-[500ms] flex items-center justify-center cursor-pointer hover:scale-110"
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
                    {copied === `#${rgbHex(color[0], color[1], color[2])}` ? (
                      <div className="flex items-center justify-center ">
                        <span
                          className="material-symbols-outlined mr-1"
                          style={{ transition: "ease-in-out, 1000ms" }}
                        >
                          check_circle
                        </span>
                        <span
                          style={{
                            transition: "ease-in-out, 1000ms",
                            textShadow: "2px 2px 15px rgba(1,1,1,0.8)",
                          }}
                          className="font-[300] mt-1"
                        >
                          Copied
                        </span>
                      </div>
                    ) : (
                      <div
                        className="flex items-center justify-center "
                        style={{ transition: "ease-in-out, 1000ms" }}
                      >
                        <span
                          className="material-symbols-outlined mr-1"
                          style={{
                            transition: "ease-in-out, 1000ms",
                            textShadow: "2px 2px 15px rgba(1,1,1,0.8)",
                          }}
                        >
                          content_copy
                        </span>
                        <span
                          style={{
                            transition: "ease-in-out, 1000ms",
                            textShadow: "2px 2px 15px rgba(1,1,1,0.8)",
                          }}
                          className="font-[300] mt-1"
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
        <div className="flex items-center justify-center mt-[8rem]">
          <label
            htmlFor="file"
            className="rounded-xl  border-2 border-neutral-600 cursor-pointer"
          >
            <div className="flex flex-col items-center justify-between gap-2 h-[40vh] w-[50vh] p-4">
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
