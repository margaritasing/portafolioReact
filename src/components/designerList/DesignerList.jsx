import "../designerList/DesignerList.css"
import Designer from "../designer/Designer"
import { designers } from "../../designer"


const DesignerList = () => {
    return (
        <div className="dl">
        <div className="dl-texts">
            <h1 className="dl-title">Diseños</h1>
            <p className="dl-desc">
                Front End:
            </p>
        </div>
        <div className="dl-list">
            {designers.map((item) =>(
                 <Designer Key={item.id} image={item.image} url={item.url}/>
            ))}               
        </div>
    </div>
    )
}

export default DesignerList
