// เครืองมือ และภาษาที่ใช้
import { RiReactjsLine } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiPrisma } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { AiOutlineJava } from "react-icons/ai";
import { SiPhp } from "react-icons/si";

import MysqlLogo from "../assets/MySQL.webp";

import { animate, motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tool_Technology = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl">Tool & Technology</h2>
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400 " />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTailwindcss className="text-7xl text-cyan-400 " />
        </motion.div>
        <motion.div
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiBootstrap className="text-7xl text-violet-600 " />
        </motion.div>
        <motion.div
          variants={iconVariants(1)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJavascript className="text-7xl text-yellow-300 " />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiTypescript className="text-7xl text-blue-600 " />
        </motion.div>
        <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <AiOutlineJava className="text-7xl text-red-800 " />
        </motion.div>
        <motion.div
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPhp className="text-7xl text-indigo-400 " />
        </motion.div>
        <motion.div
          variants={iconVariants(1.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiPrisma className="text-7xl text-blue-900 " />
        </motion.div>
        <motion.div
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <img src={MysqlLogo} alt="MysqlLogo" className="text-7xl w-20 h-16" />
          {/* <MysqlLogo className="text-7xl text-sky-700 " /> */}
        </motion.div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoPostgresql className="text-7xl text-sky-700 " />
        </div>
      </motion.div>
    </div>
  );
};

export default Tool_Technology;
