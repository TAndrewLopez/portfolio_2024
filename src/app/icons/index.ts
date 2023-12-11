import Email from "./socials/Email";
import Express from "./skills/Express";
import Figma from "./skills/Figma";
import Firebase from "./skills/Firebase";
import Flask from "./skills/Flask";
import Graphql from "./skills/Graphql";
import JavaScript from "./skills/JavaScript";
import Github from "./socials/Github";
import LinkedIn from "./socials/LinkedIn";
import Mongo from "./skills/Mongo";
import Next from "./skills/Next";
import Postgres from "./skills/Postgres";
import Python from "./skills/Python";
import React from "./skills/React";
import Redux from "./skills/Redux";
import Sequelize from "./skills/Sequelize";
import Sqlite from "./skills/Sqlite";
import Tailwind from "./skills/Tailwind";
import TensorFlow from "./skills/TensorFlow";
import TypeScript from "./skills/TypeScript";
export { default as Close } from "./Close"


interface Skill {
    name: string;
    projectURL: string;
    icon: React.FC<{ twClass: string }>
}

export const skills: Record<string, Skill> = {
    express: {
        name: "Express",
        projectURL: "",
        icon: Express,
    },
    figma: {
        name: "Figma",
        projectURL: "",
        icon: Figma,
    },
    firebase: {
        name: "Firebase",
        projectURL: "",
        icon: Firebase,
    },
    flask: {
        name: "Flask",
        projectURL: "",
        icon: Flask,
    },
    graphql: {
        name: "Graphql",
        projectURL: "",
        icon: Graphql,
    },
    javascript: {
        name: "JavaScript",
        projectURL: "",
        icon: JavaScript,
    },
    mongo: {
        name: "MongoDB",
        projectURL: "",
        icon: Mongo,
    },
    next: {
        name: "Next.js",
        projectURL: "",
        icon: Next,
    },
    postgres: {
        name: "PostgreSQL",
        projectURL: "",
        icon: Postgres,
    },
    python: {
        name: "Python",
        projectURL: "",
        icon: Python,
    },
    react: {
        name: "React",
        projectURL: "",
        icon: React,
    },
    redux: {
        name: "Redux",
        projectURL: "",
        icon: Redux,
    },
    sequelize: {
        name: "Sequelize",
        projectURL: "",
        icon: Sequelize,
    },
    sqlite: {
        name: "Sqlite",
        projectURL: "",
        icon: Sqlite,
    },
    tailwind: {
        name: "TailwindCSS",
        projectURL: "",
        icon: Tailwind,
    },
    tensor: {
        name: "TensorFlow",
        projectURL: "",
        icon: TensorFlow,
    },
    typescript: {
        name: "TypeScript",
        projectURL: "",
        icon: TypeScript,
    },

}

interface Social {
    name: string;
    url: string;
    icon: React.FC<{ twClass: string }>
}

export const socials: Record<string, Social> = {
    email: {
        name: "Email",
        url: "mailto:tandrewlopez@gmail.com?subject=Let's Connect!",
        icon: Email,
    },
    github: {
        name: "GitHub",
        url: "https://github.com/TAndrewLopez",
        icon: Github,
    },
    linkedin: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/tandrewlopez/",
        icon: LinkedIn
    }
}