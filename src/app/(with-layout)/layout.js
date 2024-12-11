import Navbar from "@/components/shared/UserShared/Navbar/Navbar";
import Footer from "@/components/shared/UserShared/Footer/Footer";

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