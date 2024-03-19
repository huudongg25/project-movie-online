import exp from "constants";
import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
}

export interface ImageHeaderProps {
  imgPath: string;
}

export interface UIConfigsProps {
  style: {
    gradientBgImage: {
      dark: {
        backgroundImage: string;
      };
      light: {
        backgroundImage: string;
      };
    };
    horizontalGradientBgImage: {
      dark: {
        backgroundImage: string;
      };
      light: {
        backgroundImage: string;
      };
    };
    typoLines: (
      lines: number,
      textAlign?: string
    ) => {
      textAlign: string;
      display: string;
      overflow: string;
      WebkitBoxOrient: string;
      WebkitLineClamp: number;
    };
    mainContent: {
      maxWidth: string;
      margin: string;
      padding: number;
    };
    backgroundImage: (imgPath: string) => {
      position: string;
      backgroundSize: string;
      backgroundPosition: string;
      backgroundColor: string;
      backgroundImage: string;
    };
  };
  size: {
    sidebarWith: string;
    contentMaxWidth: string;
  };
}

export interface TMDBConfigs {
  mediaType: {
    movie: string;
    tv: string;
  };
  mediaCategory: {
    popular: string;
    top_rated: string;
  };
  backdropPath: (imgEndpoint: string) => string;
  posterPath: (imgEndpoint: string) => string;
  youtubePath: (videoId: string) => string;
}

export interface CastSlideProps {
  casts: {
    id: number;
    name: string;
    profile_path: string;
  }[];
}

export interface CircularRateProps {
  value: number;
}

export interface ContainerProps {
  header?: string;
  children: ReactNode;
}

export interface MovieItemProps {
  media: any;
  mediaType: string;
}

export interface MovieReviewProps {
  reviews: Review[];
  media: any;
  mediaType: string;
}

export interface Movie {
  id: number;
  title?: string;
  name?: string;
  poster_path?: string;
  backdrop_path?: string;
  mediaTitle?: string;
  mediaPoster?: string;
}

export interface MovieSlideProps {
  mediaType: string;
  mediaCategory: string;
}

export interface AutoSwiperProps {
  children: ReactNode;
}
