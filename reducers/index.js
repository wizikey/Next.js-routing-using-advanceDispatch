export const reducerForCampaignsPage = function reducerForCampaignsPage(
  state,
  action
) {
  if (action.type === "CHANGE_CAMPAIGN_TYPE") {
    const { campaignType } = action.payload;

    if (state.campaignType !== campaignType) return { ...state, campaignType };
    else return state;
  } else {
    return state;
  }
};
