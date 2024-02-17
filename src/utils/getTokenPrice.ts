const getTokenPrice = async (): Promise<number | undefined> => {
  try {
    const response = await fetch(
      "https://api.geckoterminal.com/api/v2/simple/networks/bsc/token_price/0xb469783b6b3615180da05571beec716b639cbe85"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const tokenPrice =
      data.data.attributes.token_prices[
        "0xb469783b6b3615180da05571beec716b639cbe85"
      ];
    return tokenPrice;
  } catch (error) {
    console.error(error);
  }
};

export { getTokenPrice };
