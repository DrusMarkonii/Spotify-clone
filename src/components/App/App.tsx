import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Counter from "../Counter";

import { getAuthorizeUrl, getDataFromHash } from "../../service/authorization";
import axios from "axios";
import { useEffect, useState } from "react";
import { loadingUserSuccessAction, logOutUserAction } from "../../store/action-creators/user";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/rootReducer";
import { render } from "@testing-library/react";
import Header from "../Header/Header";
import HomePage from "../HomePage/HomePage";

function App() {
  const dispatch = useDispatch();
  
  const user = useSelector((state: RootState) => {
    return state.user;
  });
  const [isLogBtn, setIsLogBtn] = useState(true)
  console.log(user);
  const { hash } = useLocation();
  const navigate = useNavigate();
  const apiURL = getAuthorizeUrl();

  function handelLogin() {
    window.location.href = `${apiURL}`;
  }

  function handelLogout() {
    dispatch(logOutUserAction())
    localStorage.clear();
    setIsLogBtn(false)
    navigate("/");
    
  }

  useEffect(() => {
    if (hash) {
      const { access_token, token_type, expires_in } = getDataFromHash(hash);
      localStorage.clear();
      localStorage.setItem("accessToken", access_token);
      localStorage.setItem("tokenType", token_type);
      localStorage.setItem("expiresIn", `${expires_in}`);
      navigate("/");
      dispatch(
        loadingUserSuccessAction({ access_token, token_type, expires_in })
      );
    }
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("accessToken")) {
      window.location.href = getAuthorizeUrl();
    }
  }, []);

  

  return (
    <Routes>
      <Route
        path="/auth/login"
        element={
          <>
          
          <div>
          {localStorage.getItem("accessToken") ?
              <button onClick={handelLogout}> Log Out Spotify</button>
             
            :
            <button onClick={handelLogin}> Log in Spotify</button>
            }
          </div>
            
          </>
        }
      />
       <Route path="/" element={<HomePage />} />
      <Route path="/entertainment" element={<Counter />} />
    </Routes>
  );
}

export default App;
