// ข้อมูลการศึกษา
import { EXPERIENCES } from "../constants";
import { EDUCATION } from "../constants";
import { animate, motion } from "framer-motion";

const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Education
      </motion.h2>
      <div className="">
        {EDUCATION.map((education, index) => (
          <div className="mb-8 flex flex-wrap lg:justify-center" key={index}>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{education.year}</p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h1 className="mb-2 font-semibold text-2xl">
                {education.university}
                {/* <span className="text-sm text-purple-100">
                  {education.faculty}
                </span> */}
              </h1>
              <p className="mb-2 text-neutral-400">{education.faculty}</p>
              <p className="mb-2 text-neutral-400">{education.bachelor}</p>
              <p className="mb-2 text-neutral-400">{education.BS}</p>
              <p className="mb-2 text-neutral-400">{education.GPA}</p>
              {/* {experience.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 mt-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))} */}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
