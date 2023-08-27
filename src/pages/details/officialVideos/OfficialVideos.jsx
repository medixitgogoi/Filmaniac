import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import VideoPopup from "../../../components/videoPopup/VideoPopup";
import Img from "../../../components/lazyLoadImage/Img";
import { PlayIcon } from "../PlayIcon";
import "./style.scss";

const OfficialVideos = ({ data, loading }) => {

    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    return (
        <>
            {data?.results?.length !== 0 && (
                <div className="videosSection">
                    <ContentWrapper>
                        <div className="sectionHeading">Official Videos</div>
                        {!loading && (
                            <div className="videos">
                                {data?.results?.map((video) => (
                                    <div
                                        key={video.id}
                                        className="videoItem"
                                        onClick={() => {
                                            setVideoId(video.key);
                                            setShow(true);
                                        }}
                                    >
                                        <div className="videoThumbnail">
                                            <Img src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`} />
                                            <PlayIcon />
                                        </div>
                                        <div className="videoTitle">{video.name}</div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </ContentWrapper>
                    <VideoPopup
                        show={show}
                        setShow={setShow}
                        videoId={videoId}
                        setVideoId={setVideoId}
                    />
                </div>
            )}
        </>
    );
};

export default OfficialVideos;