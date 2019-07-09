const PermisoModel = require('../models/Permiso');
const RolModel = require('../models/Rol');
const CuentaModel = require('../models/Cuenta');
const PedidoModel = require('../models/Pedido');
const VendedorModel = require('../models/Vendedor');

const listPermisos = async(root, params, context, info) => {
	const permisos = await PermisoModel.find({});    
	return permisos;
};

const singlePermiso = async(root, params, context, info) => {

	const permiso = await PermisoModel.findById(params.id);
	if(!permiso) throw new Error('Permiso no Existe');

	return permiso.toObject();
};

const listRoles = async(root, params, context, info) => {
	const roles = await RolModel.find({});    
	return roles;
};

const singleRol = async(root, params, context, info) => {

	const rol = await RolModel.findById(params.id);
	if(!rol) throw new Error('Rol no Existe');

	return rol.toObject();
};

const listCuentas = async(root, params, context, info) => {
	const cuentas = await CuentaModel.find({});    
	return permisos;
};

const singleCuenta = async(root, params, context, info) => {

	const cuenta= await CuentaModel.findById(params.id);
	if(!cuenta) throw new Error('Cuenta no Existe');

	return cuenta.toObject();
};

const listPedidos = async(root, params, context, info) => {
	const pedidos = await PedidoModel.find({});    
	return pedidos;
};

const singlePedido = async(root, params, context, info) => {

	const pedido = await PedidoModel.findById(params.id);
	if(!pedido) throw new Error('Pedido no Existe');

	return pedido.toObject();
};

const listsVendedores = async(root, params, context, info) => {
	const vendedores = await VendedorModel.find({});    
	return vendedores;
};

const singleVendedor = async(root, params, context, info) => {

	const vendedor = await VendedorModel.findById(params.id);
	if(!vendedor) throw new Error('Vendedor no Existe');

	return vendedor.toObject();
};

module.exports = {
	listPermisos,
	singlePermiso,
	listCuentas,
	singleCuenta,
	listPedidos,
	singlePedido,
	listRoles,
	singleRol,
	listsVendedores,
	singleVendedor	
};