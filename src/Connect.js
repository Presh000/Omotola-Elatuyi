import React from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Footer from "./components/Footer";

const Connect = () => {
  return (
    <>
      <Header />
      <section className=" bg-[#E6F3F1] flex flex-col shrink-0 sm:px-20 md:px-32 lg:px-58 px-5 py-10">
        <div className="grid lg:grid-cols-2 lg:gap-36 gap-4 items-center justify-center  ">
          <div>
            <div className="text-4xl lg:text-5xl pb-3  font-bold text-[#EC2E57]">
              Let's connect!
            </div>
            <p className=" text-xl font-bold pt-3 text-[#2E3755]">
              I’d love to hear from you; whether you want to learn more about my
              services, want to collaborate on a project, or simply just want to
              say hello.
            </p>
            <p className=" text-xl font-bold pt-3 text-[#2E3755]">
              You can fill out the form on the left or get in touch with me at
              tola@yahoo.com
            </p>
          </div>
          <Form />
        </div>
      </section>
      <section className=" sm:px-20 md:px-32 lg:px-58 px-5 py-10">
        <Footer />
      </section>
    </>
  );
};

export default Connect;
