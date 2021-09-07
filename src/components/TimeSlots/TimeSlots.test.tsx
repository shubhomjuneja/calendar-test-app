import { render, screen } from "@testing-library/react";
import React from "react";
import TimeSlots, {TimeSlotProps} from "./TimeSlots";

const props: TimeSlotProps = {
  time: "09:00 AM",
}

describe('render time slots component', ()  => {
  test('render time slots correctly', () => {
    render(<TimeSlots {...props} />)
    expect(screen.getByText(/09:00/)).toBeInTheDocument()
  })

  test('render active time slot correctly', () => {
    props.active=true
    render(<TimeSlots {...props} />)
    expect(screen.getByText(/09:00/)).toHaveClass('active')
  })

  test('render active time slot correctly', () => {
    props.active=false
    render(<TimeSlots {...props} />)
    expect(screen.getByText(/09:00/)).not.toHaveClass('active')
  })
})
