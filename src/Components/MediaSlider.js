import React from "react";
import SliderCard from "./SliderCard";

class MediaSlider extends React.Component {
  render() {
    return (
      <div className="scrolling-wrapper">
        <SliderCard medias={this.props.medias} />
      </div>
    );
  }
}

export default MediaSlider;
