
import axios from "axios";
import { gitHubUrl } from "../../constants/urls";
import { addRepoInfo, addError, setIsLoading } from "../slices/githubSlice";

export const getRepoData = (username) => async (dispatch) => {
    dispatch(setIsLoading(true));
    try {
        const resp = await axios.get(`${gitHubUrl}${username}/repos`);
        dispatch(addRepoInfo(resp.data))
        dispatch(setIsLoading(false));
        dispatch(addError(null));
    } catch (err) {
        dispatch(setIsLoading(false));
        dispatch(addRepoInfo([]))
        dispatch(addError(err.response.data.message));
    }
};

