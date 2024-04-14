import { Link } from "react-router-dom";

const GalleryCard = ({gallery}) => {
    const {image_url, id} = gallery;
    return (
        <Link to={`/galleryDetails/${id}`}>
           <img className="hover:opacity-75 w-full h-72" src={image_url}/>
        </Link>
    );
};

export default GalleryCard;