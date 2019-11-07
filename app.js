// 載入專案所需框架、套件，設定伺服器相關常數
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const login = require('./login')
const app = express()
const port = 3000

// 設定樣版引擎
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'main' }))
app.set('view engine', 'hbs')

// 設定body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// 路由設定
app.get('/', (req, res) => {
  res.render('index')
})

// invoke checkInfo函式比對使用者輸入資訊，若回傳內容為物件，直接以infoStatus變數帶入index.hbs渲染
// 若回傳內容為錯誤資訊字串，則將字串另存於wrongInfo後，渲染index.hbs
app.post('/', (req, res) => {
  const info = req.body
  let matchedItem = login(info.email, info.password)
  let error = null
  if (matchedItem === 'Username/Password 錯誤') {
    error = matchedItem
    matchedItem = false
  }
  res.render('index', { info, matchedItem, error })
})

// 啟動並監聽伺服器
app.listen(port, () => {
  console.log(`port ${port} is on!`)
})