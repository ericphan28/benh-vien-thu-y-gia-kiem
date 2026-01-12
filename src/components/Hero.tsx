export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-block mb-6 px-6 py-2 bg-red-600 rounded-full text-sm font-semibold animate-pulse">
            🚨 CẤP CỨU 24/24 - HOTLINE: 0965 986 798
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            BỆNH VIỆN THÚ Y GIA KIỆM
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-blue-100 font-light">
            Chăm sóc tận tâm – Điều trị đúng chuẩn
          </p>

          {/* Description */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-10">
            <p className="text-lg leading-relaxed">
              Tự hào với đội ngũ chuyên gia giàu kinh nghiệm trên{" "}
              <span className="font-bold text-yellow-300">15 năm</span> chuyên môn 
              chuyên sâu, chúng tôi cung cấp dịch vụ thú y toàn diện – chuyên sâu - 
              hiện đại, cam kết đồng hành cùng thú cưng trong mọi giai đoạn chăm sóc 
              sức khỏe.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:0965986798"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              📞 Gọi ngay: 0965 986 798
            </a>
            <a
              href="#services"
              className="bg-white text-blue-900 hover:bg-blue-50 font-bold py-4 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg"
            >
              Xem dịch vụ
            </a>
          </div>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
