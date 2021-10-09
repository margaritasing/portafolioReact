import "./ProductList.css"
import Product from "../product/Product"
import {product, products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Skills</h1>
                <p className="pl-desc">
                    Conocimiento en:
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) =>(
                     <Product Key={item.id} img={item.img} link={item.link}/>
                ))}               
            </div>
        </div>
    )
}

export default ProductList
