import classes from "./Search.module.scss"
import close_img from "../../assets/image/close.svg"

const Search = ({close}) => {
  return ( <div className={classes.Search}>
    <input type="text" name="search" placeholder="Искать"/>
    <img alt="close" src={close_img} onClick={close}/>
  </div> );
}
 
export default Search;