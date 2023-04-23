for (let i = 1; i < 30; i++) {
  if (i % 3 === 0) {
    console.log(i + "!!!!")
  } else {
    //iを文字列sに変換
    var s = String(i)
    //文字列sの中に3が含まれているかどうかで分岐
    if (s.match(/3/)) {
      console.log("s" + "!!!!")
    } else {
      console.log("s" + "...")
    }
  }
}
