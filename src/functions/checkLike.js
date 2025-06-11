import { useSelector } from "react-redux"

const checkLike = (id) => {
    const likeData = useSelector((store) => store.like.data);
    const result = likeData.find(i => i.id === id);
    return result;
}

export default checkLike