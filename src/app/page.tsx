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

// Critical CSS inline for above-the-fold content
const criticalStyles = `
  .hero-gradient {
    background: linear-gradient(135deg, #ededf6 0%, #f8fafc 100%);
  }
  .btn-primary {
    background: #2563eb;
    border-radius: 0.5rem;
    padding: 0.75rem 2rem;
    color: white;
    font-weight: 600;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateZ(0);
    will-change: transform;
  }
  .btn-primary:hover {
    background: #1d4ed8;
    transform: translateY(-1px) translateZ(0);
  }
  .card-hover {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateZ(0);
    will-change: transform, box-shadow;
  }
  .card-hover:hover {
    transform: translateY(-4px) translateZ(0);
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  @media (prefers-reduced-motion: reduce) {
    .btn-primary, .card-hover {
      transition: none;
    }
  }
`;

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
    <>
      {/* Inline critical CSS */}
      <style dangerouslySetInnerHTML={{ __html: criticalStyles }} />

      <div className="min-h-screen bg-white">
        {/* Optimized Header with reduced shadow complexity */}
        <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
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
                  blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Crect width='64' height='64' fill='%23f3f4f6'/%3E%3C/svg%3E"
                />
              </Link>

              <a
                href="tel:0918669356"
                className="flex items-center gap-x-2 font-semibold text-gray-900 text-sm hover:text-blue-600 transition-colors duration-200"
                aria-label="Gọi điện thoại 0918669356"
              >
                <PhoneIcon color="#155dfc" width={16} height={16} />
                0918.669.356
              </a>
            </div>
          </div>
        </header>

        {/* Optimized Hero Section */}
        <section id="home" className="hero-gradient py-12 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="mb-6 font-bold text-3xl text-gray-900 sm:text-4xl lg:text-5xl">
                Xe dịch vụ <span className="text-blue-600">Cái Nước</span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl text-gray-600 text-lg sm:text-xl leading-relaxed">
                Xe dịch vụ Cái Nước mang đến trải nghiệm an toàn, thoải mái và
                giá ưu đãi. Xe đời mới, sạch sẽ, bảo dưỡng định kỳ cùng đội ngũ
                tài xế chuyên nghiệp.
              </p>
              <a
                href="tel:0918669356"
                className="inline-block"
                aria-label="Đặt xe ngay qua điện thoại"
              >
                <button className="btn-primary">Đặt xe ngay</button>
              </a>
            </div>
          </div>
        </section>

        {/* Optimized Services Section */}
        <section className="bg-gray-50 py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-bold text-2xl text-gray-900 sm:text-3xl lg:text-4xl">
                Dịch Vụ Của Chúng Tôi
              </h2>
              <p className="mx-auto max-w-2xl text-gray-600 text-base sm:text-lg">
                Các loại xe từ 5, 7 đến 16 chỗ, đáp ứng mọi nhu cầu di chuyển
                của quý khách.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {/* VinFast VF5 - Optimized Image */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-md card-hover">
                <div className="bg-[#ededf6] p-6">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                    <Image
                      src="/vinfast-vf5.webp"
                      alt="VinFast VF5 - Xe 5 chỗ hiện đại"
                      className="object-cover"
                      fill
                      fetchPriority="high"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f3f4f6'/%3E%3C/svg%3E"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-bold text-xl text-gray-900">
                      Xe 5 Chỗ
                    </h3>
                    <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800 text-sm">
                      VinFast VF5
                    </span>
                  </div>
                  <p className="mb-6 text-gray-600 text-sm leading-relaxed">
                    SUV điện hiện đại, thân thiện với môi trường. Phù hợp cho
                    gia đình nhỏ, đi lại trong thành phố và các chuyến đi ngắn
                    ngày.
                  </p>
                  <div className="mb-6 grid grid-cols-2 gap-3">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="mr-2 h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>5 chỗ ngồi</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Shield className="mr-2 h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>Xe điện</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Car className="mr-2 h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>Tự động</span>
                    </div>
                  </div>
                  <a
                    href="tel:0918669356"
                    className="inline-block w-full"
                    aria-label="Đặt xe 5 chỗ VinFast VF5"
                  >
                    <button className="w-full btn-primary">Đặt xe ngay</button>
                  </a>
                </div>
              </div>

              {/* Toyota Fortuner - Optimized Image */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-md card-hover">
                <div className="bg-[#ededf6] p-6">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                    <Image
                      src="/toyota-fortuner.webp"
                      alt="Toyota Fortuner - Xe 7 chỗ rộng rãi"
                      className="object-cover"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f3f4f6'/%3E%3C/svg%3E"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-bold text-xl text-gray-900">
                      Xe 7 Chỗ
                    </h3>
                    <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800 text-sm">
                      Toyota Fortuner
                    </span>
                  </div>
                  <p className="mb-6 text-gray-600 text-sm leading-relaxed">
                    SUV 7 chỗ rộng rãi, mạnh mẽ và bền bỉ. Lý tưởng cho nhóm
                    bạn, gia đình đông người và các chuyến du lịch dài ngày.
                  </p>
                  <div className="mb-6 grid grid-cols-2 gap-3">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="mr-2 h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>7 chỗ ngồi</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Shield className="mr-2 h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>An toàn cao</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Car className="mr-2 h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>Số tự động</span>
                    </div>
                  </div>
                  <a
                    href="tel:0918669356"
                    className="inline-block w-full"
                    aria-label="Đặt xe 7 chỗ Toyota Fortuner"
                  >
                    <button className="w-full btn-primary">Đặt xe ngay</button>
                  </a>
                </div>
              </div>

              {/* Hyundai Solati - Optimized Image */}
              <div className="overflow-hidden rounded-2xl bg-white shadow-md card-hover">
                <div className="bg-[#ededf6] p-6">
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
                    <Image
                      src="/hyundai-solati.webp"
                      alt="Hyundai Solati - Xe 16 chỗ cao cấp"
                      className="object-cover"
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 400px"
                      loading="lazy"
                      placeholder="blur"
                      blurDataURL="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='250' viewBox='0 0 400 250'%3E%3Crect width='400' height='250' fill='%23f3f4f6'/%3E%3C/svg%3E"
                    />
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-bold text-xl text-gray-900">
                      Xe 16 Chỗ
                    </h3>
                    <span className="rounded-full bg-blue-100 px-3 py-1 font-medium text-blue-800 text-sm">
                      Hyundai Solati
                    </span>
                  </div>
                  <p className="mb-6 text-gray-600 text-sm leading-relaxed">
                    Dòng xe 16 chỗ cao cấp, không gian rộng rãi, tiện nghi hiện
                    đại. Phù hợp cho nhóm đông người, tour du lịch, đưa đón sân
                    bay.
                  </p>
                  <div className="mb-6 grid grid-cols-2 gap-3">
                    <div className="flex items-center text-gray-600 text-sm">
                      <Users className="mr-2 h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>16 chỗ ngồi</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Shield className="mr-2 h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>An toàn</span>
                    </div>
                    <div className="flex items-center text-gray-600 text-sm">
                      <Car className="mr-2 h-4 w-4 text-blue-600 flex-shrink-0" />
                      <span>Máy dầu</span>
                    </div>
                  </div>
                  <a
                    href="tel:0918669356"
                    className="inline-block w-full"
                    aria-label="Đặt xe 16 chỗ Hyundai Solati"
                  >
                    <button className="w-full btn-primary">Đặt xe ngay</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Optimized Features Section */}
        <section className="bg-gray-50 py-12 lg:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="mb-4 font-bold text-2xl text-gray-900 sm:text-3xl lg:text-4xl">
                Tại sao chọn dịch vụ của chúng tôi?
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="mb-3 font-semibold text-gray-900 text-lg">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Optimized Footer */}
        <footer className="bg-gray-900 py-8 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div>
                <div className="mb-4 flex items-center">
                  <span className="font-bold text-lg">Xe dịch vụ Cái Nước</span>
                </div>
                <p className="text-gray-400 text-sm">
                  Xe dịch vụ uy tín và chất lượng tại Cái Nước.
                </p>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-base">Dịch vụ</h4>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Xe 5 chỗ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Xe 7 chỗ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      Xe 16 chỗ
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="mb-4 font-semibold text-base">Liên hệ</h4>
                <div className="space-y-2 text-gray-400 text-sm">
                  <p className="flex items-center">
                    <Phone className="mr-2 h-4 w-4 flex-shrink-0" />
                    <a
                      href="tel:0918669356"
                      className="hover:text-white transition-colors duration-200"
                    >
                      0918.669.356
                    </a>
                  </p>
                  <p className="flex items-center">
                    <MapPin className="mr-2 h-4 w-4 flex-shrink-0" />
                    Cái Nước, Cà Mau
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Optimized Zalo Button */}
        <Link
          href="https://zalo.me/0918669356"
          className="fixed bottom-6 right-4 z-50 group"
          aria-label="Liên hệ Zalo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="animate-ping absolute inline-flex h-12 w-12 rounded-full bg-blue-400 opacity-75"></span>
          </span>
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full bg-blue-500 shadow-lg border border-blue-500 group-hover:scale-110 transition-transform duration-200">
            <Image
              src="/zalo.png"
              alt="Zalo"
              width={24}
              height={24}
              className="object-contain"
              loading="lazy"
            />
          </span>
        </Link>
      </div>
    </>
  );
}
