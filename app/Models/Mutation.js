const AuthorModel = require('../models/Author');
const authenticate = require('../utils/authenticate');
const PostModel = require('../models/Post');
const storage = require('../utils/storege');

const createAuthor = async(root, params, context, info) => {

	const newAuthor = await AuthorModel.create(params.data).catch( e => {throw new Error('Ocurrio un problema');});

	if (!newAuthor) throw new Error('No se creo el author');

	return newAuthor;
};

const login = async(root, params, context,info) =>{

	const token = await authenticate(params).catch( e => { throw e;});

	return {
		token,
		message: 'OK'
	};
};

const updateProfile = async(root, params, context, info) =>{
	const {data} = params;
	const {user} = context;
	let Author = await AuthorModel.findById(user._id);
	if(!Author) throw new Error('El author no existe');
	Author = {...Author,...data};
	const updatedAuthor = await Author.save({new :true});
	return updatedAuthor;
};

const deleteProfile = async(root, params, context, info) =>{
	const {user} = context;
	const Author = await AuthorModel.findById({_id:user._id});
	if(!Author) throw new Error('El author no existe');
	Author.is_active = false;
	await Author.save({new:true});

	return 'Usuario eliminado';
};

const createPost = async(root, params, context, info) =>{
	const {user} = context;
	params.data.author = user;
	if(params.data.cover_photo){
		const {createReadStream }= await params.data.cover_photo;
		const stream = createReadStream();
		const {url} = await storage({stream});

		params.data.cover_photo = url;
	}

	const post = await PostModel.create(params.data)
		.catch(e => {throw new Error('Error al crear el post');});
	const newPost = PostModel.findById(post._id).populate('author');
	console.log(post._author);
	await AuthorModel.findOneAndUpdate({_id:user._id},{$push:{posts:post._id}});


	return newPost;
};

const updatePost = async(root, params, context, info) =>{
	const {id, data} = params;
	const {user} = context;
	const updatePost = await PostModel.findOneAndUpdate({_id:id,author:user._id},{$set:{...data}}, {new:true});
	return updatePost.toObject();
};

const deletePost = async(root, params, context, info)=>{
	const {id, data} = params;
	const {user} = context;
	await PostModel.findOneAndUpdate({_id:id,author:user},{$set:{is_active:false}});
   
	return 'Post Elimindado';
};

module.exports ={
	createAuthor,
	login,
	updateProfile,
	deleteProfile,
	createPost,
	updatePost,
	deletePost
};