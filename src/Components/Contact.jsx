import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="pb-20 border-b border-neutral-900">
      <motion.h1 whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: -100 }} transition={{ duration: 0.5 }} className="my-10 text-center text-4xl">
        Get in Touch
      </motion.h1>
      <motion.div
        whileInView={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, y: 100, x: -50 }}
        transition={{ duration: 1.5 }}
        className="p-14 dark:text-white lg:text-black text-white mx-auto w-fit bg-slate-900 rounded-2xl border dark:border-cyan-400 shadow-lg shadow-neutral-300-800 dark:shadow-cyan-400 lg:bg-transparent text-center tracking-tighter"
      >
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a className="my-4 border-b">{CONTACT.email}</a>
      </motion.div>
      <div className="lg:hidden text-white w-10/12 mx-auto rounded-full bg-slate-900 px-5 my-4 flex justify-center py-5">
        <div>
          <a className="rounded-l-full hover:cursor-pointer hover:text-blue-500 " href="https://www.linkedin.com/in/uday-bari-003530221/" target="_blank">
            <span className="flex items-center mx-auto">
              <FaLinkedin />
              &nbsp;Linkdin
            </span>
          </a>
          <a className="hover:cursor-pointer rounded hover:bg-black hover:text-white" href="https://github.com/UdayBari3421" target="_blank">
            <span className="flex items-center mx-auto">
              <FaGithub />
              &nbsp;Gihub
            </span>
          </a>
          <a className="rounded-r-full hover:cursor-pointer hover:text-pink-500" href="https://t.me/udaybari" target="_blank">
            <span className="flex items-center mx-auto">
              <FaInstagram />
              &nbsp;Instagram
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
