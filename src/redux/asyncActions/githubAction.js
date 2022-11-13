
import axios from "axios";
import { gitHubUrl } from "../../constants/urls";
import { addRepoInfo, addError } from "../slices/githubSlice";

export const getRepoData = (username) => async (dispatch) => {
    try {
        const resp = await axios.get(`${gitHubUrl}${username}/repos`);
        dispatch(addRepoInfo(resp.data))
        dispatch(addError(null));
    } catch (err) {
        dispatch(addRepoInfo([]))
        dispatch(addError(err.response.data.message));
    }
};

