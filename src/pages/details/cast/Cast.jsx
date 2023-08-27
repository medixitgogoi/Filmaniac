import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import Img from "../../../components/lazyLoadImage/Img";
import avatar from "../../../assets/avatar.png";
import { useSelector } from "react-redux";
import "./style.scss";

const Cast = ({ data, loading }) => {

    const { url } = useSelector((state) => state.home);
    // console.log(data);
    return (
        <div className="castSection">
            <ContentWrapper>

                <div className="sectionHeading">Top Cast</div>
                {!loading && (
                    <div className="listItems">
                        {data?.map((item) => {
                            let imgUrl = item.profile_path
                                ? url.profile + item.profile_path
                                : avatar;
                            return (
                                <div key={item.id} className="listItem">
                                    <div className="profileImg">
                                        <Img src={imgUrl} />
                                    </div>
                                    <div className="name">{item.name}</div>
                                    <div className="character">
                                        {item.character}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}

            </ContentWrapper>
        </div>
    );
};

export default Cast;