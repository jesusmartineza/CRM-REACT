export const Cliente = ({ cliente }) => {
	const { nombre, email, empresa, telefono, id } = cliente;

	return (
		<>
			<tr className='border-b'>
				<td className='p-6 space-y-2'>
					<p className='text-2xl text-gray-800'>{nombre}</p>
					<p>{empresa}</p>
				</td>
				<td className='p-6'>
					<p className='text-gray-600'>
						{' '}
						<span className='text-gray-800 uppercase font-bold'>Email: </span>
						{email}
					</p>
					<p className='text-gray-600'>
						{' '}
						<span className='text-gray-800 uppercase font-bold'>Tel: </span>
						{telefono}
					</p>
				</td>

				<td className='p-6 flex gap-4 '>
					<button
						type='button'
						className='text-emerald-600 hover:text-emerald-700 uppercase font-bold text-xs'
					>
						Editar
					</button>
					<button
						type='button'
						className='text-red-600 hover:text-red-700 uppercase font-bold text-xs'
					>
						Eliminar
					</button>
				</td>
			</tr>
		</>
	);
};
