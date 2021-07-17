import classes from "./DrawerOpen.module.scss";

const DrawerOpen = ({ click }) => {
  return (
    <div className={classes.DrawerOpen}>
      <div onClick={click} className={classes.div1}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default DrawerOpen;
