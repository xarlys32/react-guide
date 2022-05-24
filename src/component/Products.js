import { NavLink, Outlet} from "react-router-dom";

const Products = () => {
    return (
        <>
            <h3>Products</h3>
            <div>
                <ul>
                    <li><NavLink  to="/products/book">Book</NavLink></li>
                    <li><NavLink  to="/products/table">Table</NavLink></li>
                </ul>
            </div>
            <Outlet />
        </>
    )
}

export default Products;