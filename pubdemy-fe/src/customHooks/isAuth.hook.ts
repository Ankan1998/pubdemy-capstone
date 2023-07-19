import { useSelector } from "react-redux";
import { AppState } from "../redux/store/store";

export function IsAuth() {
    return useSelector((store: AppState) => store.user.isUserAuthenticated);
  }