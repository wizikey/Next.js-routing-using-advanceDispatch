import React from "react";
import { advanceDispatch } from "../../helpers";
import { reducerForCampaignsPage } from "../../reducers";

const Campaigns = function Campaigns({ campaignType }) {
  const currentState = { campaignType };
  let dispatch = advanceDispatch(reducerForCampaignsPage, currentState);

  return (
    <div style={{ padding: "20px 150px" }}>
      <p>
        Render List of all the campaigns with the provided type -{" "}
        <strong>{campaignType}</strong>
      </p>
      <select
        value={campaignType}
        onChange={(e) =>
          dispatch({
            type: "CHANGE_CAMPAIGN_TYPE",
            payload: { campaignType: e.target.value },
          })
        }
      >
        <option value="all">All</option>
        <option value="active">Active</option>
        <option value="inactive">InActive</option>
      </select>
    </div>
  );
};

Campaigns.getInitialProps = ({ query }) => {
  const { campaignType } = query;
  const defaultCampaignType = "all";

  return {
    campaignType:
      typeof campaignType === "string" ? campaignType : defaultCampaignType,
  };
};

export default Campaigns;
