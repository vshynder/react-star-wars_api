import { residentActions } from "../actions";
import axios from "axios";

const getResident = (url) => (dispatch) => {
  dispatch(residentActions.getResidentRequest());

  axios
    .get(url)
    .then(({ data }) => dispatch(residentActions.getResidentSuccess(data)))
    .catch((error) => dispatch(residentActions.getResidentError(error)));
};

const operations = { getResident };

export default operations;
