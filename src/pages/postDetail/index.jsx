import React, { useEffect, useState } from 'react';
import DetailCard from '../../molecules/detailCard';
import Navbar from '../../molecules/navbar';
import { connect } from 'react-redux';
import { getSinglePost } from '../../store/actions/postAction';

function PostDetail(props) {
    const [postDetail, setPostDetail] = useState([]);

    useEffect(() => {
        props.getSinglePost(props.postId);
        setPostDetail(props.posts);
    }, [props.posts.length]);

    return(
        <div className='block pb-10'>
            <Navbar />
            <DetailCard title = {postDetail.title} content = {postDetail.body}/>
        </div>
    )
}

const mapStateToProps = (state) => ({ posts: state.postReducer.posts })

const mapDispatchToProps = {getSinglePost}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);