const axios = require('axios');
const API_KEY = process.env.ALCHEMY_API_KEY || 'A25jr0OtIu0D4jDt_Lvj-'; // default if missing
require('dotenv').config();

async function testAlchemy() {
  const apiKey = process.env.ALCHEMY_API_KEY || API_KEY;
  const baseUrl = `https://eth-mainnet.g.alchemy.com/nft/v3/${apiKey}`;
  const contract = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';
  const tokenId = '1';

  try {
    console.log("Testing getOwnersForNFT...");
    const res1 = await axios.get(`${baseUrl}/getOwnersForNFT`, { params: { contractAddress: contract, tokenId }});
    console.log("Success 1:", res1.data);
  } catch (e) {
    console.log("Error 1:", e.response?.data || e.message);
  }

  try {
    console.log("Testing getNFTMetadata...");
    const res2 = await axios.get(`${baseUrl}/getNFTMetadata`, { params: { contractAddress: contract, tokenId }});
    console.log("Success 2:", Object.keys(res2.data));
    console.log("Name:", res2.data.name);
    console.log("Image:", res2.data.image);
    console.log("Raw:", res2.data.raw);
  } catch (e) {
    console.log("Error 2:", e.response?.data || e.message);
  }
}

testAlchemy();
