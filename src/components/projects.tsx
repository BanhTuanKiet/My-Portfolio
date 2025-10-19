import { ExternalLink, Github, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ASPNETCore, Bootstrap, Cloudinary, EntityFrameworkCore, Expressjs, Firebase, GoogleCloud, JWT, MongoDB, Nextjs, Reactjs, SignalR, SQLServer, TailwindCSS, VNPay } from "@/lib/utils"

const projects = [
    {
        title: "Nền Tảng Quản Lý Dự Án & Công Việc Thời Gian Thực",
        description:
            "Hệ thống quản lý dự án agile thời gian thực với tính năng theo dõi backlog, sprint và công việc. Hỗ trợ cộng tác nhóm, kiểm soát truy cập dựa trên vai trò động, trạng thái trực tuyến và thông báo tức thì để thực hiện dự án liền mạch và hiệu quả.",
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
            "Quản lý backlog → sprint → task → subtask",
            "Hệ thống vai trò & phân quyền động",
            "Ủy quyền dựa trên Middleware",
            "Cập nhật trạng thái công việc thời gian thực",
            "Kiểm tra người được chỉ định và thông báo",
        ],
        teamSize: 3,
        duration: "Tháng 9/2025 - Hiện tại",
        image: "/project-management-kanban-board.png",
        link: "https://github.com/BanhTuanKiet/ProjectManagement"
    },
    {
        title: "Hệ Thống Đặt Lịch Khám Phòng Khám",
        description:
            "Ứng dụng web được phát triển để tối ưu hóa hoạt động của phòng khám. Hệ thống hỗ trợ quản lý hồ sơ bệnh nhân, đặt lịch hẹn, khám bệnh và xử lý thanh toán hiệu quả.",
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
            "Hệ thống đặt lịch theo bác sĩ & lịch trình",
            "Quản lý vai trò (Admin, Bác sĩ, Bệnh nhân)",
            "Xác thực JWT với tích hợp Identity",
            "Tích hợp thanh toán VNPay cho giao dịch bảo mật",
            "Giao diện thân thiện với React Context + Bootstrap",
        ],
        teamSize: 3,
        duration: "Tháng 3 - 5/2025",
        image: "/hospital-appointment-booking-dashboard.jpg",
        link: "https://github.com/BanhTuanKiet/BookingCare"
    },
    {
        title: "Ứng Dụng Web Thương Mại Điện Tử",
        description:
            "Ứng dụng web tối ưu hóa hoạt động thương mại điện tử, cho phép quản lý sản phẩm, đơn hàng, tồn kho, đánh giá và thanh toán, đồng thời cho phép khách hàng duyệt, đặt hàng và theo dõi đơn mua. Tính năng xác thực JWT với quyền truy cập dựa trên vai trò, cùng với tìm kiếm, lọc và phân trang để duyệt sản phẩm.",
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
            "Duyệt sản phẩm, lọc và tìm kiếm với phân trang",
            "Giỏ hàng và quy trình thanh toán với cập nhật tồn kho thời gian thực",
            "Tích hợp cổng thanh toán VNPay",
            "Bảng điều khiển quản trị để quản lý sản phẩm, danh mục và đơn hàng",
            "Tích hợp Cloudinary để lưu trữ hình ảnh",
            "Firebase cho thông báo và phân tích",
        ],
        image: "/ecommerce-website-dashboard.png",
        teamSize: 1,
        duration: "Tháng 7 - 9/2025",
        link: "https://github.com/BanhTuanKiet/E-Commerce"
    }
]

export default function Projects() {
    return (
        <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto ">
                <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-center">Dự Án</h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    Các ứng dụng thực tế thể hiện chuyên môn kỹ thuật và khả năng giải quyết vấn đề của tôi
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
                                            <span>{project.teamSize} thành viên</span>
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
                                    <h4 className="text-sm font-semibold mb-2 text-primary">Tính năng chính:</h4>
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
                                        Mã nguồn
                                    </Button>
                                    <Button size="sm" variant="outline" className="gap-2 bg-transparent">
                                        <ExternalLink className="h-4 w-4" />
                                        Demo
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