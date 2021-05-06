import React from "react";
import { advanceDispatch } from "../../helpers";
import { reducerForCampaignsPage } from "../../reducers";

const Campaigns = function Campaigns({ campaignType }) {
  const currentState = { campaignType };
  let dispatch = advanceDispatch(reducerForCampaignsPage, currentState);

  return (
    <div>
      <h1>
        Render List of all the campaigns with the provided type - {campaignType}
      </h1>

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

  return {
    campaignType: typeof campaignType === "string" ? campaignType : undefined,
  };
};

export default Campaigns;
