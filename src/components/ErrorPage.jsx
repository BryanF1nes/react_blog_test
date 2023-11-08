import { Link } from 'react-router-dom'
import Navbar from './Navbar';

const ErrorPage = () => {
    return (
        <div className="App">
            <Navbar />
            <div className="content flex">
                <h1>404 Error Page</h1>
                <h2>Oops.. It seem's you have ventured too far.</h2>
                <Link to='/'>This will bring you back to the homepage.</Link>
            </div>
        </div>
    )
}

export default ErrorPage;