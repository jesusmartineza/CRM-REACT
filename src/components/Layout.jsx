import { Link, Outlet, useLocation } from 'react-router-dom';

//Outlet nos ayuda para que los componentes hijos en el main.jsx el parte de children se renderizen donde estableceremos las rutas de nuestra aplicacion o sitio web

export const Layout = () => {
	const location = useLocation();

	return (
		<div className='md:flex md:min-h-screen'>
			<aside className='md:w-1/4 bg-emerald-900 px-5 py-10'>
				<h2 className='text-center text-4xl text-white font-bold'>
					CRM - Clientes
				</h2>
				<nav className='mt-10'>
					<Link
						className={`${
							location.pathname === '/'
								? 'text-emerald-400 border-white border-r-4'
								: 'text-white'
						} text-2xl block hover:text-emerald-400`}
						to='/'
					>
						Clientes
					</Link>
					<Link
						className={`${
							location.pathname === '/clientes/nuevo'
								? 'text-emerald-400 border-white border-r-4'
								: 'text-white'
						} text-2xl block hover:text-emerald-400`}
						to='/clientes/nuevo'
					>
						Nuevo Cliente
					</Link>
				</nav>
			</aside>

			<main className='md:w-3/4 p-10 md:h-screen overflow-scroll bg-gray-200'>
				<Outlet />
			</main>
		</div>
	);
};
