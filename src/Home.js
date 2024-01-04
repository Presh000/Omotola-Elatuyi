import React from "react";
import ImageGrid from "./components/imageGrid";
import Card from "./components/card";
// import { FontAwesome } from '@expo/vector-icons';
// import {reactComponent as Twitter} from './twitter.svg';
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react"; // import state

function Home() {
  const images = [
    { url: "https://picsum.photos/680", title: "Image 1" },
    { url: "https://picsum.photos/675", title: "Image 2" },
    { url: "https://picsum.photos/650", title: "Image 3" },
    { url: "https://picsum.photos/685", title: "Image 4" },
    { url: "https://picsum.photos/674", title: "Image 5" },
    { url: "https://picsum.photos/653", title: "Image 6" },
    { url: "https://picsum.photos/682", title: "Image 7" },
    { url: "https://picsum.photos/671", title: "Image 8" },
    { url: "https://picsum.photos/657", title: "Image 9" },
    // Add more images with titles as needed
  ];
  const cards = [
    {
      story:
        " I'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet,e developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consectetur ",
      url: "https://picsum.photos/680",
      title: "Image 1",
      work: "Image 1",
    },
    {
      story:
        " I'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consectetur ",
      url: "https://picsum.photos/680",
      title: "Image 2",
      work: "Image 1",
    },
    {
      story:
        " I'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consectetur ",
      url: "https://picsum.photos/680",
      title: "Image 3",
      work: "Image 1",
    },
    {
      story:
        " I'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consecteturI'm a software developer lorem ipsum dolor sit amet, consectetur ",
      url: "https://picsum.photos/680",
      title: "Image 4",
      work: "Image 1",
    },
  ];

  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
      <Header />
      <section className="bg bg-cover bg-center  justify-center brightness-75 flex flex-col sm:px-20 md:px-32 lg:px-58 px-5 py-20 ">
        <div className=" grid md:grid-cols-2 gap-4">
          <div class=" lg:text-6xl md:text-5xl sm:text-4xl text-3xl  font-bold text-white">
            Hello, I'm Omotola.
            <p
              style={{ lineHeight: "20px" }}
              class=" text-[1rem]   font-bold pt-3 sm:pt-5 text-white"
            >
              I'm a software developer lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed eu ante eget nisl convallis tempus. Phasellus
              ante lectus, tincidunt tincidunt dui a, rhoncus interdum est.
            </p>
          </div>
        </div>
      </section>
      <section className="flex flex-col shrink-0 sm:px-20 md:px-32 lg:px-58 px-5 py-10">
        <span className="text-[#EC2E57] font-bold  text-3xl py-5">
          Portfolio
        </span>
        <span className="text-xs">Check it out</span>
        <div className="pt-5 border-b-2 border-[#4A4A4A] w-12"></div>

        <div className="grid  pt-3">
          <ImageGrid images={images} />
        </div>
      </section>
      <section>
        <div className="container flex flex-col sm:px-20 md:px-32 lg:px-58 px-5 pt-10">
          <span className=" text-[#EC2E57] font-bold  text-3xl py-5">
            Kind Words
          </span>
          <span className="text-xs">
            Some nice things smart people I’ve worked with have to say about me
            #makingmeblush
          </span>
          <div className="pt-5 mb-3  border-b-2 border-[#4A4A4A] w-12"></div>
        </div>
        <div className=" grid   gap-y-4">
          <Card cards={cards} />
        </div>
      </section>
      <section className="bg bg-cover bg-center items-center justify-center flex  mt-10 flex-col  sm:px-20 md:px-32 lg:px-58 px-5 py-20">
        <div className="text-white text-center font-bold text-4xl">
          Read my book?
        </div>
        <button className="text-white bg-[#1AABAC] w-28 m-2 p-1">Get 1</button>
      </section>
      <section className=" sm:px-20 md:px-32 lg:px-58 px-5 py-10">
        <Footer />
      </section>
    </>
  );
}

export default Home;
