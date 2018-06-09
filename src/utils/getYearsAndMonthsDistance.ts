import { differenceInYears, differenceInMonths } from "date-fns";

export const getYearsAndMonthsDistance = (startDate: Date, endDate: Date = new Date()) => {
  const currentDate = new Date()
  const years = differenceInYears(endDate, startDate)
  const months = differenceInMonths(endDate, startDate) % 12

  return { years, months }
}