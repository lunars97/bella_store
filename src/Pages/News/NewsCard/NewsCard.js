import news_img from "../../../assets/image/news-img.png";
import classes from "./NewsCard.module.scss";

const NewsCard = ({ posts, loading }) => {
    const output = posts.map((post, index) => (
        <div key={index} className={classes.card}>
            <img alt="news" src={news_img} />
            <div className={classes.info}>
                <span>14.11.21</span>
                <h2 key={post.id}>{post.title}</h2>
                <p>{post.body}</p>
                <button className={classes.info__btn}>
                    Подробнее &ensp;
                    <i className="fa fa-chevron-right" aria-hidden="true"></i>
                </button>
            </div>
        </div>
    ));

    if (loading) {
        return <>Loading...</>;
    }
    return <div className={classes.NewsCard}>{output}</div>;
};

export default NewsCard;
