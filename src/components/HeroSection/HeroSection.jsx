import React from "react";
import "./HeroSettings.css";
import arrow from "../../assets/lock_nextImg/next.png";
import img1 from "../../assets/SliderImg/01.jpg";
import img2 from "../../assets/SliderImg/02.jpg";
import img3 from "../../assets/SliderImg/03.jpg";

const HeroSection = () => {
    return (
        <>
            <div
                data-interval="5000"
                id="carouselExampleCaptions"
                className="carousel slide carousel-fade"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators">
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                    ></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={img1} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <div className="block_absolute">
                                <h5>
                                    Скидки до 70%! Вы точно <br /> захотите это
                                    увидеть
                                </h5>
                                <button>
                                    Подробнее{" "}
                                    <img
                                        className="arrow"
                                        src={arrow}
                                        alt="img"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img2} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <div className="block_absolute">
                                <h5>
                                    Скидки до 70%! Вы точно <br /> захотите это
                                    увидеть
                                </h5>
                                <button>
                                    Подробнее{" "}
                                    <img
                                        className="arrow"
                                        src={arrow}
                                        alt="img"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={img3} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-md-block">
                            <div className="block_absolute">
                                <h5>
                                    Скидки до 70%! Вы точно <br /> захотите это
                                    увидеть
                                </h5>
                                <button>
                                    Подробнее{" "}
                                    <img
                                        className="arrow"
                                        src={arrow}
                                        alt="img"
                                    />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="prev"
                >
                    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleCaptions"
                    data-bs-slide="next"
                >
                    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    );
};

export default HeroSection;
