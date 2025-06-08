import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Zap,
  Trophy,
  Gift,
  Building2,
  Monitor,
  MessageCircle,
  Play,
  Download,
  CheckCircle,
  Mail,
  Phone,
  Globe,
  Menu,
  ArrowRight,
  Gamepad2,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function NetslaLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-purple-500/20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">Netsla</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#home" className="text-gray-300 hover:text-purple-400 transition-colors">
                Trang chủ
              </Link>
              <Link href="#features" className="text-gray-300 hover:text-purple-400 transition-colors">
                Tại sao Netsla
              </Link>
              <Link href="#packages" className="text-gray-300 hover:text-purple-400 transition-colors">
                Gói dịch vụ
              </Link>
              <Link href="#demo" className="text-gray-300 hover:text-purple-400 transition-colors">
                Demo
              </Link>
              <Link href="#stories" className="text-gray-300 hover:text-purple-400 transition-colors">
                Câu chuyện
              </Link>
              <Link href="#contact" className="text-gray-300 hover:text-purple-400 transition-colors">
                Liên hệ
              </Link>
            </div>
            <Button variant="outline" size="sm" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-purple-600/20 text-purple-300 border-purple-500/30">
              Cách mạng quản lý cyber cafe
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Netsla – Hệ thống quản lý
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
                {" "}
                Cyber Cafe{" "}
              </span>
              thế hệ mới
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Từ cuộc cách mạng điện của Nikola Tesla đến tương lai vận hành cyber café
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">
              Hơn 100 năm trước, Nikola Tesla đã thay đổi thế giới với dòng điện xoay chiều cách mạng. Lấy cảm hứng từ
              tinh thần đổi mới đó, Netsla mang đến tự động hóa tiên tiến và trải nghiệm liền mạch cho việc quản lý
              cyber café tại Việt Nam.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                Dùng thử ngay
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-500/10 px-8 py-4 text-lg"
              >
                <Download className="mr-2 h-5 w-5" />
                Tải ứng dụng
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Tại sao chọn Netsla?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Khám phá những tính năng vượt trội giúp cyber café của bạn hoạt động hiệu quả hơn
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <Zap className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Quản lý tự động chính xác</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Tự động theo dõi số dư, kho hàng, thanh toán với độ chính xác thời gian thực.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <Monitor className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Giao diện hiện đại, thân thiện</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Trải nghiệm desktop mượt mà, hoạt động offline liền mạch.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <Trophy className="h-12 w-12 text-yellow-400 mb-4" />
                <CardTitle className="text-white">Tích hợp giải đấu & cộng đồng</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Xây dựng cộng đồng game thủ với các sự kiện và cuộc thi tích hợp sẵn.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <Gift className="h-12 w-12 text-green-400 mb-4" />
                <CardTitle className="text-white">Hệ thống thưởng & điểm tích lũy</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Khuyến khích khách hàng quay lại và tăng doanh thu với hệ thống thưởng game hóa.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <Building2 className="h-12 w-12 text-purple-400 mb-4" />
                <CardTitle className="text-white">Quản lý đa chi nhánh thời gian thực</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Mở rộng kinh doanh mà không mất kiểm soát hoặc độ chính xác.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 hover:transform hover:scale-105">
              <CardHeader>
                <MessageCircle className="h-12 w-12 text-blue-400 mb-4" />
                <CardTitle className="text-white">Chat nội bộ & hỗ trợ khách hàng</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400">
                  Cải thiện giao tiếp giữa nhân viên và người chơi qua các chi nhánh.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Gói dịch vụ – Cho mọi quy mô kinh doanh</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Chọn gói phù hợp với nhu cầu và quy mô cyber café của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-slate-800/50 border-blue-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-4 p-3 bg-blue-500/20 rounded-full w-fit">
                  <Gamepad2 className="h-8 w-8 text-blue-400" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">GÓI CƠ BẢN</CardTitle>
                <CardDescription className="text-blue-300 font-semibold">KHỞI NGHIỆP DỄ DÀNG</CardDescription>
                <p className="text-gray-400 mt-4">
                  Phù hợp với cyber café nhỏ, ít nhân viên hoặc lượng khách tối thiểu
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">Quản lý thời gian chơi: theo dõi đăng nhập/đăng xuất</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">
                      Nạp tiền trực tiếp tại máy thông qua cổng thanh toán hoặc smsbot
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">Hệ thống điểm thưởng & combo tự động</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">Giao diện đơn giản, sạch sẽ cho người dùng mới</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                    <span className="text-gray-300">Hoạt động offline – không phụ thuộc internet</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-sm text-gray-500">
                    <strong>Lưu ý:</strong> Không có hệ thống đặt chỗ, không có portal web cho người dùng hoặc chủ sở
                    hữu.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Advanced Plan */}
            <Card className="bg-slate-800/50 border-purple-500/30 relative overflow-hidden transform scale-105">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                PHỔ BIẾN NHẤT
              </Badge>
              <CardHeader className="text-center pb-8 pt-8">
                <div className="mx-auto mb-4 p-3 bg-purple-500/20 rounded-full w-fit">
                  <BarChart3 className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">GÓI NÂNG CAO</CardTitle>
                <CardDescription className="text-purple-300 font-semibold">QUẢN LÝ TỐI ƯU & TƯƠNG TÁC</CardDescription>
                <p className="text-gray-400 mt-4">
                  Phù hợp với café cỡ trung muốn phát triển, tổ chức sự kiện hoặc khuyến mãi
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="text-purple-300 font-semibold mb-3">Tính năng bổ sung cho người chơi:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">
                        Portal Web khách hàng: tạo tài khoản, đặt máy, nạp tiền online
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Ưu đãi khuyến mãi, đổi điểm tích lũy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Đăng ký giải đấu và theo dõi</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Chat cộng đồng trong café</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-purple-300 font-semibold mb-3">Tính năng bổ sung cho chủ sở hữu:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Panel quản trị từ xa: kiểm soát tài khoản/số dư máy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Theo dõi trạng thái máy, lịch sử giao dịch</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Thiết lập giải đấu, khuyến mãi, thống kê</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-purple-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">Phân quyền nhân viên (quản lý/thu ngân)</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Pro Plan */}
            <Card className="bg-slate-800/50 border-yellow-500/30 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-500 to-yellow-600"></div>
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-4 p-3 bg-yellow-500/20 rounded-full w-fit">
                  <Building2 className="h-8 w-8 text-yellow-400" />
                </div>
                <CardTitle className="text-2xl text-white mb-2">GÓI PRO</CardTitle>
                <CardDescription className="text-yellow-300 font-semibold">
                  HỆ SINH THÁI & XÂY DỰNG CỘNG ĐỒNG
                </CardDescription>
                <p className="text-gray-400 mt-4">
                  Phù hợp với cyber café lớn, chuỗi cửa hàng hoặc chủ sở hữu có kế hoạch mở rộng
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-yellow-300 font-semibold mb-3">Tính năng bổ sung:</h4>
                  <div className="space-y-3">
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 font-medium">Quản lý đa chi nhánh:</span>
                      </div>
                      <div className="ml-8 space-y-1">
                        <p className="text-gray-400 text-sm">• Kiểm soát tập trung qua các địa điểm</p>
                        <p className="text-gray-400 text-sm">• Phân tích & báo cáo toàn chuỗi</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <CheckCircle className="h-5 w-5 text-yellow-400 flex-shrink-0" />
                        <span className="text-gray-300 font-medium">Hệ sinh thái cộng đồng:</span>
                      </div>
                      <div className="ml-8 space-y-1">
                        <p className="text-gray-400 text-sm">• Giải đấu liên chi nhánh (online/offline)</p>
                        <p className="text-gray-400 text-sm">• Chat & ghép đôi liên chi nhánh</p>
                        <p className="text-gray-400 text-sm">• Tích hợp cửa hàng online: bán gear, thuê tài khoản</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Demo & Dùng thử miễn phí</h2>
            <p className="text-xl text-gray-400 mb-12">
              Trải nghiệm Netsla ngay hôm nay với bản demo trực tuyến hoặc tải ứng dụng desktop
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-purple-600/20 to-blue-600/20 border-purple-500/30 hover:border-purple-500/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <Play className="h-16 w-16 text-purple-400 mx-auto mb-4" />
                  <CardTitle className="text-white text-2xl">Demo Web</CardTitle>
                  <CardDescription className="text-gray-300">Trải nghiệm ngay trên trình duyệt</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white w-full"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    Thử Web Demo Ngay
                  </Button>
                  <p className="text-sm text-gray-400 mt-3">demo.netsla.vn</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-blue-600/20 to-green-600/20 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
                <CardHeader className="text-center">
                  <Download className="h-16 w-16 text-blue-400 mx-auto mb-4" />
                  <CardTitle className="text-white text-2xl">Ứng dụng Desktop</CardTitle>
                  <CardDescription className="text-gray-300">Tải về và cài đặt cho Windows</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-500 text-blue-300 hover:bg-blue-500/10 w-full"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Tải ứng dụng Windows
                  </Button>
                  <p className="text-sm text-gray-400 mt-3">netsla.vn/download</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-gradient-to-r from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-8">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <CheckCircle className="h-8 w-8 text-green-400" />
                <span className="text-2xl font-bold text-white">Dùng thử 7 ngày miễn phí</span>
              </div>
              <p className="text-gray-300 text-lg">Không rủi ro. Không phí ẩn. Hủy bất cứ lúc nào.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stories Section */}
      <section id="stories" className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hành trình Netsla – Những câu chuyện thực tế đầy cảm hứng
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Khám phá những câu chuyện thành công từ cộng đồng Netsla
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-purple-500/20 rounded-full">
                    <Monitor className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">Từ khó khăn đến hệ thống</CardTitle>
                    <CardDescription className="text-purple-300">Tầm nhìn của một quản lý</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-300 italic leading-relaxed">
                  "Tôi điều hành một café mà mỗi giờ cao điểm đều có máy đầy và khiếu nại. Quản lý kho? Thủ công và lộn
                  xộn. Không có giải đấu, không có tính năng web, chỉ là một hệ thống làm chúng tôi chậm lại.
                  <br />
                  <br />
                  Tôi xây dựng Netsla để những người khác không phải đối mặt với điều tương tự. Bây giờ, mọi thứ mượt
                  mà, hiện đại, và thực sự giúp chủ sở hữu phát triển, không chỉ tồn tại."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-full">
                    <Trophy className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">Bước đột phá của game thủ</CardTitle>
                    <CardDescription className="text-blue-300">Từ người chơi đến tuyển thủ</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-300 italic leading-relaxed">
                  "Tôi luôn mơ ước trở thành pro trong esports, nhưng không có café nào hỗ trợ giấc mơ đó — không có
                  giải đấu, không có cộng đồng.
                  <br />
                  <br />
                  Khi tôi chơi tại một café dùng Netsla, mọi thứ đã thay đổi. Tôi có thể tham gia sự kiện, gặp gỡ những
                  người chơi khác, và cảm thấy như là một phần của điều gì đó lớn hơn. Đó không chỉ là chơi game nữa, mà
                  là một tương lai."
                </blockquote>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-green-500/20 hover:border-green-500/40 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-green-500/20 rounded-full">
                    <Building2 className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <CardTitle className="text-white text-lg">Sự phát triển của chủ sở hữu</CardTitle>
                    <CardDescription className="text-green-300">Từ địa phương đến chuỗi</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <blockquote className="text-gray-300 italic leading-relaxed">
                  "Trong nhiều năm, tôi quản lý một café duy nhất với các công cụ cơ bản. Tôi muốn phát triển, mở rộng,
                  nhưng phần mềm của tôi đã cản trở tôi.
                  <br />
                  <br />
                  Netsla đã cho tôi khả năng kiểm soát từ xa, phân tích sâu và lòng trung thành thực sự của khách hàng.
                  Hôm nay, tôi đang mở chi nhánh thứ hai — và tôi chỉ mới bắt đầu."
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Liên hệ với chúng tôi</h2>
              <p className="text-xl text-gray-400">Sẵn sàng hỗ trợ bạn bắt đầu hành trình với Netsla</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-purple-500/20 rounded-full">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Email</h3>
                    <p className="text-gray-400">support@netsla.vn</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-blue-500/20 rounded-full">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Hotline</h3>
                    <p className="text-gray-400">0123 456 789</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-green-500/20 rounded-full">
                    <Globe className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Website</h3>
                    <p className="text-gray-400">www.netsla.vn</p>
                  </div>
                </div>
              </div>

              <Card className="bg-slate-800/50 border-purple-500/20">
                <CardHeader>
                  <CardTitle className="text-white">Gửi tin nhắn</CardTitle>
                  <CardDescription className="text-gray-400">Chúng tôi sẽ phản hồi trong vòng 24 giờ</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Họ tên</label>
                      <Input placeholder="Nhập họ tên" className="bg-slate-700/50 border-slate-600 text-white" />
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Email</label>
                      <Input placeholder="Nhập email" className="bg-slate-700/50 border-slate-600 text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400 mb-2 block">Tin nhắn</label>
                    <Textarea
                      placeholder="Nhập tin nhắn của bạn..."
                      className="bg-slate-700/50 border-slate-600 text-white min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    Gửi tin nhắn
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 border-t border-slate-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Zap className="h-8 w-8 text-purple-400" />
              <span className="text-2xl font-bold text-white">Netsla</span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 Netsla. Tất cả quyền được bảo lưu.</p>
              <p className="text-sm mt-1">Cách mạng quản lý cyber café thế hệ mới</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
