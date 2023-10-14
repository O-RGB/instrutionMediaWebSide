import { URLAPPSSHEETS } from "../../../config/url";
import FetchCustom from "../../utils/fetchApi";

export const getFile = (url: string) => {
  return FetchCustom<ItemWork>(URLAPPSSHEETS + url);
};
