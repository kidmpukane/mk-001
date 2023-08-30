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

export { useStoreInfo };
