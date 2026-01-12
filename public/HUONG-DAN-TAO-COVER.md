# Hướng dẫn tạo ảnh Facebook Cover

## Kích thước chuẩn
- **Kích thước:** 820 x 312 pixels
- **Tỷ lệ:** 2.63:1
- **Format:** JPG hoặc PNG

## Cách 1: Screenshot từ file HTML (Đơn giản nhất)

1. Mở file `facebook-cover.html` trong thư mục `public/`
2. Nhấn **F11** để chế độ toàn màn hình
3. Zoom đến 100% (Ctrl + 0)
4. Sử dụng công cụ screenshot chỉ vùng cover (820x312px)
5. Save ảnh với tên: `facebook-cover-benh-vien-thu-y-gia-kiem.png`

## Cách 2: Sử dụng Browser DevTools

1. Mở `facebook-cover.html` trong Chrome/Edge
2. Nhấn **F12** để mở DevTools
3. Click vào icon "Toggle device toolbar" (Ctrl+Shift+M)
4. Đặt kích thước: 820 x 312
5. Click phải vào phần cover → **Capture node screenshot**

## Cách 3: Sử dụng Extension (Khuyến nghị)

### Chrome/Edge Extension:
- **GoFullPage** - Full Page Screen Capture
- **Awesome Screenshot**
- **Nimbus Screenshot**

### Các bước:
1. Cài extension
2. Mở file `facebook-cover.html`
3. Chọn "Capture Selected Area"
4. Chọn vùng cover chính xác
5. Download ảnh

## Cách 4: Chỉnh sửa chuyên nghiệp với Canva

1. Truy cập [Canva.com](https://www.canva.com)
2. Tạo thiết kế mới → Facebook Cover (820 x 312 px)
3. Sao chép nội dung từ file HTML:
   - Background: Gradient đỏ (#dc2626 → #991b1b)
   - Text: "NHẬN DỊP KHAI TRƯƠNG"
   - "BỆNH VIỆN THÚ Y GIA KIỆM"
   - Khuyến mãi 50% và 20%
   - Hotline: 0965 986 798
   - Ngày: 15/01 - 12/02/2026
4. Thêm ảnh chó mèo từ thư mục `public/`
5. Download ảnh PNG chất lượng cao

## Cách 5: Upload lên Facebook trực tiếp

Sau khi có ảnh:
1. Truy cập Facebook Page
2. Click vào **Add a Cover Photo**
3. **Upload Photo**
4. Điều chỉnh vị trí (nếu cần)
5. **Save Changes**

## Nội dung đã bao gồm:

✅ Nhận dịp khai trương  
✅ Tên bệnh viện  
✅ Giảm 50% - Khám & phẫu thuật  
✅ Giảm 20% - Vaccine & Grooming  
✅ Hotline: 0965 986 798  
✅ Thời gian: 15/01 - 12/02/2026  
✅ Icon chó mèo  
✅ Design bắt mắt với màu đỏ vàng  

## Lưu ý:
- Đảm bảo text rõ ràng, dễ đọc
- Tránh để text quan trọng ở góc dưới (bị avatar che)
- Kiểm tra trên mobile để đảm bảo hiển thị tốt
- Sử dụng ảnh chất lượng cao cho chó mèo nếu có

## Thay thế ảnh chó mèo thật:

Mở file `facebook-cover.html`, tìm dòng:
```html
<div class="pet-images">
```

Thay icon 🐕 🐈 bằng:
```html
<img src="/path/to/dog-image.jpg" alt="Dog">
<img src="/path/to/cat-image.jpg" alt="Cat">
```
