import {
  ASPNETCore, Bootstrap, CleanArchitecture, Cloudinary, CSharp,
  EntityFrameworkCore, Expressjs, Firebase, Git, GitHub, GoogleCloud,
  Identity, JavaScript, JWT, Middleware, Nextjs, NoSQL, Postman,
  Reactjs, Redis, Render, RESTfulAPI, SignalR, SQL, TailwindCSS, TypeScript
} from "@/lib/utils"
import { Code2, Server, Database, Wrench, Boxes } from "lucide-react"

export const techStackContent = {
  vi: {
    title: "Công Nghệ & Công Cụ",
    subtitle: "Các công nghệ và công cụ tôi sử dụng để xây dựng ứng dụng hiện đại",
    categories: {
      "Frontend": [JavaScript, TypeScript, Reactjs, Nextjs, TailwindCSS, Bootstrap],
      "Backend": [CSharp, ASPNETCore, Expressjs, EntityFrameworkCore],
      "Cơ sở dữ liệu": [SQL, NoSQL],
      "Công cụ": [Git, GitHub, Postman, Redis, Render, Firebase, GoogleCloud, Cloudinary],
      "Khác": [CleanArchitecture, JWT, Identity, Middleware, SignalR, RESTfulAPI],
    },
    categoryIcons: {
      "Frontend": Code2,
      "Backend": Server,
      "Cơ sở dữ liệu": Database,
      "Công cụ": Wrench,
      "Khác": Boxes,
    }
  },

  en: {
    title: "Technologies & Tools",
    subtitle: "Technologies and tools I use to build modern applications",
    categories: {
      "Frontend": [JavaScript, TypeScript, Reactjs, Nextjs, TailwindCSS, Bootstrap],
      "Backend": [CSharp, ASPNETCore, Expressjs, EntityFrameworkCore],
      "Database": [SQL, NoSQL],
      "Tools": [Git, GitHub, Postman, Redis, Render, Firebase, GoogleCloud, Cloudinary],
      "Others": [CleanArchitecture, JWT, Identity, Middleware, SignalR, RESTfulAPI],
    },
    categoryIcons: {
      "Frontend": Code2,
      "Backend": Server,
      "Database": Database,
      "Tools": Wrench,
      "Others": Boxes,
    }
  }
}
