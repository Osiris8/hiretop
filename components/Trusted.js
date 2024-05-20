"use client";
import React from "react";
import Image from "next/image";
import logo1 from "../public/images/logo-cloud/logo1.svg";
import logo2 from "../public/images/logo-cloud/logo2.svg";
import logo3 from "../public/images/logo-cloud/logo3.svg";
import logo4 from "../public/images/logo-cloud/logo4.svg";
import logo5 from "../public/images/logo-cloud/logo5.svg";
export default function Trusted() {
  return (
    <section>
      <div class="px-8 py-24 mx-auto md:px-12 lg:px-32 max-w-7xl">
        <div class="grid grid-cols-2 gap-0.5 md:grid-cols-5">
          <div class="flex justify-center col-span-1 px-8">
            <Image className="max-h-12" src={logo1} alt="logo" />
          </div>
          <div class="flex justify-center col-span-1 px-8">
            <Image className="max-h-12" src={logo2} alt="logo" />
          </div>
          <div class="flex justify-center col-span-1 px-8">
            <Image className="max-h-12" src={logo3} alt="logo" />
          </div>
          <div class="flex justify-center col-span-1 px-8">
            <Image className="max-h-12" src={logo4} alt="logo" />
          </div>
          <div className="flex justify-center col-span-1 px-8">
            <Image class="max-h-12" src={logo5} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
}
