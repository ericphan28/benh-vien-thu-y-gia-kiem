export default function Contact() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Liên hệ với chúng tôi
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
            <p className="text-xl text-blue-100">
              Chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Emergency Contact */}
            <div className="bg-red-600 rounded-2xl p-8 shadow-2xl transform hover:scale-105 transition-all">
              <div className="text-center">
                <div className="text-6xl mb-4">🚨</div>
                <h3 className="text-3xl font-bold mb-4">Cấp cứu 24/24</h3>
                <a
                  href="tel:0965986798"
                  className="inline-block text-4xl font-bold hover:text-yellow-300 transition-colors mb-2"
                >
                  0965 986 798
                </a>
                <p className="text-red-100 text-lg">
                  Gọi ngay khi thú cưng cần cấp cứu
                </p>
              </div>
            </div>

            {/* General Contact */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-2xl border border-white/20">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="text-3xl">📍</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Địa chỉ</h4>
                    <p className="text-blue-100">
                      Ấp Vĩnh Tân, Xã Gia Kiệm, Huyện Đông Nai
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📞</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Hotline</h4>
                    <a
                      href="tel:0965986798"
                      className="text-blue-100 hover:text-white transition-colors text-lg"
                    >
                      0965 986 798
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">⏰</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Giờ làm việc</h4>
                    <p className="text-blue-100">
                      Phục vụ 24/7 - Cả ngày lễ, Tết
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="text-3xl">📧</div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">Email</h4>
                    <a
                      href="mailto:info@thuygiakien.com"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      info@thuygiakien.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Actions */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-center mb-6">
              Kết nối với chúng tôi
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <span className="text-2xl">📘</span> Facebook
              </a>
              <a
                href="https://zalo.me/0965986798"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-600 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <span className="text-2xl">💬</span> Zalo
              </a>
              <a
                href="tel:0965986798"
                className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 flex items-center gap-2"
              >
                <span className="text-2xl">📞</span> Gọi ngay
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center mt-16 pt-8 border-t border-white/20">
        <p className="text-blue-200 mb-2">
          © 2026 Bệnh viện Thú Y Gia Kiệm. All rights reserved.
        </p>
        <p className="text-sm text-blue-300">
          Chăm sóc tận tâm – Điều trị đúng chuẩn
        </p>
      </div>
    </section>
  );
}
