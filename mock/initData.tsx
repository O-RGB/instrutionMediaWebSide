import { BaseMockDetail } from "./base/Base";
import { BrainMockDetail } from "./brain/Brain";

export const getMockModel = () => {
  return [...BaseMockDetail, ...BrainMockDetail];
};
