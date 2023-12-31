import { Link } from "react-router-dom";

const BlogList = ({ title, blogs }) => {
    return (
        <>
            <h1>{title}</h1>
            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <Link to={`/blogs/${blog.id}`}>
                            <h2>{blog.title}</h2>
                            <p>Written by {blog.author}</p>
                        </Link>
                    </div>
                )
            })}
        </>
    )
}

export default BlogList;