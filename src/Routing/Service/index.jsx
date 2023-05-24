import { Link, Outlet, } from "react-router-dom";

const Service = () => {
    return(
        <div className="main">
            <h2>Service Page</h2>
            <p>Product yang kami jual :</p>
            <ol>
                <li><Link to="/service/laptop">Laptop</Link></li>
                <li><Link to="/service/smartphone">Smartphone</Link></li>
            </ol>
            <hr />
            <Outlet />
        </div>
    )
}

export default Service;