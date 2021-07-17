import React from "react";
// import { useHistory } from "react-router-dom";
import classes from "./Register.module.scss";
import RegisterForm from "./RegisterForm/RegisterForm";

const Register = () => {
    // const [form, setForm] = useState({});

    // const history = useHistory();

    // function cancelCallback() {
    //     history.replace("/");
    // }

    // function submitCallback(event) {
    //     const data = new FormData(event.target);
    // }

    // const submitHandler = (e) => {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     setForm((oldState) => {
    //         const newState = { ...oldState };
    //         newState[e.target.name] = e.target.value;
    //         return newState;
    //     });
    // };
    // console.log(form);
    return (
        <div className={classes.Register}>
            <RegisterForm
            // submitHandler={submitHandler}
            // submitCallback={submitCallback}
            // cancelCallback={cancelCallback}
            />
        </div>
    );
};

export default Register;
