import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "store/actions/index";

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actionCreators, dispatch)

}