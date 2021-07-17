import classes from "./Location.module.scss"
import { Link } from "react-router-dom";

const Location = ({currentLocation}) => {
  return ( <div className={classes.Location}>
    <Link className={classes.a} to="/">Главная</Link>
    <span>/</span>
    <span>{currentLocation}</span>
  </div> );
}
 
export default Location;