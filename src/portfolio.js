/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Vikram Badhan",
  title: "Hi all, I'm Vikram",
  subTitle: emoji(
   // "This portfolio is currently under development"
    
   "I am an aspiring Software Developer 🚀, with a go-get-'em attitude, remarkable time management skills and strong ability to learn📝. A variety of personal and professional experiences have shaped me into a critical thinker, creative problem solver, and a compelling leader uniquely positioned to add value to any team of which I am a part. Currently I am a graduate student at New York University ⚡ wherein I am testing and honing my abilities so as to bring out a better version of myself. 🏆"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1vicWhZax_KWlXI9FiLQRBS9ViFzr8Giu/view?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vikrambadhan",
  linkedin: "https://www.linkedin.com/in/vikrambadhan/",
  gmail: "vb2174@nyu.edu",
  facebook: "https://www.facebook.com/vikram.badhan",
  //gitlab: "",
  instagram: "https://www.instagram.com/vikram.badhan/",
  twitter: "https://twitter.com/BadhanVikram",
  //unsplash: "https://unsplash.com/@nikhilmane",
  medium: "https://medium.com/@vikrambadhan",
  stackoverflow: "https://stackoverflow.com/users/19493212/vikram-badhan",
  // Instagram and Twitter are also supported in the links!
 
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ASPIRING SOFTWARE DEVELOPER WHO WANTS TO EXPLORE NEW TECHNOLOGIES",
  skills: [
    emoji(
      "⚡ My main interests include solving problems involving data Structures and algorithms, designing good looking frontends and playing with databases. "),

    emoji("⚡ I am also a tech-fanatic who wants to explore different stacks of technologies. I am proficient in programming languages like Python, Java, JavaScript, and C++. "),

    emoji("⚡ Providing data-driven, action oriented solutions to challenging problems is what I see myself doing in the next five years."),
    
    emoji("⚡ In my free time, you will find me cooking and exploring different places in New York City."),
    emoji(
      "⚡ I also love to interact with new people, so, if you're reading this, drop by and say hi!"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
     
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
     skillName: "sass",
     fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    //{
    //  skillName: "swift",
    //  fontAwesomeClassname: "fab fa-swift"
    //},
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    
    // {
    //   skillName: "php",
    //   fontAwesomeClassname: "fab fa-php"
    // },

    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "New York University, New York City (NY)",
      logo: require("./assets/images/nyu123.jpg"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2021 - present",
      desc: " NYU is a world renowned university with a distinguished history of research and education in the field of computer science. As a MS student, I will be industry ready after the completion of my program and will be a good fit for roles like Software Development engineer, Data Analyst, Cloud Engineer,etc.",
      descBullets: [
        " $14,000 Merit Scholarship was awarded based on my academic achievements.",
        " Worked as a Graduate Assistant during Spring 2022 and currently working as an Enterprise Architect Assistant at NYU IT."
       
      ]
    },
    {
      schoolName: "Guru Gobind Singh Indraprastha university, New Delhi, India",
      logo: require("./assets/images/msit.png"),
      subHeader: "Bachelor of Science in Information Technology",
      duration: "August 2014 - May 2018",
      desc: "I pursued my Bachelor’s degree in B.Tech (Information Technology) from Maharaja Surajmal Institute of Technology affiliated to GGSIPU (A leading public university in India).",
      descBullets: [
        "Was part of college Environmental club (Prakriti). Participated in various environmental drives throughout college.",
        "Voluteered during Annual Tech fest(Avensis), mentored a team of 10 members and guided them through the event organization."
      ]
    },
    {
      schoolName: "St Francis De sales School, New Delhi, India",
      logo: require("./assets/images/SFS.jpg"),
      subHeader: "1st - 12th Grade",
      duration: "May 2001 - May 2012",
      desc: "Completed my schooling from St. Francis De Sales School, Janakpuri, New Delhi. I was part of the same institution for 12 years. Being one of finest convent schools in New Delhi, we had a strong emphasis on english speaking and participation in co-curricular activities.",
      descBullets: [
        "Was part of School Football Team. Participated in various tournaments throughout high school.",
        "Was part of Debate and Science Quiz club."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Coding Skills", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend Development",
      progressPercentage: "60%"
    },
    {
      Stack: "Frontend Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud Computing Skills(AWS)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Enterprise Architect Assistant",
      company: "NYU IT",
      companylogo: require("./assets/images/nyuit.jpg"),
      date: "May 2022 – Present",
      desc: "",
      descBullets: [
        "Designing Business Capability maps and diagramming application architecture configuration.",
        "Tested and Analyzed various Enterprise Architecture Tools to find the best one that satisfies NYU's needs for business and technology capability visulalizations.",
        "Analyzed the ‘essential cloud’ enterprise architecture tool to import NYU’s business capability data and relate items in the configuration management database (CMDB)."
      ]
    },
    {
      role: "Graduate Assistant",
      company: "NYU",
      companylogo: require("./assets/images/nyu123.jpg"),
      date: "February 2022 – May 2022",
      desc: "",
      descBullets: [
        "Visualized and rendered BIM (Building Information model) on the server side using JavaScript and Python",
        "Parsed around 3000 mesh components from BIM model using a python library called IFCopenShell and a react library called react-three-fiber.",
        "Mapped the mesh components with the BIM model to dynamically show highlights, annotations and text overlay on a selected group of meshes."
      ]
    },
    {
      role: "Business Analyst",
      company: "Innefu labs",
      companylogo: require("./assets/images/innefu.jpg"),
      date: "July 2020 – Aug 2020",
      desc: "",
      descBullets: [
        "Spearheaded interactions with the client and acted as a liaison between the client and developer team.",
        "Utilized a Big Data framework 'Prophecy' for Text Analytics, Image Analytics and Predictive Intelligence.",
        "Augmented internal data of the client with sources including news feeds, open source databases, journals, magazines, social media etc."
      ]

    },
    {
      role: "Science and Technology Intern",
      company: "NITI Aayog", 
      companylogo: require("./assets/images/niti.jpg"),
      date: "May 2017 – August 2017",
      desc: "",
      descBullets: [
        "Learned and worked on MVC(Model-View-Controller) architecture and Application Workflow.",
        " Worked on designing the Front-End of the Dashboard and performed Back-End programming.",
        "Successfully analyzed the entire project and prepared the project Documentation(Darpan Dashboard)."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Major Projects",
  subtitle: "SOME OF THE PROJECTS WHICH I RECENTLY DEVELOPED",
  projects: [
    {
      image: require("./assets/images/health-app-logo.jpg"),
      projectName: "Smart Health App",
      projectDesc: "Created an online meal recommendation and food delivery web application that suggests meals to users on the basis of their nutritional requirements and fitness goals. Made use of AWS services like S3, API Gateway, Cognito, Sagemaker, DynamoDB, Lambda and OpenSearch. Utilized an online food dataset which included meals with their nutrition value to train a machine learning model which gave us customized meal plans for the user to choose.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/vikrambadhan/smart-health-app"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/AWS-logo.jpg"),
      projectName: "Dining Conceirge Chatbot",
      projectDesc: "Built an AWS Lex Chatbot to give restaurant recommendations. Scraped the data from Yelp and indexed the results using AWS Opensearch. Deployed Lambda functions to interpret chat inputs and sent the most relevant recommendations to the user’s mobile phone using AWS SNS service.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/vikrambadhan/Dining-Concierge-Chatbot"
        }
      ]
    },
    {
      image: require("./assets/images/smart-photo-album.jpg"),
      projectName: "Voice Based Smart Photo Album App",
      projectDesc: " Developed a photo album app to support natural language text and voice search. Performed object detection on uploaded images to generate tags. Indexed images based on tags using AWS OpenSearch and created a voice chat interface to convert speech to text and search for image.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/vikrambadhan/Voice_based_Smart_Photo_Album_App"
        },
        
      ]
    },
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications and Achievements 🏆 "),
  subtitle:
    "Achievements, Certifications and cool stuff that I have done !",

  achievementsCards: [
    {
      title: "Scholarship for Grad School",
      subtitle:
        "I was awarded a merit scholarship of $14,000 based on my past academic achievements.",
      image: require("./assets/images/nyu123.jpg"),
      footerLink: [
       
        {
          name: "Award Letters",
          url: "https://drive.google.com/file/d/1ujXzSJgDrvKJ9Rt92_-42YN9kwl2jalo/view?usp=sharing"
        }
      ]
    },
    {
      title: "Full Stack Web Development by Coding Ninjas",
      subtitle:
        "Completed the full stack web development specialization by coding ninjas which comprised of a Front-end, Backend and React certification",
      image: require("./assets/images/coding-ninjas.jpg"),
      footerLink: [
        {
          name: "Front-end",
          url: "https://drive.google.com/file/d/1szkcF8dARTYYTtpFFk4nY29Ic7qRo3Jf/view?usp=sharing"
        },
        {
          name: "Backend",
          url: "https://drive.google.com/file/d/1PeibdxVlSnDWrhMLJM4CWxQhpqsr1xio/view?usp=sharing"
        },
        {
          name: "React",
          url: "https://drive.google.com/file/d/1PeibdxVlSnDWrhMLJM4CWxQhpqsr1xio/view?usp=sharing"
        }

      ]
    },

    {
      title: "IBM Data Science Specialization Certificate",
      subtitle: "Completed this IBM Specialization certificate which comprised of nine courses on Data Science",
      image: require("./assets/images/IBM.png"),
      footerLink: [
        {
          name: "Award Letter", url: "https://drive.google.com/file/d/1b9czFvV9s98sQD5tvnZy2k_dLM2AZ1_w/view?usp=sharing"
        },
        {
          name: "Badge", url: "https://www.credly.com/badges/83a7da27-5db6-40c9-b9d4-4bd842af51c1?source=linked_in_profile"
        }
      
      ]
    }
   
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs 📝",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        " "
    }


  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "PRESENTATIONS 🎙️",
  subtitle: emoji(
    " "
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }

  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    " "
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1(347)856-2291",
  email_address: "vb2174@nyu.edu"
};

// Twitter Section

const twitterDetails = {
  userName: "BadhanVikram", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
