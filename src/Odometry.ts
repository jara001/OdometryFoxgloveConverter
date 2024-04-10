import { Header } from "./Header";
import { PoseWithCovariance } from "./PoseWithCovariance";

export type Odometry = {
  header: Header;
  pose: PoseWithCovariance;
};
