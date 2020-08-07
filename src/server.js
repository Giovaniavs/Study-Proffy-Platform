const express = require("express")
const server = express()
const nunjucks = require("nunjucks")

function pageLanding(req, res){
    return res.render("index.html")
}

function pageStudy(req, res){
    return res.render("study.html")
}

function pageGiveClasses(req, res){
    return res.render("give-classes.html")
}

//configurar o nunjucks
nunjucks.configure("src/views",{
    express: server,
    noCache: true,
})


server
// configurar arquivos estaticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicacao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.listen(5500)