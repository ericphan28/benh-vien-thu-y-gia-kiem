const strengths = [
  {
    icon: "👨‍⚕️",
    title: "Đội ngũ chuyên gia",
    description:
      "Bác sĩ giàu kinh nghiệm, chuyên điều trị các case bệnh khó, từ nội ngoại khoa đến chấn thương chỉnh hình",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: "🔬",
    title: "Trang thiết bị hiện đại",
    description:
      "Máy móc, thiết bị y tế tiên tiến, quy trình chẩn đoán nhanh chóng và chính xác",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: "📋",
    title: "Dịch vụ đa dạng",
    description:
      "Điều trị chuyên sâu theo phác đồ rõ ràng, từ khám cơ bản đến phẫu thuật phức tạp",
    color: "from-green-500 to-green-600",
  },
  {
    icon: "🏥",
    title: "Môi trường an toàn",
    description:
      "Không gian điều trị thân thiện, giảm stress tối đa cho thú cưng trong quá trình khám chữa bệnh",
    color: "from-orange-500 to-orange-600",
  },
  {
    icon: "💎",
    title: "Phục vụ chu đáo",
    description:
      "Minh bạch trong chi phí, tận tâm trong chăm sóc, luôn đặt sức khỏe thú cưng lên hàng đầu",
    color: "from-red-500 to-red-600",
  },
  {
    icon: "🎯",
    title: "Cam kết chất lượng",
    description:
      "Theo dõi sát sao sau điều trị, tư vấn chế độ chăm sóc phù hợp cho từng giai đoạn",
    color: "from-indigo-500 to-indigo-600",
  },
];

export default function Strengths() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Thế mạnh của chúng tôi
          </h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Những yếu tố giúp Bệnh viện Thú Y Gia Kiệm trở thành lựa chọn tin cậy 
            của hàng nghìn chủ nuôi thú cưng
          </p>
        </div>

        {/* Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
          {strengths.map((strength, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 rounded-full bg-gradient-to-br ${strength.color} flex items-center justify-center text-3xl mb-5 group-hover:scale-110 transition-transform`}
              >
                {strength.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {strength.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{strength.description}</p>
            </div>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-900 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Phương châm hoạt động
              </h3>
              <div className="w-32 h-1 bg-white/50 mx-auto mb-8"></div>
              <p className="text-2xl md:text-3xl font-bold mb-6 leading-relaxed">
                &ldquo;Chăm sóc tận tâm – Điều trị đúng chuẩn&rdquo;
              </p>
              <p className="text-lg md:text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
                Bệnh viện thú y Gia Kiệm cam kết mang đến dịch vụ chất lượng cao, 
                giúp thú cưng luôn khỏe mạnh và hạnh phúc, mang đến sự yên tâm và 
                tin tưởng tuyệt đối cho chủ nuôi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
