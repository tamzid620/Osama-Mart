import Footer from "../../components/shared/UserShared/Footer/Footer.jsx";
import Navbar from "../../components/shared/UserShared/Navbar/Navbar";
import { CartProvider } from "../context/CartContext.js";

const UserLayout = ({ children }) => {
  return (
    <div>
      <CartProvider>
      <Navbar />
      {children}
      <Footer />
      </CartProvider>
    </div>
  );
};

export default UserLayout;