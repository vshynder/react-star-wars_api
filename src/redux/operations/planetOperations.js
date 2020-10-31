import { planetActions } from "../actions";
import axios from "axios";

const getPlanets = (url) => (dispatch) => {
  dispatch(planetActions.getPlanetsRequest());

  axios
    .get(url)
    .then(({ data }) => dispatch(planetActions.getPlanetsSuccess(data)))
    .catch((error) => dispatch(planetActions.getPlanetsError("error")));
};

const operations = { getPlanets };

export default operations;
