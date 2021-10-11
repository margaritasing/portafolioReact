import "./ProductList.css"
import Product from "../product/Product"
import {products} from "../../data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Desarrollo</h1>
                <p className="pl-desc">
                Front End y Back End
                </p>
            </div>
            <div className="pl-list">
                { products.map((item) =>(
                     <Product Key={item.id} img={item.img} link={item.link}/>
                ))}               
            </div>
        </div>
    )
}

export default ProductList
