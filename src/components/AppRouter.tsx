import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main/Main";
import Products from "../pages/Products/Products";
import Catalogs from "../pages/Catalogs/Catalogs";
import MetalStructures from "../pages/MetalStructures/MetalStructures";
import PrefabricatedHouses from "../pages/PrefabricatedHouses/PrefabricatedHouses";

const AppRouter: React.FC = () => {
    return (
        <div className="AppRouter">
            <Routes>
                <Route index element={<Main />} />
                <Route path='/products' element={<Products />} />
                <Route path='/catalogs' element={<Catalogs />} />
                <Route path='/metalStructures' element={<MetalStructures />} />
                <Route path='/houses' element={<PrefabricatedHouses />} />
            </Routes>
        </div>
    );
}

export default AppRouter;