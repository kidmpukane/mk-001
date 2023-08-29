import { useQuery } from "@tanstack/react-query";
import axios from "axios";

//Clean Up & Make reusable!!!

const currentUserUrl = "http://10.0.2.2:6660/merchants/";
const currentStoreUrl = "http://10.0.2.2:6660/store/";

const mensCollectionUrl = "http://10.0.2.2:6660/male_divider";
const womensCollectionUrl = "http://10.0.2.2:6660/women's_divider";
const exploersCollectionUrl = "http://10.0.2.2:6660/explore_divider";

const fetchUserData = async () => {
  const response = await axios.get(currentUserUrl);
  return response.data;
};

const fetchStoreData = async () => {
  const response = await axios.get(currentStoreUrl);
  return response.data;
};

const fetchCollectionData = async () => {
  const response = await axios.get(mensCollectionUrl);
  return response.data;
};

const fetchCollectionData2 = async () => {
  const response = await axios.get(womensCollectionUrl);
  return response.data;
};

const fetchCollectionData3 = async () => {
  const response = await axios.get(exploersCollectionUrl);
  return response.data;
};
//--------------------------------------------------------//

const storeInfo = "http://10.0.2.2:6660/males_boots_and_derbies";

const fetchStoreInfo = async () => {
  const response = await axios.get(storeInfo);
  return response.data;
};

const UseGetStoresInfo = () => {
  const { isLoading, data, isError, error } = useQuery(
    ["merchant"],
    fetchStoreInfo
  );
  return { isLoading, data, isError, error };
};
//----------------------------------------------------------//
const UseGetUserInfo = () => {
  const { isLoading, data, isError, error } = useQuery(
    ["merchant"],
    fetchUserData
  );
  return { isLoading, data, isError, error };
};

const UseGetStoreInfo = () => {
  const { isLoading, data, isError, error } = useQuery(
    ["merchant"],
    fetchStoreData
  );
  return { isLoading, data, isError, error };
};

const UseGetCollectionInfo = () => {
  const { isLoading, data, isError, error } = useQuery(
    ["male_divider"],
    fetchCollectionData
  );
  return { isLoading, data, isError, error };
};

const UseGetCollectionInfo2 = () => {
  const { isLoading, data, isError, error } = useQuery(
    ["female_divider"],
    fetchCollectionData2
  );
  return { isLoading, data, isError, error };
};

const UseGetCollectionInfo3 = () => {
  const { isLoading, data, isError, error } = useQuery(
    ["explore_divider"],
    fetchCollectionData3
  );
  return { isLoading, data, isError, error };
};

export {
  UseGetUserInfo,
  UseGetStoreInfo,
  UseGetCollectionInfo,
  UseGetCollectionInfo2,
  UseGetCollectionInfo3,
  UseGetStoresInfo,
};
