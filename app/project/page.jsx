"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css"

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
}from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: 'Full Stack',
    title: 'Quiz App',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis a iusto architecto similique mollitia quasi',
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "JavaScript"}],
    image: '/assets/work/thumb1.png',
    live: "",
    github: "",
  },
  {
    num: "02",
    category: 'Full Stack',
    title: 'E-commerce',
    description: ': Developed a dynamic E-commerce site using the MERN stack. Specialized in optimizing performance and enhancing user experiences. Implemented an intuitive admin panel empowering the owner to effortlesslyadd and manage products.',
    stack: [{name: "Mongodb"}, {name: "Express.js"}, {name: "Reactjs"},{name:"Nodejs"},{name:"Tailwind CSS"}],
    image: '/assets/work/thumb2.png',
    live: "",
    github: "https://github.com/AyushbLM10/E-commerce-All/tree/master",
  },
  {
    num: "03",
    category: 'Full Stack',
    title: 'Chat App',
    description: ' This chat application leverages the MERN stack along with Socket.IO for real-time communication. Users can engage in live chat sessions, with messages instantly delivered to all connected clients. The application’s frontend is developed with React.js, while the backend utilizes Node.js and Express.js, with MongoDB serving as the database.',
    stack: [{name: "Mongodb"},{name: "Socket.io"}, {name: "Reactjs"},{name:"Nodejs"},{name:"Tailwind CSS"}],
    image: '/assets/work/thumb3.png',
    live: "",
    github: "https://github.com/AyushbLM10/Chat-app",
  },
  {
    num: "04",
    category: 'frontend',
    title: 'Nike-website',
    description: "Crafting engaging user interfaces for a NikeShoe website, leveraging Next.js and TailwindCSS. Ensuring responsive design and intuitive navigation. Enhancing user experience with dynamic content and interactive elements, showcasing Nike's product line with creativity and precision",
    stack: [{name: "Nextjs"}, {name: "Tailwind Css"}, {name: "JavaScript"},{name:"Reactjs"},],
    image: '/assets/work/thumb4.png',
    live: "https://nike-eight-pi.vercel.app/",
    github: "https://github.com/AyushbLM10/Nike-Website",
  },
  {
    num: "05",
    category: 'frontend',
    title: 'Weather-app',
    description: 'This project utilizes the OpenWeather API to fetch real-time weather data for a given city. Users can search for a city, and the application displays information such as temperature, humidity and wind speed',
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "JavaScript"}, {name: "Api"}],
    image: '/assets/work/thumb5.png',
    live: "https://weather-app-0c4x.onrender.com",
    github: "https://github.com/AyushbLM10/Weather-app",
  },
  {
    num: "06",
    category: 'frontend',
    title: 'Gym-website',
    description: 'Developed frontend for gym using React.js, Html, Css and Javascript.',
    stack: [{name: "Html 5"}, {name: "Css 3"}, {name: "JavaScript"},{name:"Reactjs"}],
    image: '/assets/work/thumb6.png',
    live: "https://fitclub-8s6.pages.dev",
    github: "https://github.com/AyushbLM10/Gym-Website",
  },

]
const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper)=>{
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  }
  return (
    <motion.section initial = {{opacity:0}}
      animate = {{opacity:1 , transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col
            xl:justify-between order-2 xl:order-none ">
            <div className="flex flex-col gap-[30px] ">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
              <h2 className="text-[42px] font-bold leading-none text-white
              hover:text-accent transition-all duration-500 capitalize">{project.category} project
              </h2>
              <p className="text-white/60 ">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index)=>{
                  return<li key = {index} className="text-xl text-accent">{item.name}
                  {index !== project.stack.length-1 && ','}</li>
                })}
              </ul>
              <div className="border border-white/20"></div>
            </div>
            <div className=" flex items-center gap-4 ">
            <Link href={project.live}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            </Link>
            <Link href={project.github}>
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full
                    bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl hover:text-accent"/>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Github repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
            </Link>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} 
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}>
              {projects.map((project, index)=>{
                return <SwiperSlide key={index}>
                  <div className="h-[460px] relative group flex justify-center
                   items-center bg-pink-50/20 ">
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    <div className="relative w-full h-full">
                      <Image src={project.image} fill className="object-cover" alt=""/>
                    </div>
                  </div>
                </SwiperSlide>
              })}
              <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)]
              xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none" 
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px]
              w-[44px] h-[44px] flex justify-center items-center transition all"/>
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  )
}

export default Work