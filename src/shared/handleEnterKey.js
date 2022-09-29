export const handleEnterKey = (event, func, param1, param2, param3, param4) => {
  let key = event.key === "Enter" || event.keyCode === 13
  if (key) {
    func(param1, param2, param3, param4)
  }
}