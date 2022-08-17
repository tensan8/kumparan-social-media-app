import React, { useEffect, useState } from 'react';
import DetailCard from '../../molecules/detailCard';
import Navbar from '../../molecules/navbar';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getPostComment } from '../../store/actions/commentAction';

function PostDetail(props) {
    const chosenData = useLocation().state;
    const [commentsList, setCommentsList] = useState([]);

    useEffect(() => {
        props.getPostComment(chosenData.chosenPost.postId);
        setCommentsList(props.comment);
    }, 
    //eslint-disable-next-line
    [props.comment.length]);

    return(
        <div className='block pb-10'>
            <Navbar />
            <DetailCard title = {chosenData.chosenPost.title} 
                content = {chosenData.chosenPost.content}
                chosenUser = {chosenData.chosenUser}
                commentsList = {commentsList}
            />
        </div>
    )
}

const mapStateToProps = (state) => ({ comment: state.commentReducer.comment })

const mapDispatchToProps = {getPostComment}

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);