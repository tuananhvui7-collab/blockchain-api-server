const axios = require('axios');

const BASE_URL = 'http://localhost:3000/api';

const endpoints = [
  { method: 'GET', url: 'http://localhost:3000/', desc: 'Health Check' },
  { method: 'GET', url: `${BASE_URL}/price/ethereum`, desc: 'Get Price (Ethereum)' },
  { method: 'GET', url: `${BASE_URL}/price/bitcoin/history?days=1`, desc: 'Get Price History (Bitcoin)' },
  { method: 'GET', url: `${BASE_URL}/gas/ethereum`, desc: 'Get Gas (Ethereum)' },
  { method: 'GET', url: `${BASE_URL}/balance/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045/ethereum`, desc: 'Get Balance (Vitalik ETH)' },
  { method: 'GET', url: `${BASE_URL}/history/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045/ethereum?limit=2`, desc: 'Get Transaction History' },
  { method: 'GET', url: `${BASE_URL}/nft/owners/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/ethereum`, desc: 'Get NFT Owners (BAYC)' },
  { method: 'GET', url: `${BASE_URL}/nft/owned/0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045/ethereum`, desc: 'Get NFTs for Owner' },
  { method: 'GET', url: `${BASE_URL}/token/metadata/ethereum`, desc: 'Get Token Metadata (Ethereum)' },
  { method: 'GET', url: `${BASE_URL}/token/metadata/eip155%3A1%2Ferc20%3A0xdAC17F958D2ee523a2206206994597C13D831ec7`, desc: 'Get Token Metadata (ERC-20 USDT)' },
  { method: 'GET', url: `${BASE_URL}/nft/metadata/eip155%3A1%2Ferc721%3A0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d%2F1`, desc: 'Get NFT Metadata (BAYC #1)' },
  { method: 'POST', url: `${BASE_URL}/balances`, data: { address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045', assetIds: ['ethereum', 'bitcoin'] }, desc: 'POST Multiple Balances' },
  { method: 'POST', url: `${BASE_URL}/prices`, data: { assetIds: ['ethereum', 'bitcoin'] }, desc: 'POST Multiple Prices' },
  { method: 'POST', url: `${BASE_URL}/portfolio`, data: { address: '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045', assetIds: ['ethereum', 'bitcoin'] }, desc: 'POST Portfolio Summary' }
];

async function runTests() {
  let allSuccess = true;
  for (const { method, url, data, desc } of endpoints) {
    try {
      if (method === 'GET') {
        await axios.get(url);
      } else {
        await axios.post(url, data);
      }
      console.log(`✅ [THÀNH CÔNG] - ${desc}`);
    } catch (error) {
      allSuccess = false;
      console.log(`❌ [THẤT BẠI] - ${desc}`);
      if (error.response) {
        console.log(`   Lỗi: ${JSON.stringify(error.response.data)}`);
      } else {
        console.log(`   Lỗi: ${error.message}`);
      }
    }
  }
  if(allSuccess) console.log("\n=> KẾT LUẬN: 100% CÁC API ĐỀU CHẠY THÀNH CÔNG KHÔNG CÓ LỖI.");
}

runTests();
