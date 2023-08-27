import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import OfficialVideos from "./officialVideos/OfficialVideos";
import Similar from "./videoCarousels/Similar";
import Recommendation from "./videoCarousels/Recommendations.";
import "./style.scss";

const Details = () => {

  const {mediaType, id} = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  console.log(data);
  
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <OfficialVideos data={data} loading={loading} />
      <Similar mediaType={mediaType} id={id} />
      <Recommendation mediaType={mediaType} id={id} />
    </div>
  );
}

export default Details;
