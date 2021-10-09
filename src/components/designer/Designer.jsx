import "../designer/Designer.css"

const Designer = ({image,url}) => {
    return (
        <div>
             <div className="d">
             <div className="d-browser">
                <div className="d-cicle"></div>
                <div className="d-cicle"></div>
                <div className="d-cicle"></div>
             </div>
             <a href={url} target="_blank" rel="noreferrer">
                 <img src={image} alt="" className="d-img" />
             </a>       
        </div>
            
        </div>
    )
}

export default Designer
