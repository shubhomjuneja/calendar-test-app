import {fireEvent, render, screen} from "@testing-library/react";
import React from "react";
import Dashboard from "./Dashboard";
import {formatDate, getNextUnit} from "../../utils/DateUtils";
import {FORMAT_APP_SPECIFIC, FORMAT_DEFAULT_ISO, FORMAT_ONLY_DATE} from "../../constants/DateTime";


describe('render dashboard component', () => {
  test("renders dashboard without crashing", () => {
    render(<Dashboard />)
    expect(screen.getByText('Book Calendar')).toBeInTheDocument()
  });

  test('selecting date and time from dashboard', () => {
    render(<Dashboard />)
    const nextDate = getNextUnit(new Date(), 'day', FORMAT_DEFAULT_ISO)
    const newDateEvent = screen.getByText(formatDate(nextDate, FORMAT_ONLY_DATE));
    fireEvent.click(newDateEvent);
    expect(newDateEvent).toHaveAttribute('tabIndex', '0')
    const timeSlot = screen.getByText(/01:00 PM/);
    fireEvent.click(timeSlot);
    expect(screen.queryAllByText(/01:00 PM/)[0]).toHaveClass('active')
    expect(screen.queryByText(/Selected Time/)).toBeInTheDocument()
    const formattedDate = formatDate(nextDate, FORMAT_APP_SPECIFIC);
    // const formattedDate = getNextUnit(nextDate, 'day',FORMAT_APP_SPECIFIC);
    expect(screen.queryByText(new RegExp(formattedDate, "i"))).toBeInTheDocument()
    // expect(screen.getByRole('span'))).
    expect(screen.queryAllByText(/02:00 PM/)[1]).toBe(undefined)
    expect(screen.queryAllByText(/01:00 PM/)[1]).toBeInTheDocument()
  })
})

