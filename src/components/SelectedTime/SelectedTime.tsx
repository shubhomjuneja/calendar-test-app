import React from "react";
import { TimeWrap, TimeText } from "./SelectedTime.style";

export interface SelectedTimeProps {
  time?: string | null;
  date?: string | Date;
}
const SelectedTime = ({ time, date }: SelectedTimeProps) => {
  return (
    <TimeWrap>
      Selected Time: {date} <TimeText>{time}</TimeText>
    </TimeWrap>
  );
};

export default SelectedTime;
