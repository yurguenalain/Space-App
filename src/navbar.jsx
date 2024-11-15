import { Link } from "react-router-dom";
import "./navbar.css";

function NavButton( {href,text}) {
    return (
       // <a className="nav-btn" href="{props.href}">
         //   {props.text}
        //</a>
        <Link className="nav-btn" to={href} >
            {text}
        </Link>

    );
}

function Navbar({links}) {
   console.log(links);
    const title = "Space App";

    return (
        <nav >
            <div>
                <h1>{title}</h1>
            </div>
            <div>
            {links.map((link, id) =>(
                <NavButton href={link.href} text={link.text} key={id}/>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;