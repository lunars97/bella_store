import classes from "./Successfully.module.scss";
import bella from "../../../../assets/image/bella.svg";
import { Link } from "react-router-dom";
const Successfully = () => {
    return (
        <div className={classes.Successfully}>
            <span>
                <img src={bella} alt="logo" />
                <p className={classes.p}>
                    Поздравлям регистрация прошла успешно!
                </p>
            </span>
            <Link className={classes.btn} to="/product">
                <p> Хорошо </p>
            </Link>
        </div>
    );
};

export default Successfully;
