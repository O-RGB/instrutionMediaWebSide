import { URLAPPSSHEETS } from "../../../config/url";
import FetchCustom from "../../utils/fetchApi";

export const getItemPreview = (url: string) => {
  return FetchCustom<ItemPreviewList>(URLAPPSSHEETS + url);
};
