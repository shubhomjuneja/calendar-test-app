import { render, screen } from "@testing-library/react";
import React from "react";
import SelectedTime, {SelectedTimeProps} from "./SelectedTime";

const props: SelectedTimeProps = {
  time: "",
  date: "",
};

describe('render selected time component', () => {
  test('render selected time without date and time', () => {
    render(<SelectedTime {...props} />)
    expect(screen.getByText(/Selected Time/)).toBeInTheDocument()
  })

  test('render date on selected time component', () => {
    props.date = '2021-09-06';
    render(<SelectedTime {...props} />)
    expect(screen.getByText(/2021-09-06/)).toBeInTheDocument()
  })

  test('render time on selected time component', () => {
    props.time = '09:00 AM'
    render(<SelectedTime {...props} />)
    expect(screen.getByText(/09:00 AM/)).toBeInTheDocument()
  })
})
