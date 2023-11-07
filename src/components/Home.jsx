import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

  const [ blogs, setBlogs ] = useState(null)
  const [ isLoading, setIsLoading ] = useState(true);
  const [ error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
        .then(res => {
          if (!res.ok) {
            throw Error('Could not fetch data for that resource.')
          }
          return res.json();
        })
        .then((data) => {
          setBlogs(data)
          setIsLoading(false)
          setError(null);
        })
        .catch(err => {
          setIsLoading(false)
          setError(err.message)
        });
    }, 1500)
  }, [])

    return (
      <div className="home">
        { error && <div>{error}</div>}
        { isLoading && <div>Loading....</div>}
        {blogs && <BlogList blogs={blogs} title="All Blogs" />}
      </div>
    );
  }
   
  export default Home;