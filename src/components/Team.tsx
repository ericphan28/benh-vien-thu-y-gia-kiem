export default function Team() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Đội ngũ chuyên gia
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-xl text-gray-600">
              Giàu kinh nghiệm, chuyên môn chuyên sâu
            </p>
          </div>

          {/* Team Info Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Experience Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
              <div className="text-6xl mb-4 text-center">👨‍⚕️</div>
              <h3 className="text-3xl font-bold text-blue-900 text-center mb-4">
                15+ Năm kinh nghiệm
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Đội ngũ bác sĩ chuyên gia với hơn 15 năm kinh nghiệm trong lĩnh vực 
                thú y, chuyên điều trị các case bệnh khó từ nội ngoại khoa đến chấn 
                thương chỉnh hình.
              </p>
            </div>

            {/* Expertise Card */}
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200">
              <div className="text-6xl mb-4 text-center">❤️</div>
              <h3 className="text-3xl font-bold text-red-900 text-center mb-4">
                Chăm sóc như con
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Chuyên môn vững vàng, chăm sóc thú cưng như con, luôn điều trị bằng 
                khối óc, chăm sóc bằng trái tim. Mỗi thú cưng đều được quan tâm đặc 
                biệt.
              </p>
            </div>
          </div>

          {/* Team Values */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-10 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-6 text-center">
              Cam kết của chúng tôi
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold text-xl mb-2">Chuyên nghiệp</h4>
                <p className="text-blue-100">Quy trình chuẩn quốc tế</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">💙</div>
                <h4 className="font-bold text-xl mb-2">Tận tâm</h4>
                <p className="text-blue-100">Chăm sóc chu đáo 24/7</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">✨</div>
                <h4 className="font-bold text-xl mb-2">Uy tín</h4>
                <p className="text-blue-100">Minh bạch, đúng chuẩn</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
