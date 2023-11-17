import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";

export default function Root() {
  const navigate = useNavigate();
  const {pathname} = useLocation();
  
  useEffect(() => {
    if(pathname === "/") {
      navigate("/admin");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <Outlet />;
}
