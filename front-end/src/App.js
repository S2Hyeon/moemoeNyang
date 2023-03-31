import { Routes, Route } from "react-router-dom";
import Layout from "./common/Layout";
import AdminPage from "./pages/AdminPage";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import CatPage from "./pages/main/CatPage";
import CatRegisterPage from "./pages/cat/CatRegisterPage";
import CatDetailPage from "./pages/cat/CatDetailPage";
import MainPage from "./pages/main/MainPage";
import MapPage from "./pages/main/MapPage";
import ModifyUserInfo from "./pages/mypage/ModifyUserInfo";
import SymptomsPage from "./pages/symptom/SymptomsPage";
import NotFound404 from "./pages/NotFound404";
import SignupPage from "./pages/SignupPage";
import BoardHashTag from "./../src/components/board/BoardHashTag.jsx";
import PrivateRoute from "./router/PrivateRoute";
import PostBoard from "./pages/board/PostBoard";
import MyPage from "./pages/mypage/MyPage";
import SymptomsRegister from "./pages/symptom/SymptomsRegister";
import FeedRegisterPage from "./pages/main/FeedRegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/" element={<PrivateRoute component={<Layout />} />}>
            <Route path="main" element={<MainPage />} />
            <Route path="mypage" element={<MyPage />} />
            <Route path="mypage/modify" element={<ModifyUserInfo />} />
            <Route path="catlist" element={<CatPage />} />
            <Route path="catregister" element={<CatRegisterPage />} />
            <Route path="cat/id" element={<CatDetailPage />} />
            <Route path="board" element={<PostBoard />} />
            <Route path="board/:tagName" element={<BoardHashTag />} />
            <Route path="cats/:catId/diseases" element={<SymptomsPage />} />
            <Route path="symptoms/register" element={<SymptomsRegister />} />
            <Route path="map" element={<MapPage />} />
            <Route path="map/feed" element={<FeedRegisterPage />} />
            <Route path="admin" element={<AdminPage />} />
          </Route>
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
