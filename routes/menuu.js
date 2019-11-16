import express from 'express';
const router = express.Router();

//importar el model Menu

import Menu from '../models/menuu';

//agregar un objeto al menu 

router.post('/nuevo-objeto',async(req,res)=>{
    const body = req.body;  
    try {
        const menuDB = await Menu.create(body);
        res.status(200).json(menuDB); 
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});
//GET con parametros 
router.get('/menu/:id',async(req,res)=>{
    const _id = req.params.id;
  try {
    const menuDB = await Menu.findOne({_id});
    res.json(menuDB);
  } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

//GET con todos los documentos 
router.get('/menuc', async(req, res) => {
    try {
      const menuDb = await Menu.find();
      res.json(menuDb);
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });

  // Delete eliminar una nota
router.delete('/menu/:id', async(req, res) => {
    const _id = req.params.id;
    try {
      const menuDb = await Menu.findByIdAndDelete({_id});
      if(!menuDb){
        return res.status(400).json({
          mensaje: 'No se encontró el id indicado',
          error
        })
      }
      res.json(menuDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });  
  // Put actualizar una nota
router.put('/menu/:id', async(req, res) => {
    const _id = req.params.id;
    const body = req.body;
    try {
      const menuDb = await Menu.findByIdAndUpdate(
        _id,
        body,
        {new: true});
      res.json(menuDb);  
    } catch (error) {
      return res.status(400).json({
        mensaje: 'Ocurrio un error',
        error
      })
    }
  });
//Exportacion 
module.exports=router;