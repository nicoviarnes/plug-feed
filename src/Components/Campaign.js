import React from "react";
import MediaSlider from "./MediaSlider";

class Campaign extends React.Component {
  render() {
    return (
      <div className="campaign">
        <div className="campaign-header">
          <img
            className="campaign-icon"
            src={this.props.campaign_icon_url}
            alt="Campaign icon"
          />
          <div className="header-info">
            <h3>
              {this.props.campaign_name}
            </h3>
            <span><strong>{this.props.pay_per_install}</strong> per install</span>
          </div>
        </div>

        <div className="media-container">
          <MediaSlider medias={this.props.medias} />
        </div>
      </div>
    );
  }
}

export default Campaign;
