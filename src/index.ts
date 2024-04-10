import { ArrowPrimitive, SceneUpdate } from "@foxglove/schemas";
import { ExtensionContext } from "@foxglove/studio";

import { Odometry } from "./Odometry";


function convertOdometry(inputMessage: Odometry): SceneUpdate
{
  const { header, pose } = inputMessage;

  const arrowPrimitive: ArrowPrimitive = {
    pose: {
      position: {
        x: pose.pose.position.x,
        y: pose.pose.position.y,
        z: pose.pose.position.z
      },
      orientation: {
        x: pose.pose.orientation.x,
        y: pose.pose.orientation.y,
        z: pose.pose.orientation.z,
        w: pose.pose.orientation.w
      },
    },
    color: { r: 1, g: 0, b: 0, a: 1 },
    shaft_length: 1,
    shaft_diameter: 0.1,
    head_length: 0.3,
    head_diameter: 0.2
  };

  const sceneUpdateMessage = {
    deletions: [],
    entities: [
      {
        id: "odometry",
        timestamp: header.stamp,
        frame_id: header.frame_id,
        lifetime: { sec: 10, nsec: 0 },
        frame_locked: false,
        metadata: [],
        arrows: [arrowPrimitive],
        cubes: [],
        spheres: [],
        cylinders: [],
        lines: [],
        triangles: [],
        texts: [],
        models: [],
      },
    ],
  };

  return sceneUpdateMessage;
}


export function activate(extensionContext: ExtensionContext) {
  extensionContext.registerMessageConverter({
    fromSchemaName: "nav_msgs/Odometry",
    toSchemaName: "foxglove.SceneUpdate",
    converter: convertOdometry,
  });

  extensionContext.registerMessageConverter({
    fromSchemaName: "nav_msgs/msg/Odometry",
    toSchemaName: "foxglove.SceneUpdate",
    converter: convertOdometry,
  });
}



