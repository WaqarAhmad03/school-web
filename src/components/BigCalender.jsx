"use client"
import React, { useState } from 'react'
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import "react-big-calendar/lib/css/react-big-calendar.css"
import moment from 'moment'
import { calendarEvents } from '../lib/data'
import "./BigCalender.css"


const localizer = momentLocalizer(moment)

const BigCalender = () => {

    const [view, setView] = useState(Views.WEEK)

    const handleOnChange= (selectedView) => {
        setView(selectedView)
    }

  return (
        <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        style={{ height: "98%" }}
        min={new Date(2025, 1, 0, 8, 0, 0)}
        max={new Date(2025, 1, 0, 17, 0, 0)}
        views={["week", "day"]}
        view={view}
        onView={handleOnChange}
        dayPropGetter={(date) => {
            const day = date.getDay();
            return {
              style: {
                display: day === 0 || day === 6 ? 'none' : 'block', // Hide weekends (Sunday = 0, Saturday = 6)
              },
            };
          }}
        />
  )
}

export default BigCalender
