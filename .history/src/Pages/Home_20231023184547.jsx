import React from 'react'

import Nav from '../Components/Nav/Nav';
import img from "../Images/profile.jpeg"
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="App" class="dark md:bg-black ">
    <Nav />
    <div class="grid grid-cols-1 md:grid-cols-2 h-screen dark dark:bg-black gap-4  ">
      <div class="grid grid-cols-1 justify-center items-center m-8 ">
        <div class="md:w-full dark:bg-black rounded-lg   shadow-xl  ">
          <div class=" md:grid md:grid-rows-1  ">
            <div class="">
              <img
                class="h-48 w-full object-cover md:h-full md:w-48 rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2"
                src={img}
            
              />
            </div>
          </div>
          <Link to="/work">
          <div>
            <label class="text-4xl dark:text-white font-serif">
              Im Rishika,a Software Developer
            </label>
          </div>
          </Link>
          <p class="text-slate-400 dark:text-slate-400 mt-2 text-sm mb-1.5">
          Hi I'm a self motivated individual and a passionate software developer
           with expertise in building web applications,apps using technologies like React,Node,Android,Flutter apps ..

          </p>
          <label class="  text-xs underline underline-offset-8 font-serif dark:text-white">
            BROWSE PORTFOLIO
          </label>
        </div>
      </div>
      <div class=" md:grid md:grid-rows-2 md:gap-4 divide-y divide-dashed dark md:bg-black m-8">
    
      <Link to="/about">
        <div class=" dark:dark:bg-black rounded-lg px-6 py-8 ring-1 ring-slate-900 shadow-xl">
        
          <div>
            <label class=" dark:text-white text-xs font-serif">
              ABOUT ME
            </label>
          </div>

          <p class=" dark:text-slate-400 mt-2 text-sm mb-1.5">
          I like exploring new technologies , I believe in continuous learning and staying up-to-date with the ever-evolving tech landscape.

          </p>
        
          <label class="  text-xs underline underline-offset-8 font-serif dark:text-white">
            KNOW MORE
          </label>
      
        </div>
        </Link>
        <div class=" dark:dark:bg-black rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
          <div>
            <label class=" dark:text-white text-xl font-serif text-xs">
              {" "}
              MY WORK
            </label>
          </div>

          <p class=" dark:text-slate-400 mt-2 text-sm mb-1.5">
          My journey in the world of coding started in 2015 as Android Developer.
          </p>
          <label class="  text-xs underline underline-offset-8 font-serif dark:text-white">
            BROWSE PORTFOLIO
          </label>
        </div>
      </div>
    </div>
      </div>
  )
}

export default Home