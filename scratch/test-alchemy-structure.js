const axios = require('axios');
require('dotenv').config();

async function testAlchemy() {
  const apiKey = process.env.ALCHEMY_API_KEY || 'A25jr0OtIu0D4jDt_Lvj-';
  const baseUrl = `https://eth-mainnet.g.alchemy.com/nft/v3/${apiKey}`;
  const contract = '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d';

  try {
    const res = await axios.get(`${baseUrl}/getOwnersForContract`, { params: { contractAddress: contract, withTokenBalances: true }});
    console.log(JSON.stringify(res.data.owners.slice(0, 2), null, 2));
  } catch (e) {
    console.log(e.message);
  }
}
testAlchemy();
