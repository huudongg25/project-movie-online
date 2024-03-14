import React from "react";

import "./DefaultLayout.css";
import SideBar from "../../components/SideBar/SideBar";

interface Props {
  child: JSX.Element;
}
const DefaultLayout = (props: Props): JSX.Element => {
  return (
    <div className="wrapper-layout">
      <div className="sidebar-layout">
        <SideBar></SideBar>
      </div>
      <div className="content-layout">{props.child}</div>
    </div>
  );
};
export default DefaultLayout;