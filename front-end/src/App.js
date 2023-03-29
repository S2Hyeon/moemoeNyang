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
import SymptomsPage from "./pages/symptom/SymptomsPage";
import NotFound404 from "./pages/NotFound404";
import SignupPage from "./pages/SignupPage";
import BoardHashTag from "./../src/components/board/BoardHashTag.jsx";
import PrivateRoute from "./router/PrivateRoute";
import PostBoard from "./pages/board/PostBoard";
import MyPage from "./pages/mypage/MyPage";
<<<<<<< HEAD
=======
import ModifyUserInfo from "./pages/mypage/ModifyUserInfo";
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
import SymptomsRegister from "./pages/symptom/SymptomsRegister";
import FeedRegisterPage from "./pages/main/FeedRegisterPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";
import store, { persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
<<<<<<< HEAD
=======
import HospitalMap from "./pages/symptom/HospitalMap";
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21

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
<<<<<<< HEAD
            <Route path="catlist" element={<CatPage />} />
            <Route path="catregister" element={<CatRegisterPage />} />
            <Route path="cat/id" element={<CatDetailPage />} />
            <Route path="board" element={<PostBoard />} />
            <Route path="board/hashTag" element={<BoardHashTag />} />
            <Route path="symptoms" element={<SymptomsPage />} />
            <Route path="symptoms/register" element={<SymptomsRegister />} />
            <Route path="map" element={<MapPage />} />
            <Route path="map/feed" element={<FeedRegisterPage />} />
=======
            <Route path="mypage/modify" element={<ModifyUserInfo />} />
            <Route path="catlist" element={<CatPage />} />
            <Route path="catregister" element={<CatRegisterPage />} />
            <Route path="cat/:catId" element={<CatDetailPage />} />
            <Route path="board" element={<PostBoard />} />
            <Route path="board/hashTag" element={<BoardHashTag />} />
            <Route path="cats/:catId/diseases" element={<SymptomsPage />} />
            <Route path="symptoms/register" element={<SymptomsRegister />} />
            <Route path="map" element={<MapPage />} />
            <Route path="map/feed" element={<FeedRegisterPage />} />
            <Route path="map/hospital" element={<HospitalMap />} />
>>>>>>> 3cc6aa94bafbc731c5de292e8f06125e8cd00e21
            <Route path="admin" element={<AdminPage />} />
          </Route>
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      </PersistGate>
    </Provider>
  );
}

export default App;
