import React from "react";
import {screen, render, fireEvent} from '@testing-library/react';
import Calendar, {CalendarProps} from "./Calendar";
import {getNextUnit, getPreviousUnit, formatDate} from "../../utils/DateUtils";
import {FORMAT_MONTH_YEAR} from "../../constants/DateTime";

const props: CalendarProps = {
  startDate: new Date(),
  onChange: () => {}
}
describe('testing calendar component', () => {
  test("renders calendar without crashing", () => {
    render(<Calendar {...props} />)
    expect(screen.getByText(formatDate(new Date(), FORMAT_MONTH_YEAR))).toBeInTheDocument();
    // unmount()
  });

  test('selecting another date', () => {
    render(<Calendar {...props} />)
    const dateElement = screen.getByText(new Date().getDate());
    expect(dateElement).toHaveAttribute('tabIndex', "0")
    const newDateEvent = screen.getByText(new Date().getDate() + 1);
    fireEvent.click(newDateEvent);
    expect(dateElement).toHaveAttribute('tabIndex', '-1')
    expect(newDateEvent).toHaveAttribute('tabIndex', '0')
  })

  test('next and previous month buttons', () => {
    render(<Calendar {...props} />)
    const prevButton = screen.getByRole('button', {name: 'Previous Month'});
    fireEvent.click(prevButton);
    expect(screen.getByText(getPreviousUnit(new Date(), 'month',FORMAT_MONTH_YEAR))).toBeInTheDocument();
    const nextButton = screen.getByRole('button', {name: 'Next Month'});
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);
    expect(screen.getByText(getNextUnit(new Date(), 'month',FORMAT_MONTH_YEAR))).toBeInTheDocument();
  })
})

