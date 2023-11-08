import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div>
            <h1>Error Page 404.</h1>
            <Link to='/'>This will bring you back to the homepage.</Link>
        </div>
    )
}

export default ErrorPage;