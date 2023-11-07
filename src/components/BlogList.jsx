const BlogList = ({ title, blogs }) => {
    return (
        <>
            <h1>{title}</h1>
            {blogs.map((blog) => {
                return (
                    <div className="blog-preview" key={blog.id}>
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                )
            })}
        </>
    )
}

export default BlogList;