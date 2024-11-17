import miniProject_C from "../assets/projects/C.png";
import Project_final from "../assets/projects/final.png";
import Project_Internship from "../assets/projects/in.jpg";
import P249 from "../assets/projects/249.jpg";

export const HERO_CONTENT = `My career objective is to become a skilled  programmer who utilizes programming knowledge to analyze and solve problems.I am determined to create quality work and contribute to the success of the organization. I aim to fully utilize my knowledge and abilities to help the company be efficient and grow alongside the business effectively.`;

export const NAME = "Theerawat Puangjampee";
export const Nickname = `A`;
export const Date_OF_BIRTH = ` 02/02/2001`;
export const AGE = `23`;
export const SEX = `male`;
export const NATIONALITY = ` Thai`;
export const MARITAL_STATUS = ` Single`;
export const MOBLIE = ` 093-502-6837`;
export const EMAIL = `Theerawat.pu.work@gmail.com`;
export const ADDRESS = ` 101 No.8 , Non Sila Sub-district,Pak Khat District, Bueng Kan, 38190`;

export const EXPERIENCES = [
  {
    year: "MAY 2024 - OCT 2024",
    role: "Developer (FullStack)",
    company: "AVA SOLUTIONS WORK CO.,LTD.",
    description: `My primary responsibility is to develop software as assigned by the Team Lead, covering both Frontend and Backend development. This involves delivering results that align with UX/UI designs, adhere to the specifications outlined in documentation, and meet customer requirements. Additionally, I write queries to retrieve data from PostgreSQL and Oracle PL/SQL databases to ensure the program functions correctly. Once the development is complete, I hand it over to the Tester team to evaluate its performance and identify any defects. I also address any issues found to ensure the program is fully functional and ready for deployment.`,
    technologies: ["HTML","CSS","Javascript","Java", "Postgres", "Oracle"],
  },
  {
    year: "NOV 2023 - MAR 2024",
    role: "BackEnd Developer (Internship)",
    company: "AxonsTech (CPF)",
    description: `I have been assigned as a trainee in the position of BackEnd Developer, with the main responsibility of overseeing the SMS System. This includes developing various APIs of the system, designing databases, managing databases, and conducting basic system testing. I have also learned to use new programming languages and tools such as TypeScript, Prisma, Postgres, and Docker.`,
    technologies: ["Typescript", "Prisma", "Postgres", "Docker"],
  },
];

export const EDUCATION = [
  {
    year: "JUL 2020 - APR 2024",
    university: " Kasetsart University",
    faculty: "Faculty OF Science and Engineering",
    bachelor: " Bachelor of Science Information Technology",
    BS: `B.S. (Information Technology) with Second Class Honours`,
    GPA: "GPA: 3.42",
  },
];

export const PROJECTS = [
  {
    title:
      "Information system development for production management Food4Skin Thailand (Senior Project)",
    image: Project_final,
    description:
      "It's a system that deals with the management of cosmetics data for Food4Skin Thailand. Its main functions include managing the ingredients used in each type of cosmetics, formulating cosmetic recipes, importing ingredients,adjusting stocks, ordering production, managing manufacturer data, and generating various reports.",
    technologies: ["React", "Node.js", "Express.js", "Mysql"],
  },
  {
    title: "SMS System (Internship)",
    image: Project_Internship,
    description:
      "The SMS system is a system that allows for communication within an organization using modern technologies like React and TypeScript for development. This system has the capability to manage general user data, system administrators, as well as handling SMS data and scheduling automatic sending. Additionally, it can import and export files.",
    technologies: [
      "React",
      "Tailwind",
      "Typescript",
      "Prisma",
      "Postgres",
      "Docker",
    ],
  },
  {
    title: "Business Programming Developed (Mini Project)",
    image: miniProject_C,
    description:
      "This mini project was developed during my university studies, as part of the Business Programming course. It's a system designed to store various data of employees in a simulated workplace. The project was developed using C# .NET and Microsoft SQL Server.",
    technologies: ["C# .net", "Microsoft SQL Server"],
  },
  {
    title: "Mobile Application Development Training Project (Mini Project)",
    image: P249,
    description:
      "This mini project was developed during my time studying at the university, as part of the Mobile Application Development Training Project  course. It involved creating a mobile application related to tourism, where users can add new tourist destinations or points of interest they can visit. The application was developed using Flutter.",
    technologies: ["Flutter"],
  },
  {
    title: "Internet Programming Developed (Mini Project)",
    image: P249,
    description:
      "This mini project was developed during my time at university, as part of the Internet Programming course. It's a system designed to store various data of employees in a simulated workplace. The system was developed using HTML, CSS, JavaScript, Bootstrap, and MySQL.",
    technologies: ["Html", "CSS", "Javascript", "Bootstrap", "MySQL"],
  },

  {
    title:
      "Application Development for Moblie Devices Developed (Mini Project)",
    image: P249,
    description:
      "This mini project was developed during my time at university, as part of the Application Development for Mobile Devices course. It involved creating a dictionary app for supercars, capable of providing details about each model, brand, and specifications. The app was developed using Ionic and TypeScript.",
    technologies: ["Ionic", "TypeScript"],
  },
];

export const CONTACT = {
  address:
    "101 No.8 , Non Sila Sub-district,Pak Khat District, Bueng Kan, 38190",
  phoneNo: "093 502 6837",
  email: "Theerawat.pu.work@gmail.com",
};
