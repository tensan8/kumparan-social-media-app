import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Navbar from "../../molecules/navbar";
import SummaryCard from "../../molecules/summaryCard";
import { getAllPosts } from '../../store/actions/postAction';

function Homepage(props) {
    const [allPosts, setAllPosts] = useState([]);

    useEffect(() => {
        props.getAllPosts();
        setAllPosts(props.posts[0]);
    }, [props.posts.length]);
   
    return (
        <div className="block pb-10">
            <Navbar backArrowAvailable = {false}/>

            {allPosts && allPosts.map((post, index) => {
                return (
                    <SummaryCard title = {post.title} 
                        username = {post.username}
                        company = {post.company}
                        content = {post.body}
                        numberOfComment = {post.numberOfComment}
                        key = {index}
                    />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => ({ posts: state.postReducer.posts })

const mapDispatchToProps = {getAllPosts}

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);


// const AllContent = [
//     {
//         'title': "Title 1",
//         'username': 'Username 1',
//         'company': 'Company 1',
//         'content': 'Content 1',
//         'numberOfComment': 1
//     },
//     {
//         'title': "Title 2",
//         'username': 'Username 2',
//         'company': 'Company 2',
//         'content': 'Content 2',
//         'numberOfComment': 2
//     },
//     {
//         'title': "Title 3",
//         'username': 'Username 3',
//         'company': 'Company 3',
//         'content': 'Content 3',
//         'numberOfComment': 3
//     },
// ]