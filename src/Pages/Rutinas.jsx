import { CheckCircleIcon, PencilIcon, PlusIcon } from "@heroicons/react/16/solid"
import { Layout } from "../Components/Layout"

const Rutinas = () => {
  const rutinas = [
    { nombre: 'Rutina hipertrofia 1', fecha: '02/10/24', creador: 'Benja', actual: true },
    { nombre: 'Rutina fuerza 1', fecha: '01/10/24', creador: 'Juan', actual: false },
  ]

  return (
    <Layout>
      <section className="mb-4 flex items-center justify-between p-2">
        <h2 className="text-lg text-gray-700 font-bold leading-none">Mis rutinas</h2>
        <button className="px-3  py-2 text-sm bg-orange-400 text-white rounded-lg flex items-center gap-2">
          <PlusIcon className="h-5 w-5" />
          Nueva
        </button>
      </section>
      <ul className="flex flex-col gap-4">
        {rutinas.map((rutina, index) => (
          <li key={index} className="bg-neutral-100 p-4 rounded-lg flex flex-col gap-2 text-gray-600">
            <div className="flex justify-between items-center">
              <p className="text-lg font-medium">{rutina.nombre}</p>
              <button className="hover:bg-neutral-200 rounded-full p-1">
                <PencilIcon className="h-5 w-5" />
              </button>
            </div>
            <div className="text-sm flex justify-between items-end">
              <div>
                <p> Fecha: <strong>{rutina.fecha}</strong> </p>
                <p> Creador: <strong>{rutina.creador}</strong> </p>
              </div>
              <p className="flex items-center gap-0.5">
                {rutina.actual && <CheckCircleIcon className="h-4 w-4 text-emerald-500" />}
                {rutina.actual ? 'Actual' : ''}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export { Rutinas }
