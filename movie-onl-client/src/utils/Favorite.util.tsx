interface FavoriteUtilsProps {
  listFavorites: any[];
  mediaId: string | number;
}

const favoriteUtils = {
  check: ({ listFavorites, mediaId }: FavoriteUtilsProps): boolean => {
    return (
      listFavorites &&
      listFavorites.find((e) => e.mediaId.toString() === mediaId.toString()) !==
        undefined
    );
  },
};

export default favoriteUtils;
