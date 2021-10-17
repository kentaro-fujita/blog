const formatDate = (date: Date): string => {
  const yyyy = date.getFullYear()
  const MM = ('0' + (date.getMonth() + 1)).slice(-2)
  const dd = ('0' + date.getDate()).slice(-2)
  const hh = ('0' + date.getHours()).slice(-2)
  const mm = ('0' + date.getMinutes()).slice(-2)
  return `${yyyy}/${MM}/${dd} ${hh}:${mm}`
}
export default formatDate
