import React from "react";
import {
  Phone,
  MapPin,
  Clock,
  Shield,
  Award,
  PhoneIcon,
  Users,
  Car,
} from "lucide-react";
import Image from "next/image";

export default function HomePage() {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-green-600" />,
      title: "An toàn tuyệt đối",
      description: "Xe được bảo dưỡng định kỳ, bảo hiểm đầy đủ",
    },
    {
      icon: <Award className="w-8 h-8 text-green-600" />,
      title: "Tài xế chuyên nghiệp",
      description: "Đội ngũ tài xế kinh nghiệm, thân thiện",
    },
    {
      icon: <Clock className="w-8 h-8 text-green-600" />,
      title: "Đưa đón tận nơi",
      description: "Luôn sẵn sàng phục vụ tại địa điểm yêu cầu",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="relative h-24 w-24 rounded-lg overflow-hidden">
              <Image
                priority
                src="/logo.png"
                alt="Logo"
                className="w-24 h-24 object-cover rounded-lg"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                placeholder="blur"
                blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Cpath d='M40 160 L90 130 L140 140 L190 135 L240 145 L290 130 L360 150 L360 260 L40 260 Z' fill='%23374151'/%3E%3Crect x='70' y='190' width='70' height='45' rx='8' fill='%23111827'/%3E%3Crect x='260' y='190' width='70' height='45' rx='8' fill='%23111827'/%3E%3Ctext x='200' y='170' text-anchor='middle' fill='%23374151' font-family='Arial' font-size='16' font-weight='bold'%3EToyota Fortuner%3C/text%3E%3C/svg%3E"
              />
            </div>

            {/* Contact Info */}
            <a
              href="tel:0918669356"
              className="flex items-center gap-x-2 text-sm font-semibold text-gray-900 hover:text-blue-600"
            >
              <PhoneIcon color="#155dfc" width={16} height={16} />
              0918.669.356
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Xe dịch vụ <span className=" text-blue-600">Cái Nước</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Xe dịch vụ Cái Nước mang đến trải nghiệm an toàn, thoải mái và giá
              ưu đãi. Xe đời mới, sạch sẽ, bảo dưỡng định kỳ cùng đội ngũ tài xế
              chuyên nghiệp, phục vụ tận tình mọi lúc mọi nơi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0918669356"
                className="flex mx-auto items-center gap-x-2 text-sm font-semibold text-gray-900 hover:text-blue-600"
              >
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                  Đặt xe ngay
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Các loại xe từ 5 đến 7 chỗ, đáp ứng mọi nhu cầu của quý khách.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 5 Seat Car - VinFast VF5 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="aspect-w-16 aspect-h-10 bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/vf-5-banner.png"
                    alt="VinFast VF5 - Xe 5 chỗ"
                    className="w-full h-64 object-cover rounded-lg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Cpath d='M40 160 L90 130 L140 140 L190 135 L240 145 L290 130 L360 150 L360 260 L40 260 Z' fill='%23374151'/%3E%3Crect x='70' y='190' width='70' height='45' rx='8' fill='%23111827'/%3E%3Crect x='260' y='190' width='70' height='45' rx='8' fill='%23111827'/%3E%3Ctext x='200' y='170' text-anchor='middle' fill='%23374151' font-family='Arial' font-size='16' font-weight='bold'%3EToyota Fortuner%3C/text%3E%3C/svg%3E"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 font-playfair">
                    Xe 5 Chỗ
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold font-inter">
                    VinFast VF5
                  </span>
                </div>
                <p className="text-gray-600 mb-6 font-inter font-light leading-relaxed">
                  SUV điện hiện đại, thân thiện với môi trường. Phù hợp cho gia
                  đình nhỏ, đi lại trong thành phố và các chuyến đi ngắn ngày.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600 font-inter">
                    <Users className="w-4 h-4 mr-2 text-blue-600" />5 chỗ ngồi
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-inter">
                    <Shield className="w-4 h-4 mr-2 text-blue-600" />
                    Xe điện an toàn
                  </div>

                  <div className="flex items-center text-sm text-gray-600 font-inter">
                    <Car className="w-4 h-4 mr-2 text-blue-600" />
                    Tự động
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="tel:0918669356"
                        className="flex items-center gap-x-2 text-sm font-semibold text-gray-900 hover:text-blue-600"
                      >
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                          Đặt xe ngay
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 7 Seat Car - Toyota Fortuner 2017 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
              <div className="aspect-w-16 aspect-h-10 bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
                <div className="relative w-full h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/toyota-fortuner.jpg"
                    alt="Toyota Fortuner - Xe 7 chỗ"
                    className="w-full h-64 object-cover rounded-lg"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Cpath d='M40 160 L90 130 L140 140 L190 135 L240 145 L290 130 L360 150 L360 260 L40 260 Z' fill='%23374151'/%3E%3Crect x='70' y='190' width='70' height='45' rx='8' fill='%23111827'/%3E%3Crect x='260' y='190' width='70' height='45' rx='8' fill='%23111827'/%3E%3Ctext x='200' y='170' text-anchor='middle' fill='%23374151' font-family='Arial' font-size='16' font-weight='bold'%3EToyota Fortuner%3C/text%3E%3C/svg%3E"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 font-playfair">
                    Xe 7 Chỗ
                  </h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold font-inter">
                    Toyota Fortuner
                  </span>
                </div>
                <p className="text-gray-600 mb-6 font-inter font-light leading-relaxed">
                  SUV 7 chỗ rộng rãi, mạnh mẽ và bền bỉ. Lý tưởng cho nhóm bạn,
                  gia đình đông người và các chuyến du lịch dài ngày.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600 font-inter">
                    <Users className="w-4 h-4 mr-2 text-blue-600" />7 chỗ ngồi
                  </div>
                  <div className="flex items-center text-sm text-gray-600 font-inter">
                    <Shield className="w-4 h-4 mr-2 text-blue-600" />
                    An toàn cao
                  </div>

                  <div className="flex items-center text-sm text-gray-600 font-inter">
                    <Car className="w-4 h-4 mr-2 text-blue-600" />
                    Số tự động
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="tel:0918669356"
                        className="flex items-center gap-x-2 text-sm font-semibold text-gray-900 hover:text-blue-600"
                      >
                        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300">
                          Đặt xe ngay
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn dịch vụ của chúng tôi?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-xl font-bold">Xe dịch vụ Cái Nước</span>
              </div>
              <p className="text-gray-400">
                Xe dịch vụ uy tín và chất lượng tại Cái Nước.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Dịch vụ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Xe 5-7 chỗ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Liên hệ</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  0918.669.356
                </p>

                <p className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Cái Nước, Cà Mau
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
