const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api';

// CAIP-19 định dạng cho USDT trên Ethereum (cần encode dấu / thành %2F để truyền vào URL)
// Nguyên gốc: eip155:1/erc20:0xdAC17F958D2ee523a2206206994597C13D831ec7
const usdtAssetId = encodeURIComponent('eip155:1/erc20:0xdAC17F958D2ee523a2206206994597C13D831ec7');
const usdcAssetId = encodeURIComponent('eip155:1/erc20:0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48');

const endpoints = [
  { 
    method: 'GET', 
    url: `${BASE_URL}/token/metadata/${usdtAssetId}`,
    desc: 'Lấy Metadata của ERC-20 Token (Tether USD - USDT)'
  },
  { 
    method: 'GET', 
    url: `${BASE_URL}/token/metadata/${usdcAssetId}`,
    desc: 'Lấy Metadata của ERC-20 Token (USD Coin - USDC)'
  },
  { 
    method: 'GET', 
    url: `${BASE_URL}/balance/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045/${usdcAssetId}`,
    desc: 'Lấy số dư ERC-20 Token (Ví Vitalik - số dư USDC)'
  }
];

async function runTests() {
  console.log('--- BẮT ĐẦU TEST CÁC API ERC-20 ---');
  for (const { method, url, desc } of endpoints) {
    try {
      console.log(`\n📌 ${desc}`);
      console.log(`[${method}] ${url}`);
      let res = await axios.get(url);
      console.log('✅ THÀNH CÔNG:');
      console.log(JSON.stringify(res.data, null, 2));
    } catch (error) {
      console.log('❌ THẤT BẠI:');
      if (error.response) {
        console.log(JSON.stringify(error.response.data, null, 2));
      } else {
        console.log(error.message);
      }
    }
  }
  console.log('\n--- HOÀN TẤT TEST ---');
}

runTests();
