import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProgressBar from "./components/ProgressBar";

// import { FontAwesome } from '@expo/vector-icons';
// import {reactComponent as Twitter} from './twitter.svg';
// import { FaTwitterSquare } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <>
      <Header />
      <section className=" bg-[#E6F3F1] bg-cover bg-centerflex flex-col  justify-center sm:px-20 md:px-32 lg:px-58 px-5 py-5 md:py-10 lg:py-20 ">
        <div className=" grid lg:grid-cols-2 gap-4">
          <div>
            <div className="text-4xl lg:text-5xl pb-3 lg:w-1 xl:w-1 font-bold text-[#EC2E57]">
              Omotola Elatuyi
            </div>
            <span className="text-[#2E3755]"> But you can call me Tola</span>
            <p className=" text-xl font-bold pt-3 text-[#2E3755]">
              I’m a growth marketer, digital strategist, entrepreneur and brand
              builder who loves fresh ideas, ambitious challenges, fast-paced
              startups and energizing conversations.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://picsum.photos/560"
              alt="image 1"
              className=" max-w-[60%] h-auto shrink-0  object-cover mr-4 mt-4 border-2 border-[#FAE9D2]"
            />
          </div>
        </div>
      </section>
      <section className="  flex flex-col shrink-0  sm:px-20 md:px-32 lg:px-58 px-5 py-10">
        <h2 className="text-[#EC2E57]  text-3xl font-bold  py-5">My Journey</h2>
        <div className="pt-5 border-b-2 border-[#4A4A4A] w-12"></div>

        <div className="grid lg:grid-cols-2 gap-4">
          <div className="">
            <img
              src="https://picsum.photos/780"
              alt="image 1"
              className=" w-full h-auto  object-cover mr-4 mt-4 border-2 border-[#FAE9D2]"
            />
            <img
              src="https://picsum.photos/580"
              alt="image 2"
              className=" w-full h-auto  object-cover mr-4 mt-4 border-2 border-[#FAE9D2]"
            />
          </div>
          <div>
            <p className="pb-5">
              I am an energetic, visionary and passionate expert in the crafting
              and implementation of consumer-centric and resonant marketing
              strategies. A visionary leader, team player, strong influencer
              with experience in global FMCG & Financial sectors. I also have an
              impressive track record in leading targeted consumer activations
              through purposeful marketing. Experience: 20+ years
            </p>
            <p className="pb-5 order-1">
              In 2018, got personal recognition from Commissioners of Health in
              Abia, Ogun and Lagos State on Malaria Prevention initiatives. In
              2016, I got a personal recognition award from the Global CEO of
              Reckitt Benckiser for my contribution in sustaining and managing
              the Partnership with Save the Children towards the reduction of
              Diarrhea in Nigeria. In 2020, My team and I won the Africa Pride
              Awards for Innovation at Guinness (A Diageo Company
            </p>
            <p className="pb-5">
              KEY COMPETENCIES . Developed Strong Consumer-Centric Marketing
              Expertise  . Securing Key Stakeholders Alignments And Buy-In On
              Strategic Initiatives . Financial Acumen Requisite to Managing
              Portfolio Profitability  . Managing Innovation Processes Which
              Embrace New Ideas And Solutions That Drives Sustainable Business
              Growth;  . Lead and Co-create Sustainability Plans with
              Government Bodies  . Collaborating With Both Internal And
              External Customers And Key Stakeholders To Deliver Results;
            </p>
          </div>
        </div>
      </section>
      <section className=" bg-[#E6F3F1] bg-cover bg-center  justify-center flex flex-col sm:px-20 md:px-32 lg:px-58 px-5 py-10">
        <h2 className="text-[#EC2E57] font-bold  py-5">About me</h2>
        <div className="pt-5 border-b-2 border-[#4A4A4A] w-12"></div>

        <div className="grid lg:grid-cols-2 py-3 gap-4">
          <div>
            <h3 className="font-bold pb-2 ">Who am I?</h3>
            <p className="pb-5">
              I’m a growth marketer, digital strategist and brand builder who
              thrives off a challenge. I’m a social butterfly who loves people
              and building meaningful connections. I’m a leader, a doer and a
              life-long learner.
            </p>
            <p className="pb-5">
              I’m strategic and tactical, a visionary who loves the details,
              creative, yet practical. I care about tangible results and
              exceptional work.
            </p>
            <p className="pb-5">
              People often describe me as: authentic, driven and passionate.
              Which pretty much means that I really care.
            </p>

            <h3 className="font-bold pb-2">Who am I?</h3>
            <p className="pb-5">
              Competition, Ideation, Winning Others Over (WOO), Achiever,
              Activator
            </p>

            <h3 className="font-bold pb-2">Favourite Business Books</h3>
            <p className="pb-5">
              Grit: The Power of Passion and Perseverance by Angela Duckworth
              The Art of Possibility by Rosamund Stone Zander The Hard Thing
              About Hard Things by Ben Horowitz
            </p>
          </div>
          <div>
            <h3 className="font-bold pb-2">Skills & expertises</h3>
            <div className="pb-5">
              <p className="pb-3">Digital marketing</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
              </div>
            </div>
            <div className="pb-5">
              <p className="pb-3">Motivational speaking</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
              </div>
            </div>
            <div className="pb-5">
              <p className="pb-3">Partnership Marketing</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
              </div>
            </div>
            <div className="pb-5">
              <p className="pb-3">Social Strategy and Community Management</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
              </div>
            </div>
            <div className="pb-5">
              <p className="pb-3">Business Service Managerg</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
              </div>
            </div>
            <div className="pb-5">
              <p className="pb-3">Brand management and aquisition</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
              </div>
            </div>
            <div className="pb-5">
              <p className="pb-3">Conferences, Events & Sponsorships</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
              </div>
            </div>
            <div className="pb-5">
              <p className="pb-3">Global Marketing and Expansiong</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
              </div>
            </div>
            <div className="pb-5">
              <p className="pb-3">Project manager</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
              </div>
            </div>
            <div className="pb-5">
              <p className="pb-3">Leadership and Team building</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full w-[45%]"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" flex flex-col shrink-0 sm:px-20 md:px-32 lg:px-58 px-5 py-10">
        <div className="grid lg:grid-cols-2 gap-4">
          <div>
            <h3 className="font-bold  pb-5 ">Education</h3>
            <p className="font-bold text-black pb-3">
              -PH. D, International Business Mgt ISM, Paris
            </p>
            <p className="font-bold text-black pb-3">
              -M.Sc Marketing University of Lagos
            </p>
            <p className="font-bold text-black pb-3">
              -B.Sc. (Hons) Insurance. University of Lagos
            </p>
          </div>
          <div>
            <h3 className="font-bold  pb-5 ">Experience</h3>
            <div>
              <p className="text-[#4A4A4A] font-bold ">
                -Aiico Insurance Plc Underwriting Assistant
              </p>
              <span>January 2000 – December 2000</span>
            </div>
            <div>
              <p className="text-[#4A4A4A] font-bold">
                -Heritage Bank Business and Strategy Development Manager
              </p>
              <span>January 2001 – October 2004</span>
            </div>
            <div>
              <p className="text-[#4A4A4A] font-bold">
                -Cadbury – Kraft Nigeria Category Manager - Innovation Beverage
              </p>
              <span>November 2004 – November 2007</span>
            </div>
            <div>
              <p className="text-[#4A4A4A] font-bold">
                – Polaris Bank Nigeria PLC Business Service Manager
              </p>
              <span>November 2007 – October 2009</span>
            </div>
            <div>
              <p className="text-[#4A4A4A] font-bold">
                -Unilever Nigeria/Middle East Head, Shopper & Customer Marketing
              </p>
              <span>November 2009 – November 2013</span>
            </div>
            <div>
              <p className="text-[#4A4A4A] font-bold">
                – Reckitt Benckiser Nigeria Marketing & Activations Lead, West
                Africa
              </p>
              <span>December 2013 – May 2018</span>
            </div>
            <div>
              <p className="text-[#4A4A4A] font-bold">
                – Guinness – Marketing Manager Innovation
              </p>
              <span>June, 2018 – July 2020</span>
            </div>
            <div>
              <p className="text-[#4A4A4A] font-bold">
                – Pladis Global – Marketing Director
              </p>
              <span>Nov, 2020 – Till Date</span>
            </div>
            <div>
              <h3 className="font-bold pt-7 pb-3">Achievements</h3>
              <div>
                <a className="">
                  <button className="transition ease-in-out delay-0    hover:bg-[#338c8c] duration-150 hover:text-white bg-[#1AABAC] px-5 py-3  w-full">
                    Check out my LinkedIn
                  </button>
                </a>
              </div>
            </div>
            <div>
              <p className="font-bold text-center text-black pt-8">
                My team and I lead the National /Federal symposiums on Malaria
                Prevention and has been in the fore front of malaria eradication
                programs in Nigeria partnering with Federal Government and state
                stake holders.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="  bg-[#E6F3F1] bg-cover bg-center justify-center flex flex-col sm:px-20 md:px-32 lg:px-58 px-5 py-10">
        <h2 className="text-[#EC2E57] font-bold  py-4">
          Outside of my work life
        </h2>
        <span className="">
          because I do have a life. And I’m all about ‘work hard, play hard.’
        </span>
        <div className="pt-5 border-b-2 border-[#4A4A4A] w-12"></div>

        <div className=" container  py-3 grid lg:grid-cols-2 gap-4">
          <div>
            <h1 className="font-bold  pb-5 text-[1.75rem] text-[#4A4A4A]">
              I am a dinner & party enthusiast.
            </h1>
            <p className=" font-normal">
              Fact: Me and my core group of friends love to spend time having
              dinners reconnecting with old friends and just partying to have
              fun and take a break from work.
            </p>
          </div>
          <div className="flex justify-center ">
            <img
              src="https://picsum.photos/687"
              alt="image 1"
              className=" w-[50%] h-auto  object-cover mr-4  border-2 border-[#FAE9D2]"
            />
          </div>
        </div>
      </section>
      <section className=" sm:px-20 md:px-32 lg:px-58 px-5 py-10">
        <Footer />
      </section>
    </>
  );
};

export default About;
