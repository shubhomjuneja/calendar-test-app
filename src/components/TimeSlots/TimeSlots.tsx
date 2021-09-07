import React, {MouseEventHandler} from "react";
import { SlotItem } from "./TimeSlots.style";

export interface TimeSlotProps {
  time?: string;
  active?: boolean;
  onClick?: MouseEventHandler | undefined;
}
const Slot = ({ time, active, onClick }: TimeSlotProps) => {
  return (
    <SlotItem
      className={active ? "active" : ""}
      onClick={onClick}
    >
      {time}
    </SlotItem>
  );
};

export default Slot;
