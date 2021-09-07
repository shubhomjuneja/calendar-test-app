import React  from "react";
import DatePicker from "react-datepicker";

export interface CalendarProps {
  startDate?: Date;
  onChange(
      date: Date | [Date | null, Date | null] | null,
      event: React.SyntheticEvent<any> | undefined,
  ): void;
  minDate: Date
}

const Calendar = ({ startDate, onChange, minDate }: CalendarProps) => {
  return <DatePicker selected={startDate} onChange={onChange} minDate={minDate} inline />;
};

export default Calendar;
