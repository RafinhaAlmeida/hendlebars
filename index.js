const express = require("express")
const exphbs = require("express-handlebars")

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use (express.static("public"))

app.get('/', (requisicao, resposta) => {
    resposta.send("olá, mundo")
})

app.listen(3000, () => {
    console.log("servidor dodando na porta 3000!")
})