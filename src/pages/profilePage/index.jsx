import React, { useEffect, useState } from 'react';
import Navbar from "../../molecules/navbar";
import ProfileHead from "../../molecules/profileHead";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import ContactDetail from "../../molecules/contactDetail";
import AlbumsCard from "../../molecules/albumsCard";
import { getUserAlbums } from "../../store/actions/albumsAction";
import { getAlbumPhotos } from '../../store/actions/photosAction';


function ProfilePage(props) {
    const chosenUser = useLocation().state;
    const [albumsList, setAlbumsList] = useState([]);
    const [photosList, setPhotosList] = useState([]);

    useEffect(() => {
        props.getUserAlbums(chosenUser.id);
        setAlbumsList(props.albums);

        var albumsIds = []
        props.albums.map((album) => {
            albumsIds.push(album.id)
        })
        setPhotosList([]);
        console.log(albumsIds)
        props.getAlbumPhotos(albumsIds)
    }, 
    //eslint-disable-next-line
    [props.albums.length]);

    useEffect(() => {
        if(props.photos.length !== 0 && props.photos) {
            setPhotosList([...photosList, props.photos])
        }
    }, [props.photos])

    return(
        <div className="block pb-10">
            <Navbar />
            <ProfileHead username = {chosenUser.username}/>
            <ContactDetail chosenUser = {chosenUser} cardSize = {props.cardSize}/>
            <AlbumsCard cardSize = {props.cardSize} albumList = {albumsList} photosList = {photosList}/>
        </div>
    )
}

ProfilePage.defaultProps = {
    cardSize: "w-3/4 h-max"
}

const mapStateToProps = (state) => ({ albums: state.albumsReducer.albums, photos: state.photosReducer.photos })

const mapDispatchToProps = {getUserAlbums, getAlbumPhotos}

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);