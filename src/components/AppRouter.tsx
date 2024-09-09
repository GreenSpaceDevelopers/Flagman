import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Products from "../pages/Products/Products";
import Catalogs from "../pages/Catalogs/Catalogs";

const AppRouter: React.FC = () => {
    return (
        <div className="AppRouter">
            <Routes>
                <Route index element={<Main />} />
                <Route path='/products' element={<Products />} />
                <Route path='/catalogs' element={<Catalogs />} />
            </Routes>
        </div>
    );
}

export default AppRouter;