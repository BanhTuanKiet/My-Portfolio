import {
    ASPNETCore,
    Bootstrap,
    Cloudinary,
    EntityFrameworkCore,
    Expressjs,
    Firebase,
    GoogleCloud,
    JWT,
    MongoDB,
    Nextjs,
    Reactjs,
    SignalR,
    SQLServer,
    TailwindCSS,
    VNPay
} from "@/lib/utils"

export const projectContent = {
    vi: {
        title: "Dự Án",
        subtitle: "Các ứng dụng thực tế thể hiện chuyên môn kỹ thuật và khả năng giải quyết vấn đề của tôi",
        items: [
            {
                title: "Nền Tảng Quản Lý Dự Án & Công Việc Thời Gian Thực",
                description:
                    "Hệ thống quản lý dự án agile thời gian thực với tính năng theo dõi backlog, sprint và công việc. Hỗ trợ cộng tác nhóm, kiểm soát truy cập dựa trên vai trò động, trạng thái trực tuyến và thông báo tức thì để thực hiện dự án liền mạch và hiệu quả.",
                tech: [Nextjs, TailwindCSS, ASPNETCore, EntityFrameworkCore, SQLServer, JWT, SignalR, GoogleCloud],
                features: [
                    "Quản lý backlog → sprint → task → subtask",
                    "Hệ thống vai trò & phân quyền động",
                    "Ủy quyền dựa trên Middleware",
                    "Cập nhật trạng thái công việc thời gian thực",
                    "Kiểm tra người được chỉ định và thông báo"
                ],
                images: [
                    "/images/project1.png",
                    "/images/project2.png",
                    "/images/project3.png",
                    "/images/project4.png",
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
                tech: [Reactjs, Bootstrap, ASPNETCore, EntityFrameworkCore, SQLServer, JWT, GoogleCloud, VNPay],
                features: [
                    "Hệ thống đặt lịch theo bác sĩ & lịch trình",
                    "Quản lý vai trò (Admin, Bác sĩ, Bệnh nhân)",
                    "Xác thực JWT với tích hợp Identity",
                    "Tích hợp thanh toán VNPay cho giao dịch bảo mật",
                    "Giao diện thân thiện với React Context + Bootstrap"
                ],
                images: [
                    "/images/hospital1.png",
                    "/images/hospital2.png",
                    "/images/hospital3.png",
                    "/images/hospital4.png",
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
                tech: [Reactjs, Bootstrap, Expressjs, MongoDB, JWT, VNPay, Cloudinary, Firebase],
                features: [
                    "Duyệt sản phẩm, lọc và tìm kiếm với phân trang",
                    "Giỏ hàng và quy trình thanh toán với cập nhật tồn kho thời gian thực",
                    "Tích hợp cổng thanh toán VNPay",
                    "Bảng điều khiển quản trị để quản lý sản phẩm, danh mục và đơn hàng",
                    "Tích hợp Cloudinary để lưu trữ hình ảnh và Firebase cho thông báo"
                ],
                images: [
                    "/images/e-commerce1.png",
                    "/images/e-commerce2.png",
                ],
                teamSize: 1,
                duration: "Tháng 7 - 9/2025",
                image: "/ecommerce-website-dashboard.png",
                link: "https://github.com/BanhTuanKiet/E-Commerce"
            }
        ]
    },

    en: {
        title: "Projects",
        subtitle: "Real-world applications showcasing my technical expertise and problem-solving skills",
        items: [
            {
                title: "Real-Time Project & Task Management Platform",
                description:
                    "A real-time agile project management system with backlog, sprint, and task tracking. It supports team collaboration, dynamic role-based access control, online presence detection, and instant notifications for seamless and efficient project execution.",
                tech: [Nextjs, TailwindCSS, ASPNETCore, EntityFrameworkCore, SQLServer, JWT, SignalR, GoogleCloud],
                features: [
                    "Manage backlog → sprint → task → subtask",
                    "Dynamic role-based permission system",
                    "Authorization through Middleware",
                    "Real-time task status updates",
                    "Assignee validation and instant notifications"
                ],
                images: [
                    "/images/project1.png",
                    "/images/project2.png",
                    "/images/project3.png",
                    "/images/project4.png",
                ],
                teamSize: 3,
                duration: "Sep 2025 - Present",
                image: "/project-management-kanban-board.png",
                link: "https://github.com/BanhTuanKiet/ProjectManagement"
            },
            {
                title: "Clinic Appointment Booking System",
                description:
                    "A web application designed to optimize clinic operations, supporting patient record management, appointment scheduling, medical consultations, and secure payment handling.",
                tech: [Reactjs, Bootstrap, ASPNETCore, EntityFrameworkCore, SQLServer, JWT, GoogleCloud, VNPay],
                features: [
                    "Appointment booking by doctor & schedule",
                    "Role-based management (Admin, Doctor, Patient)",
                    "JWT authentication integrated with Identity",
                    "VNPay payment gateway integration for secure transactions",
                    "User-friendly interface using React Context + Bootstrap"
                ],
                images: [
                    "/images/hospital1.png",
                    "/images/hospital2.png",
                    "/images/hospital3.png",
                    "/images/hospital4.png",
                ],
                teamSize: 3,
                duration: "Mar - May 2025",
                image: "/hospital-appointment-booking-dashboard.jpg",
                link: "https://github.com/BanhTuanKiet/BookingCare"
            },
            {
                title: "E-Commerce Web Application",
                description:
                    "A web platform that streamlines e-commerce operations by allowing management of products, orders, inventory, and payments. It supports JWT authentication, role-based access, and includes product browsing, filtering, and pagination.",
                tech: [Reactjs, Bootstrap, Expressjs, MongoDB, JWT, VNPay, Cloudinary, Firebase],
                features: [
                    "Product browsing with search, filter, and pagination",
                    "Shopping cart & checkout with real-time stock updates",
                    "VNPay payment gateway integration",
                    "Admin dashboard to manage products, categories, and orders",
                    "Cloudinary for image storage and Firebase for notifications"
                ],
                images: [
                    "/images/e-commerce1.png",
                    "/images/e-commerce2.png",
                    // "/images/e-commerce1.png",
                    // "/images/e-commerce1.png",
                ],
                teamSize: 1,
                duration: "Jul - Sep 2025",
                image: "/ecommerce-website-dashboard.png",
                link: "https://github.com/BanhTuanKiet/E-Commerce"
            }
        ]
    }
}
