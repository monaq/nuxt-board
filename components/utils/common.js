const stringfy = (data) => {
  if(data) {
    return JSON.stringify(data)
  }
}
const parse = (str) => {
  if(str) {
    return JSON.parse(str)
  }
}
