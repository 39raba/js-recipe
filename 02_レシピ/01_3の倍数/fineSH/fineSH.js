const display = document.getElementById("display")
const button = document.getElementById("button")

let count = 0

const countUp = function () {
  count += 1
  if (count % 3 === 0) {
    console.log(count + "!!!!!")
  } else {
    console.log(count)
  }
}

let id = null

button.onclick = function () {
  if (id === null) {
    // start
    id = setInterval(countUp, 10)
    button.textContent = "stop"
  } else {
    // stop
    clearInterval(id)
    id = null
    button.textContent = "start"
  }
}
