import "./About.css"
import Urban from "../../img/img1.jpg"
import Dev from "../../img/web3.png"
import Web1 from "../../img/web1.png"
import Web4 from "../../img/web2.png"
import Web2 from "../../img/web4.png"

const About = () => {
    return ( 
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Urban}
                alt=""
                className="a-img" 
                />
            </div>
        </div>
        
        <div className="a-right">
            <h1 className="a-title">About Me</h1>
            <p className="a-sub">
            Passionate about Backend, frontend inquirer, IT enthusiast, but above all, constant and determined learner ...
            </p>
            <p className="a-desc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo repellendus distinctio repellat quo sequi odit, molestiae nostrum minima laboriosam facilis totam, tempore corrupti dolorum. Saepe excepturi odit vel aliquid officia!
            </p>
            <div className="a-award">
                <img src={Dev} alt="" className="a-award-img" />
                <img src={Web1} alt="" className="a-award-img" />
                <img src={Web2} alt="" className="a-award-img" />
                <img src={Web4} alt="" className="a-award-img" />
                <div className="a-award-texts">
                    <h4 className="a-award-title">Developer Front End</h4>
                </div>
            </div>
        </div>
       
    </div>
    )
}

export default About