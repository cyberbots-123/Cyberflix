import { assets } from "../../assets/assets";

const courseData = {
  "Robotics": {
    image: assets.Robotics_2,
    title: "Robotics",
    description:
      "Unlock the World of Robotics with Our Beginner Course! Designed for students with little to no prior experience, this course provides a strong foundation in robotics concepts, programming, and hands-on project building.",
    price: "Starting from ₹5000",
    grade: "4-12",
    skillLevel: "Foundation, Intermediate, Advanced, Expert",
    duration: "Total 30 hours",
    learnings: [
      "Introduction to Robotics – Understanding robots and their applications",
      "Basics of Electronics – Working with sensors, motors, and circuits",
      "Introduction to Programming – Block-based coding for simple automation",
      "Hands-on Projects – Building and controlling simple robots",
      "Problem-Solving Skills – Encouraging creativity and logical thinking",
      "Understanding different types of robots (humanoid, industrial, mobile)",
      "Introduction to microcontrollers (Arduino, Raspberry Pi)",
      "Exploring real-world robotics applications (medicine, automation)"
    ],
    testimonials: [
      "Cyberbots made learning robotics so easy! I built my own robot in just a few weeks! - Aarav, Grade 7",
      "The hands-on approach helped me understand how real robots work. Loved it! - Meera, Grade 9",
      "I had no experience with coding, but the mentors were amazing! Now, I can program my own robots. - Rahul, Grade 10"
    ],
    faqs: [
      {
        question: "Do I need prior coding experience?",
        answer: "No, this course is beginner-friendly! We start from the basics."
      },
      {
        question: "What materials do I need?",
        answer: "You’ll need a laptop/computer. We provide all necessary resources, including software and project kits."
      },
      {
        question: "How do I receive my certificate?",
        answer: "After completing the course and projects, you’ll receive a Cyberbots Course Completion Certificate."
      },
      {
        question: "Can I get a demo before enrolling?",
        answer: "Yes! Join our FREE Demo Session to experience the course firsthand."
      }
    ],
    demoLink: "#"
  },

  "Artificial Intelligence": {
    image: assets.AI_2,
    title: "Artificial Intelligence",
    description:
      "Step into the world of Artificial Intelligence! This course is designed for students eager to learn the fundamentals of AI, machine learning, and deep learning. Gain hands-on experience with real-world AI applications.",
    price: "Starting from ₹5000",
    grade: "9-12",
    skillLevel: "Foundation, Intermediate, Advanced, Expert",
    duration: "Total 30 hours",
    learnings: [
      "Introduction to Artificial Intelligence – Understanding AI and its applications",
      "Machine Learning Basics – Training models to make predictions",
      "Deep Learning Concepts – Understanding neural networks",
      "Natural Language Processing (NLP) – AI-powered chatbots & voice assistants",
      "Computer Vision – Teaching AI to recognize images & objects",
      "Hands-on AI Projects – Creating real-world AI applications",
      "Ethics in AI – Understanding responsible AI development",
      "Exploring AI in healthcare, finance, and automation"
    ],
    testimonials: [
      "I always wanted to learn AI, and this course made it easy! The projects were amazing. - Ananya, Grade 10",
      "Understanding machine learning and AI applications was exciting. I feel ready for more advanced courses! - Karthik, Grade 12",
      "Great course! The real-world applications helped me see how AI is changing the world. - Priya, Grade 11"
    ],
    faqs: [
      {
        question: "Do I need prior coding knowledge?",
        answer: "Basic programming knowledge is helpful but not required. We guide you step by step!"
      },
      {
        question: "What tools will I use?",
        answer: "You’ll work with Python, TensorFlow, and AI frameworks. We provide all necessary learning resources."
      },
      {
        question: "Will I receive a certificate?",
        answer: "Yes! Upon completion of the course and projects, you’ll receive a Cyberbots AI Certification."
      },
      {
        question: "Is there a demo session available?",
        answer: "Absolutely! Join our FREE Demo Session to experience AI learning firsthand."
      }
    ],
    demoLink: "#"
  },

  "3D Printing": {
    image: assets.Three_d_2,
    title: "3D Printing",
    description:
      "Explore the future of design and manufacturing with our 3D Printing Course! This hands-on course teaches students how to create, design, and print 3D models using cutting-edge technology.",
    price: "Starting from ₹5000",
    grade: "4-12",
    skillLevel: "Foundation, Intermediate, Advanced, Expert",
    duration: "Total 30 hours",
    learnings: [
      "Introduction to 3D Printing – Understanding additive manufacturing",
      "3D Modeling Basics – Creating models using software like TinkerCAD & Fusion 360",
      "Different 3D Printing Techniques – FDM, SLA, and SLS printing methods",
      "Materials & Printing – Choosing the right filament and resin for your project",
      "Hands-on 3D Printing Projects – Bringing ideas to life with real-world applications",
      "Troubleshooting & Optimizing Prints – Ensuring high-quality output",
      "Exploring Applications – 3D printing in medicine, engineering, and product design"
    ],
    testimonials: [
      "This course was a game-changer! I designed and printed my first 3D model. - Rohan, Grade 9",
      "Learning about 3D printing has inspired me to create my own designs! - Simran, Grade 11",
      "From zero experience to designing my own products – this course made it all possible! - Aarav, Grade 10"
    ],
    faqs: [
      {
        question: "Do I need any prior experience?",
        answer: "No! This course is designed for beginners. We start from the basics and progress to advanced topics."
      },
      {
        question: "What software will I use?",
        answer: "You'll work with industry-standard tools like TinkerCAD, Fusion 360, and Cura for slicing models."
      },
      {
        question: "Do I need a 3D printer?",
        answer: "Not necessarily! We provide virtual simulations, and if you have a printer, you can practice printing your models."
      },
      {
        question: "Will I receive a certificate?",
        answer: "Yes! Upon completing the course and projects, you'll receive a Cyberbots 3D Printing Certification."
      }
    ],
    demoLink: "#"
  },

  "Web Development": {
    image: assets.Web_3,
    title: "Web Development",
    description:
      "Learn to build dynamic websites from scratch! This course covers HTML, CSS, JavaScript, and frameworks to help students create professional websites and web applications.",
    price: "Starting from ₹5000",
    grade: "6-12",
    skillLevel: "Foundation, Intermediate, Advanced, Expert",
    duration: "Total 30 hours",
    learnings: [
      "Introduction to Web Development – Understanding how websites work",
      "HTML & CSS – Creating and styling web pages",
      "JavaScript Basics – Adding interactivity",
      "Responsive Design – Making websites mobile-friendly",
      "Frontend Frameworks – Introduction to React.js",
      "Backend Basics – Introduction to Node.js & Express",
      "Database Management – Storing data with MongoDB",
      "Deploying Websites – Hosting and domain setup"
    ],
    testimonials: [
      "I never imagined I could build a website from scratch! This course made it possible. - Akash, Grade 8",
      "The hands-on approach was excellent. Now I can design and develop my own projects. - Sneha, Grade 10",
      "I loved the interactive learning experience! The mentors were very supportive. - Rohan, Grade 12"
    ],
    faqs: [
      {
        question: "Do I need any prior experience?",
        answer: "No, this course starts from the basics. Beginners are welcome!"
      },
      {
        question: "What tools will I use?",
        answer: "You'll work with HTML, CSS, JavaScript, and React. We also introduce Node.js and MongoDB."
      },
      {
        question: "Will I receive a certificate?",
        answer: "Yes! Upon completion of the course and projects, you'll receive a Cyberbots Web Development Certification."
      },
      {
        question: "Is there a demo session available?",
        answer: "Absolutely! Join our FREE Demo Session to experience web development firsthand."
      }
    ],
    demoLink: "#"
  },
  "Data Science": {
    image: assets.Data_2,
    title: "Data Science",
    description:
      "Unlock the Power of Data! This course is designed for students eager to explore the world of data analysis, machine learning, and artificial intelligence. Learn how to extract meaningful insights from data using industry-standard tools and techniques.",
    price: "Starting from ₹5000",
    grade: "9-12",
    skillLevel: "Foundation, Intermediate, Advanced, Expert",
    duration: "Total 30 hours",
    learnings: [
      "Introduction to Data Science – Understanding the role of data in decision-making",
      "Python for Data Science – Basics of programming and data manipulation",
      "Data Visualization – Creating insightful charts and graphs using Matplotlib and Seaborn",
      "Machine Learning Basics – Training models to make predictions",
      "Exploratory Data Analysis (EDA) – Understanding patterns in datasets",
      "Real-World Applications – Data Science in healthcare, finance, and business"
    ],
    testimonials: [
      "I never knew data could be so powerful! This course gave me hands-on experience in data analysis. - Aditi, Grade 11",
      "The machine learning concepts were explained so well! I can now build my own models. - Karan, Grade 12",
      "This course made Python and data visualization super easy to understand. - Neha, Grade 10"
    ],
    faqs: [
      {
        question: "Do I need prior coding knowledge?",
        answer: "Basic programming knowledge is helpful, but we start from the basics."
      },
      {
        question: "What tools will I use?",
        answer: "You'll work with Python, Pandas, Matplotlib, and machine learning libraries like Scikit-learn."
      },
      {
        question: "Will I receive a certificate?",
        answer: "Yes! Upon completion of the course and projects, you'll receive a Cyberbots Data Science Certification."
      },
      {
        question: "Is there a demo session available?",
        answer: "Absolutely! Join our FREE Demo Session to experience data science learning firsthand."
      }
    ],
    demoLink: "#"
  },
  "Financial Literacy": {
    image: assets.Finance_1,
    title: "Financial Literacy",
    description:
      "Master Money Management & Financial Skills! This course is designed to equip students with essential financial knowledge, helping them make informed decisions about saving, investing, budgeting, and personal finance.",
    price: "Starting from ₹5000",
    grade: "8-12",
    skillLevel: "Foundation, Intermediate, Advanced, Expert",
    duration: "Total 30 hours",
    learnings: [
      "Understanding Money – Basics of income, expenses, and budgeting",
      "Smart Saving & Investing – Introduction to banks, interest rates, and investment options",
      "Personal Budgeting – Managing daily expenses and tracking savings",
      "Introduction to Stock Market – Basics of stocks, mutual funds, and financial markets",
      "Avoiding Debt & Credit Management – Understanding loans, credit cards, and responsible borrowing",
      "Financial Planning for Future – Setting financial goals and making informed money decisions"
    ],
    testimonials: [
      "This course helped me understand how to save and invest wisely! - Raj, Grade 10",
      "Learning about financial management at a young age has given me confidence for the future. - Simran, Grade 12",
      "I now know how to budget my allowance and plan for bigger goals! - Aarav, Grade 9"
    ],
    faqs: [
      {
        question: "Do I need prior financial knowledge?",
        answer: "No, this course starts with the basics and gradually introduces advanced concepts."
      },
      {
        question: "Will I learn about investments?",
        answer: "Yes! We introduce the stock market, mutual funds, and smart investment strategies."
      },
      {
        question: "Do I get a certificate?",
        answer: "Yes! Upon course completion, you’ll receive a Cyberbots Financial Literacy Certification."
      },
      {
        question: "Can I join a demo session before enrolling?",
        answer: "Absolutely! Join our FREE Demo Session to explore the course contents."
      }
    ],
    demoLink: "#"
  },

  "STEM Education": {
    image: assets.STEM_2,
    title: "STEM Education for Young Innovators",
    description:
      "Ignite curiosity and innovation with our STEM Education course! Designed for students eager to explore Science, Technology, Engineering, and Mathematics, this hands-on program builds problem-solving skills through interactive learning and real-world applications.",
    price: "Starting from ₹5000",
    grade: "1-3",
    skillLevel: "Foundation, Intermediate, Advanced, Expert",
    duration: "Total 30 hours",
    learnings: [
      "Introduction to STEM – Exploring Science, Technology, Engineering, and Mathematics",
      "Basic Engineering Concepts – Understanding design, structures, and mechanics",
      "Hands-on Science Experiments – Learning through practical applications",
      "Technology & Coding – Introduction to block-based and text-based programming",
      "Mathematics in Real Life – Using numbers and logic in everyday problem-solving",
      "Innovation & Creativity – Encouraging critical thinking through STEM challenges"
    ],
    testimonials: [
      "This course made STEM subjects so exciting! I loved the hands-on projects. - Aarav, Grade 7",
      "I never thought science and math could be this fun! The experiments were my favorite part. - Meera, Grade 9",
      "The best learning experience I’ve had! I feel more confident in STEM subjects now. - Rahul, Grade 10"
    ],
    faqs: [
      {
        question: "Do I need prior STEM experience?",
        answer: "No, this course is beginner-friendly and designed for students at all levels."
      },
      {
        question: "What kind of projects will we do?",
        answer: "You’ll work on science experiments, coding activities, and engineering challenges."
      },
      {
        question: "Will I receive a certificate?",
        answer: "Yes! After completing the course, you’ll receive a Cyberbots STEM Certification."
      },
      {
        question: "Is there a demo session available?",
        answer: "Yes! Join our FREE Demo Session to explore STEM education firsthand."
      }
    ],
    demoLink: "#"
  },

  "Programming Languages": {
    image: assets.Web_2,
    title: "Programming Languages",
    description:
      "Kickstart your coding journey with our Programming Languages course! Designed for students eager to learn coding, this course covers essential programming languages such as Python, JavaScript, and C++, providing hands-on experience in real-world applications.",
    price: "Starting from ₹5000",
    grade: "4-12",
    skillLevel: "Foundation, Intermediate, Advanced, Expert",
    duration: "Total 30 hours",
    learnings: [
      "Introduction to Programming – Understanding the basics of coding",
      "Python for Beginners – Writing simple scripts and understanding logic",
      "JavaScript Essentials – Web development fundamentals",
      "C++ Basics – Learning syntax, loops, and functions",
      "Hands-on Coding Projects – Building real-world applications",
      "Problem-Solving with Programming – Logical thinking and debugging skills",
      "Exploring Career Paths in Coding – Software development, AI, web development"
    ],
    testimonials: [
      "This course helped me learn programming in a fun and easy way! - Raj, Grade 10",
      "I built my first website using JavaScript and Python! - Simran, Grade 11",
      "Coding is no longer scary! I feel confident writing programs now. - Aarav, Grade 9"
    ],
    faqs: [
      {
        question: "Do I need prior coding experience?",
        answer: "No, this course is beginner-friendly! We start from the basics and gradually move to advanced topics."
      },
      {
        question: "What software will I need?",
        answer: "You’ll work with Python, JavaScript, and C++ in online and offline coding environments."
      },
      {
        question: "Will I receive a certificate?",
        answer: "Yes! Upon completing the course, you’ll receive a Cyberbots Programming Certification."
      },
      {
        question: "Is there a demo session available?",
        answer: "Yes! Join our FREE Demo Session to explore coding firsthand."
      }
    ],
    demoLink: "#"
  },

  "IoT": {
    image:assets.IOT,
    title: "Internet Of Things (IoT)",
    description:
      "Discover the power of smart technology with our Internet of Things (IoT) course! This course introduces students to the world of connected devices, sensors, and cloud-based automation, offering hands-on experience in building IoT applications.",
    price: "Starting from ₹5000",
    grade: "6-12",
    skillLevel: "Foundation, Intermediate, Advanced, Expert",
    duration: "Total 30 hours",
    learnings: [
      "Introduction to IoT – Understanding smart devices and connectivity",
      "Working with Sensors & Actuators – Interfacing hardware with software",
      "Microcontrollers & IoT Platforms – Using Arduino, Raspberry Pi, and ESP8266",
      "IoT Networking – Understanding communication protocols like MQTT and HTTP",
      "Cloud Integration – Storing and analyzing IoT data",
      "Building IoT Projects – Creating smart home automation and environmental monitoring systems",
      "Security in IoT – Understanding cybersecurity risks and best practices"
    ],
    testimonials: [
      "I built my first IoT project and connected devices to the cloud! - Kunal, Grade 11",
      "This course helped me understand how smart technology works in real life. - Neha, Grade 10",
      "I never thought I could automate things on my own! The hands-on projects were amazing. - Aryan, Grade 12"
    ],
    faqs: [
      {
        question: "Do I need prior coding experience?",
        answer: "No, this course is beginner-friendly! We start from the basics and gradually move to advanced topics."
      },
      {
        question: "What software will I need?",
        answer: "You’ll work with microcontrollers like Arduino or Raspberry Pi, but simulations are also available for practice."
      },
      {
        question: "Will I receive a certificate?",
        answer: "Yes! Upon completion of the course, you’ll receive a Cyberbots IoT Certification."
      },
      {
        question: "Is there a demo session available?",
        answer: "Yes! Join our FREE Demo Session to explore coding firsthand."
      }
    ],
    demoLink: "#"
  },

  "Drone Technology": {
    image:assets.Drone,
    title: "Drone Technology",
    description:
      "Take flight with our Drone Technology course! This course introduces students to the fundamentals of drone design, aerodynamics, and piloting, along with hands-on experience in building and programming drones for various applications.",
    price: "Starting from ₹5000",
    grade: "6-12",
    skillLevel: "Foundation, Intermediate, Advanced, Expert",
    duration: "Total 30 hours",
    learnings: [
      "Introduction to Drones – Understanding UAVs and their applications",
      "Drone Mechanics – Exploring motors, propellers, and aerodynamics",
      "Remote Control & Navigation – Learning manual and autonomous flight",
      "Building Your Own Drone – Assembling and configuring a quadcopter",
      "Programming Drones – Using Python and Arduino for automation",
      "Drone Safety & Regulations – Understanding airspace rules and compliance",
      "Real-World Drone Applications – Agriculture, delivery, photography, and surveillance"
    ],
    testimonials: [
      "I built and flew my first drone! The hands-on projects were super fun! - Aryan, Grade 10",
      "This course made aerodynamics easy to understand, and I feel confident flying drones now! - Kavya, Grade 11",
      "Learning to program drones was an amazing experience. I want to pursue a career in UAV technology! - Rohit, Grade 12"
    ],
    faqs: [
      {
        question: "Do I need prior coding experience?",
        answer: "No! This course is beginner-friendly and designed for students new to drone technology."
      },
      {
        question: "What equipment will I need?",
        answer: "We provide drone kits for hands-on learning, but you can also use your own drone if available."
      },
      {
        question: "Will I receive a certificate?",
        answer: "Yes! Upon course completion, you will receive a Cyberbots Drone Technology Certification."
      },
      {
        question: "Is there a demo session available?",
        answer: "Yes! Join our FREE Demo Session to experience drone technology learning firsthand."
      }
    ],
    demoLink: "#"
  }

};

export default courseData;
