export const useDate = (lastDate: string) => {
  const now = new Date()
  const last = new Date(lastDate)
  const timeDiff = Math.abs(now.getTime() - last.getTime())
  const minutesDiff = Math.round(timeDiff / (1000 * 60))
  if(minutesDiff < 60) {
    return `${minutesDiff} minutes ago`
  }
  const hoursDiff = Math.floor(minutesDiff / 60)
  if(hoursDiff > 23) {
    return `${Math.floor(hoursDiff / 24)} days ago`
  }
  return `${hoursDiff} hours ago`
}
