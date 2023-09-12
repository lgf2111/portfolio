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

    pmosg,
    tesla,
    carrent,
    flaskblogsecure,
    visioncore,

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
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
            "I was able to get my website application well developed on time thanks to Jeff.",
        name: "Leroy Tan",
        designation: "Student",
        company: "NYP",
        image: "https://media.licdn.com/dms/image/D5603AQFK1q_NUB_ikA/profile-displayphoto-shrink_400_400/0/1670773450417?e=1700092800&v=beta&t=yyumX6lC0YBXPKUJi83XnqEkuPjHuRSHGlwmrATrFsQ",
    },
    {
        testimonial:
            "Jeff had developed a website application for me and it works great.",
        name: "Chong Yang Bin",
        designation: "Co-Founder",
        company: "SGWIFIMAN",
        image: "https://media.licdn.com/dms/image/C5603AQG7SALleeXdQA/profile-displayphoto-shrink_400_400/0/1649961149696?e=1700092800&v=beta&t=hrFoP_pMaYh7hBuVzU4YXAHEBVRa4f43XLSXnvaX7lU",
    },
    {
        testimonial:
            "Jeff is knowledgeable when it comes to developing full-stack application using Django, will work with him again.",
        name: "Liang Shaoze",
        designation: "COO",
        company: "MAKRISEN",
        image: "https://media.licdn.com/dms/image/D5603AQFJQn14UVGc9A/profile-displayphoto-shrink_400_400/0/1692525287384?e=1700092800&v=beta&t=SluAOQ3dsymvsa02QD5T9EDeVs3Z4L3t6NzeuZPGkZY",
    },
];

const projects = [
    {
        name: "Lovelace",
        description:
            "Cross-Platform Application for Online Dating, Information Security Project.",
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
        image: carrent,
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

export { services, technologies, experiences, testimonials, projects }; 