import React, { useState } from "react";
import {Calendar, TimeSlots, SelectedTime} from '../../components'
import {
  Container,
  FlexContainer,
  FlexItem,
  Heading,
  SlotsWrap,
  TimeWrap,
} from "./Dashboard.style";
import {formatDate, filteredTimeArr} from "../../utils/DateUtils";
import {FORMAT_APP_SPECIFIC} from "../../constants/DateTime";

const Dashboard = () => {
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [startDate, setStartDate] = useState<Date>(new Date());

  const handleChange = (date: Date) => setStartDate(date)

  const onSelectTime = (time: string) => setSelectedTime(time);


  return (
    <Container>
      <Heading>
        Book Calendar
      </Heading>
      <FlexContainer>
        <FlexItem>
          <Calendar startDate={startDate} onChange={handleChange} minDate={new Date()} />
        </FlexItem>
        <FlexItem>
          <SlotsWrap>
            {filteredTimeArr(startDate).map((time, index) => (
              <TimeSlots
                time={time}
                key={index}
                onClick={() => onSelectTime(time)}
                active={time === selectedTime}
              />
            ))}
          </SlotsWrap>
        </FlexItem>
      </FlexContainer>
      <TimeWrap>
        {selectedTime && startDate ? (
          <SelectedTime
            time={selectedTime}
            date={formatDate(startDate, FORMAT_APP_SPECIFIC)}
          />
        ) : (
          <div style={{ height: 18 }} />
        )}
      </TimeWrap>
    </Container>
  );
};

export default Dashboard;
