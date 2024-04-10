import { Point } from "./Point";
import { Quaternion } from "./Quaternion";

export type Pose = {
  position: Point;
  orientation: Quaternion;
};
