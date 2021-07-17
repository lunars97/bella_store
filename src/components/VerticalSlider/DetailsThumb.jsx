import React, { Component } from 'react';

export class DetailsThumb extends Component {

  render() {
    const { images, tab, myRef } = this.props;
    return (
      <div className="thumb" ref={myRef}>
        {
          images.map((img, index) => (
            <div>
              <img src={img} key={index} alt=""
                   onClick={() => tab(index)}
              />
            </div>
          ))
        }
      </div>
    );
  }
}

export default DetailsThumb;
