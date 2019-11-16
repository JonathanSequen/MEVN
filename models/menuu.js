import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  nombre: {type: String, required: [true, 'Nombre obligatorio']},
  descripcion: String,
  imageurl: String,
  activo: {type: Boolean, default: true}
});

// Convertir a modelo
const Menu = mongoose.model('Menu', menuSchema);

export default Menu;