import React from "react";
import Campaign from "./Campaign";
import API from "../utils/API";

class CampaignContainer extends React.Component {
  state = {
    campaigns: []
  };

  componentWillMount() {
    API.getCampaigns().then(res => {
      this.setState({ campaigns: res.data.campaigns });
    });
  }

  render() {
    return (
      <>
        {this.state.campaigns.map(campaign => (
          <Campaign
            key={campaign.id}
            campaign_name={campaign.campaign_name}
            campaign_icon_url={campaign.campaign_icon_url}
            pay_per_install={campaign.pay_per_install}
            medias={campaign.medias}
          />
        ))}
      </>
    );
  }
}

export default CampaignContainer;
