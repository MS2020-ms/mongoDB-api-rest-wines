var mongoose = require('mongoose');

//Conectar a BBDD
mongoose.connect("mongodb://localhost:27017/youtube-vinos", { useNewUrlParser: true, useUnifiedTopology: true });

//Esquema de BBDD
var vinosSchema = {
    nombre: String,
    anio: Number,
    uva: String,
    pais: String,
    region: String,
    descripcion: String,
    foto: String,
}

var vinos = mongoose.model('vinos', vinosSchema)

//GET http://localhost:3000/vinos
exports.obtenerTodo = function (req, res) {
    //res.send('Funcionando...');
    vinos.find(function (error, item) {
        res.send(item);
    });
}

//GET //http://localhost:3000/vinos/:id
exports.obtenerPorId = function (req, res) {
    vinos.findOne({ '_id': req.params.id }, function (error, item) {
        res.send(item);
    });
}

//POST //http://localhost:3000/vinos
exports.agregar = function (req, res) {
    const data = {
        nombre: req.body.nombre,
        anio: req.body.anio,
        uva: req.body.uva,
        pais: req.body.pais,
        region: req.body.region,
        descripcion: req.body.descripcion,
        foto: req.body.foto
    }

    let vino = new vinos(data);
    //guardar en BBDD
    vino.save(function (error, resultado) {
        if (error) {
            res.send("Hubo un error...");
        } else {
            res.send(resultado[0]);
        }
    });
}

//PUT //http://localhost:3000/vinos/:id
exports.editar = function (req, res) {
    const data = {
        nombre: req.body.nombre,
        anio: req.body.anio,
        uva: req.body.uva,
        pais: req.body.pais,
        region: req.body.region,
        descripcion: req.body.descripcion,
        foto: req.body.foto
    }
    vinos.updateOne({ '_id': req.params.id }, data, function () {
        res.send(data);
    });
}

//DELETE //http://localhost:3000/vinos/:id
exports.eliminar = function (req, res) {
    vinos.remove({ '_id': req.params.id }, function (error, item) {
        if (error) {
            console.log(error);
        } else {
            res.send("true");
        }

    });
}