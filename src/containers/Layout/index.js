/** @jsxImportSource @emotion/react */
import { Container } from "./_style";
import { Navbar } from "components";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div css={Container}>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
