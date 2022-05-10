// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//     faMoon
// } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import routes from "./routes";

import Home from "./screens/Home";
import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import NotFound from "./screens/NotFound";

function App() {
    const isLoggedIn = false;
    return (
        <Router>
            <Routes>
                {/*같은 페이지에서 컴포넌트를 다르게 사용*/}
                {isLoggedIn ? (
                    <Route exact path={routes.home} element={<Home/>}/>
                ) : (
                    <Route exact path={routes.home} element={<Login/>}/>
                )}
                {/*왜 두개를 만들었을까.....얘의 용도는 뭘까?*/}
                {!isLoggedIn ? (
                    <Route exact path={routes.signUp} element={<SignUp/>}/>
                ): <Route exact path={routes.signUp} element={null}/>}
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </Router>
    );
}

export default App;
