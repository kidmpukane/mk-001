import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Profile } from "./src/pages/ProfileScreen";
import Categories from "./src/pages/Categories";
import CreateCollection from "./src/pages/CreateCollection";
import CreateGallery from "./src/pages/CreateGallery";
import { CreatePost } from "./src/pages/CreatePost";
import CreateStore from "./src/pages/CreateStore";
import FileUploadScreen from "./src/pages/FileUploadScreen";
import HomeScreen from "./src/pages/HomeScreen";
import LibraryScreen from "./src/pages/LibraryScreen";
import MessagesScreen from "./src/pages/MessagesScreen";
import ProfileScreen from "./src/pages/ProfileScreen";
import SearchScreen from "./src/pages/SearchScreen";
import { StoreDivider } from "./src/pages/StoreDivider";
import { StoreGallery } from "./src/pages/StoreGallery";
import { StorePage } from "./src/pages/StorePage";
import Uploads from "./src/pages/Uploads";

const queryClient = new QueryClient();
//Create the forms!!!
const AppNav = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Profile />
      <Categories />
      <CreateCollection />
      <CreateGallery />
      <CreatePost />
      <CreateStore />
      <FileUploadScreen />
      <HomeScreen />
      <LibraryScreen />
      <MessagesScreen />
      <ProfileScreen />
      <SearchScreen />
      <StoreDivider />
      <StoreGallery />
      <StorePage />
      <Uploads />
    </QueryClientProvider>
  );
};

export { AppNav };
