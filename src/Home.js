import React from "react";
import ImageGrid from "./components/imageGrid";
import Card from "./components/card";
// import { FontAwesome } from '@expo/vector-icons';
// import {reactComponent as Twitter} from './twitter.svg';
import { FaTwitterSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import AppRouter from "./components/AppRouter";

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

  return (
    <>
      <AppRouter />
      <div>
        <nav>
          <div className="flex  justify-between p-8 px-40 items-end ">
            <div>
              <span className="text-3xl font-semibold">Omotola Elatuyi</span>
            </div>
            <ul className="flex ">
              <li>
                <a
                  href="#"
                  className="block px-3 text-[#1AABAC] font-bold text-s"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#kindWords"
                  className="block px-3 text-[#1AABAC] font-bold text-s"
                >
                  Kind words
                </a>
              </li>
              <li>
                <a
                  href="./about.js"
                  className="block px-3 text-[#1AABAC] font-bold text-s"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-3 text-[#1AABAC] font-bold text-s"
                >
                  Say Hi!
                </a>
              </li>
            </ul>
          </div>
        </nav>

        <section className="bg bg-cover bg-center h-[75vh] flex  justify-center brightness-75 flex-col">
          <div className=" grid grid-cols-9 gap-4">
            <div class="col-start-3 col-span-4  text-6xl font-bold text-white">
              Hello, I'm Omotola.
            </div>
            <div class="col-start-3 col-span-3  text-xl font-bold text-white">
              I'm a software developer lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed eu ante eget nisl convallis tempus. Phasellus
              ante lectus, tincidunt tincidunt dui a, rhoncus interdum est.
            </div>
          </div>
        </section>
        <section className="px-5  flex flex-col sm:px-20 md:px-48 lg:px-72 shrink-0">
          <span className="text-[#EC2E57] font-bold text-4xl py-5">
            Portfolio
          </span>
          <span className="text-xs">Check it out</span>
          <div className="pt-5 border-b-2 border-[#4A4A4A] w-12"></div>

          <div className="grid  pt-3">
            <ImageGrid images={images} />
          </div>
        </section>
        <section className=" pt-16  " id="kindWords">
          <div className="container flex flex-col">
            <span className=" text-[#EC2E57] font-bold text-4xl py-5">
              Kind Words
            </span>
            <span className="text-xs">
              Some nice things smart people I’ve worked with have to say about
              me #makingmeblush
            </span>
            <div className="pt-5 mb-3  border-b-2 border-[#4A4A4A] w-12"></div>
          </div>
          <div className="lg:px-64  grid  pt-3 gap-y-4">
            <Card cards={cards} />
          </div>
        </section>
        <section className="bg bg-cover bg-center h-[35vh] flex items-center justify-center flex-col mt-44">
          <div className="text-white text-center font-bold text-3xl">
            Read my book?
          </div>
          <button className="text-white bg-[#1AABAC] w-28 m-2 p-1">
            Get 1
          </button>
        </section>
        <section>
          <footer>
            <div className="flex  justify-between p-8 px-40 items-end ">
              <div>
                <span className="text-xs font-normal">
                  © 2024 Omotola elatuyi
                </span>
              </div>
              <ul className="flex ">
                <li>
                  <a href="#" className="block px-3 text-[#1AABAC]  ">
                    Send me an email
                  </a>
                </li>
                <li className="border-s-2 border-[#4A4A4A]">
                  <a href="#" className="block px-3 text-[#1AABAC] ">
                    <FaTwitterSquare size={24} color="#1AABAC" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 text-[#1AABAC] font-bold text-s"
                  >
                    <FaLinkedin size={24} color="#1AABAC" />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-3 text-[#1AABAC] font-bold text-s"
                  >
                    <FaInstagram size={24} color="#1AABAC" />
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </section>
      </div>
    </>
  );
}

export default Home;
