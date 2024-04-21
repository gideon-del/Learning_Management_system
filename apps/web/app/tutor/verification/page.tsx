"use client";

import { Image as ImageIcon } from "lucide-react";
import Image from "next/image";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

const Verification = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const uploadImage = () => {
    inputRef?.current?.click();
  };
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      const mainFile = files[0];

      if (!mainFile.type.includes("image/") || !mainFile.type) {
        toast.error("Upload an image");
        return;
      }
      setFile(mainFile);
      const fileReader = new FileReader();

      fileReader.readAsDataURL(files[0]);
      fileReader.addEventListener("loadend", (e) => {
        setSelectedImage(fileReader.result as string);
      });
    }
  };
  return (
    <main className="min-h-screen grid place-items-center">
      <section className="max-w-[500px] w-4/5">
        <h1 className="font-semibold text-xl text-center mb-8">Verification</h1>
        <input
          hidden
          type="file"
          ref={inputRef}
          onChange={handleInput}
          accept="image/*"
          name="id-card"
        />
        <div className="w-full  border-dashed min-h-80 border-4 rounded-md px-5 py-10 flex gap-3  flex-col items-center justify-center">
          {selectedImage ? (
            <Image
              src={selectedImage}
              alt=""
              className="w-4/5 min-h-32"
              width={400}
              height={400}
            />
          ) : (
            <ImageIcon size={124} color="gray" />
          )}
          <p>Upload an ID card for verification</p>
          <div className="flex w-full gap-4 justify-center ">
            <button
              className="bg-black max-w-28 h-8 w-4/5  rounded-md text-sm text-white block"
              onClick={uploadImage}
            >
              Upload
            </button>
            <button
              className="bg-black max-w-28 h-8 w-4/5 disabled:cursor-not-allowed disabled:bg-black/30 rounded-md text-sm text-white block"
              disabled={!selectedImage}
            >
              Submit
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Verification;
