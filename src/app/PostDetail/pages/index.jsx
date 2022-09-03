// import React, { useEffect, useState } from 'react';
// import DetailCard from '../../molecules/detailCard';
// import Navbar from '../../molecules/navbar';
// import { connect } from 'react-redux';
// import { useLocation } from 'react-router-dom';
// import { getPostComment } from '../../../store/actions/commentAction';
// import { getUserAlbums } from "../../../store/actions/albumsAction";
// import { resetPhotosData } from '../../../store/actions/photosAction';

// function PostDetail(props) {
//     const chosenData = useLocation().state;
//     const [commentsList, setCommentsList] = useState([]);

//     useEffect(() => {
//         props.getPostComment(chosenData.chosenPost.postId);
//         setCommentsList(props.comment);
        
//         props.getUserAlbums(chosenData.chosenUser.id);
//         props.resetPhotosData();
//     }, 
//     //eslint-disable-next-line
//     [props.comment.length]);

//     return(
//         <div className='block pb-10'>
//             <Navbar />
//             <DetailCard title = {chosenData.chosenPost.title} 
//                 content = {chosenData.chosenPost.content}
//                 chosenUser = {chosenData.chosenUser}
//                 commentsList = {commentsList}
//             />
//         </div>
//     )
// }

// const mapStateToProps = (state) => ({ comment: state.commentReducer.comment })

// const mapDispatchToProps = {getPostComment, getUserAlbums, resetPhotosData}

// export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);