import React, {useEffect} from 'react';
import Navbar from "../../molecules/navbar";
import ProfileHead from "../../molecules/profileHead";
import { useLocation } from "react-router-dom";
import AllPhotosCard from "../../molecules/allPhotosCard";
import { connect } from 'react-redux';
import { resetPhotosData } from '../../store/actions/photosAction';


function AlbumPhotosPage(props) {
    const chosenData = useLocation().state;

    useEffect(() => {
        props.resetPhotosData();
        //eslint-disable-next-line
    }, [])

    return(
        <div className="block pb-10">
            <Navbar />
            <ProfileHead username = {chosenData.chosenUser.username}/>
            <AllPhotosCard cardSize = {chosenData.cardSize} albumTitle = {chosenData.chosenAlbum.title} photos = {chosenData.photos}/>
        </div>
    )
}

export default connect(null, {resetPhotosData})(AlbumPhotosPage);