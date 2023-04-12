import { Link } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/parallax">Parallax</Link>
            </nav>
        </>
    );
};

export default Nav;
