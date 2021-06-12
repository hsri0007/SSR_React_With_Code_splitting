import axios from "axios";
import { updateState } from "./reducers";

export const getUsers = (props) => async (dispatch) => {
  console.log(props.substring(1));
  try {
    const { data } = await axios.post("http://localhost:3000/dev/page/type", {
      slug: props.substring(1),
    });
    dispatch(updateState(data));
  } catch (error) {
    console.log(error);
  }
};
