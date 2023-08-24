import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const currentUserUrl = "http://10.0.2.2:6660/merchants/";

const fetchUserData = async () => {
  const response = await axios.get(currentUserUrl);
  return response.data;
};

const UseGetUserInfo = () => {
  const { isLoading, data, isError, error } = useQuery(
    ["merchant"],
    fetchUserData
  );
  return { isLoading, data, isError, error };
};

export { UseGetUserInfo };
