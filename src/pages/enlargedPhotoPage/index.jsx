import React, {useEffect} from 'react';
import Navbar from '../../molecules/navbar';
import ProfileHead from '../../molecules/profileHead';
import { useLocation } from "react-router-dom";
import LargePhotoCard from '../../molecules/largePhotoCard';


function EnlargedPhotoPage(props) {
    const chosenData = useLocation().state;

    useEffect(() => {
        window.scrollTo(0, 0);
        //eslint-disable-next-line
    }, [])

    return(
        <div className="block pb-10">
            <Navbar />
            <ProfileHead username = {chosenData.username} />
            <LargePhotoCard cardSize = {chosenData.cardSize} albumTitle = {chosenData.albumTitle} chosenPhoto = {chosenData.chosenPhoto}/>
        </div>
    )
}

export default EnlargedPhotoPage;