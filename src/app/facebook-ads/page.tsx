'use client';

import Link from 'next/link';

interface Post {
  icon: string;
  title: string;
  content: string;
  gradient: string;
  accentColor: string;
}

const posts: Post[] = [
  {
    icon: '🎉',
    title: 'KHAI TRƯƠNG - KHUYẾN MÃI ĐẶC BIỆT',
    gradient: 'from-red-500 via-red-600 to-red-700',
    accentColor: 'bg-yellow-400',
    content: `🎉🎉🎉 NHẬN DỊP KHAI TRƯƠNG 🎉🎉🎉
BỆNH VIỆN THÚ Y GIA KIỆM

🔥 KHUYẾN MÃI KHỦNG - KHÔNG THỂ BỎ LỠ! 🔥

💥 GIẢM 50% - Tất cả dịch vụ KHÁM & ĐIỀU TRỊ PHẪU THUẬT
💥 GIẢM 20% - Dịch vụ TIÊM PHÒNG VACCINE & GROOMING

⏰ Thời gian áp dụng: 15/01 - 12/02/2026
📍 Địa chỉ: 284, tổ 17, ấp Tân Yên, xã Gia Kiệm, Đồng Nai

🚨 CẤP CỨU 24/24 - Hotline: 0965 986 798

👉 Với đội ngũ bác sĩ giàu kinh nghiệm 15+ năm, chúng tôi cam kết mang đến dịch vụ chất lượng cao nhất cho thú cưng của bạn!

#BenhVienThuYGiaKiem #KhuyenMaiKhaiTruong #ThuCung #ThuYDongNai`
  },
  {
    icon: '🏥',
    title: 'GIỚI THIỆU BỆNH VIỆN',
    gradient: 'from-blue-600 via-blue-700 to-blue-800',
    accentColor: 'bg-white',
    content: `🏥 BỆNH VIỆN THÚ Y GIA KIỆM 🏥
Đồng hành cùng sức khỏe thú cưng của bạn

✨ Tại sao nên chọn chúng tôi?

👨‍⚕️ Đội ngũ bác sĩ chuyên gia với 15+ năm kinh nghiệm
🔬 Trang thiết bị hiện đại, tiên tiến
🏥 Dịch vụ toàn diện từ A-Z
❤️ Chăm sóc tận tâm như con
💎 Minh bạch chi phí, uy tín chất lượng
🚑 Cấp cứu 24/24 - Luôn sẵn sàng khi bạn cần

📌 "Chăm sóc tận tâm – Điều trị đúng chuẩn"

📞 Hotline: 0965 986 798
📍 284, tổ 17, ấp Tân Yên, xã Gia Kiệm, Đồng Nai

#BenhVienThuY #ChamSocThuCung #ThuYGiaKiem`
  },
  {
    icon: '🚑',
    title: 'CẤP CỨU 24/24',
    gradient: 'from-orange-500 via-red-600 to-pink-600',
    accentColor: 'bg-yellow-300',
    content: `🚨 CẤP CỨU THÚ CƯNG 24/24 🚨

Thú cưng của bạn đang gặp tình huống khẩn cấp?
🔸 Tai nạn giao thông
🔸 Ngộ độc thực phẩm
🔸 Khó thở, co giật
🔸 Chảy máu không cầm được
🔸 Sốt cao đột ngột

⚡️ ĐỪNG CHẦN CHỜ - GỌI NGAY!
📞 Hotline: 0965 986 798

💚 Bệnh viện Thú Y Gia Kiệm hoạt động 24/7
💚 Đội ngũ bác sĩ sẵn sàng xuất cấp cứu tại nhà
💚 Trang thiết bị hiện đại, cấp cứu chuyên nghiệp

⏰ MỌI LÚC - MỌI NƠI - LUÔN SẴN SÀNG!

📍 284, tổ 17, ấp Tân Yên, xã Gia Kiệm, Đồng Nai

#CapCuuThuCung #Hotline24h #BenhVienThuYGiaKiem #DongNai`
  },
  {
    icon: '💉',
    title: 'TIÊM PHÒNG VACCINE',
    gradient: 'from-green-500 via-emerald-600 to-teal-600',
    accentColor: 'bg-yellow-400',
    content: `💉 TIÊM PHÒNG - BẢO VỆ SỨC KHỎE THÚ CƯNG 💉

Bạn đã tiêm phòng vaccine cho boss chưa? 🐶🐱

🔰 Tại Bệnh viện Thú Y Gia Kiệm:
✅ Vaccine chính hãng, nguồn gốc rõ ràng
✅ Lịch tiêm phòng khoa học, phù hợp từng độ tuổi
✅ Bác sĩ tư vấn tận tình
✅ Theo dõi sức khỏe sau tiêm
✅ Môi trường an toàn, vệ sinh

🎉 ĐẶC BIỆT: 
💥 GIẢM 20% dịch vụ tiêm phòng vaccine
⏰ Từ 15/01 - 12/02/2026

📞 Đặt lịch ngay: 0965 986 798
📍 284, tổ 17, ấp Tân Yên, xã Gia Kiệm, Đồng Nai

#TiemPhongChoThuCung #VaccineThuY #SucKhoeThuCung`
  },
  {
    icon: '⚕️',
    title: 'PHẪU THUẬT AN TOÀN',
    gradient: 'from-purple-600 via-purple-700 to-indigo-800',
    accentColor: 'bg-pink-400',
    content: `⚕️ PHẪU THUẬT AN TOÀN - GÂY MÊ HIỆN ĐẠI ⚕️

Thú cưng cần phẫu thuật? Đừng lo lắng! 💪

🏥 Tại Bệnh viện Thú Y Gia Kiệm:
✨ Phòng mổ vô trùng, đạt chuẩn
✨ Gây mê bay hơi - an toàn cao
✨ Bác sĩ phẫu thuật giàu kinh nghiệm
✨ Theo dõi hậu phẫu sát sao
✨ Điều trị nội trú chu đáo

💎 Các loại phẫu thuật:
🔸 Triệt sản
🔸 Mổ đẻ
🔸 Mổ u, viêm tử cung
🔸 Chấn thương chỉnh hình
🔸 Phẫu thuật tiêu hóa, tiết niệu

🔥 KHUYẾN MÃI: GIẢM 50% phẫu thuật (15/01-12/02)

📞 Tư vấn: 0965 986 798
📍 284, tổ 17, ấp Tân Yên, xã Gia Kiệm, Đồng Nai

#PhauThuatThuY #GayMeBayHoi #ThuYChuyenNghiep`
  },
  {
    icon: '✂️',
    title: 'SPA & GROOMING',
    gradient: 'from-pink-500 via-rose-600 to-red-600',
    accentColor: 'bg-yellow-300',
    content: `✂️✨ SPA & GROOMING - BOSS XINH ĐẸP MỖI NGÀY ✨✂️

Làm đẹp cho boss yêu - Nhận ngay ưu đãi! 🐕🐈

💅 Dịch vụ Grooming chuyên nghiệp:
🔹 Tắm, sấy khô
🔹 Cắt tỉa lông theo yêu cầu
🔹 Vệ sinh tai, mắt, móng
🔹 Vắt tuyến hôi
🔹 Chải lông, gỡ rối
🔹 Nhuộm màu an toàn

🌟 Tại Bệnh viện Thú Y Gia Kiệm:
✅ Sản phẩm chăm sóc cao cấp
✅ Nhân viên grooming tay nghề cao
✅ Môi trường sạch sẽ, thân thiện
✅ Giá cả hợp lý

💥 GIẢM 20% dịch vụ Grooming (15/01-12/02)

📞 Đặt lịch: 0965 986 798
📍 284, tổ 17, ấp Tân Yên, xã Gia Kiệm, Đồng Nai

#SpaThuCung #GroomingChuyenNghiep #ThuCungXinhDep`
  },
  {
    icon: '🔬',
    title: 'XÉT NGHIỆM CHẨN ĐOÁN',
    gradient: 'from-cyan-500 via-blue-600 to-indigo-700',
    accentColor: 'bg-white',
    content: `🔬 XÉT NGHIỆM CHẨN ĐOÁN CHÍNH XÁC 🔬

Phát hiện sớm bệnh lý - Điều trị kịp thời! 🎯

🏥 Bệnh viện Thú Y Gia Kiệm cung cấp:

📊 Xét nghiệm máu:
• Công thức máu tổng quát
• Sinh hóa máu
• Điện giải
• Chức năng gan, thận

📊 Xét nghiệm chuyên sâu:
• Nước tiểu
• Phân
• Da liễu
• Miễn dịch (Parvo, Care, FIV, FeLV...)

📸 Chẩn đoán hình ảnh:
• X-quang kỹ thuật số
• Siêu âm

👨‍⚕️ Kết quả nhanh - Tư vấn chuyên nghiệp

📞 Hotline: 0965 986 798
📍 284, tổ 17, ấp Tân Yên, xã Gia Kiệm, Đồng Nai

#XetNghiemThuY #ChanDoan #SucKhoeThuCung`
  },
  {
    icon: '🏨',
    title: 'KHÁCH SẠN THÚ CƯNG',
    gradient: 'from-amber-500 via-orange-600 to-red-600',
    accentColor: 'bg-yellow-200',
    content: `🏨 KHÁCH SẠN THÚ CƯNG - YÊN TÂM KHI ĐI XA 🏨

Đi công tác, du lịch mà lo boss không ai chăm? 😊

💖 Gửi boss tại Bệnh viện Thú Y Gia Kiệm:
✨ Phòng ốc sạch sẽ, thoáng mát
✨ Chăm sóc chu đáo 24/7
✨ Dinh dưỡng đầy đủ, khoa học
✨ Vui chơi, vận động hàng ngày
✨ Bác sĩ theo dõi sức khỏe
✨ Cập nhật tình hình cho chủ nuôi

🎥 Camera quan sát - Bạn luôn biết boss đang làm gì!

💰 Giá cả hợp lý - Dịch vụ 5 sao

📞 Đặt phòng ngay: 0965 986 798
📍 284, tổ 17, ấp Tân Yên, xã Gia Kiệm, Đồng Nai

#KhachSanThuCung #LuuTruThuCung #GuiCun`
  },
  {
    icon: '👨‍⚕️',
    title: 'ĐỘI NGŨ BÁC SĨ',
    gradient: 'from-teal-600 via-cyan-700 to-blue-800',
    accentColor: 'bg-yellow-400',
    content: `👨‍⚕️ ĐỘI NGŨ BÁC SĨ GIÀU KINH NGHIỆM 👨‍⚕️

💎 15+ NĂM KINH NGHIỆM - CHUYÊN MÔN VỮNG VÀNG

Tại Bệnh viện Thú Y Gia Kiệm, chúng tôi tự hào với:

🌟 Đội ngũ bác sĩ chuyên gia
• Chuyên điều trị các ca bệnh khó
• Giỏi cả nội khoa & ngoại khoa
• Chuyên môn chuyên sâu về chấn thương chỉnh hình

❤️ Phương châm làm việc:
"Điều trị bằng khối óc - Chăm sóc bằng trái tim"

💚 Chúng tôi yêu thú cưng như con
💚 Luôn đặt sức khỏe boss lên hàng đầu
💚 Tận tâm, chu đáo trong từng ca điều trị

📞 Tư vấn miễn phí: 0965 986 798
📍 284, tổ 17, ấp Tân Yên, xã Gia Kiệm, Đồng Nai

#BacSiThuY #ChuyenGiaThuY #KinhNghiem15Nam`
  },
  {
    icon: '💡',
    title: 'TƯ VẤN CHĂM SÓC',
    gradient: 'from-lime-500 via-green-600 to-emerald-700',
    accentColor: 'bg-yellow-300',
    content: `💡 MẸO CHĂM SÓC THÚ CƯNG TỪ BÁC SĨ 💡

🐕 Bạn có biết?

✅ Chó mèo cần tiêm phòng định kỳ 6-12 tháng/lần
✅ Tẩy giun mỗi 3 tháng để phòng bệnh
✅ Khám sức khỏe tổng quát 6 tháng/lần
✅ Chăm sóc răng miệng để tránh cao răng
✅ Vệ sinh tai thường xuyên phòng viêm nhiễm

⚠️ Dấu hiệu cần đưa boss đi khám ngay:
🔸 Nôn mửa, tiêu chảy kéo dài
🔸 Ăn uống bất thường
🔸 Sốt cao, li bì
🔸 Khó thở, ho
🔸 Da nổi mẩn đỏ, ngứa nhiều

👉 Đừng tự điều trị tại nhà!
👉 Hãy đến Bệnh viện Thú Y Gia Kiệm để được bác sĩ thăm khám!

📞 Hotline: 0965 986 798 (24/7)
📍 284, tổ 17, ấp Tân Yên, xã Gia Kiệm, Đồng Nai

#TuVanThuY #ChamSocThuCung #MeoBacSi`
  }
];

