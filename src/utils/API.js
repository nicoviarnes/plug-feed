import axios from "axios";

export default {
	getCampaigns: function() {
		return axios.get("https://www.plugco.in/public/take_home_sample_feed");
	}
};
