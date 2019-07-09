const PropuestaModel = require('../models/propuesta');
const VentaModel = require('../models/venta');
const HistorialModel = require('../models/historial');
const ClienteModel = require('../models/cliente');
const RepartidorModel = require('../models/Repartidor');
const PermisoModel = require('../models/Permiso');
const RolModel = require('../models/Rol');
const CuentaModel = require('../models/Cuenta');
const PedidoModel = require('../models/Pedido');
const VendedorModel = require('../models/Vendedor');

/* #region Propuesta*/
const crearPropuesta = async(root, params, context, info) => {

	const newPropuesta = await PropuestaModel.create(params.data).catch( e => {throw new Error('Ocurrio un problema al crear la propuestas');});

	if (!newPropuesta) throw new Error('No se creo la propuesta');

	return newPropuesta;
};

const actualizarPropuesta = async(root, params, context, info) =>{
	const {id, data} = params;
	const {user} = context;
	const actualizarPropuesta = await PropuestaModel.findOneAndUpdate({_id:id},{$set:{...data}}, {new:true});
	return actualizarPropuesta.toObject();
};

const eliminarPropuesta = async(root, params, context, info)=>{
	const {id, data} = params;
	const {user} = context;
	await PropuestaModel.findOneAndUpdate({_id:id},{$set:{is_active:false}});
   
	return 'Propuesta Elimindada';
};


/*region Venta */

const crearVenta = async(root, params, context, info) => {

	const newVenta = await VentaModel.create(params.data).catch( e => {throw new Error('Ocurrio un problema al crear la Venta');});

	if (!newVenta) throw new Error('No se creo la Venta');

	return newVenta;
};

const actualizarVenta = async(root, params, context, info) =>{
	const {id, data} = params;
	const {user} = context;
	const actualizarVenta = await VentaModel.findOneAndUpdate({_id:id._id},{$set:{...data}}, {new:true});
	return actualizarVenta.toObject();
};

const eliminarVenta = async(root, params, context, info)=>{
	const {id, data} = params;
	const {user} = context;
	await VentaModel.findOneAndUpdate({_id:id},{$set:{is_active:false}});
   
	return 'Venta Elimindada';
};


/*#region Historial */

const crearHistorial = async(root, params, context, info) => {

	const newHistorial = await HistorialModel.create(params.data).catch( e => {throw new Error('Ocurrio un problema al crear el Historials');});

	if (!newHistorial) throw new Error('No se creo el Historial');

	return newHistorial;
};

const eliminarHistorial = async(root, params, context, info)=>{
	const {id, data} = params;
	const {user} = context;
	await HistorialModel.findOneAndUpdate({_id:id},{$set:{is_active:false}});
   
	return 'Historial Elimindado';
};


/*#region Cliente */
const crearCliente = async(root, params, context, info) => {

	const newCliente = await ClienteModel.create(params.data).catch( e => {throw new Error('Ocurrio un problema al crear el Clientes');});

	if (!newCliente) throw new Error('No se creo el Cliente');

	return newCliente;
};

const actualizarCliente = async(root, params, context, info) =>{
	const {id, data} = params;
	const {user} = context;
	const actualizarCliente = await ClienteModel.findOneAndUpdate({_id:id._id},{$set:{...data}}, {new:true});
	return actualizarCliente.toObject();
};

const eliminarCliente = async(root, params, context, info)=>{
	const {id, data} = params;
	const {user} = context;
	await ClienteModel.findOneAndUpdate({_id:id},{$set:{is_active:false}});
   
	return 'Cliente Elimindado';
};

/*#region Repartidor */
const crearRepartidor = async(root, params, context, info) => {

	const newRepartidor = await RepartidorModel.create(params.data).catch( e => {throw new Error('Ocurrio un problema al crear el Repartidor');});

	if (!newRepartidor) throw new Error('No se creo el Repartidor');

	return newRepartidor;
};

const actualizarRepartidor = async(root, params, context, info) =>{
	const {id, data} = params;
	const {user} = context;
	const actualizarRepartidor = await RepartidorModel.findOneAndUpdate({_id:id._id},{$set:{...data}}, {new:true});
	return actualizarRepartidor.toObject();
};

const eliminarRepartidor = async(root, params, context, info)=>{
	const {id, data} = params;
	const {user} = context;
	await RepartidorModel.findOneAndUpdate({_id:id},{$set:{is_active:false}});
   
	return 'Repartidor Elimindado';
};

/*region Permiso */
const crearPermiso = async(root, params, context, info) => {

	const newPermiso = await PermisoModel.create(params.data).catch( e => {throw new Error('Ocurrio un problema al crear el Permiso');});

	if (!newPermiso) throw new Error('No se creo el Permiso');

	return newPermiso;
};

