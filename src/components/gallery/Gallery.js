import Images from "./images";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./gallery.css";
import { useState } from "react";

function Gallery({ parentCallback }) {
  const [count, setCount] = useState(0);

  const handleCount = () => {
    setCount(count + 1)
    parentCallback(count)
  }


  return (
    <div className="Gallery">
      <div className="Gallery_Wrapper">
        {Images.map((item) => (
          <div key={item.id} className="item">
            <div className="image" onClick={handleCount}>
              <img src={item.image} alt="adelaTop" />
            </div>
            <div className="details">
              <div className="">
                <h2>{item.name}</h2>
                <p>{item.price}</p>
              </div>
              <div className="gallery_icon">
                <ShoppingCartOutlinedIcon onClick={handleCount} style={{ color:"#273E87"}}/>
                <FavoriteBorderIcon style={{ color:"#182754"}}/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
