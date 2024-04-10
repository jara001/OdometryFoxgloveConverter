import { Time } from "@foxglove/schemas/schemas/typescript/Time";

export type Header = {
  seq: number;
  stamp: Time;
  frame_id: string;
};
