const axios = require('axios');
require('dotenv').config();

async function testAlchemy() {
  const apiKey = process.env.ALCHEMY_API_KEY || 'A25jr0OtIu0D4jDt_Lvj-';
  const baseUrl = `https://eth-mainnet.g.alchemy.com/nft/v3/${apiKey}`;
  const contract = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

  try {
    console.log("Testing getOwnersForContract...");
    const res = await axios.get(`${baseUrl}/getOwnersForContract`, { params: { contractAddress: contract }});
    console.log("Success:", Object.keys(res.data));
  } catch (e) {
    console.log("Error getOwnersForContract:", e.response?.data || e.message);
  }

  try {
    console.log("Testing getOwnersForCollection...");
    const res = await axios.get(`${baseUrl}/getOwnersForCollection`, { params: { contractAddress: contract }});
    console.log("Success:", Object.keys(res.data));
  } catch (e) {
    console.log("Error getOwnersForCollection:", e.response?.data || e.message);
  }
}

testAlchemy();
