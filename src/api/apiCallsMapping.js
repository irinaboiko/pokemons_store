import * as loginPageActions from "../pages/LogInPage/actions";
import * as loginPageAPI from "../pages/LogInPage/api";

const apiCallsMapping = (action) => {
  const mapping = {
    [loginPageActions.LOGIN_REQUEST]: loginPageAPI.signIn,
  };

  if (!mapping[action.type]) {
    throw Error("Not mapped action");
  }

  return mapping[action.type];
};

export default apiCallsMapping;
