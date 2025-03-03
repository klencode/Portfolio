import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Klenam',
    lastName:  'Chris',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'Software Engineer',
    avatar:    '/images/thisisme.jpg',
    location:  'Accra - Ghana',        // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
    languages: ['English', 'French', 'Spanish', 'Japanese']  // optional: Leave the array empty if you don't want to display languages
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    // Links are automatically displayed.
    // Import new icons in /once-ui/icons.ts
    {
        name: 'GitHub',
        icon: 'github',
        link: 'https://github.com/klencode',
    },
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/klenam-chris/',
    },
    {
        name: 'X',
        icon: 'x',
        link: 'https://twitter.com/KlenamChris',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:klenam.chris24@gmail.com',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}'s Portfolio`,
    description: `Portfolio website showcasing my work as a ${person.role}`,
    headline: <>Software Developer</>,
    subline: <>I'm Klenam, a software developer dedicated to writing clear, <br/>accessible code that prioritizes simplicity and ease of understanding.</>
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    // calendar: {
    //     display: true,
    //     link: 'https://cal.com'
    // },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>I am a Ghana-based software developer focused on crafting clear and intuitive code. My goal is to eliminate jargon and enhance accessibility, making technology easier for everyone to understand and use.</>
    },
    work: {
        display: true, // set to false to hide this section
        title: 'Work Experience',
        experiences: [
            {
                company: 'Tech Company',
                timeframe: '2022 - Present',
                role: 'Backend Developer',
                achievements: [
                    <>Built an API to scrape movie metadata using FASTAPI and some python libraries, resulting in a 20% increase in user engagement and 30% faster load times.</>,
                    <>Spearheaded the integration of AI tools into design workflows, enabling the frontend developers to iterate 50% faster.</>,
                    <>Currently building a responsive and user interactive movie recommendation system. P.S. detailed codes to this project isn't displayed due to a N.D.A agreement.</>
                ],
                images: [ // optional: leave the array empty if you don't want to display images
                    {
                        src: '/images/projects/project-01/movieRecSys.png',
                        alt: 'MovieRecSys Project',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: 'Freelance',
                timeframe: '2018 - current',
                role: 'Web Developer',
                achievements: [
                    <>Developed an extraordinarily responsive website, improving design consistency and company exposure by 40%.</>,
                    <>Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall company revenue.</>,
                    <>Built and managed websites for startup companies (e.g. kaddyventures.com, afaefmining.com, ronormotors.com, 1957cocoa.com, 1957chocolates.com, nancyaddy.netlify.app)</>,
                    <>Built a responsive portfolio website using NextJS + TailwindCSS (klenam-chris.vercel.app).</>,
                    <>Currently working on a project that will be released in the next quarter.</>,
                ],
                images: [
                    {
                        src: '/images/projects/project-01/kaddyventures.png',
                        alt: 'Kaddy Ventures',
                        width: 16,
                        height: 9
                    }
                ]
            },
            {
                company: '37 Military Hospital',
                timeframe: '09/2023',
                role: 'IT Support | Intern',
                achievements: [
                    <>Troubleshot and resolved 30+ IT-related issues within the hospital's network, ensuring uninterrupted patient care and data security.</>,
                    <>Collaborated with the IT team to implement a new network infrastructure, resulting in a 25% reduction in network downtime.</>,
                    <>Implemented appropriate computer networks for robust and secure communication and data transfer.</>,
                    <>Excellent Conversationalist</>,
                    <>Maintained clean, neat and operational facilities.</>
                ],
                images: [
                    {
                        src: '',
                        alt: '',
                        width: 0,
                        height: 0
                    }
                ]
            },
            // {
            //     company: 'Judicial Service, Ghana',
            //     timeframe: '02/2025',
            //     role: 'Network Admin | Intern',
            //     achievements: [

            //     ]
            // }
        ]
    },
    studies: {
        display: true, // set to false to hide this section
        title: 'Studies',
        institutions: [
            {
                name: 'Ghana Communication Technology University',
                description: <>Studied Information Technology (Diploma & Bachelors Degree).</>,
            },
            {
                name: 'ALX Ghana',
                description: <>Studied AI Career Essentials.</>,
            },
            {
                name: "Havard University's CS50",
                description: <>Studied Python Programming Language</>,
            }
        ]
    },
    technical: {
        display: false, // set to false to hide this section
        title: 'Technical skills',
        skills: [
            {
                title: 'Payment Gateway | Python Django',
                description: <>Developed a payment gateway using Python's Django framework for a car deakership (ronormotors.com)</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-02.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                    {
                        src: '/images/projects/project-01/cover-03.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            },
            {
                title: 'Next.js',
                description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
                images: [
                    {
                        src: '/images/projects/project-01/cover-04.jpg',
                        alt: 'Project image',
                        width: 16,
                        height: 9
                    },
                ]
            }
        ]
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
    // Create new blog posts by adding a new .mdx file to app/blog/posts
    // All posts will be listed on the /blog route
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
    // Create new project pages by adding a new .mdx file to app/blog/posts
    // All projects will be listed on the /home and /work routes
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`,
    // Images from https://pexels.com
    images: [
        { 
            src: '/images/gallery/img-01.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-02.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-03.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-04.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-05.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-06.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-07.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-08.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-09.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-10.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-11.jpg', 
            alt: 'image',
            orientation: 'vertical'
        },
        { 
            src: '/images/gallery/img-12.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-13.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
        { 
            src: '/images/gallery/img-14.jpg', 
            alt: 'image',
            orientation: 'horizontal'
        },
    ]
}

export { person, social, newsletter, home, about, blog, work, gallery };