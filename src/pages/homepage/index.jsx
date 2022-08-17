import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Navbar from "../../molecules/navbar";
import SummaryCard from "../../molecules/summaryCard";
import { getAllPosts } from '../../store/actions/postAction';
import { getUsersData } from '../../store/actions/userAction';
import { getAllComments } from '../../store/actions/commentAction';

function Homepage(props) {
    const [allPosts, setAllPosts] = useState([]);
    const [allUsers, setAllUsers] = useState([]);
    const [allComments, setAllComments] = useState([]);

    useEffect(() => {
        props.getAllPosts();
        setAllPosts(props.posts);
    }, 
    // eslint-disable-next-line
    [props.posts.length]);

    useEffect(() => {
        props.getUsersData();
        setAllUsers(props.users);
    }, 
    // eslint-disable-next-line
    [props.users.length])

    useEffect(() => {
        props.getAllComments();
        setAllComments(props.comments);
    }, 
    // eslint-disable-next-line
    [props.comments.length])

    const findUser = (userId) => {
        for(let i = 0; i < allUsers.length; i++) {
            if(allUsers[i].id === userId) {
                return(allUsers[i])
            }
        }
    }

    const countComment = (postId) => {
        let counter = 0;

        for(let i = 0; i < allComments.length; i++) {
            if(allComments[i].postId === postId) {
                counter++;
            }
        }

        return(counter);
    }

    return (
        <div className="block pb-10">
            <Navbar backArrowAvailable = {false}/>

            {allPosts && allPosts.map((post) => {
                const user = findUser(post.userId);
                const commentCount = countComment(post.id);
                return (
                    <SummaryCard title = {post.title}
                        content = {post.body}
                        user = {user}
                        numberOfComment = {commentCount}
                        postId = {post.id}
                        key = {post.id}
                    />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({ posts: state.postReducer.posts, 
    users: state.userReducer.users, 
    comments: state.commentReducer.comment
})

const mapDispatchToProps = {getAllPosts, getUsersData, getAllComments}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);

/*
Notes:

1. The users' data (allUsers) was fetched in advance and stored in memory to be used as reference, in matching
    the user id of the post and the user information, because fetching the user information using
    API call one-by-one with high intensity apparently made the data to be returned in random.
    It is either the problem with the codes or the capability of the API itself.
*/