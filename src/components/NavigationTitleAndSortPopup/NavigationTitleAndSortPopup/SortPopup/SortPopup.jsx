import React from "react";
import classes from "./SortPopup.module.scss";

const SortPopup = ({ item }) => {
    const [visiblePopup, setVisiblePopup] = React.useState(false);
    const sortRef = React.useRef();
    // const activeLabel = items.find(obj => obj.type === activeSortType).name

    React.useEffect(() => {
        document.body.addEventListener("click", handleOutsideClick);
    }, []);

    // let onSelectItem = index => {
    //   onClickSortType(index)
    // }

    let handleOutsideClick = (e) => {
        const path =
            e.path ||
            (e.composedPath && e.composedPath()) ||
            e.composedPath(e.target);
        if (!path.includes(sortRef.current)) {
            setVisiblePopup(false);
        }
    };

    let toggleVisible = () => {
        setVisiblePopup(!visiblePopup);
    };

    return (
        <div ref={sortRef} className={classes.sort}>
            <div
                className={
                    visiblePopup
                        ? classes.sort__sort_wrap__popup
                        : classes.sort__sort_wrap
                }
            >
                <div
                    onClick={toggleVisible}
                    className={
                        visiblePopup
                            ? classes.sort__sort_wrap__open_links
                            : classes.sort__sort_wrap__close_links
                    }
                >
                    <div className={classes.sort__sort_wrap__sort_toggle_wrap}>
                        <span>Сортировать по</span>
                        <svg
                            width="14"
                            height="7"
                            viewBox="0 0 14 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M7.45841 6.82618L13.8103 1.01266C14.0632 0.780896 14.0632 0.405589 13.8103 0.173824C13.557 -0.0579413 13.1466 -0.0579413 12.8936 0.173824L6.99999 5.56792L1.10639 0.173823C0.853393 -0.0579418 0.442908 -0.0579419 0.189913 0.173823C0.0633049 0.289706 -1.92931e-08 0.441373 -2.59315e-08 0.593242C-3.25699e-08 0.745111 0.0633049 0.896778 0.189913 1.01266L6.54172 6.82618C6.79493 7.05794 7.20545 7.05794 7.45841 6.82618Z"
                                fill="#AB844A"
                            />
                        </svg>
                    </div>
                    {visiblePopup &&
                        item.map((item) => (
                            <div
                                className={
                                    classes.sort__sort_wrap__open_links__drop_link
                                }
                            >
                                <span key={item.type}>{item.name}</span>
                                <br />
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default SortPopup;
