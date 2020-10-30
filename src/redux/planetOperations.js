import actions from "./planetActions";
import axios from "axios";

const getPlanets = (url) => (dispatch) => {
  dispatch(actions.getPlanetsRequest());

  axios
    .get(url)
    .then(({ data }) => dispatch(actions.getPlanetsSuccess(data)))
    .catch((error) => dispatch(actions.getPlanetsError(error)));
};

const operations = { getPlanets };

export default operations;
