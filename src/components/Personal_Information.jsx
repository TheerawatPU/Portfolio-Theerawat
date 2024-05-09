// ข้อมูลส่วนตัว
import about from "../assets/abountThee.jpg";
import { motion } from "framer-motion";

import {
  NAME,
  Nickname,
  Date_OF_BIRTH,
  AGE,
  NATIONALITY,
  MARITAL_STATUS,
  MOBLIE,
  EMAIL,
  ADDRESS,
} from "../constants";

const Personal_Information = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">
        Personal
        <span className="text-neutral-500"> Information</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className=" w-full lg:w-1/2 lg:p-8"
        >
          <div className=" flex items-center justify-center">
            <img className="rounded-2xl" src={about} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col justify-center lg:justify-start">
            <p className="mt-8 max-w-xl py-2">
              Name:
              <span className="text-neutral-400 ms-3"> {NAME} </span>
            </p>
            <p className="my-0 max-w-xl py-2">
              Nickname:
              <span className="text-neutral-400 ms-3"> {Nickname} </span>
            </p>
            <p className="my-0 max-w-xl py-2">
              Date of Birth:
              <span className="text-neutral-400 ms-3"> {Date_OF_BIRTH} </span>
            </p>
            <p className="my-0 max-w-xl py-2">
              Age: <span className="text-neutral-400 ms-3"> {AGE} </span>
            </p>
            <p className="my-0 max-w-xl py-2">
              Nationality:
              <span className="text-neutral-400 ms-3"> {NATIONALITY} </span>
            </p>
            <p className="my-0 max-w-xl py-2">
              Marital Status:
              <span className="text-neutral-400 ms-3"> {MARITAL_STATUS} </span>
            </p>
            <p className="my-0 max-w-xl py-2">
              Tel: <span className="text-neutral-400 ms-3"> {MOBLIE} </span>
            </p>
            <p className="my-0 max-w-xl py-2">
              Email: <span className="text-neutral-400 ms-3"> {EMAIL} </span>
            </p>
            <p className="my-0 max-w-xl py-2">
              Residential Address:
              <span className="text-neutral-400 ms-3"> {ADDRESS} </span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Personal_Information;
