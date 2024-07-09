"use client";

import { useState, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import toast, { Toaster } from "react-hot-toast";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+91) 9027162160",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ayushbhattab65@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Policeline Race Course, Dehradun",
  },
];

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prevData) => ({ ...prevData, service: value }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const { firstname, lastname, email, phone, service, message } = formData;
    if (!firstname || !lastname || !email || !phone || !service || !message) {
      toast.error("Please fill in all fields");
      return;
    }

    emailjs
      .sendForm('service_p8eswxj', 'template_c4r4lid', form.current, 'KtpVzqPcvyUWS1IOp')
      .then(
        () => {
          toast.success('SUCCESS!');
        },
        (error) => {
          toast.error(`FAILED... ${error.text}`);
        }
      );
    e.target.reset();
    setFormData({
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#2f2f36] rounded-xl" ref={form} onSubmit={sendEmail}>
              <h3 className="text-4xl text-accent">Let's work together</h3>

              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input name="firstname" type="text" placeholder="Firstname" onChange={handleChange} />
                <Input name="lastname" type="text" placeholder="Lastname" onChange={handleChange} />
                <Input name="email" type="email" placeholder="Email Address" onChange={handleChange} />
                <Input name="phone" type="tel" placeholder="Phone Number" onChange={handleChange} />
              </div>

              {/* select */}
              <Select name='service' onValueChange={handleSelectChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Front-End Development">Front-End Development</SelectItem>
                    <SelectItem value="Backend Development">Backend Development</SelectItem>
                    <SelectItem value="FullStack Development">FullStack Development</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* textarea */}
              <Textarea
                name="message"
                className="h-[200px]"
                placeholder="Type your message here..."
                onChange={handleChange}
              />

              {/* btn */}
              <Button size="md" className="max-w-40" type="submit">Send message</Button>
            </form>
          </div>

          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#2f2f36] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3>{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
