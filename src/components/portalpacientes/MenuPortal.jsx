
import { FaWhatsapp } from 'react-icons/fa';
import { IoCalendarNumber, IoCloseCircle, IoSearchSharp } from 'react-icons/io5';
import { FaRegTrashAlt } from "react-icons/fa";

export default function MenuPortal({ setPortal, portal }) {
    

    return (
        <div>
            <p className="text-[50px] text-[#126459] font-base leading-[55px]">Disfrutá todos los servicios del </p>
            <p className="text-[50px] text-[#126459] font-bold mb-6">
                Portal Paciente
            </p>
            <hr className="my-8 " />
            <div className='flex items-center'>
                <p className='rounded-full w-10 h-10 text-center pt-1 font-bold text-white bg-[#126459] text-2xl'>3</p>
                <p className='ml-4 mr-10 text-xl font-bold text-neutral-500'>Turnos pendientes</p>
                <button className="rounded-lg bg-[#126459] text-white text-medium py-2 px-4">Ver detalles</button>
            </div>
            <div className='overflow-scroll rounded-lg my-6'>
                <div className='w-full'>
                    <table className='table-auto md:min-w-full'>
                        <thead className='text-left bg-gray-100'>
                            <tr className='text-neutral-500'>
                                <th className='p-2 md:p-5 mr-10 whitespace-nowrap'>N°</th>
                                <th className='p-2 md:p-5 mr-10 whitespace-nowrap'>Día</th>
                                <th className='p-2 md:p-5 mr-10 whitespace-nowrap'>Horario</th>
                                <th className='p-2 md:p-5 whitespace-nowrap'>Médico tratante</th>
                                <th className='p-2 md:p-5 whitespace-nowrap'>Especialidad</th>
                                <th className='p-2 md:p-5 whitespace-nowrap'>Dirección de atención</th>
                                <th className='p-2 md:p-5 '>Cancelar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className='bg-white'>
                                <td className='p-2 md:p-5 mr-10'>1</td>
                                <td className='p-2 md:p-5'>Lunes</td>
                                <td className='p-2 md:p-5 whitespace-nowrap'>09:00 - 10:00</td>
                                <td className='p-2 md:p-5 whitespace-nowrap'>Dr. Juan Perez</td>
                                <td className='p-2 md:p-5'>Cardiólogo</td>
                                <td className='p-2 md:p-5'>Calle 123 # 1-5</td>
                                <td className='p-2 md:p-5 text-red-700 text-3xl text-center'><IoCloseCircle /></td>
                            </tr>
                            <tr className='bg-[#c4e9e4]'>
                                <td className='p-2 md:p-5 mr-10'>2</td>
                                <td className='p-2 md:p-5'>Lunes</td>
                                <td className='p-2 md:p-5 whitespace-nowrap'>09:00 - 10:00</td>
                                <td className='p-2 md:p-5 whitespace-nowrap'>Dr. Juan Perez</td>
                                <td className='p-2 md:p-5'>Cardiólogo</td>
                                <td className='p-2 md:p-5'>Calle 123 # 1-5</td>
                                <td className='p-2 md:p-5 text-red-700 text-3xl text-center'><IoCloseCircle /></td>
                            </tr>
                            <tr className='bg-white'>
                                <td className='p-2 md:p-5 mr-10'>3</td>
                                <td className='p-2 md:p-5'>Lunes</td>
                                <td className='p-2 md:p-5 whitespace-nowrap'>09:00 - 10:00</td>
                                <td className='p-2 md:p-5 whitespace-nowrap'>Dr. Juan Perez</td>
                                <td className='p-2 md:p-5'>Cardiólogo</td>
                                <td className='p-2 md:p-5'>Calle 123 # 1-5</td>
                                <td className='p-2 md:p-5 text-red-700 text-3xl text-center'><IoCloseCircle /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button onClick={() => setPortal("TurnosPortal")} className='boton-menu-portal'>
                <IoCalendarNumber className='text-7xl mr-6' />
                <div className='text-left'>
                    <p className='text-2xl md:text-4xl font-semibold '>Gestión de Turnos</p>
                    <p>Aqui podes gestionar tus turnos de manera inmediata y concretar una cita con el especialista indicado</p>
                </div>
            </button>
            <button className='boton-menu-portal mt-6'>
                <IoSearchSharp className='text-7xl mr-6' />
                <div className='text-left'>
                    <p className='text-2xl md:text-4xl font-semibold '>Buscar especialista</p>
                    <p>Encuentre al médico correcto para resolver sus consultas con la mejor atención </p>
                </div>
            </button>
            <button className='boton-menu-portal mt-6'>
                <FaWhatsapp className='text-7xl mr-6 ' />
                <div className='text-left'>
                    <p className='text-2xl md:text-4xl font-semibold '>Atención Telefónica</p>
                    <p>Donde puedes realizar una llamada telefônica con el especialista indicado</p>
                </div>
            </button>
        </div>
    )
}


