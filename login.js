function login(email, password) {
  const users = [
    {
      firstName: 'Tony',
      email: 'tony@stark.com',
      password: 'iamironman'
    },
    {
      firstName: 'Steve',
      email: 'captain@hotmail.com',
      password: 'icandothisallday'
    },
    {
      firstName: 'Peter',
      email: 'peter@parker.com',
      password: 'enajyram'
    },
    {
      firstName: 'Natasha',
      email: 'natasha@gamil.com',
      password: '*parol#@$!'
    },
    {
      firstName: 'Nick',
      email: 'nick@shield.com',
      password: 'password'
    }
  ]

  // 比對篩選email和密碼皆符合者
  let matchedItem = users.find((item) => item.email === email && item.password === password)

  // 若無符合者，回傳錯誤訊息字串; 若有符合者，直接回傳符合者
  if (matchedItem === undefined) {
    return 'Username/Password 錯誤'
  }
  return matchedItem
}

module.exports = login