import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import AdminApp from "./AdminApp";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Orders from "./pages/Orders";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Admin routes */}
          <Route path="/admin" element={<AdminApp />}>
            {/* Default route to Dashboard */}
            <Route index element={<Dashboard />} />
            {/* Nested routes */}
            <Route path="products" element={<Products />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          {/* Redirect unknown routes */}
          <Route path="*" element={<Navigate to="/admin" />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
