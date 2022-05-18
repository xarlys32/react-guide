import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const params = useParams();
    return (<>
        <h3>Product Detail</h3>
        <p>{params.product}</p>
    </>
)}

export default ProductDetail;