let likeCount: number = 0;

export const getLikes = async () => likeCount;

export const addLikes = async () => {
    likeCount += 1;
    return likeCount;
}