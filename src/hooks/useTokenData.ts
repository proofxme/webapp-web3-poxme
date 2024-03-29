import { useState, useEffect } from "react";

const useTokenData = () => {
  const [tokenData, setTokenData] = useState({
    volume: "",
    priceChange: "",
    baseTokenPrice: "",
  });
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.geckoterminal.com/api/v2/networks/bsc/pools/0x5ee434338c0395f2b4a4be64afa9059ae254ece3"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();

        // Extracting volume, price change, and base token price from the data
        const volumeH24 = data.data.attributes.volume_usd.h24;
        const priceChangeH24 = data.data.attributes.price_change_percentage.h24;
        const baseTokenPriceUSD = data.data.attributes.base_token_price_usd;

        setTokenData({
          volume: volumeH24,
          priceChange: priceChangeH24,
          baseTokenPrice: baseTokenPriceUSD,
        });
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function if needed
    return () => {
      // Any cleanup code
    };
  }, []); // Empty dependency array to run effect only once

  return { tokenData, isLoading };
};

export default useTokenData;
