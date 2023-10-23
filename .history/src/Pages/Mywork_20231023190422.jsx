import React from "react";
import Work from "../Components/Work";
import Project from "../Components/Project";
import Nav from "../Components/Nav/Nav";

function Mywork() {
  return (
    <div class="dark md:bg-black ">
      <Nav />

      <div>
        {" "}
        <div className="container mx-auto  dark dark:bg-black">
          <h2 className="text-3xl font-bold mb-2 ">Work Experience</h2>
          
          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 dark dark:bg-black">
            <div className="dark md:bg-black">
              <Work
                title="Software Developer"
                description="Worked on various Software Products"
                year="2018-2022"
              />
              <h2 className="text-3xl font-bold mt-6 mb-1">Projects</h2>
              <Project
                title="Routepro(Product)"
                description=" Its objective is to automate the Van Salesman’s daily activities, it’s a Multipurpose Hybrid Software that covers Presales / Merchandising, Route Sales and Route Delivery Operations."
                techStack="Flutter,Javascript,Jquery,Java"
              />
              <div className="dark:text-slate-400 ring-1 ring-slate-900 max-w-2xl p-8 dark dark:bg-black">
                <h2 className="text-white"> Product Details</h2>
                <ul>
                  <li>Worked on B2B Platform</li>
                  <li>Worked on MVC framework</li>
                  <li>Worked on Upgrading products </li>
                  <li>
                    Understand and Mapping Client requirements / enhancements to
                    the product and implementing solutions that effectively
                    resolve problems and provide improvements.
                  </li>
                  <li>
                    Maintaining all module such as Inventory, Presales, Van
                    Sales & Merchandising.
                  </li>
                  <li>Provided Client-side customer support and training.</li>
                  <li>
                    Design different screen sizes for apps with Mediaquery.
                  </li>
                  <li>
                    Worked on Printer codes for 3inch, 4inch & Zebra Printers.
                  </li>
                  <li>
                    Worked in upgrading the Routepro with new functionalities in
                    case of batches.
                  </li>
                  <li>Worked on design changes and optimize app.</li>
                  <li>
                    Connected with printers through Bluetooth connectivity and
                    Printing.
                  </li>
                </ul>
              </div>
            </div>
            <div>
            <Work
                title="Android Developer"
                description="Worked on various android applications."
                year="2015-2018"
              />
              <h2 className="text-3xl font-bold mt-6 mb-1">Projects</h2>
              <Project
                title="Zayed Foundation Events"
                description=" Listing,showing ,Downloading the events conducted by Zayed foundation"
                techStack="Android"
                Playstore=" URL: https://play.google.com/store/apps/details?id=com.zayedprize.zayedevents.zayedapp&hl=en"
              />
                  <Project
                title="Zulekha"
                description=" The project is an android based app for hospital for monitoring the feedback of Zulekha hospital"
                techStack="Android"
                Playstore=" URL: https://play.google.com/store/apps/details?id=com.zayedprize.zayedevents.zayedapp&hl=en"
              />
               <ul>
                            <li>Listing the events conducted by Zayed foundation</li>
                            <li>Showing Live events.</li>
                                <li>	Downloading and viewing files.</li>
                                    <li>	Integrated Google Map & Facebook</li>
                                        <li>	Implemented Calendar with Marked Events.</li>
                                            <li>	Playstore URL: https://play.google.com/store/apps/details?id=com.zayedprize.zayedevents.zayedapp&hl=en</li>
                            
                        </ul>
            </div>
            <div className="dark md:bg-black">
              <Work
                title="Full Stack Developer"
                description="Worked on various web applications"
              
              />
              <h2 className="text-3xl font-bold mt-6 mb-1">Projects</h2>
              <Project
                title="Rooh n Ruca"
                description="    Created Shopping website for Rooh n Ruca, utilizing the MERN (MongoDB, Express.js, React, Node.js)  stack. The objective was to create an  engaging online platform."
                techStack="Node,React,Bootstrap,Mongodb"
               
              />
              <h1
              <div className="dark:text-slate-400 ring-1 ring-slate-900 max-w-2xl p-8 dark dark:bg-black">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mywork;
