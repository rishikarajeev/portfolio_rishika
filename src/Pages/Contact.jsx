import React from "react";
import Nav from "../Components/Nav/Nav";

function Contact() {
  return (
    <div className="App" class="dark md:bg-black ">
      <Nav />
      <div className="dark:dark:bg-black min-h-screen flex items-center justify-center p-8">
        <div className="max-w-2xl p-8 bg-black  text-white shadow-md rounded-md ring-1 ring-slate-900 ">
          <h1 className="p-8 font-bold text-white mb-4">Contact Us</h1>
          <ul className="list-disc pl-6">
        
              <h2>rishjb@gmail.com</h2>
              <h2>+97471157548</h2>
          
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
