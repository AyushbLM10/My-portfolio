"use client";
import {BsArrowDownRight} from "react-icons/bs";
import Link from "next/link";

const services = [
  {
    num: '1',
    title: 'Front-End Development',
    description: ' Crafting engaging and responsive user interfaces with a focus on usability and aesthetics. Proficient in HTML, CSS, JavaScript, and modern frameworks like React Next and TailwindCss. Passionate about creating seamless and interactive user experiences',
    href: ""
  },
  {
    num: '2',
    title: 'Back-End Development',
    description: 'Building robust and scalable server-side applications with a deep understanding of databases, APIs, and server management. Skilled in languages like Node.js and Express.js. Ensuring data integrity and efficient processing',
    href: ""
  },
  {
    num: '3',
    title: 'Full Stack Development',
    description: 'Combining frontend and backend expertise to deliver comprehensive web solutions. Skilled in both client-side and server-side development, including real-time data handling with Socket.io. Bridging the gap between design and functionality to ensure seamless integration and performance',
    href: ""
  },
];

import {motion} from "framer-motion";
const Services = () => {

  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div 
            initial={{opacity: 0}} 
            animate = {{
              opacity:1, 
              transition: {delay: 2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
            {services.map((service, index)=>{
              return(
                <div key={index} className="flex-1 flex flex-col justify-center gap-6 group:">
                <div className="w-full flex justify-between items-center">
                  <div className="text-5xl font-extrabold text-outline
                    text-transparent hover:text-accent transition-all duration-500"> {service.num} </div>
                  <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white hover:bg-accent transition-all duration-500
                  flex justify-center items-center hover:rotate-45">
                    <BsArrowDownRight className="text-primary text-3xl "/>
                  </Link>
                </div>
                <h2 className="text-[42px] font-bold leading-none text-white
                hover:text-accent transition-all duration-500 ">{service.title}</h2>
                <p className="text-white/60">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
              );
            })}

        </motion.div>
      </div>
    </section>
  )
}

export default Services