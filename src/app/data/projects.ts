export interface Project {
    name: string;
    technologies: string[];
    githubURL: string;
    liveURL: string;
    imageURL: string;
    videoURL?: string;
    description: string;
    images?: string[];
}

export const PROJECT_DATA: Record<string, Project> = {
    tattoo: {
        name: "Tattoo CRM",
        technologies: ["typescript", "next", "tailwind", "mongo", "firebase"],
        githubURL: "https://github.com/TAndrewLopez/booking-tattoos",
        liveURL: "https://booking-tattoos.vercel.app/",
        imageURL: "/image/projects/tattoo.png",
        videoURL: "/video/tattoo.mp4",
        description:
            "Tattoo CRM is a Customer Relationship Management tool that streamlined a client's workflow from multiple platforms to a single one. As a visitor you can submit an intake form and as administrators the team is able to review, respond, and manage their appointment requests. \n Session Provider from Next-Auth wraps the entire application to access the currently logged user and this helps with verifying authorization when manipulating the database.\n Nodemailer is the current implementation of a notification system. After specific actions are taken, the server will respond by generating an email using templates and sends it to the necessary users. \n Prisma ORM is used in conjunction with tRPC to create end to end type safe APIs that also happens to improve the developer experience. +1 for Developers =) \n Firebase stores any uploaded referenced photos for the artist to use for inspiration.",
    },
    svs: {
        name: "SVS",
        technologies: ["typescript", "next", "tailwind"],
        githubURL: "https://github.com/TAndrewLopez/video_streaming_platform",
        liveURL: "https://video-streaming-platform-flame.vercel.app",
        imageURL: "/image/projects/stream.png",
        description: "Streaming Video Service is a web application that connects with a streaming software like OBS and broadcasts the selected video and audio for live viewers online. As the broadcaster you're provided tools to manage and engage with the viewers of your channel. As a viewer you can chat in any broadcast and if you sign in, it displays the channels you follow or you can start your own broadcast. \n ClerkProvider wraps the entire application for authentication purposes and uses a custom webhook to ensure request are authentic. I also implement Clerk's client side hooks to gate keep certain views and actions from users who aren't signed in. \n To ensure data integrity when working with sensitive information like KEYS and IDs, I used an ORM called Prisma to query tables in the database and only return what's required for components to render. \n To assist with the essentials of any streaming service, Livekit provides a mainstream way to effectively integrate real-time audio and video while UploadThing provides a way to add file upload to this project.",
        images: [
            "/image/projects/stream_splash.png",
            "/image/projects/stream_upload.png",
            "/image/projects/stream_keys.png",
            "/image/projects/stream_block.png",
            "/image/projects/stream_thumbnail.png",
        ],
    },
    records: {
        name: "Gen. Records",
        technologies: ["next", "redux", "tailwind", "sequelize", "postgres"],
        githubURL: "https://github.com/TAndrewLopez/gen_records_nextjs",
        liveURL: "https://gen-records.vercel.app/",
        imageURL: "/image/projects/records.png",
        description:
            "Gen Records is a functional E-Commerce application that fetches album information from spotify's API. It uses that data to populate a database with over 100 albums which represents the product sold on the site. \n As a visitor you can add items to the cart and checkout as a guest. As a signed-in user you can view your purchase history and can access your cart from any device. \n As an administrator you're authorized to view the custom CMS to easily manage product and inventory levels, as well manipulate the user base. \n Custom middleware functions were created to verify authorization and authentication. \n Stripe is integrated for secure payments and to offer a variety of acceptable payment methods to the customer at checkout. ",
        images: [
            "/image/projects/records_splash.png",
            "/image/projects/records_shop.png",
            "/image/projects/records_album.png",
            "/image/projects/records_login.png",
        ],
    },
    linkuistix: {
        name: "Linkuistix",
        technologies: ["tensor", "javascript", "react", "firebase"],
        githubURL: "https://github.com/DrTeethCapstone/Linkuistix",
        liveURL: "https://linkuistix.com/login",
        imageURL: "/image/projects/linkuistix.png",
        videoURL: "/video/linkuistixVideo.mp4",
        description:
            "Linkuistix is a word association game powered by a pre-trained AI model from TensorFlow. It's a collaboration effort amongst developers to deliver an engaging experience while challenging ourselves to use unexplored technologies. The Universal Sentence Encoder model from TensorFlow was used to code text into high dimensional vectors that was then used to estimate a similarity score among words. This resource intensive calculation forced us to create a multithreaded application to separate responsibilities and avoid competing for resources. Firebase was used to store user scores and display the top scores. Pixi.js was used as the rendering solution to help view and manage 2D content on the screen.",
    },
    dashboard: {
        name: "FinTech Dashboard",
        technologies: ["typescript", "react", "redux"],
        githubURL: "https://github.com/TAndrewLopez/FinTech-Dashboard-Server",
        liveURL: "",
        imageURL: "/image/projects/dashboard.png",
        description:
            "Developed a web application to help users track the finances of their company. It displays key performance indicators (KPIs) and other data information using multiple charts and tables, such as line, pie, and bar charts.",
        images: ["/image/projects/dashboard_splash.png"],
    },
};
