import { NavLink } from "react-router-dom";
import classes from "./NavItem.module.scss";

const NavItem = ({ url, children, exact }) => {
    return (
        <li className={classes.NavItem}>
            <NavLink
                to={url}
                activeClassName={classes.active}
                className={classes.navLink}
                exact={exact}
            >
                {children}
            </NavLink>
        </li>
    );
};

export default NavItem;
