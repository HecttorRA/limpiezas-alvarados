
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:tuempresa@gmail.com?subject=Solicitud de limpieza: ${formData.service}&body=Nombre: ${formData.name}%0D%0ACorreo: ${formData.email}%0D%0AServicio requerido: ${formData.service}`;
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="bg-blue-600 text-white p-6 text-center text-xl font-bold">
        Limpieza Pro - Muebles Impecables
      </header>

      <section className="text-center py-16 px-6">
        <h1 className="text-4xl font-extrabold text-gray-800">Transforma tus muebles con nuestro servicio profesional</h1>
        <p className="text-gray-600 mt-4 text-lg">Eliminamos manchas, olores y bacterias para dejar tu hogar impecable.</p>
      </section>

      <section className="bg-white py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800">Nuestros Servicios</h2>
        <div className="flex flex-wrap justify-center gap-6 mt-6">
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-80">
            <h3 className="text-xl font-semibold">Limpieza de Sofás</h3>
            <p className="text-gray-600">Eliminamos manchas y olores profundamente. <br /> Precio: $25 por módulo</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-80">
            <h3 className="text-xl font-semibold">Limpieza de Sillas</h3>
            <p className="text-gray-600">Renueva tus sillas con nuestro servicio. <br /> Precio: $7 por silla</p>
          </div>
          <div className="bg-gray-200 p-6 rounded-lg shadow-md w-80">
            <h3 className="text-xl font-semibold">Alfombras y Tapetes</h3>
            <p className="text-gray-600">Eliminamos ácaros y suciedad profunda. <br /> Precio: $3 por m²</p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-800 mb-4">Materiales y Equipos</h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Utilizamos máquinas de extracción tipo Bissell y Kärcher, detergentes biodegradables, cepillos suaves y productos antiácaros para garantizar una limpieza profunda y segura para tu familia.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 bg-blue-50">
        <h2 className="text-3xl font-bold text-center text-gray-800">Solicita tu Servicio</h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-6 bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
            required
          />
          <select
            name="service"
            onChange={handleChange}
            className="w-full p-3 border rounded mb-4"
            required
          >
            <option value="">Selecciona un servicio</option>
            <option value="Limpieza de Sofás">Limpieza de Sofás - $25 por módulo</option>
            <option value="Limpieza de Sillas">Limpieza de Sillas - $7 por silla</option>
            <option value="Alfombras y Tapetes">Alfombras y Tapetes - $3 por m²</option>
          </select>
          <button className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-700 transition">
            Enviar Solicitud
          </button>
        </form>
      </section>

      <footer className="bg-blue-600 text-white text-center p-4">
        &copy; 2025 Limpieza Pro | Todos los derechos reservados
      </footer>
    </div>
  );
}
