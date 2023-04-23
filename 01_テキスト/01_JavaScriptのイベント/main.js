//イベントが発生する要素の取得
const button = document.getElementById("button")

const alertMessage = function () {
  alert("クリックしちゃったねえ")
}

//関数を登録
button.onclick = alertMessage

//input要素とinputイベント
const inputText = document.getElementById("input-text")
