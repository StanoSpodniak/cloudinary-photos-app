"use client";

import Image from "next/image";
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
     <CldUploadButton
        onSuccess={(result) => {
          console.log(result);
        }}
        uploadPreset="trdcrx8s"
      >
        Upload to Cloudinary
      </CldUploadButton>

      <CldImage
        width="960"
        height="600"
        src="ukyglhxs2aghybhdvmcz"
        sizes="100vw"
        alt="Description of my image"
      />
    </main>
  );
}
