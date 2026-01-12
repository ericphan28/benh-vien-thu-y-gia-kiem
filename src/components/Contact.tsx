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
                      284, tổ 17, ấp Tân Yên, xã Gia Kiệm, tỉnh Đồng Nai
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
      <div className="mt-16 pt-8 border-t border-white/20">
        <div className="text-center mb-8">
          <p className="text-blue-200 mb-2">
            © 2026 Bệnh viện Thú Y Gia Kiệm. All rights reserved.
          </p>
          <p className="text-sm text-blue-300">
            Chăm sóc tận tâm – Điều trị đúng chuẩn
          </p>
        </div>

        {/* Developer & Technology Partner */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Developer */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-center gap-4">
              <img
                src="/developer/thang-phan.jpg"
                alt="Thắng Phan"
                className="w-16 h-16 rounded-full object-cover border-2 border-blue-400"
              />
              <div className="flex-1">
                <h4 className="font-bold text-lg text-white mb-1">Thắng Phan</h4>
                <p className="text-sm text-blue-300 mb-2">Digital Transformation Consultant</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    href="https://zalo.me/0907136029"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>💬</span> 0907 136 029
                  </a>
                  <a
                    href="https://www.facebook.com/thang.phan.334/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>📘</span> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Technology Partner */}
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all">
            <div className="flex items-center gap-4">
              <img
                src="/developer/gia-kiem-so.jpg"
                alt="Gia Kiệm Số"
                className="w-16 h-16 rounded-full object-cover border-2 border-green-400"
              />
              <div className="flex-1">
                <h4 className="font-bold text-lg text-white mb-1">Gia Kiệm Số</h4>
                <p className="text-sm text-green-300 mb-2">Technology Partner</p>
                <div className="flex flex-wrap gap-3 text-sm">
                  <a
                    href="https://www.giakiemso.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>🌐</span> Giakiemso.com
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61577066581766"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-200 hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>📘</span> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
