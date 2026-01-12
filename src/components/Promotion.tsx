export default function Promotion() {
  return (
    <section className="py-16 bg-gradient-to-br from-red-600 via-red-700 to-red-900 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 text-8xl">🎉</div>
        <div className="absolute top-20 right-20 text-6xl">⭐</div>
        <div className="absolute bottom-10 left-1/4 text-7xl">✨</div>
        <div className="absolute bottom-20 right-1/3 text-6xl">🎊</div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-yellow-400 text-red-900 px-8 py-3 rounded-full mb-4 animate-pulse shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-black uppercase">
                🎉 Khuyến mãi đặc biệt
              </h2>
            </div>
            <div className="bg-white text-red-900 font-bold text-xl md:text-2xl py-3 px-8 rounded-full inline-block shadow-xl">
              📅 Áp dụng: 15/01 - 12/02/2026
            </div>
          </div>

          {/* Promotion Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* 50% OFF */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-yellow-400">
              <div className="text-center">
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-2xl py-4 px-6 mb-4 shadow-lg">
                  <p className="text-6xl font-black mb-2">50%</p>
                  <p className="text-2xl font-bold uppercase">Giảm giá</p>
                </div>
                <p className="text-gray-800 font-bold text-lg leading-relaxed">
                  Tất cả dịch vụ khám & điều trị phẫu thuật
                </p>
              </div>
            </div>

            {/* 20% OFF */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300 border-4 border-blue-400">
              <div className="text-center">
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl py-4 px-6 mb-4 shadow-lg">
                  <p className="text-6xl font-black mb-2">20%</p>
                  <p className="text-2xl font-bold uppercase">Giảm giá</p>
                </div>
                <p className="text-gray-800 font-bold text-lg leading-relaxed">
                  Dịch vụ tiêm phòng vaccine & grooming
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <a
              href="tel:0965986798"
              className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-red-900 font-black text-xl md:text-2xl py-5 px-10 rounded-full transition-all transform hover:scale-110 shadow-2xl uppercase"
            >
              <span className="text-3xl">📞</span>
              <span>Liên hệ ngay: 0965 986 798</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
