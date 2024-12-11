import Footer from "../../components/shared/UserShared/Footer/Footer.jsx";
import Navbar from "../../components/shared/UserShared/Navbar/Navbar";

const UserLayout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default UserLayout;