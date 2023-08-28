import ContentWrapper from "../contentWrapper/ContentWrapper";
import Img from "../lazyLoadImage/Img";
import PosterFallback from "../../assets/no-poster.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import dayjs from "dayjs";
import "./style.scss";
import CircleRating from "../circleRating/CircleRating";
import CarouselSpinner from "../spinner/carouselSpinner/CarouselSpinner";

const Carousel = ({ data, loading, endpoint, title }) => {

    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();

    console.log(data)

    return (
        <div className="carousel">

            <ContentWrapper>
                {title && <div className="carouselTitle">{title}</div>}

                {!loading ? (
                    <div className="carouselItems">
                        {data?.map((item) => {
                            const posterUrl = item.poster_path ? url.poster + item.poster_path : PosterFallback;
                            return (
                                <div key={item.id} className="carouselItem" onClick={() => navigate(`/${item.media_type || endpoint}/${item.id}`)}>
                                    <div className="posterBlock">
                                        <Img src={posterUrl} />
                                        <CircleRating rating={item.vote_average.toFixed(1)} />
                                    </div>
                                    <div className="textBlock">
                                        <span className="title">
                                            {item.title || item.name}
                                        </span>
                                        <span className="date">
                                            {dayjs(item.release_date).format("MMM D, YYYY")}
                                        </span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                ) : (
                    <div><CarouselSpinner /></div>
                )}

            </ContentWrapper>

        </div>
    );
}

export default Carousel;
