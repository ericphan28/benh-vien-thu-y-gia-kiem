'use client';

import { useState } from 'react';

interface Post {
  icon: string;
  title: string;
  content: string;
}

const posts: Post[] = [
  {
    icon: '🎉',
    title: 'KHAI TRƯƠNG - KHUYẾN MÃI ĐẶC BIỆT',
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

function PostCard({ post }: { post: Post }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(post.content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      alert('Không thể copy. Vui lòng thử lại!');
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      <div className="text-5xl mb-4">{post.icon}</div>
      <h3 className="text-xl font-bold text-blue-900 mb-4">{post.title}</h3>
      <div className="bg-gray-50 rounded-xl p-4 mb-4 max-h-[300px] overflow-y-auto">
        <pre className="whitespace-pre-wrap font-sans text-sm text-gray-700 leading-relaxed">
          {post.content}
        </pre>
      </div>
      <button
        onClick={handleCopy}
        className={`w-full py-3 px-6 rounded-xl font-bold text-white transition-all transform hover:scale-105 ${
          copied
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900'
        }`}
      >
        {copied ? '✅ Đã copy!' : '📋 Copy nội dung'}
      </button>
    </div>
  );
}

export default function FacebookPostsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-purple-900 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl p-8 mb-8 shadow-2xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
            📱 Nội dung Facebook
          </h1>
          <p className="text-xl text-gray-600 mb-2">Bệnh viện Thú Y Gia Kiệm</p>
          <p className="text-gray-500">Click nút Copy để sao chép và đăng lên Facebook</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h2 className="text-3xl font-bold text-blue-900 mb-6">📝 Gợi ý sử dụng</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-blue-900 mb-3">⏰ Thời gian đăng tốt</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ 7:00 - 9:00 AM</li>
                <li>✓ 12:00 - 1:00 PM</li>
                <li>✓ 6:00 - 9:00 PM</li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-600">
              <h3 className="text-xl font-bold text-green-900 mb-3">📊 Tần suất đăng</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Ngày thường: 1-2 post</li>
                <li>✓ Cuối tuần: 2-3 post</li>
                <li>✓ Khuyến mãi: 2-3 lần/tuần</li>
              </ul>
            </div>

            <div className="bg-purple-50 rounded-xl p-6 border-l-4 border-purple-600">
              <h3 className="text-xl font-bold text-purple-900 mb-3">💡 Tips tăng tương tác</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Đăng ảnh/video thực tế</li>
                <li>✓ Trả lời comment nhanh</li>
                <li>✓ Tổ chức minigame</li>
                <li>✓ Live stream tư vấn</li>
              </ul>
            </div>
          </div>

          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <p className="text-sm text-yellow-900">
              <strong className="text-lg">🏷️ Hashtags nên dùng:</strong><br />
              #BenhVienThuYGiaKiem #ThuYDongNai #ThuCung #ChoMeo #ChamSocThuCung #ThuYChuyenNghiep #SucKhoeThuCung #PetVietNam
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <a
            href="/"
            className="inline-block bg-white text-purple-900 font-bold py-4 px-8 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            ← Về trang chủ
          </a>
        </div>
      </div>
    </div>
  );
}
