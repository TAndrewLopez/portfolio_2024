export interface Project {
    name: string;
    technologies: string[]
    githubURL: string
    liveURL: string
    imageURL: string
    videoURL?: string;
    description: string
    images?: string[]
}

export const PROJECT_DATA: Record<string, Project> = {
    tattoo: {
        name: 'Tattoo Request CRM',
        technologies: ['typescript', 'next', 'tailwind', 'mongo', 'firebase'],
        githubURL: 'https://github.com/TAndrewLopez/booking-tattoos',
        liveURL: 'https://booking-tattoos.vercel.app/',
        imageURL: '/image/projects/tattoo.png',
        videoURL: '/video/tattoo.mp4',
        description: "Designed and developed a web application that streamlined the workflow for a client. Deliverables include, client side UI with intake form, essential CRM operations to allow custom responses, creating, updating and assigning calendar events."
    },
    records: {
        name: 'Gen. Records',
        technologies: ['next', 'redux', 'tailwind', 'sequelize', 'postgres'],
        githubURL: 'https://github.com/TAndrewLopez/gen_records_nextjs',
        liveURL: 'https://gen-records.vercel.app/',
        imageURL: '/image/projects/records.png',
        description: "Developed a functional E-Commerce website that fetches album information from Spotify's API to represent the product sold. Equipped with Stripe integration for secure payments, Redux for global state management, a custom CMS to allow administrators to easily manage product and inventory levels, and user authentication with specific role privileges.",
        images: ['/image/projects/records_splash.png', '/image/projects/records_shop.png',
            '/image/projects/records_album.png', '/image/projects/records_login.png',]
    },
    linkuistix: {
        name: 'Linkuistix',
        technologies: ['tensor', 'javascript', 'react', 'firebase'],
        githubURL: 'https://github.com/DrTeethCapstone/Linkuistix',
        liveURL: 'https://linkuistix.com/login',
        imageURL: '/image/projects/linkuistix.png',
        videoURL: '/video/linkuistixVideo.mp4',
        description: "Collaborated on a word association game powered by a pre-trained AI model from TensorFlow. Led game development which was designed using core Object Oriented Programming principles. (ie: A.P.I.E.)"
    },
    dashboard: {
        name: 'FinTech Dashboard',
        technologies: ['typescript', 'react', 'redux'],
        githubURL: 'https://github.com/TAndrewLopez/FinTech-Dashboard-Server',
        liveURL: '',
        imageURL: '/image/projects/dashboard.png',
        // githubURL: 'https://github.com/TAndrewLopez/FinTech-Dashboard-Client',
        description: "This web application was designed to help users track the finances of their company. It displays key performance indicators (KPIs) and other data information using multiple charts and tables, such as line, pie, and bar charts.",
        images: ['/image/projects/dashboard_splash.png']
    },
    archived: {
        name: 'Archived',
        technologies: ['typescript', 'next', 'tailwind', 'graphql'],
        githubURL: 'https://github.com/TAndrewLopez/BlogWebsite',
        liveURL: '',
        imageURL: '/image/projects/archived.png',
        description: "Lightweight Blog Website. ",
        images: ['/image/projects/archived_splash.png']
    },
}