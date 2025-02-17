import {Route, Routes} from "react-router-dom";
import AppUserListPage from "../pages/AppUserListPage.jsx";
import AppUserEditPage from "../pages/AppUserEditPage.jsx";
import AppUserInsertPage from "../pages/AppUserInsertPage.jsx";

const MainRouter = () => {

    return (
        <Routes>
            <Route path={"/"} element={<AppUserListPage/>}/>
            <Route path={"/detail/:id"} element={<AppUserEditPage/>}/>
            <Route path={"/detail"} element={<AppUserInsertPage/>}/>
        </Routes>
    )

}

export default MainRouter;