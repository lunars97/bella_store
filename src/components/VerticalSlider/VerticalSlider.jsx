import React from 'react';
import './VerticalSlider.css';
import DetailsThumb from './DetailsThumb';
import vertical1 from '../../assets/VerticalSlider/vertical2.png'
import vertical2 from '../../assets/VerticalSlider/vertical3.png'
import vertical3 from '../../assets/VerticalSlider/vertical4.png'


class VerticalSlider extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "src": [
            vertical1,
            vertical2,
            vertical3,
          ],
       
      }
    ],
    index: 0
  };

  myRef = React.createRef();

  handleTab = index =>{
    this.setState({index: index})
    const images = this.myRef.current.children;
    for(let i=0; i<images.length; i++){
      images[i].className = images[i].className.replace("active", "");
    }
    images[index].className = "active";
  };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }


  render(){
    const {products, index} = this.state;
    return(
      <div>
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="box">
                <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
              </div>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default VerticalSlider;
