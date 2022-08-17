import Navbar from "../../molecules/navbar";
import ProfileHead from "../../molecules/profileHead";

function ProfilePage(props) {
    return(
        <div className="block pb-10">
            <Navbar />
            <ProfileHead />
        </div>
    )
}

export default ProfilePage;