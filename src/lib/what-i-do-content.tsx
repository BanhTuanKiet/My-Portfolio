import { Code2, Palette, Shield, Radio, Database, Layers } from "lucide-react"

export const whatIDoContent = {
  vi: {
    title: "Kỹ năng",
    subtitle: "Chuyên môn về phát triển full-stack với trọng tâm vào các công nghệ web hiện đại",
    services: [
      {
        icon: Code2,
        title: "Phát Triển Backend",
        description:
          "Xây dựng các API bảo mật và có khả năng mở rộng với ASP.NET Core và Entity Framework Core.",
      },
      {
        icon: Palette,
        title: "Phát Triển Frontend",
        description:
          "Thiết kế giao diện người dùng tương tác và responsive sử dụng React.js, Next.js và TailwindCSS.",
      },
      {
        icon: Shield,
        title: "Xác Thực & Phân Quyền",
        description:
          "Triển khai xác thực JWT, ASP.NET Identity và các chính sách phân quyền tùy chỉnh.",
      },
      {
        icon: Radio,
        title: "Giao Tiếp Thời Gian Thực",
        description:
          "Phát triển tính năng live với SignalR và cập nhật thời gian thực trong React.",
      },
      {
        icon: Database,
        title: "Thiết Kế Cơ Sở Dữ Liệu",
        description:
          "Thiết kế và tối ưu hóa cơ sở dữ liệu SQL Server với migrations và seeding.",
      },
      {
        icon: Layers,
        title: "Kiến Trúc Hệ Thống",
        description:
          "Xây dựng cấu trúc dự án sạch sẽ, dễ bảo trì với mô hình Controller–Service–Repository.",
      },
    ],
  },

  en: {
    title: "Skills",
    subtitle: "Expertise in full-stack development with a focus on modern web technologies",
    services: [
      {
        icon: Code2,
        title: "Backend Development",
        description:
          "Build secure and scalable APIs using ASP.NET Core and Entity Framework Core.",
      },
      {
        icon: Palette,
        title: "Frontend Development",
        description:
          "Design interactive and responsive user interfaces using React.js, Next.js, and TailwindCSS.",
      },
      {
        icon: Shield,
        title: "Authentication & Authorization",
        description:
          "Implement JWT authentication, ASP.NET Identity, and custom authorization policies.",
      },
      {
        icon: Radio,
        title: "Real-time Communication",
        description:
          "Develop live features using SignalR and real-time updates in React.",
      },
      {
        icon: Database,
        title: "Database Design",
        description:
          "Design and optimize SQL Server databases with migrations and seeding.",
      },
      {
        icon: Layers,
        title: "System Architecture",
        description:
          "Build clean, maintainable project structures with the Controller–Service–Repository pattern.",
      },
    ],
  },
}
