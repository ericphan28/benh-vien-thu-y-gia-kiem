const services = [
  {
    icon: "🚑",
    title: "Cấp cứu thú cưng 24/24",
    description: "Sẵn sàng phục vụ mọi lúc, mọi nơi khi thú cưng cần",
  },
  {
    icon: "🩺",
    title: "Khám lâm sàng",
    description: "Kiểm tra sức khỏe định kỳ, phát hiện sớm bệnh lý",
  },
  {
    icon: "🏥",
    title: "Điều trị nội trú & ngoại trú",
    description: "Chăm sóc toàn diện với phòng điều trị hiện đại",
  },
  {
    icon: "💉",
    title: "Tiêm phòng & Tẩy ký sinh",
    description: "Chăm sóc phòng bệnh theo lịch khoa học",
  },
  {
    icon: "⚕️",
    title: "Phẫu thuật",
    description: "Gây mê bay hơi an toàn cao với thiết bị hiện đại",
  },
  {
    icon: "🔬",
    title: "Xét nghiệm",
    description: "Tổng quát, sinh hóa, điện giải, miễn dịch, nước tiểu, da liễu",
  },
  {
    icon: "📊",
    title: "Siêu âm & X-quang",
    description: "Chẩn đoán hình ảnh kỹ thuật số chính xác",
  },
  {
    icon: "✂️",
    title: "Spa & Grooming",
    description: "Chăm sóc vẻ đẹp chuyên nghiệp cho thú cưng",
  },
  {
    icon: "🏨",
    title: "Khách sạn thú cưng",
    description: "Khu điều trị nội trú và lưu trú an toàn, thoải mái",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dịch vụ nổi bật
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cung cấp đầy đủ các dịch vụ chăm sóc sức khỏe cho thú cưng từ A-Z
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-blue-600"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Promotion Banner */}
        <div className="mt-16 bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center shadow-xl">
          <h3 className="text-3xl font-bold mb-4">🎉 Khuyến mãi đặc biệt</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-lg">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
              <p className="font-bold text-2xl">Giảm 50%</p>
              <p className="text-sm">Tất cả dịch vụ khám & điều trị phẫu thuật</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl px-6 py-4">
              <p className="font-bold text-2xl">Giảm 20%</p>
              <p className="text-sm">Dịch vụ tiêm phòng vaccine & grooming</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
