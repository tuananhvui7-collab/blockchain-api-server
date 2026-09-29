# Blockchain API Server

Dự án này là một API Server xây dựng bằng Node.js, Express và TypeScript, có chức năng tương tác với dữ liệu Blockchain thông qua các Provider như Alchemy, CoinGecko và mạng lưới Bitcoin.

## 1. Yêu cầu hệ thống
- Node.js (phiên bản 18 trở lên)
- Trình quản lý gói `npm`

## 2. Hướng dẫn cài đặt & Khởi động
Sau khi giải nén thư mục dự án, hãy mở Terminal (hoặc Command Prompt / PowerShell) tại thư mục gốc của dự án và làm theo các bước sau:

**Bước 1: Cài đặt các thư viện phụ thuộc (node_modules)**
```bash
npm install
```

**Bước 2: Biên dịch mã nguồn TypeScript**
```bash
npm run build
```

**Bước 3: Khởi động Server**
```bash
npm start
```
*Server sẽ bắt đầu chạy ở địa chỉ `http://localhost:3000`*

## 3. Hướng dẫn Test các API bằng Postman
Mọi API đều có tiền tố là `http://localhost:3000/api`. Dưới đây là danh sách các API để bạn kiểm thử:

### GET /api/price/:assetId
Lấy giá hiện tại của một đồng coin.
- **Ví dụ:** `GET http://localhost:3000/api/price/ethereum`

### GET /api/gas/:networkId
Lấy thông tin phí Gas hiện tại của một mạng lưới (Mặc định trả về định dạng EIP-1559).
- **Ví dụ:** `GET http://localhost:3000/api/gas/ethereum`

### GET /api/balance/:address/:assetId
Kiểm tra số dư tiền điện tử của một địa chỉ ví.
- **Ví dụ:** `GET http://localhost:3000/api/balance/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045/ethereum`

### GET /api/token/metadata/:assetId
Lấy siêu dữ liệu (metadata) cơ bản của một token/coin.
- **Ví dụ:** `GET http://localhost:3000/api/token/metadata/ethereum`

### GET /api/nft/owned/:owner/:networkId
Lấy danh sách các NFT mà một địa chỉ ví đang sở hữu.
- **Ví dụ:** `GET http://localhost:3000/api/nft/owned/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045/ethereum`

### POST /api/prices
Kiểm tra giá của nhiều đồng coin cùng lúc (truyền Body dạng JSON).
- **Ví dụ:** `POST http://localhost:3000/api/prices`
- **Body (RAW -> JSON):**
```json
{
  "assetIds": ["ethereum", "bitcoin"],
  "currency": "usd"
}
```

---
*Lưu ý: File `.env` chứa API Key của CoinGecko và Alchemy đã được đính kèm sẵn trong mã nguồn để tạo sự thuận tiện khi chấm bài.*
