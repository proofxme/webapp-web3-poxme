import { useState, useEffect } from "react";

const useTokenPrice = () => {
  const [tokenPrice, setTokenPrice] = useState<number | undefined>();
  const [isLoading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.geckoterminal.com/api/v2/simple/networks/bsc/token_price/0xb469783b6b3615180da05571beec716b639cbe85"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const tokenPriceValue: number =
          data.data.attributes.token_prices[
            "0xb469783b6b3615180da05571beec716b639cbe85"
          ];
        setTokenPrice(tokenPriceValue);
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

  return { tokenPrice, isLoading };
};

export default useTokenPrice;
