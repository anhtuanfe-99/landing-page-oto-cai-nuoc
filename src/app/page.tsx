import {
  Award,
  Car,
  Clock,
  MapPin,
  Phone,
  PhoneIcon,
  Shield,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-green-600" />,
      title: "An toàn tuyệt đối",
      description: "Xe được bảo dưỡng định kỳ, bảo hiểm đầy đủ",
    },
    {
      icon: <Award className="h-8 w-8 text-green-600" />,
      title: "Tài xế chuyên nghiệp",
      description: "Đội ngũ tài xế kinh nghiệm, thân thiện",
    },
    {
      icon: <Clock className="h-8 w-8 text-green-600" />,
      title: "Đưa đón tận nơi",
      description: "Luôn sẵn sàng phục vụ tại địa điểm yêu cầu",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white shadow-lg">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="#"
              className="relative h-24 w-24 overflow-hidden rounded-lg"
            >
              <Image
                priority
                fetchPriority="high"
                src="/logo.webp"
                alt="Logo Xe dịch vụ Cái Nước"
                className="h-24 w-24 rounded-lg object-cover"
                width={96}
                height={96}
                sizes="96px"
                placeholder="blur"
                blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='96' height='96' viewBox='0 0 96 96'%3E%3Crect width='96' height='96' fill='%23f3f4f6'/%3E%3C/svg%3E"
              />
            </Link>

            {/* Contact Info */}
            <a
              href="tel:0918669356"
              className="flex items-center gap-x-2 font-semibold text-gray-900 text-sm hover:text-blue-600"
              aria-label="Gọi điện thoại 0918669356"
            >
              <PhoneIcon color="#155dfc" width={16} height={16} />
              0918.669.356
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-[#ededf6] py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 font-bold text-4xl text-gray-900 lg:text-6xl">
              Xe dịch vụ <span className="text-blue-600">Cái Nước</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-gray-600 text-xl">
              Xe dịch vụ Cái Nước mang đến trải nghiệm an toàn, thoải mái và giá
              ưu đãi. Xe đời mới, sạch sẽ, bảo dưỡng định kỳ cùng đội ngũ tài xế
              chuyên nghiệp, phục vụ tận tình mọi lúc mọi nơi.
            </p>
            <a
              href="tel:0918669356"
              className="inline-block"
              aria-label="Đặt xe ngay qua điện thoại"
            >
              <button className="transform rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-blue-700">
                Đặt xe ngay
              </button>
            </a>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl text-gray-900 lg:text-4xl">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="mx-auto max-w-3xl text-gray-600 text-lg">
              Các loại xe từ 5, 7 đến 16 chỗ, đáp ứng mọi nhu cầu di chuyển của
              quý khách.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* 5 Seat Car - VinFast VF5 */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:shadow-xl">
              <div className="aspect-h-10 aspect-w-16 bg-[#ededf6] p-8">
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/vf-5-banner.webp"
                    alt="VinFast VF5 - Xe 5 chỗ hiện đại"
                    className="h-64 w-full rounded-lg object-cover"
                    width={400}
                    height={256}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='256' viewBox='0 0 400 256'%3E%3Crect width='400' height='256' fill='%23f3f4f6'/%3E%3C/svg%3E"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold text-2xl text-gray-900">Xe 5 Chỗ</h3>
                  <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-800 text-sm">
                    VinFast VF5
                  </span>
                </div>
                <p className="mb-6 text-gray-600 leading-relaxed min-h-[105px]">
                  SUV điện hiện đại, thân thiện với môi trường. Phù hợp cho gia
                  đình nhỏ, đi lại trong thành phố và các chuyến đi ngắn ngày.
                </p>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="mr-2 h-4 w-4 text-blue-600" />5 chỗ ngồi
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Shield className="mr-2 h-4 w-4 text-blue-600" />
                    Xe điện an toàn
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Car className="mr-2 h-4 w-4 text-blue-600" />
                    Tự động
                  </div>
                </div>
                <a
                  href="tel:0918669356"
                  className="inline-block w-full"
                  aria-label="Đặt xe 5 chỗ VinFast VF5"
                >
                  <button className="w-full rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700">
                    Đặt xe ngay
                  </button>
                </a>
              </div>
            </div>
            {/* 7 Seat Car - Toyota Fortuner 2017 */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:shadow-xl h-full flex flex-col min-h-[540px]">
              <div className="aspect-h-10 aspect-w-16 bg-[#ededf6] p-8">
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/toyota-fortuner.webp"
                    alt="Toyota Fortuner - Xe 7 chỗ rộng rãi"
                    className="h-64 w-full rounded-lg object-cover"
                    width={400}
                    height={256}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='256' viewBox='0 0 400 256'%3E%3Crect width='400' height='256' fill='%23f3f4f6'/%3E%3C/svg%3E"
                  />
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold text-2xl text-gray-900">Xe 7 Chỗ</h3>
                  <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-800 text-sm">
                    Toyota Fortuner
                  </span>
                </div>
                <p className="mb-6 text-gray-600 leading-relaxed min-h-[105px]">
                  SUV 7 chỗ rộng rãi, mạnh mẽ và bền bỉ. Lý tưởng cho nhóm bạn,
                  gia đình đông người và các chuyến du lịch dài ngày.
                </p>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="mr-2 h-4 w-4 text-blue-600" />7 chỗ ngồi
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Shield className="mr-2 h-4 w-4 text-blue-600" />
                    An toàn cao
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Car className="mr-2 h-4 w-4 text-blue-600" />
                    Số tự động
                  </div>
                </div>
                <div className="mt-auto">
                  <a
                    href="tel:0918669356"
                    className="inline-block w-full"
                    aria-label="Đặt xe 7 chỗ Toyota Fortuner"
                  >
                    <button className="w-full rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700">
                      Đặt xe ngay
                    </button>
                  </a>
                </div>
              </div>
            </div>

            {/* 16 Seat Car - Hyundai Solati */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:shadow-xl">
              <div className="aspect-h-10 aspect-w-16 bg-[#ededf6] p-8">
                <div className="relative h-64 w-full overflow-hidden rounded-lg">
                  <Image
                    src="/hyundai-solati.webp"
                    alt="Hyundai Solati - Xe 16 chỗ cao cấp"
                    className="h-64 w-full rounded-lg object-cover"
                    width={400}
                    height={256}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='256' viewBox='0 0 400 256'%3E%3Crect width='400' height='256' fill='%23f3f4f6'/%3E%3C/svg%3E"
                  />
                </div>
              </div>
              <div className="p-8">
                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold text-2xl text-gray-900">
                    Xe 16 Chỗ
                  </h3>
                  <span className="rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-800 text-sm">
                    Hyundai Solati
                  </span>
                </div>
                <p className="mb-6 text-gray-600 leading-relaxed min-h-[105px]">
                  Dòng xe 16 chỗ cao cấp, không gian rộng rãi, tiện nghi hiện
                  đại. Phù hợp cho nhóm đông người, tour du lịch, đưa đón sân
                  bay hoặc sự kiện.
                </p>
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users className="mr-2 h-4 w-4 text-blue-600" />
                    16 chỗ ngồi
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Shield className="mr-2 h-4 w-4 text-blue-600" />
                    An toàn, tiện nghi
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Car className="mr-2 h-4 w-4 text-blue-600" />
                    Máy dầu, số sàn
                  </div>
                </div>
                <a
                  href="tel:0918669356"
                  className="inline-block w-full"
                  aria-label="Đặt xe 16 chỗ Hyundai Solati"
                >
                  <button className="w-full rounded-lg bg-blue-600 px-8 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700">
                    Đặt xe ngay
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-bold text-3xl text-gray-900 lg:text-4xl">
              Tại sao chọn dịch vụ của chúng tôi?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="mb-3 font-semibold text-gray-900 text-xl">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center">
                <span className="font-bold text-xl">Xe dịch vụ Cái Nước</span>
              </div>
              <p className="text-gray-400">
                Xe dịch vụ uy tín và chất lượng tại Cái Nước.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-lg">Dịch vụ</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Xe 5 chỗ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Xe 7 chỗ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Xe 16 chỗ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-semibold text-lg">Liên hệ</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  <a href="tel:0918669356" className="hover:text-white">
                    0918.669.356
                  </a>
                </p>

                <p className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  Cái Nước, Cà Mau
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <Link
        href="https://zalo.me/0918669356"
        className="fixed bottom-24 right-4 z-50 group"
        aria-label="Liên hệ Zalo"
        target="_blank"
      >
        {/* Animated outer ring */}
        <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <span className="animate-ping absolute inline-flex h-14 w-14 rounded-full bg-blue-400 opacity-75 !animation-duration-[5s]"></span>
          <span className="animate-pulse absolute inline-flex h-12 w-12 rounded-full bg-blue-500 opacity-50 !animation-duration-[2s]"></span>
        </span>
        {/* Zalo icon */}
        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-blue-500 shadow-lg border border-blue-500 group-hover:scale-110 transition-transform duration-200">
          <Image
            src="/zalo.png"
            alt="Zalo"
            width={32}
            height={32}
            className="object-contain"
          />
        </span>
      </Link>
    </div>
  );
}
