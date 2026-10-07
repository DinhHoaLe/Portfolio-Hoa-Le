# Le Dinh Hoa — React portfolio

Hai giao diện dùng chung dữ liệu CV:
- `/`: mẫu Omar, nền đen chữ trắng, Manrope.
- `/dmitry`: mẫu Dmitry, hero kiến trúc và Inter.

Nút `01 Omar / 02 Dmitry` chuyển giữa hai mẫu. Cả hai không có animation.

## Chạy

```sh
npm install
npm run dev
npm run build
npm run lint
```

Nội dung CV ở `src/profile.js`: thông tin liên hệ, 5 mục kinh nghiệm, học vấn/chứng chỉ và 26 dự án (7 Revit, 7 web/app, 12 AEC). Hai trang lấy dữ liệu từ cùng nguồn này.

Bản hiện tại chạy từ `src/main.jsx`. Vite 7 dùng `@vitejs/plugin-react` 5; ESLint kiểm tra các file JS/JSX trong `src`. Các file TS/TSX của bản trước còn được giữ để tham khảo và không thuộc ứng dụng đang chạy.

Ảnh chân dung và CV Word nằm trong `public/profile/`. File Word chưa có ảnh dự án, nên thẻ dự án dùng SVG minh họa có nhãn “IMAGE TO BE ADDED”. Chạy `node generate-profile-assets.mjs` để tạo lại thẻ khi cập nhật tên dự án.

Form liên hệ mở bản nháp email qua mailto, chưa có backend gửi thư. Các nút CV/chứng chỉ/GitHub dùng tài liệu và liên kết từ CV. Ảnh hero kiến trúc của mẫu Dmitry vẫn là ảnh trang tham chiếu dùng để review thiết kế.

Trang chi tiết mẫu Dmitry nằm ở `/dmitry/projects/hoa-project-1` đến `hoa-project-26`, dùng `src/dmitry/ProjectPage.jsx`. Thẻ dự án mở trang riêng, có điều hướng trước/sau và về danh sách. Hero dùng minh họa SVG trung tính cho đến khi có ảnh dự án thật. Icon hiện màu gốc; công cụ chưa có logo dùng badge màu. Các logo bổ sung lấy từ Devicon v2.16.0.

Bản review Dmitry mới: kinh nghiệm dùng timeline so le; Education & Training tách riêng; References & Recognition nằm trước Contact. Contact có GitHub/GitLab/CV; đã bỏ footer. Icon 44px có chuyển động khi hover, tôn trọng thiết lập giảm chuyển động của hệ thống.

Education dùng cùng timeline so le với Professional Experience. Timeline công việc giữ thông tin ngắn; “More about this role +” mở `/dmitry/experience/{makerpath,dcmvn,mindx,armo-vietnam,cadian-vietnam}`. Dữ liệu bổ sung ở `src/dmitry/roles.js`, giao diện ở `RolePage.jsx`. Work Process tổ chức lại nhiệm vụ CV theo luồng công việc, không thêm mốc thời gian hoặc kết quả chưa có trong CV.
