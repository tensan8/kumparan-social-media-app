import Navbar from "../../molecules/navbar";
import ProfileHead from "../../molecules/profileHead";
import { useLocation } from "react-router-dom";
import AllPhotosCard from "../../molecules/allPhotosCard";


function AlbumPhotosPage(props) {
    const chosenData = useLocation().state;

    return(
        <div className="block pb-10">
            <Navbar />
            <ProfileHead username = {chosenData.chosenUser.username}/>
            <AllPhotosCard cardSize = {chosenData.cardSize} albumTitle = {chosenData.chosenAlbum.title} photos = {chosenData.photos}/>
        </div>
    )
}

export default AlbumPhotosPage;