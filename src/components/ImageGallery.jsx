import { useEffect } from "react";
import M from "materialize-css";



const ImageGallery = () => {

    useEffect(() => {
        const materialboxes = document.querySelectorAll('.materialboxed');
        M.Materialbox.init(materialboxes, {
          inDuration: 500,
          outDuration: 500,
          onOpenStart: function() {
            console.log('An overlay has started opening!');
          },
          onCloseEnd: function() {
            console.log('An overlay has finished closing!');
          }
        });
      }, []); 
  
    return (
      <div> 
        <h1 className="body-text center">Gallery</h1>
        <div className= "container image-gallery">
        <div>
          <img className="materialboxed" src="https://i.imgur.com/sxWoLrA.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/enl14Hf.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/dZgVM2n.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/1bHPurz.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/A6pUUdO.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/PZOVLZy.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/5oozJ0H.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/DbV1HWV.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/FOX7iC9.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/ZB2pN8R.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/PhHMJfZ.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/CA9pmWL.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/M1vVnte.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/vuIV5AX.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/cnVggnx.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/FX14mNW.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/PNVj2Yv.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/7V8b1g1.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/IdUuq2B.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/RCXark8.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/hOgcWR8.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/lXjXRzj.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/TcFPUUm.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/wlyNXq8.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/bhwl7aQ.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/GD3eU3V.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/OfS8O9W.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/50bcbpJ.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/YXB3LFa.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/ovQNzvC.jpeg" alt="dog" />
        </div>
        <div>
          <img className="materialboxed" src="https://i.imgur.com/97iF3zZ.jpeg" alt="dog" />
        </div>
        </div>
      </div>
    );
  };
  
  export default ImageGallery;