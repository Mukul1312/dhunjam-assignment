import React, { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { GlobalStyles } from "@mui/material";
import styles from "./customStyles";

export default function Root() {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  
  useEffect(() => {
    if(pathname === "/") {
      navigate("/admin");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // const styles = {
  //   body: {
  //     background: "#000000",
  //   }
  // }

  return (
    <React.Fragment>
      <GlobalStyles styles={styles} />
      <Outlet />
    </React.Fragment>
  );
}
