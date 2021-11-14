import emoji from "react-easy-emoji";

export const greetings = {
  name: "Mohsin Ali",
  title: "Hi all, I'm Mohsin",
  description:
    "A passionate Full Stack Web Developer and Mobile App Developer having an experience of building Web applications with JavaScript, TypeScript , ReactJs , NodeJs, Relational and Non-Relational Databases and some other cool libraries and frameworks.",
  resumeLink: "https://mohsinnaqvipro.github.io/resume/",
};

export const openSource = {
  githubUserName: "mohsinnaqvipro",
};

export const contact = {};

export const socialLinks = {
  facebook: "https://www.facebook.com/mohsinnaqvi.engr/",
  instagram: "https://www.instagram.com/mohsinalinaqvi_/",
  twitter: "https://twitter.com/mohsin1izonly",
  github: "https://github.com/mohsinnaqvipro",
  linkedin: "https://www.linkedin.com/in/mohsin-naqvi-9578b5176/",
};

export const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS"),
  ],

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "vscode-icons:file-type-html",
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "vscode-icons:file-type-css",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "logos:sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "logos:javascript",
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "logos:typescript-icon",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "vscode-icons:file-type-reactjs",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "logos:nodejs-icon",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "vscode-icons:file-type-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "vscode-icons:file-type-sql",
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: "vscode-icons:file-type-mongo",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "logos:aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "logos:firebase",
    },
    {
      skillName: "git",
      fontAwesomeClassname: "logos:git-icon",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "logos:docker-icon",
    },
  ],
};

export const SkillBars = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "80",
  },
  {
    Stack: "AWS",
    progressPercentage: "80",
  },
  {
    Stack: "Database",
    progressPercentage: "80",
  },
];

export const educationInfo = [
  {
    schoolName: "Virtual University",
    subHeader: "BS(Hon) in Computer Science",
    duration: "September 2016 - September 2019",
    desc: "Participated in the research of Sales Man Tracking System App and published 3 papers.",
    descBullets: ["Created Single Handed FYP", "Created Android Mobile App"],
  },
  {
    schoolName: "Punjab Group Of Colleges",
    subHeader: "Intermediate in Computer Science",
    duration: "April 2015 - September 2016",
    desc: "ICS - Information Computer Science",
    descBullets: ["Database Administrator", "C++ with Dev"],
  },
  {
    schoolName: "Coursera",
    subHeader: "Professional Certificates",
    duration: "April 2020 - September 2021",
    desc: "Certificates",
    descBullets: [
      "Server-side Development with NodeJS, Express and MongoDBDatbase Administrator",
      "AWS Fundamentals: Going Cloud-Native",
      "AWS Fundamentals: Building Serverless Applications",
      "Version Control with Git",
    ],
  },
];

export const experience = [
  {
    role: "Software Engineer",
    company: "Ebryx",
    companylogo: "/img/icons/common/ebryx.jpg",
    date: "June 2019 – October 2021",
    desc: "MERN Stack Software Engineer",
    descBullets: [
      "Technology Stack: Node js, React js, Redux, JavaScript, TypeScript, MSSQL, MySql, AWS, PsotgresSql, AWS Lambda, Sequelize, SQL Procedures, API Development.",
      "Implementation of the Payment Gateways: Stripe and Checkout.",
      "Using SAM Framework and Express for creating REST Apis.",
      "Worked on Several Services of AWS like s3, RDS, API Gateway, Lambda Function, CICD pipelines, Code Commit, Cloud Formation, Pinpoint, EC2, IAM, SSM, CloudWatch, Elastic Redis Cache, Dynamo DB etc.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Neeopal Messenger",
    companylogo: "/img/icons/common/neeopal.jpg",
    date: "1 November – Present",
    desc: "MERN Stack Software Engineer",
    descBullets: [
      "Technology Stack: Node js, React js, Redux, JavaScript, TypeScript, MSSQL, MySql, AWS, PostgresSql, AWS Lambda, Sequelize, SQL Procedures, API Development.",
      "Implementation of the Payment Gateways: Stripe and Checkout.",
      "Using SAM Framework and Express for creating REST Apis.",
      "Worked on Several Services of AWS like s3, RDS, API Gateway, Lambda Function, CICD pipelines, Code Commit, Cloud Formation, Pinpoint, EC2, IAM, SSM, CloudWatch, Elastic Redis Cache, Dynamo DB etc.",
    ],
  },
  //   {
  //     role: "Software Engineer Intern",
  //     company: "Airbnb",
  //     companylogo: "/img/icons/common/airbnbLogo.png",
  //     date: "Jan 2015 – Sep 2015",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  //   },
];

export const projects = [
  {
    name: "Blinkers Marketing",
    desc: "Digital Marketing",
    link: "https://blinkersmarketing.com/",
  },
  {
    name: "The Cars Hospital",
    desc: "The Cars Hospital is a software for invoice, billing and vehicle store managment.",
    github: "https://thecarshospital.com/",
  },
  {
    name: "iGlows Admin Panel",
    desc: "Admin Panel For iGlows Project in which admin can manage all the crud operations and handle the business logics of all Apps.",
    link: "http://tac-admin-uat.s3-website-eu-west-1.amazonaws.com/auth/login",
  },
  {
    name: "E-Commerce Admin Panel with Ebay Integeration",
    desc: "Integerate the ebay with client application in which client can manage the orders in his Web Application",
    link: "http://ebay.com",
  },
];

export const feedbacks = [
  {
    name: "The Cars Hospital",
    feedback:
      "We have been very happy with our new web Project! It looks professional and very easy to navigate. Our experience with the customer service at Mohsin Ali has been great. They handle things very efficiently and are available for any questions we have. They also keep us updated on daily reports so we know how our site is doing. I would recommend that u have choose Mohsin web developer services for u.",
  },
  {
    name: "Blinkers Marketing",
    feedback:
      "We have been very happy with our new website! It looks professional and very easy to navigate.",
  },
];


// "build": "SET NODE_OPTIONS=--openssl-legacy-provider && next build",