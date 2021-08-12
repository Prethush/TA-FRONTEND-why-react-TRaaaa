import '../assets/stylesheet/style.css';

function Header() {
    
    return(
        <header className="navbar">
        <div className="container flex">
          <div className="flex">
            <a className="brand" href="#">
              <strong>Hydro</strong>
            </a>
            <nav>
              <ul className="flex nav-menu nav-menu-primary">
                    {
                        ["Home", "About", "Blog", "Our Work", "Contacts"].map((data, i) => < Navigation info = {data} key = {i}/>)
                    }
              </ul>
            </nav>
          </div>
          <nav>
            <ul className="flex nav-menu nav-menu-secondary">
              <li className="social-media-item">
                <a href="/"><i className="fab fa-facebook-square"></i></a>
              </li>
              <li className="social-media-item">
                <a href="/"><i className="fab fa-twitter"></i></a>
              </li>
              <li className="social-media-item">
                <a href="/"><i className="fab fa-instagram"></i></a>
              </li>
              <li>
                <a className="btn btn-primary" href="#"> Sign in / Join </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    )
}

function Navigation(props) {
    return (
        <li>
            <a href="/">{props.info}</a>
        </li>
    )
}



export default Header;