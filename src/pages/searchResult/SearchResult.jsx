import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchDataFromApi } from "../../utils/api";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";
import noResults from "../../assets/no-results.png";
import MovieCard from "../../components/movieCard/MovieCard";
import Img from "../../components/lazyLoadImage/Img";
import SearchSpinner from "../../components/spinner/searchSpinner/SearchSpiner";
import "./style.scss";

const SearchResult = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [pageNum, setPageNum] = useState(1);
    const { query } = useParams();

    // console.log(data);

    const fetchInitialData = () => {
        setLoading(true);
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then((res) => {
            setData(res);
            setPageNum((prev) => prev + 1);
            setLoading(false);
        })
    }

    const fetchNextPageData = () => {
        fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`).then(
            (res) => {
                if (data?.results) {
                    setData({
                        ...data,
                        results: [...data?.results, ...res.results],
                    });
                } else {
                    setData(res);
                }
                setPageNum((prev) => prev + 1);
            }
        );
    };

    useEffect(() => {
        setPageNum(1);
        fetchInitialData();
    }, [query])

    return (
        <div className="searchResultsPage">
            {loading && <SearchSpinner />}
            {!loading && (
                <ContentWrapper>
                    {data?.results?.length > 0 ? (
                        <>
                            <div className="pageTitle">
                                {`Search ${data?.total_results > 0 ? "results" : "result"} for '${query}'`}
                            </div>

                            <InfiniteScroll
                                className="content"
                                dataLength={data?.results?.length}
                                next={fetchNextPageData}
                                hasMore={pageNum <= data?.total_pages}
                                loader={<SearchSpinner />}
                            >

                                {data?.results?.map((item, index) => {

                                    if (item.media_type === "person") return;

                                    return (
                                        <MovieCard key={index} data={item} />
                                    )

                                })}
                            </InfiniteScroll>

                        </>
                    ) : (
                        <div className="noResultsPage">
                            <span>Sorry! No Results Found</span>
                            <Img className="noResultImg" src={noResults} />
                        </div>
                    )}
                </ContentWrapper>
            )}
        </div>
    );
}

export default SearchResult;
