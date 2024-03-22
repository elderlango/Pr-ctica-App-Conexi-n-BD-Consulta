const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use(cors({origin: true, credentials: true}));

mongoose.connect('mongodb://localhost/bd_grafica', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const miSchema = new mongoose.Schema({
  label:{
    type:String,
    required:true
},
value:{
    type:Number,
    required:true
}
  },
);


//Es para especificarle a mongoose cual es nuestro modelo
const Producto=new mongoose.model('pachart',miSchema)

app.post("/agregar", async (req, res) => {
    try {
      const { label, value, } = req.body;
      console.log("req body:", req.body);

      const newdata = new Producto({ label, value});
      await newdata.save();
      
      res.status(201).json({ message: 'Data creada' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  });

app.get('/datos', async (req, res) => {
    try {
      const datos = await Producto.find();
      console.error(datos);

      res.json(datos);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  });

  app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
  });