import { useState } from 'react';

const Home = () => {
  const [selectedDay, setSelectedDay] = useState('1');

  const Rutina = {
    '1': [{ nombre: 'Extensión de triceps', series: 3, repeticiones: 4 }, { nombre: 'Curl de bíceps', series: 3, repeticiones: 4 }],
    '2': [{ nombre: 'Press de banca', series: 3, repeticiones: 4 }, { nombre: 'Sentadillas', series: 3, repeticiones: 4 }],
    '3': [{ nombre: 'Dominadas', series: 3, repeticiones: 4 }, { nombre: 'Flexiones', series: 3, repeticiones: 4 }],
    '4': [{ nombre: 'Elevaciones laterales', series: 3, repeticiones: 4 }, { nombre: 'Peso muerto', series: 3, repeticiones: 4 }],
    '5': [{ nombre: 'Remo con barra', series: 3, repeticiones: 4 }, { nombre: 'Press militar', series: 3, repeticiones: 4 }]
  };

  const dias = Object.keys(Rutina);

  return (
    <div className="p-4">
      <section className="mb-4 flex justify-between p-4 bg-neutral-100 rounded-lg">
        <div>
          <p className="text-lg text-gray-700 font-bold">Hola <span className="text-orange-500">Lucas</span>, listo para entrenar?</p>
          <p className="text-sm text-gray-400">Empecemos!</p>
        </div>
      </section>
      <section className="">
        <div className="flex justify-between items-end mb-3 px-1">
          <h2 className="font-semibold text-gray-600">Tu rutina</h2>
          <select className="px-2 text-sm outline-none text-indigo-500 font-medium" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
            {dias.map((dia, index) => (
              <option key={index} value={dia}>Día {dia}</option>
            ))}
          </select>
        </div>
        <ul className='flex flex-col gap-4'>
          {Rutina[selectedDay].map((ejercicio, index) => (
            <li key={index} className="bg-neutral-100 p-4 rounded-lg flex flex-col gap-2 text-gray-600">
              <p className="text-md font-medium">{ejercicio.nombre}</p>
              <div className="flex justify-between text-sm">
                <p>
                  Series: <strong>{ejercicio.series}</strong>
                </p>
                <p>
                  Repeticiones: <strong>{ejercicio.repeticiones}</strong>
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export { Home }
