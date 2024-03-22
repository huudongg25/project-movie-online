import { Box } from "@mui/material";
import React, { useEffect, useRef } from "react";
import tmdbConfigs from "../../configs/tmdb.config";
import { SwiperSlide } from "swiper/react";
import NavigateSwiper from "../NavigateSwiper/NavigateSwiper";

interface Video {
  key: string;
  id: string;
}

interface MediaVideoProps {
  video: Video;
}

interface MediaVideosSlideProps {
  videos: Video[];
}

const MovieVideo: React.FC<MediaVideoProps> = ({ video }) => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const height = (iframeRef.current.offsetWidth * 9) / 16 + "px";
      iframeRef.current.setAttribute("height", height);
    }
  }, [video]);

  return (
    <Box sx={{ height: "max-content" }}>
      <iframe
        key={video.key}
        src={tmdbConfigs.youtubePath(video.key)}
        ref={iframeRef}
        width="100%"
        title={video.id}
        style={{ border: 0 }}
      ></iframe>
    </Box>
  );
};
const MovieVideoSlide: React.FC<MediaVideosSlideProps> = ({ videos }) => {
  return (
    <div>
      <NavigateSwiper>
        {videos.map((video, index) => (
          <SwiperSlide key={index}>
            <MovieVideo video={video} />
          </SwiperSlide>
        ))}
      </NavigateSwiper>
    </div>
  );
};

export default MovieVideoSlide;
