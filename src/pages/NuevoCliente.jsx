//Importaciones de terceros
import { useNavigate } from 'react-router-dom';
//Importaciones de componentes
import { Formulario } from '../components/Formulario';

export const NuevoCliente = () => {
	const navigate = useNavigate();

	return (
		<>
			<h1 className='font-black text-4xl text-emerald-900'>Nuevo Cliente</h1>
			<p className='mt-3'>LLena todos los campos para registrar un nuevo cliente</p>

			<div className='flex justify-end'>
				<button
					className='bg-emerald-800 text-white px-3 py-1 font-bold uppercase'
					onClick={() => navigate(-1)}
				>
					Volver
				</button>
			</div>
			<div className='bg-white shadow rounded-md md:w-3/4 mx-auto px-5 py-10 mt-20'>
				<form action=''>
					<Formulario />

					<input
						type='submit'
						className='mt-5 w-full bg-emerald-800 font-bold text-white text-lg'
						value='Regsitrar Cliente'
					/>
				</form>
			</div>
		</>
	);
};
