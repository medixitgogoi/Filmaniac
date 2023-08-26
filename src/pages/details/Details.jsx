import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Cast from "./cast/Cast";
import "./style.scss";
import OfficialVideos from "./officialVideos/OfficialVideos";

const Details = () => {

  const {mediaType, id} = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}/videos`);
  const { data: credits, loading: creditsLoading } = useFetch(`/${mediaType}/${id}/credits`);
  // console.log(credits);
  
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew} />
      <Cast data={credits?.cast} loading={creditsLoading} />
      <OfficialVideos data={data} loading={loading} />
    </div>
  );
}

export default Details;
