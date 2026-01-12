# Bệnh viện Thú Y Gia Kiệm - Landing Page

Landing page chuyên nghiệp cho Bệnh viện Thú Y Gia Kiệm, được xây dựng với Next.js 14, TypeScript, Tailwind CSS và Supabase.

## 🏥 Giới thiệu

Trang web giới thiệu dịch vụ và thế mạnh của Bệnh viện Thú Y Gia Kiệm - nơi cung cấp dịch vụ chăm sóc thú cưng toàn diện với đội ngũ chuyên gia giàu kinh nghiệm hơn 15 năm.

### Tính năng nổi bật

- ✅ Thiết kế responsive, tối ưu cho mọi thiết bị
- ✅ Hiển thị đầy đủ các dịch vụ thú y
- ✅ Thông tin liên hệ và hotline cấp cứu 24/24
- ✅ Giới thiệu đội ngũ và thế mạnh
- ✅ Tích hợp Supabase (sẵn sàng mở rộng)
- ✅ SEO-friendly
- ✅ Tối ưu hiệu suất với Next.js 14

## 🚀 Công nghệ sử dụng

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Supabase
- **Deployment:** Vercel

## 📦 Cài đặt

### Yêu cầu hệ thống

- Node.js 18.0 hoặc cao hơn
- npm, yarn, pnpm, hoặc bun

### Các bước cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd thu-y-gia-kiem
```

2. Cài đặt dependencies:
```bash
npm install
# hoặc
yarn install
# hoặc
pnpm install
```

3. Tạo file `.env.local` từ `.env.local.example`:
```bash
cp .env.local.example .env.local
```

4. Cập nhật thông tin Supabase trong `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 🛠️ Development

Chạy development server:

```bash
npm run dev
# hoặc
yarn dev
# hoặc
pnpm dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

## 🏗️ Build & Deploy

### Build cho production:

```bash
npm run build
npm run start
```

### Deploy lên Vercel:

Cách dễ nhất là sử dụng [Vercel Platform](https://vercel.com/new):

1. Push code lên GitHub
2. Import project vào Vercel
3. Thêm environment variables
4. Deploy!

## 📁 Cấu trúc thư mục

```
thu-y-gia-kiem/
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Homepage
│   │   └── globals.css     # Global styles
│   ├── components/
│   │   ├── Hero.tsx        # Hero section
│   │   ├── Services.tsx    # Services section
│   │   ├── Team.tsx        # Team section
│   │   ├── Strengths.tsx   # Strengths section
│   │   └── Contact.tsx     # Contact section
│   └── lib/
│       └── supabase.ts     # Supabase client
├── public/                 # Static assets
├── .github/
│   └── copilot-instructions.md
├── package.json
├── tsconfig.json
├── tailwind.config.ts
└── next.config.ts
```

## 🎨 Customization

### Màu sắc

Chỉnh sửa trong [tailwind.config.ts](tailwind.config.ts):

```typescript
colors: {
  primary: {
    DEFAULT: "#2563eb",
    dark: "#1e40af",
  },
  secondary: {
    DEFAULT: "#dc2626",
    dark: "#991b1b",
  },
}
```

### Nội dung

Các component trong thư mục `src/components/` có thể dễ dàng chỉnh sửa nội dung.

## 📞 Thông tin liên hệ

- **Hotline:** 0965 986 798 (24/7)
- **Địa chỉ:** Ấp Vĩnh Tân, Xã Gia Kiệm, Huyện Đông Nai
- **Email:** info@thuygiakien.com

## 📝 License

© 2026 Bệnh viện Thú Y Gia Kiệm. All rights reserved.

---

**Phương châm:** "Chăm sóc tận tâm – Điều trị đúng chuẩn"