function AdCard({ post }: { post: Post }) {
  return (
    <div className={`bg-gradient-to-br ${post.gradient} rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-300`}>
      {/* Icon */}
      <div className="text-center mb-6">
        <div className="text-8xl mb-4 animate-bounce">{post.icon}</div>
        <div className={`${post.accentColor} inline-block px-8 py-4 rounded-full shadow-lg`}>
          <h2 className="text-2xl font-black text-gray-800 uppercase tracking-wide">
            {post.title}
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white bg-opacity-95 rounded-2xl p-6 shadow-inner">
        <pre className="whitespace-pre-wrap font-sans text-base text-gray-800 leading-relaxed font-semibold">
          {post.content}
        </pre>
      </div>

      {/* Bottom decoration */}
      <div className="mt-6 text-center">
        <div className="inline-flex items-center gap-3 bg-white bg-opacity-20 px-6 py-3 rounded-full backdrop-blur-sm">
          <span className="text-white text-xl">⭐⭐⭐⭐⭐</span>
        </div>
      </div>
    </div>
  );
}

export default function FacebookAdsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-700 rounded-3xl p-10 mb-10 shadow-2xl text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-lg">
            📸 Ảnh Quảng Cáo Facebook
          </h1>
          <p className="text-2xl text-white font-bold mb-2">Bệnh viện Thú Y Gia Kiệm</p>
          <p className="text-lg text-blue-100">Chụp màn hình từng ảnh để đăng lên Facebook</p>
        </div>

        {/* Ads Grid */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <AdCard key={index} post={post} />
          ))}
        </div>

        {/* Instructions */}
        <div className="mt-10 bg-white rounded-3xl p-8 shadow-xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">📋 Hướng dẫn sử dụng</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border-2 border-blue-300">
              <h3 className="text-xl font-bold text-blue-900 mb-4">💻 Chụp trên máy tính</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Windows: <strong>Win + Shift + S</strong></li>
                <li>✓ Mac: <strong>Cmd + Shift + 4</strong></li>
                <li>✓ Chọn vùng chụp từng card</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border-2 border-green-300">
              <h3 className="text-xl font-bold text-green-900 mb-4">📱 Chụp trên điện thoại</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Screenshot toàn màn hình</li>
                <li>✓ Crop lại từng ảnh</li>
                <li>✓ Upload trực tiếp lên Facebook</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 rounded-2xl p-6 border-2 border-yellow-300">
            <p className="text-center text-yellow-900 font-semibold">
              💡 <strong>Mẹo:</strong> Đăng mỗi ảnh vào các khung giờ khác nhau trong ngày để tăng hiệu quả quảng cáo!
            </p>
          </div>
        </div>

        {/* Back button */}
        <div className="text-center mt-10">
          <Link
            href="/"
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg py-4 px-10 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all transform hover:scale-110 shadow-xl"
          >
            ← Về trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
