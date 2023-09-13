import {
    mobile,
    backend,
    creator,
    web,

    html,
    css,
    javascript,
    typescript,
    python,
    git,
    mysql,
    flutter,

    nyp,

    pmosg,
    // tesla,

    leroytan,
    chongyangbin,
    liangshaoze,
    
    lovelace,
    flaskblogsecure,
    visioncore,

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "study",
        title: "Study",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "testimonials",
        title: "Testimonials",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Full-Stack Developer",
        icon: web,
    },
    {
        title: "Frontend Developer",
        icon: creator,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Application Developer",
        icon: mobile,
    },

];

const experiences = [
    {
        title: "Digital Business Analyst Intern",
        company_name: "Prime Minister Office - Strategy Group",
        icon: pmosg,
        iconBg: "#383E56",
        date: "March 2023 - August 2023",
        points: [
            "Proficient in Microsoft Office 365 Products.",
            "Conducted audits of SIOTs in the office.",
            "Designed posters using Canva to promote cybersecurity awareness.",
            "Utilized FormSG to develop and deploy surveys, forms and quizzes.",
            "Used Microsoft SharePoint Designer to develop workflows.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#E6DEDD",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const educations = [
    {
        title: "Diploma in Cybersecurity and Digital Forensics",
        company_name: "Nanyang Polytechnic",
        icon: nyp,
        iconBg: "#E6DEDD",
        date: "May 2021 - April 2024",
        points: [
            "Actively participates in InfoSec, Google DSC, and AI and Cloud Computing clubs.",
            "2nd place, Code Overflow Hackathon 2022.",
            "Silver award, i.Code.i.Tell competition 2022.",
        ],
    },
    // {
    //     title: "React Native Developer",
    //     company_name: "Tesla",
    //     icon: tesla,
    //     iconBg: "#383E56",
    //     date: "Jan 2021 - Feb 2022",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "Python",
        icon: python,
    },
    {
        name: "Flutter",
        icon: flutter,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "MySQL",
        icon: mysql,
    },

];


const testimonials = [
    {
        testimonial:
            "I would like to give a huge thanks to Jeff. With his expertise and aid, my website application was developed on time.",
        name: "Leroy Tan",
        designation: "Student",
        company: "NYP",
        // image: "https://media.licdn.com/dms/image/D5603AQFK1q_NUB_ikA/profile-displayphoto-shrink_400_400/0/1670773450417?e=1700092800&v=beta&t=yyumX6lC0YBXPKUJi83XnqEkuPjHuRSHGlwmrATrFsQ",
        image: leroytan,
    },
    {
        testimonial:
            "Jeff had developed a website application for me and it works great.",
        name: "Chong Yang Bin",
        designation: "Director",
        company: "SGWIFIMAN",
        // image: "https://media.licdn.com/dms/image/C5603AQG7SALleeXdQA/profile-displayphoto-shrink_400_400/0/1649961149696?e=1700092800&v=beta&t=hrFoP_pMaYh7hBuVzU4YXAHEBVRa4f43XLSXnvaX7lU",
        image: chongyangbin,
    },
    {
        testimonial:
            "Jeff is really knowledgeable when it comes to full-stack web applications. I have previously sought his expertise in developing a full stack application to provision cloud resources more efficiently. Not only did he meet the given deadline, but also went the extra mile and added improvements to my UI design. Will definitely work with him in the future!",
        name: "Liang Shaoze",
        designation: "Former COO",
        company: "MAKRISEN",
        // image: "https://media.licdn.com/dms/image/D5603AQFJQn14UVGc9A/profile-displayphoto-shrink_400_400/0/1692525287384?e=1700092800&v=beta&t=SluAOQ3dsymvsa02QD5T9EDeVs3Z4L3t6NzeuZPGkZY",
        image: liangshaoze,
    },
];

const projects = [
    {
        name: "Lovelace",
        description:
            "Application for Online Dating, Information Security Project.",
        tags: [
            {
                name: "flutter",
                color: "blue-text-gradient",
            },
            {
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "mongodb",
                color: "green-text-gradient",
            },
            {
                name: "googlefonts",
                color: "pink-text-gradient",
            },
        ],
        image: lovelace,
        source_code_link: "https://github.com/pi-mon/lovelace",
    },
    {
        name: "Flask Blog Secure",
        description:
            "Website Application for Blogs, Application Security Project.",
        tags: [
            {
                name: "flask",
                color: "blue-text-gradient",
            },
            {
                name: "sqlite",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
        ],
        image: flaskblogsecure,
        source_code_link: "https://github.com/lgf2111/flask-blog-secure",
    },
    {
        name: "Vision Core",
        description:
            "Website Application for Hardware Repair Business, Application Development",
        tags: [
            {
                name: "flask",
                color: "blue-text-gradient",
            },
            {
                name: "sqlite",
                color: "green-text-gradient",
            },
            {
                name: "bootstrap",
                color: "pink-text-gradient",
            },
            {
                name: "tailwindcss",
                color: "pink-text-gradient",
            },
        ],
        image: visioncore,
        source_code_link: "https://github.com/lgf2111/vision-core",
    },
];

export { services, technologies, experiences, educations, testimonials, projects }; 