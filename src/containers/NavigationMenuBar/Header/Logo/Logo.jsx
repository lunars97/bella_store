import bella from "../../../../assets/image/bella.svg";
import classes from "./Logo.module.scss";
const Logo = () => {
    return (
        <div>
            <img src={bella} alt="logo" className={classes.logo} />
        </div>
    );
};

export default Logo;
