import { useState } from "react";
import Header from "../NavigationMenuBar/Header/Header";
import Drawer from "../NavigationMenuBar/Header/Drawer/Drawer";
import DropDown from "../../components/DropDown/DropDown";
import Search from "../../components/Search/Search";
import RegisterForm from "../../containers/NavigationMenuBar/Auth/Register/RegisterForm/RegisterForm";
import classes from "./Layout.module.scss";
const Layout = ({ children }) => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [search, setSearch] = useState(false);
    const [profile, setProfile] = useState(false);
    const [register, setRegister] = useState(false);
    const search_block = [];

    if (profile) {
        search_block.push(
            <DropDown key="dropdown" profile={() => setProfile(false)} />
        );
    }
    if (search) {
        search_block.push(
            <Search key="search" close={() => setSearch(false)} />
        );
    }
    return (
        <div>
            <Header
                startSearch={() => setSearch(true)}
                openDrawer={() => setDrawerOpen(true)}
                openProfile={() => setProfile(!profile)}
                startRegister={() => setRegister(true)}
            />
            {search_block}
            <Drawer
                open={drawerOpen}
                closeDrawer={() => setDrawerOpen(false)}
            />
            {register ? (
                <div className={classes.register_wrapper}>
                    <div>
                        <RegisterForm />
                    </div>
                </div>
            ) : null}
            <main>{children}</main>
        </div>
    );
};

export default Layout;