const actualizarPermiso = async(root, params, context, info) =>{
	const {id, data} = params;
	const {user} = context;
	const actualizarPermiso = await PermisoModel.findOneAndUpdate({_id:id,permiso:user._id},{$set:{...data}}, {new:true});
	return actualizarPermiso.toObject();
};

const eliminarPermiso = async(root, params, context, info)=>{
	const {id, data} = params;
	const {user} = context;
	await PermisoModel.findOneAndUpdate({_id:id,permiso:user},{$set:{activo:false}});
   
	return 'Repartidor Elimindado';
};

/*region Cuenta */
const crearCuenta = async(root, params, context, info) => {

	const newCuenta = await CuentaModel.create(params.data).catch( e => {throw new Error('Ocurrio un problema al crear el Permiso');});

	if (!newCuenta) throw new Error('No se creo el Permiso');

	return newCuenta;
};

const actualizarCuenta = async(root, params, context, info) =>{
	const {id, data} = params;
	const {user} = context;
	const actualizarCuenta = await CuentaModel.findOneAndUpdate({_id:id,cuenta:user._id},{$set:{...data}}, {new:true});
	return actualizarCuenta.toObject();
};

const eliminarCuenta = async(root, params, context, info)=>{
	const {id, data} = params;
	const {user} = context;
	await CuentaModel.findOneAndUpdate({_id:id,cuenta:user},{$set:{activo:false}});
   
	return 'Repartidor Elimindado';
};

/*region Rol */
const crearRol = async(root, params, context, info) => {

	const newCuenta = await RolModel.create(params.data).catch( e => {throw new Error('Ocurrio un problema al crear el Permiso');});

	if (!newCuenta) throw new Error('No se creo el Permiso');

	return newRol;
};

const actualizarRol = async(root, params, context, info) =>{
	const {id, data} = params;
	const {user} = context;
	const actualizarRol = await RolModel.findOneAndUpdate({_id:id,rol:user._id},{$set:{...data}}, {new:true});
	return updateRepartid.toObject();
};

const eliminarRol = async(root, params, context, info)=>{
	const {id, data} = params;
	const {user} = context;
	await RolModel.findOneAndUpdate({_id:id,rol:user},{$set:{activo:false}});
   
	return 'Repartidor Elimindado';
};

/*region Pedido */
const crearPedido = async(root, params, context, info) => {

	const newCuenta = await PedidoModel.create(params.data).catch( e => {throw new Error('Ocurrio un problema al crear el Permiso');});

	if (!newCuenta) throw new Error('No se creo el Permiso');

	return newPedido;
};

const actualizarPedido = async(root, params, context, info) =>{
	const {id, data} = params;
	const {user} = context;
	const actualizarPedido = await PedidoModel.findOneAndUpdate({_id:id,rol:user._id},{$set:{...data}}, {new:true});
	return actualizarPedido.toObject();
};

const eliminarPedido = async(root, params, context, info)=>{
	const {id, data} = params;
	const {pedido} = context;
	await PedidoModel.findOneAndUpdate({_id:id,rol:user},{$set:{activo:false}});
   
	return 'Repartidor Elimindado';
};

/*region Vendedor */
const crearVendedor = async(root, params, context, info) => {

	const newCuenta = await VendedorModel.create(params.data).catch( e => {throw new Error('Ocurrio un problema al crear el Permiso');});

	if (!newCuenta) throw new Error('No se creo el Permiso');

	return newPedido;
};

const actualizarVendedor = async(root, params, context, info) =>{
	const {id, data} = params;
	const {user} = context;
	const actualizarVendedor = await VendedorModel.findOneAndUpdate({_id:id,rol:user._id},{$set:{...data}}, {new:true});
	return actualizarVendedor.toObject();
};

const eliminarVendedor = async(root, params, context, info)=>{
	const {id, data} = params;
	const {pedido} = context;
	await VendedorModel.findOneAndUpdate({_id:id,rol:user},{$set:{activo:false}});
   
	return 'Repartidor Elimindado';
};


module.exports = {
    crearPropuesta,
    actualizarPropuesta,
    eliminarPropuesta,
    crearVenta,
    actualizarVenta,
    eliminarVenta,
    crearHistorial,
    eliminarHistorial,
    crearCliente,
    actualizarCliente,
    eliminarCliente,
    crearRepartidor,
    actualizarRepartidor,
	eliminarRepartidor,
	
	crearCuenta,
	actualizarCuenta,
	eliminarCuenta,

	crearPedido,
	actualizarPedido,
	eliminarPedido,

	crearPermiso,
	actualizarPermiso,
	eliminarPermiso,

	crearVendedor,
	actualizarVendedor,
	eliminarVendedor,

	crearRol,
	actualizarRol,
	eliminarRol
}