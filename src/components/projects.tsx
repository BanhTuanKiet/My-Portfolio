import { ExternalLink, Github, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ASPNETCore, Bootstrap, Cloudinary, EntityFrameworkCore, Expressjs, Firebase, GoogleCloud, JWT, MongoDB, Nextjs, Reactjs, SignalR, SQLServer, TailwindCSS, VNPay } from "@/lib/utils"

const projects = [
    {
        title: "Clinic Appointment Booking System",
        description:
            "A web application developed to streamline clinic operations. The system supports efficient management of patient records, appointment bookings, medical examinations, and payment processing.",
        tech: [
            Reactjs,
            Bootstrap,
            ASPNETCore,
            EntityFrameworkCore,
            SQLServer,
            JWT,
            GoogleCloud,
            VNPay
        ],
        features: [
            "Booking system by doctor & schedule",
            "Role management (Admin, Doctor, Patient)",
            "JWT authentication with Identity integration",
            "VNPay payment integration for secure transactions",
            "Clean UI with React Context + Bootstrap",
        ],
        teamSize: 3,
        duration: "Sep 2025 - Now",
        image: "/hospital-appointment-booking-dashboard.jpg",
        link: "https://github.com/BanhTuanKiet/BookingCare"
    },
    {
        title: "Real-time project and task management platform",
        description:
            "A real-time agile project management system featuring backlog, sprint, and task tracking capabilities. It supports team collaboration, dynamic role-based access control, online presence, and instant notifications for seamless and efficient project execution.",
        tech: [
            Nextjs,
            TailwindCSS,
            ASPNETCore,
            EntityFrameworkCore,
            SQLServer,
            JWT,
            SignalR,
            GoogleCloud
        ],
        features: [
            "Manage backlog → sprint → task → subtask",
            "Dynamic role & permission system",
            "Middleware-based authorization",
            "Real-time task status updates",
            "Assignee checking and notifications",
        ],
        teamSize: 3,
        duration: "Mar - May 2025",
        image: "/project-management-kanban-board.png",
        link: "https://github.com/BanhTuanKiet/ProjectManagement"
    },
    {
        title: "E-Commerce Web Application",
        description:
            "A web application that streamlines eCommerce operations, enabling management of products, orders, inventory, reviews, and payments, while allowing customers to browse, order, and track purchases. Features JWTbased authentication with role-based access, plus search, filtering, and pagination for product browsing.",
        tech: [
            Reactjs,
            Bootstrap,
            Expressjs,
            MongoDB,
            JWT,
            VNPay,
            Cloudinary,
            Firebase,
        ],
        features: [
            "Product browsing, filtering, and search with pagination",
            "Shopping cart and checkout flow with real-time stock updates",
            "VNPay payment gateway integration",
            "Admin dashboard for product, category, and order management",
            "Cloudinary integration for image storage",
            "Firebase for notifications and analytics",
        ],
        image: "/ecommerce-website-dashboard.png",
        teamSize: 1,
        duration: "Jul - Sep 2024",
        link: "https://github.com/BanhTuanKiet/E-Commerce"
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto ">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Projects</h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    Real-world applications showcasing my technical expertise and problem-solving abilities
                </p>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="group bg-slate-800/50 border border-border rounded-lg p-6 md:p-8 hover:border-primary transition-colors hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all duration-300"
                        >
                            <div className="flex flex-col">
                                <div className="flex flex-wrap justify-between items-center mb-4">
                                    <div className="flex items-center gap-4 flex-wrap">
                                        <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                            <a
                                                href={project.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="cursor-pointer flex items-center gap-2"
                                            >
                                                {project.title}
                                                <ExternalLink className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                                            </a>
                                        </h3>
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Users className="h-4 w-4" />
                                            <span>{project.teamSize} members</span>
                                        </div>
                                    </div>

                                    {project.duration && (
                                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                                            <span>{project.duration}</span>
                                        </div>
                                    )}
                                </div>

                                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>

                                <div className="mb-4">
                                    <h4 className="text-sm font-semibold mb-2 text-primary">Key Features:</h4>
                                    <ul className="space-y-1 text-sm text-muted-foreground">
                                        {project.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-2">
                                                <span className="text-primary mt-1">•</span>
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <a
                                            key={tech.name}
                                            href={tech.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium hover:underline hover:bg-primary/20 transition"
                                        >
                                            {tech.name}
                                        </a>
                                    ))}
                                </div>

                                {/* <div className="flex gap-3">
                                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                                        <Github className="h-4 w-4" />
                                        Code
                                    </Button>
                                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                                        <ExternalLink className="h-4 w-4" />
                                        Live Demo
                                    </Button>
                                </div> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
