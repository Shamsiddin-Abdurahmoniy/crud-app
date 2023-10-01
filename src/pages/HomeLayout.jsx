// react
import { Outlet } from "react-router-dom";
// components
import { Header, Create } from "../components";
function HomeLayout() {
  return (
    <>
      <Header />
      <main>
        <Create />
        <Outlet />
      </main>
    </>
  );
}

export default HomeLayout;
