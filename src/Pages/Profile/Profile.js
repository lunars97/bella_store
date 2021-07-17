import classes from "./Profile.module.scss";
import { Link } from "react-router-dom";
import img1 from "../../assets/image/bellaprofile3.png";
import img2 from "../../assets/image/bellaprofile2.png";
import { userSchema } from "../../components/Validations/UserValidation";

const Profile = () => {

  const createUser = async (e) => {
    e.preventDefault();
    let formData = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      phone: e.target[2].value
    };
    const isValid = await userSchema.isValid(formData);
    console.log(isValid);
  };

  return (
    <div className={classes.profilePage}>
      <div className={classes.product}>
        <div className={classes.product1}>
          <Link to="/product">Главная</Link>
          <span>/</span>
          <span>Профиль </span>
        </div>
      </div>
      <div className={classes.profile} >
        <form onSubmit={createUser}>
          <div className={classes.h3}>Профиль</div>
          <div className={classes.input_cont}>
            <p>Имя</p>
            <input type="text" placeholder="введите имя" name="name" required />
          </div>
          <div className={classes.input_cont}>
            <p>Фамилия</p>
            <input
              type="text"
              placeholder="введите фамилию"
              name="lastName"
              required
            />
          </div>
          <div className={classes.input_cont}>
            <p>Номер телефона</p>
            <input
              type="phone"
              placeholder="+996 (773) 870 100"
              name="phone"
              required
            />
          </div>

          <button className={classes.btn_reg}>
            <Link to="/">Изменить номер</Link>
          </button>

          <div className={classes.h3}>Адресс доставки</div>
          <div className={classes.input_cont}>
            <p>Страна</p>
            <input type="text" placeholder="Кыргызстан" name="name" required />
          </div>
          <div className={classes.input_cont}>
            <p>Город</p>
            <input type="text" placeholder="Бишкек" name="name" required />
          </div>
          <button className={classes.btn__save}>
            {/* <Link to="/profile"> */}
              Сохранить
              {/* </Link> */}
          </button>
        </form>

        <div className={classes.second__cont}>
          <div className={classes.bella1}>
            <img src={img1} alt="loading..." className={classes.bella} />
          </div>
          <div>
            <img src={img2} alt="loading.." className={classes.img2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
