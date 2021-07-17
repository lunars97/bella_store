import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../../redux/actions/auth_action";
import classes from "./DropDown.module.scss"

const DropDown = ({profile}) => {
  
  const dispatch = useDispatch()


  return ( <div className={classes.DropDown}>
    <Link onClick={profile} to="/orders">Мои заказы</Link>
    <Link onClick={profile} to="profile">Профиль</Link>
    <div></div>
    <span onClick={()=>{profile(); dispatch(logout())}}>Выйти</span>
  </div> );
}
 
export default DropDown;