//Importaciones de paquetes de terceros
import { useLoaderData } from 'react-router-dom';
//Importaciones de componentes
import { Cliente } from '../components/Cliente';
//Haciendo uso de este hook useLoaderData podemos extraer o hacer uso del loader y su contenido

//loader() actua de forma similar como un useEffect que se cargara siempre y cuando el componente ya este listo, tambien se debe escribir en minisculas y siempre debe retornar algo en el return(un string, array, objecto, etc), para usarlo debemos aparte de exportalo es importalo donde estemos definiendo las rutas y agregarlo como una porpiedad mas.
export function loader() {
	const clientes = [
		{
			id: 1,
			nombre: 'Juan',
			telefono: 102013313,
			email: 'juan@juan.com',
			empresa: 'Codigo Con Juan',
		},
		{
			id: 2,
			nombre: 'Karen',
			telefono: 138198313,
			email: 'karen@juan.com',
			empresa: 'Codigo Con Juan',
		},
		{
			id: 3,
			nombre: 'Josue',
			telefono: 31983913,
			email: 'josue@juan.com',
			empresa: 'Codigo Con Juan',
		},
		{
			id: 4,
			nombre: 'Miguel',
			telefono: 319381983,
			email: 'miguel@juan.com',
			empresa: 'Codigo Con Juan',
		},
		{
			id: 5,
			nombre: 'Pedro',
			telefono: 1398198938,
			email: 'pedro@juan.com',
			empresa: 'Codigo Con Juan',
		},
	];
	return clientes;
}

export const Index = () => {
	const clientes = useLoaderData();

	return (
		<>
			<h1 className='font-black text-4xl text-emerald-900'>Clientes</h1>
			<p className='mt-3'>Administra tus Clientes</p>

			{/* Creamos la tabla donde se mostraran los datos  */}
			{clientes.length ? (
				<table className='w-full bg-white shadow mt-5 table-auto'>
					<thead className='bg-emerald-900 text-white'>
						<tr>
							<th className='p-2'>Clientes</th>
							<th className='p-2'>Contacto</th>
							<th className='p-2'>Acciónes</th>
						</tr>
					</thead>
					<tbody>
						{clientes.map((cliente) => (
							<Cliente cliente={cliente} key={cliente.id} />
						))}
					</tbody>
				</table>
			) : (
				<p className='text-center mt-10'>No Hay Clientes Aún</p>
			)}
		</>
	);
};
