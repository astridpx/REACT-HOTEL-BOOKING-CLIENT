import React from "react";
import Gallery1 from "../assets/Footer-Gallery/cruise.jpeg";
import Gallery2 from "../assets/Footer-Gallery/hotel.jpeg";
import Gallery3 from "../assets/Footer-Gallery/hotel.webp";
import Gallery4 from "../assets/Footer-Gallery/pool.jpeg";
import Gallery5 from "../assets/Footer-Gallery/pool1.jpeg";
import Gallery6 from "../assets/Footer-Gallery/room.webp";

const Footer = () => {
  return (
    <>
      <footer className="w-full py-10 mt-12 bg-slate-900">
        <section className="container mx-auto ">
          <div className="w-5/6 mx-auto grid grid-cols-1 gap-y-10 text-gray-400 text-[14px] md:grid-cols-4">
            <div className="flex flex-col gap-3 md:gap-6 ">
              <h1 className="text-lg font-medium">Contacts</h1>
              <article>
                <p>+63 997 511 4738</p>
                <p className="text-gray-400 font-light">mrstudio@gmail.com</p>
              </article>

              <article>
                <p>Shin Hermano Nevles</p>
                <p>221 Blk. 4 StoneRidge Village</p>
              </article>
            </div>

            <div className="flex flex-col gap-3 md:gap-6 ">
              <h1 className="text-lg font-medium">Recent Posts</h1>

              <article className="leading-8 -translate-y-2">
                <p>
                  <span>●</span> Focus on creativity
                </p>
                <p>
                  <span>●</span> Build your own website
                </p>
                <p>
                  <span>●</span> Latest WordPress Website
                </p>
                <p>
                  <span>●</span> Blog posts example
                </p>
              </article>
            </div>

            <div className="mr-4 ">
              <h1 className="text-lg font-medium">Gallery</h1>
              <section className="w-4/6 grid grid-cols-3 gap-3 pt-2 pr-8 md:w-full md:pt-7">
                <img
                  src={Gallery1}
                  alt=""
                  className="h-16 w-full object-cover   cursor-pointer"
                />
                <img
                  src={Gallery2}
                  alt=""
                  className="h-16 w-full object-cover  cursor-pointer"
                />
                <img
                  src={Gallery3}
                  alt=""
                  className="h-16 w-full object-cover  cursor-pointer"
                />
                <img
                  src={Gallery4}
                  alt=""
                  className="h-16 w-full object-cover  cursor-pointer"
                />
                <img
                  src={Gallery5}
                  alt=""
                  className="h-16 w-full object-cover  cursor-pointer"
                />
                <img
                  src={Gallery6}
                  alt=""
                  className="h-16 w-full object-cover  cursor-pointer"
                />
              </section>
            </div>

            <div className="flex flex-col gap-2 md:gap-6 ">
              <h1 className="text-lg font-medium ">About Us</h1>

              <article>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim
                aperiam natus dolore cumque quibusdam delectus id, veritatis
                porro iusto impedit?
              </article>
            </div>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
