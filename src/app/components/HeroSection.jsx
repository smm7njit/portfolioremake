"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
      <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">Mourtada Mbaye</h1>
      <p className="text-[#ADB7BE] text-lg lg:text-xl">Web Developer | Web Designer | Networking</p>
      </div>
      <div className="col-span-5">
        <Image
          src="/images/pic.png"
          alt="Hero image"
          width={300}
          height={300}
          />
      </div>
      </div>
    </section>
  );
};

export default HeroSection;
