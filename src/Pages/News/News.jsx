import { useEffect, useState } from "react";
import NewsCard from "./NewsCard/NewsCard";
import Pagination from "./Pagination/Pagination";
import Location from "../../containers/Location/Location";
import axios from "axios";
import classes from "./News.module.scss";
import API from "../../adapters/axios.config";

const News = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(6);
    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(
                "https://jsonplaceholder.typicode.com/posts"
            );
            setPosts(res.data);
            setLoading(false);
        };

        fetchPosts();
    }, []);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    const nextPag = () => {
        setCurrentPage(currentPage + 1);
    };
    const prevPag = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <div className={classes.main_wrapper}>
            <div className={classes.inner_wrapper}>
                <Location currentLocation="Новости" />
                <h3>Новости</h3>
                <NewsCard posts={currentPosts} loading={loading} />
                <Pagination
                    postsPerPage={postsPerPage}
                    totalPosts={posts.length}
                    paginate={paginate}
                    currentPage={currentPage}
                    next={nextPag}
                    prev={prevPag}
                />
            </div>
        </div>
    );
};

export default News;
