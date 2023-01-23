//Importaciones de react
import React from 'react';
import ReactDOM from 'react-dom/client';
//Importaciones de css
import './index.css';
//Importaciones de Paquetes de terceros
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//Importaciones de componentes
import { Layout } from './components/Layout';
//Importaciones de paginas
import { NuevoCliente } from './pages/NuevoCliente';
import { Index } from './pages/Index';

//createBrowserRouter = un contenedor para manejar las rutas por medio de un arreglo de objetos de las rutas
//router = el arreglo con las rutas
//path = ruta
//element = lo que se va a renderizar en la ruta correspondiente
//children = son rutas hijas o componentes
//index = lo que se vera solamente en la pagina principal o de inicio

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Index />,
			},
			{
				path: '/clientes/nuevo',
				element: <NuevoCliente />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);