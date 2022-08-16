import Navbar from "../../molecules/navbar";
import SummaryCard from "../../molecules/summaryCard";

function Homepage() {
    const AllContent = [
        {
            'title': "Title 1",
            'username': 'Username 1',
            'company': 'Company 1',
            'content': 'Content 1',
            'numberOfComment': 1
        },
        {
            'title': "Title 2",
            'username': 'Username 2',
            'company': 'Company 2',
            'content': 'Content 2',
            'numberOfComment': 2
        },
        {
            'title': "Title 3",
            'username': 'Username 3',
            'company': 'Company 3',
            'content': 'Content 3',
            'numberOfComment': 3
        },
    ]

    return (
        <div className="block pb-10">
            <Navbar backArrowAvailable = {false}/>

            {AllContent.map((post, index) => {
                return (
                    <SummaryCard title = {post.title} 
                        username = {post.username}
                        company = {post.company}
                        content = {post.content}
                        numberOfComment = {post.numberOfComment}
                        key = {index}
                    />
                )
            })}
        </div>
    )
}

export default Homepage;