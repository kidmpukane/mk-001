import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//----------------------------------------------------------//
const useStoreInfo = (storeInfoUrl) => {
  const fetchStoreInfo = async () => {
    const response = await axios.get(storeInfoUrl);
    return response.data;
  };

  const { isLoading, data, isError, error } = useQuery(
    ["store-info", storeInfoUrl],
    fetchStoreInfo
  );

  return { isLoading, data, isError, error };
};

//----------------------------------------------------------//

const useGetItemById = (hyperLinkUrl) => {
  const fetchItem = async () => {
    try {
      const response = await axios.get(hyperLinkUrl);
      return response.data;
    } catch (error) {
      throw new Error(`Error Fetching data:${error.message}`);
    }
  };

  const { isLoading, data, isError, error } = useQuery(
    ["item", hyperLinkUrl],
    fetchItem
  );

  return { isLoading, data, isError, error };
};

export { useStoreInfo, useGetItemById };
