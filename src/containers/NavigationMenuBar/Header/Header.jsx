import classes from "./Header.module.scss";
import Nav from "./Nav/Nav";
import DrawerOpen from "./Drawer/DrawerOpen/DrawerOpen";
import logo from "../.././../assets/image/bella.svg";

const Header = ({ startSearch, openProfile, openDrawer, startRegister }) => {

  return (
    <div className={classes.Header}>
      <DrawerOpen click={openDrawer} />
      <div className={classes.responseLogo}>
        <img alt="logo" src={logo} className={classes.resp} />
      </div>
      <Nav search={startSearch} profile={openProfile} register={startRegister} />
    </div>
  );
};

export default Header;
