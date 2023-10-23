import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./app/view/Home";
import LogIn from "./app/view/LogIn";
import ProductList from "./app/view/Products/ProductList";
import Categories from "./app/view/Categories/Categories";
import MyProfile from "./app/view/MyProfile";
import ProductDetails from "./app/view/Products/ProductDetails";
import CategoriesProductsPage from "./app/view/Categories/CategoriesProductsPage";
import PrivateRoute from "./routes/PrivateRoute";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/login" element={<LogIn />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route exact path="/products/:id" element={<ProductDetails />} />
          <Route path="/products/category" element={<Categories />} />
          <Route
            exact
            path="/products/category/:id"
            element={<CategoriesProductsPage />}
          />
          <Route path="/my-profile" element={<MyProfile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
