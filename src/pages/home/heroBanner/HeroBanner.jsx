import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../components/lazyLoadImage/Img";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import "./style.scss";

const HeroBanner = () => {

    const { url } = useSelector((state) => state.home);

    const [background, setBackground] = useState("");
    const [query, setQuery] = useState("");
    const navigate = useNavigate();

    const searchInputHandler = (e) => {
        if (e.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    }

    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {

        const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
        setBackground(bg);

        // console.log(bg);

    }, [data])

    return (
        <div className="container">

            {!loading && <div className="backgroundImage">
                <Img src={background} />
            </div>}

            <div className="opacityLayer"></div>

            <ContentWrapper>
                <main className="content">
                    <span className="title">Welcome</span>
                    <span className="subTitle">Millions of movies, tv shows and people waiting for you to discover. Explore Now!</span>
                    <section className="searchInput">
                        <input
                            type="text"
                            placeholder="Search for a movie or tv show ..."
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyUp={searchInputHandler}
                        />
                        <button>Search</button>
                    </section>
                </main>
            </ContentWrapper>
        </div>
    );
}

export default HeroBanner;
