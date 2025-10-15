import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const JavaScript = { name: "JavaScript", link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" }
export const TypeScript = { name: "TypeScript", link: "https://www.typescriptlang.org/" }
export const Reactjs = { name: "React.js", link: "https://react.dev/" }
export const Nextjs = { name: "Next.js", link: "https://nextjs.org/" }
export const TailwindCSS = { name: "TailwindCSS", link: "https://tailwindcss.com/" }
export const Bootstrap = { name: "Bootstrap", link: "https://getbootstrap.com/" }

export const CSharp = { name: "C#", link: "https://learn.microsoft.com/en-us/dotnet/csharp/" }
export const ASPNETCore = { name: "ASP.NET Core", link: "https://dotnet.microsoft.com/en-us/apps/aspnet" }
export const Expressjs = { name: "Express.js", link: "https://expressjs.com/" }
export const EntityFrameworkCore = { name: "Entity Framework Core", link: "https://learn.microsoft.com/en-us/ef/core/" }

export const SQL = { name: "SQL", link: "https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16" }
export const SQLServer = { name: "SQL Server", link: "https://www.microsoft.com/en-us/sql-server" }
export const NoSQL = { name: "NoSQL", link: "https://www.mongodb.com/nosql-explained" }
export const MongoDB = { name: "MongoDB", link: "https://www.mongodb.com/" }

export const Git = { name: "Git", link: "https://git-scm.com/" }
export const GitHub = { name: "GitHub", link: "https://github.com/" }
export const Postman = { name: "Postman", link: "https://www.postman.com/" }
export const Redis = { name: "Redis", link: "https://redis.io/" }
export const Render = { name: "Render", link: "https://render.com/" }
export const Firebase = { name: "Firebase", link: "https://firebase.google.com/" }
export const GoogleCloud = { name: "Google Cloud", link: "https://cloud.google.com/" }
export const Cloudinary = { name: "Cloudinary", link: "https://cloudinary.com/" }
export const VNPay = { name: "VNPay", link: "https://vnpay.vn/" }

export const CleanArchitecture = { name: "Clean Architecture", link: "https://learn.microsoft.com/en-us/dotnet/architecture/modern-web-apps-azure/common-web-application-architectures" }
export const JWT = { name: "JWT", link: "https://jwt.io/" }
export const Identity = { name: "Identity", link: "https://learn.microsoft.com/en-us/aspnet/core/security/authentication/identity" }
export const Middleware = { name: "Middleware", link: "https://learn.microsoft.com/en-us/aspnet/core/fundamentals/middleware" }
export const SignalR = { name: "SignalR", link: "https://learn.microsoft.com/en-us/aspnet/core/signalr/introduction" }
export const RESTfulAPI = { name: "RESTful API", link: "https://restfulapi.net/" }
