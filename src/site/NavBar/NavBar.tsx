import { Link } from 'react-router-dom';

const NavBar = () => {
      return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                  <div className="container container-fluid">
                        {/* <a className="navbar-brand" href="#">Book Shop</a> */}
                        <Link to={'/'} className="navbar-brand">
                              Book Shop
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                          <Link to={'/'} className="nav-link active">Home</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link to={'/books'} className="nav-link">Books</Link>
                                    </li>
                                    <li className="nav-item">
                                          <Link to={'/contact'} className="nav-link">Contact</Link>
                                    </li>
                              </ul>
                        </div>
                  </div>
            </nav>
      );
}

export default NavBar;