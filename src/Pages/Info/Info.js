import classes from "./Info.module.scss";
import { NavLink } from "react-router-dom";
import Location from "../../containers/Location/Location";

const Info = ({ match }) => {
  const output = [];
  let loc = "";

  switch (match.params.id) {
    case "delivery":
      output.push(
        <>
          <h1>Доставка</h1>
          <div className={classes.column__second}>
            <div className={classes.cont__p}>
              <span className={classes.hr__cont}>
                <hr className={classes.hr} />
                <p className={classes.p}>
                  Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit ut aliquam, purus sit amet
                  luctus venenatis, lectus magna fringilla
                  urna, porttitor rhoncus dolor purus non enim
                  praesent elementum facilisis leo, vel
                  fringilla est ullamcorper eget nulla
                  facilisi etiam dignissim diam quis enim
                  lobortis scelerisque fermentum dui faucibus
                  in ornare quam viverra orci sagittis eu
                  volutpat odio facilisis mauris sit amet
                  massa vitae tortor condimentum lacinia quis
                  vel eros donec ac odio tempor orci dapibus
                  ultrices in iaculis nunc sed augue lacus,
                  viverra vitae congue eu, consequat ac felis
                  donec et odio pellentesque diam volutpat
                  commodo sed egestas egestas fringilla
                  phasellus faucibus
                </p>
              </span>
              <p className={classes.p}>
                Lorem ipsum dolor sit amet, consectetur
                adipiscing elit ut aliquam, purus sit amet
                luctus venenatis, lectus magna fringilla urna,
                porttitor rhoncus dolor purus non enim praesent
                elementum facilisis leo, vel fringilla est
                ullamcorper eget nulla facilisi etiam dignissim
                diam quis enim lobortis scelerisque fermentum
                dui faucibus in ornare quam viverra orci
                sagittis eu volutpat odio facilisis mauris sit
                amet massa vitae tortor condimentum lacinia quis
                vel eros donec ac odio tempor orci dapibus
                ultrices in iaculis nunc sed augue lacus,
                viverra vitae congue eu, consequat ac felis
                donec et odio pellentesque diam volutpat commodo
                sed egestas egestas fringilla phasellus faucibus
              </p>
            </div>
          </div>
        </>
      );
      loc = "Доставка";
      break;

    case "contacts":
      output.push(
        <>
          <div className={classes.main_container}>
            <div className={classes.main_container__inner}>
              <div
                className={classes.main_container__inner__flex}
              >
                <div>
                  <div className={classes.iframe_wrapper}>
                    <p>Наше местонахождение:</p>
                    <iFrame
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2921.574830361604!2d74.58690891534143!3d42.92400707915306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389ec788951ea8a5%3A0xde5ffe8762a74a42!2z0KfRg9C5IDIzLCDQkdC40YjQutC10Lo!5e0!3m2!1sru!2skg!4v1625723685085!5m2!1sru!2skg"
                      frameBorder="0"
                      style={{
                        border: 0,
                        width: "100%",
                        height: 450,
                      }}
                      allowFullScreen=""
                      aria-hidden="false"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
      loc = "Контакты";
      break;
    case "faq":
      output.push(
        <>
          <h1>Вопросы и ответы</h1>
        </>
      );
      loc = "Вопросы и ответы";
      break;

    default:
      break;
  }

  return (
    <div className={classes.Info}>
      <Location currentLocation={loc} />
      <div className={classes.infoContainer}>
        <div className={classes.links}>
          <NavLink
            to="/info/delivery"
            activeClassName={classes.active}
          >
            Доставка
          </NavLink>
          <NavLink
            to="/info/contacts"
            activeClassName={classes.active}
          >
            Контакты
          </NavLink>
          <NavLink to="/info/faq" activeClassName={classes.active}>
            Вопросы и ответы
          </NavLink>
        </div>
        <div className={classes.content}>{output}</div>
      </div>
    </div>
  );
};

export default Info;
