# Bệnh viện Thú Y Gia Kiệm - Landing Page Project

## Project Overview
Landing page cho Bệnh viện Thú Y Gia Kiệm với Next.js 14+, Supabase, và Tailwind CSS.

## Tech Stack
- Next.js 15 (App Router)
- TypeScript
- Tailwind CSS v4
- Supabase
- Vercel deployment

## Features
- ✅ Hero section với hotline cấp cứu 24/24
- ✅ Services section - 9 dịch vụ chính
- ✅ Team section - Giới thiệu đội ngũ
- ✅ Strengths section - 6 thế mạnh nổi bật
- ✅ Contact section - Thông tin liên hệ đầy đủ
- ✅ Responsive design
- ✅ Vietnamese language support
- ✅ SEO optimized

## Development

### Run development server:
```bash
npm run dev
```

### Build for production:
```bash
npm run build
npm run start
```

### Project Structure:
```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx        # Homepage
│   └── globals.css     # Global styles
├── components/
│   ├── Hero.tsx        # Hero section
│   ├── Services.tsx    # Services section
│   ├── Team.tsx        # Team section
│   ├── Strengths.tsx   # Strengths section
│   └── Contact.tsx     # Contact section
└── lib/
    └── supabase.ts     # Supabase client config
```

## Next Steps
1. Thêm ảnh thực tế của bệnh viện vào thư mục `public/`
2. Cấu hình Supabase trong `.env.local`
3. Tích hợp form đặt lịch (nếu cần)
4. Deploy lên Vercel
5. Kết nối domain tùy chỉnh

## Contact Information
- Hotline: 0965 986 798
- Location: Ấp Vĩnh Tân, Xã Gia Kiệm, Huyện Đông Nai
