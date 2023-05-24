import { useParams,useNavigate } from "react-router-dom";

const Post = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/')
    };
    return(
        <div className="main">
            <h4>Post ke - {id}</h4>
            <p>Deskripsi</p>
            <button onClick={handleClick}>Kembali</button>
        </div>
    )
};

export default Post;