var express = require('express');
 
 
var app = express();
 
 
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/'));
 
app.get('/', function (req, res) {
    res.sendFile(__dirname + "/index.html");
});
 
app.get('/login', function (req, res) {
    res.sendFile(__dirname + "/login.html");
});
 
const puerto = process.env.PUERTO || 3000;
 
app.listen(puerto, function () {
  console.log("Servidor funcionando en puerto: " + puerto);
});
 
//Recursos
app.use(express.static(__dirname+'/'));
 
 
 
 
 
 
var mysql = require("mysql");
 
var cors = require("cors");
 
app.use(express.json());
app.use(cors());
 
var conexion = mysql.createConnection({
  host: "107.21.4.77",
  user: "omarlopez",
  password: "lopez",
  database: "landing_pagesb",
});
 
conexion.connect(function (error) {
    if (error) {
      throw error;
    } else {
      console.log("Conexión exitosa");
    }
  });
 
 
 
app.post("/api/pedido", (req, res) => {
    let data = {
        userped: req.body.USERPED,
        emausped: req.body.EMAUSPED,
        celusped: req.body.CELUSPED,
        asuped: req.body.ASUPED,
        msgped: req.body.MSGPED
    };
    let sql = "INSERT INTO pedido SET ?";
    conexion.query(sql, data, function (error, results) {
    if (error) {
        throw error;
    } else {
        console.log(data);
        res.send(data);
    }
    });
  });
