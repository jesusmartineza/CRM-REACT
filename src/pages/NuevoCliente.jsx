//Importaciones de terceros
import { Form, useNavigate, useActionData } from 'react-router-dom';
//Importaciones de componentes
import { Formulario } from '../components/Formulario';
import { Error } from '../components/Error';

//Para los formularios en la libraria react-router-dom existe un componente llamado Form el cual nos ayudara a tener un mejor formulario ya que tambien haremos uso de una funcion conocida como action pero con la libreria y usandola como una funcion solo debemos declarar el metodo en el form y listo la funcion action sera detectada por el componente Form y sin un onClick tendremos esa funcionalidad de enviar o hacer uso del boton que enviara los datos el formulario

//* Nota los Actions se usan para procesar la entrada de datos en un componente Form

export async function action({ request }) {
	const formData = await request.formData();

	const datos = Object.fromEntries(formData);

	const email = formData.get('email');

	//Validacion de los campos del formulario
	const errores = [];
	if (Object.values(datos).includes('')) {
		errores.push('Todos los campos son obligatorios');
	}

	//Esta variable llamada regex sirve para verificar que se escriba bien un email y que es campo pase correctamente en caso de que no pues no sera valido
	let regex = new RegExp(
		"([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
	);

	if (!regex.test(email)) {
		errores.push('El email no es valido');
	}

	//Retornar datos si hay errores
	if (Object.keys(errores).length) {
		return errores;
	}
}

export const NuevoCliente = () => {
	const navigate = useNavigate();
	const errores = useActionData();

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
				{errores?.length &&
					errores.map((error, i) => <Error key={i}>{error}</Error>)}

				<Form method='POST' noValidate>
					<Formulario />

					<input
						type='submit'
						className='mt-5 p-2 w-full bg-emerald-800 font-bold text-white text-lg'
						value='Registrar Cliente'
					/>
				</Form>
			</div>
		</>
	);
};
