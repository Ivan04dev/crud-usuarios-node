import { Usuario } from "../models/Usuario.js";

const paginaInicio = (req, res) => {
    res.render('inicio', {
        pagina: 'Inicio'
    });
}

const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    })
}

const paginaUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll();
    // console.log(usuarios)
    res.render('usuarios', {
        pagina: 'Usuarios',
        usuarios
    })
}

const paginaUpdateUsuario = async (req, res) => {
    const { usuario } = req.params;
    // const { id } = usuario;
    try {
        const resultado = await Usuario.findOne( { where : { id: usuario} });
        console.log(resultado)
        res.render('usuarioUpdate', {
            pagina: 'Actualizar Usuario',
            resultado
        })
    } catch (error) {
        console.log(error)
    }
    
}

const paginaDeleteUsuario = async (req, res) => {
    // const usuario = await Usuario.findOne()
    // console.log(usuarios)
    res.render('usuarioDelete', {
        // usuario
    })
}

export {
    paginaInicio, 
    paginaNosotros,
    paginaUsuarios, 
    paginaUpdateUsuario,
    paginaDeleteUsuario
}