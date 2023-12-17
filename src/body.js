import "./body.css";
import wellness from "./wellness.jpg";

function Body() {
  return (
    <div>
      <img src={wellness} className="imgWell"></img>
      <div className="contentBody">
        <h1>Think Health. Think Massage</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae officiis labore molestiae, aspernatur commodi doloribus reiciendis fugit possimus cum. Maiores!</p>
        <div className="btn">
            <button>Learn More About Us</button>
            <button>Contact Us today</button>
        </div>
      </div>

      <div className="para">
        <p className="colored">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae officiis labore molestiae, aspernatur commodi doloribus reiciendis fugit possimus cum. Maiores!</p>

        <p className="uncolored">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae officiis labore molestiae, aspernatur commodi doloribus reiciendis fugit possimus cum. Maiores!</p>

        <p className="uncolored">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae officiis labore molestiae, aspernatur commodi doloribus reiciendis fugit possimus cum. Maiores!</p>

      </div>

      <hr></hr>

      <div className="wellnessMassage">
        <h3>Family Wellness massage Therapy</h3>
        <p>234 unknown Road Unkonwn State India 234234</p>
        <p>Phone: 2345432134</p>
      </div>

    </div>
  );
}

export default Body;
