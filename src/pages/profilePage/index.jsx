import Navbar from "../../molecules/navbar";
import ProfileHead from "../../molecules/profileHead";
import { useLocation } from "react-router-dom";
import ContactDetail from "../../molecules/contactDetail";
import AlbumsCard from "../../molecules/albumsCard";

function ProfilePage(props) {
    const chosenUser = useLocation().state;

    return(
        <div className="block pb-10">
            <Navbar />
            <ProfileHead username = {chosenUser.username}/>
            <ContactDetail chosenUser = {chosenUser} cardSize = {props.cardSize}/>
            <AlbumsCard cardSize = {props.cardSize} />
        </div>
    )
}

ProfilePage.defaultProps = {
    cardSize: "w-3/4 h-max"
}

export default ProfilePage;