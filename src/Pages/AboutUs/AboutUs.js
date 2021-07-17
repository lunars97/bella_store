import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./AboutUs.module.scss";
import diva from "../../assets/image/diva.png";
import dress from "../../assets/image/about_us_dress.png";
import beach from "../../assets/image/beach.png";
const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <div className={classes.mainContainer}>
            <div className={classes.breadCrumbs}>
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        listStyle: "none",
                        color: "#000",
                    }}
                >
                    <span>Главная /&ensp;</span>
                </Link>
                <span style={{ color: "grey" }}>О нас</span>
            </div>
            <div className={classes.main_header}>
                <div className={classes.heading}>
                    <h2>О нас</h2>
                </div>
                <div className={classes.main__first_box}>
                    <div className={classes.first_image}>
                        <img
                            src={diva}
                            alt="lady"
                            className={classes.lady_img}
                        />
                    </div>

                    <div className={classes.main_font}>
                        <span>BELLA</span>
                    </div>
                    <div className={classes.main__pg}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna fringilla urna, porttitor rhoncus dolor
                            purus non enim praesent elementum facilisis leo, vel
                            fringilla est ullamcorper eget nulla facilisi etiam
                            dignissim diam quis enim lobortis scelerisque
                            fermentum dui faucibus in ornare quam viverra orci
                            sagittis eu volutpat odio facilisis mauris sit amet
                            massa vitae tortor condimentum lacinia quis vel eros
                            donec ac odio tempor orci dapibus ultrices in
                            iaculis nunc sed augue lacus, viverra vitae congue
                            eu, consequat ac felis donec et odio pellentesque
                            diam volutpat commodo sed egestas egestas fringilla
                            phasellus faucibus
                        </p>
                    </div>
                </div>
                <div className={classes.second_box}>
                    <div className={classes.second_box__image}>
                        <img src={dress} alt="dress" />
                    </div>
                    <div className={classes.second_box__image2}>
                        <img src={beach} alt="dress" />
                    </div>
                    <div className={classes.second_box__pg}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit ut aliquam, purus sit amet luctus venenatis,
                            lectus magna fringilla urna, porttitor rhoncus dolor
                            purus non enim praesent elementum facilisis leo, vel
                            fringilla est ullamcorper eget nulla facilisi etiam
                            dignissim diam quis enim lobortis scelerisque
                            fermentum dui faucibus in ornare quam viverra orci
                            sagittis eu volutpat odio facilisis mauris sit amet
                            massa vitae tortor condimentum lacinia quis vel eros
                            donec ac odio tempor orci dapibus ultrices in
                            iaculis nunc sed augue lacus, viverra vitae congue
                            eu, consequat ac felis donec et odio pellentesque
                            diam volutpat commodo sed egestas egestas fringilla
                            phasellus faucibus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
