import Footer from "../pages/Footer/Footer";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../pages/Header/Header";
import Spinner from "../Component/Spinner/Spinner";

const MainLayout = () => {
  const spinner = useNavigation();
  // console.log(spinner.state);
  return (
    <div>
      <Header></Header>
      {spinner.state === "loading" ? (
        <Spinner></Spinner>
      ) : (
        <div className="min-h-screen">
          <Outlet></Outlet>
        </div>
      )}

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
