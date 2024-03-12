import React, { useState } from 'react';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        reason: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        alert('Formulario enviado. Gracias por contactarnos.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            reason: '',
            message: ''
        });
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-6">Contáctanos</h1>
            <form className="w-full max-w-lg mx-auto" onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                        Nombre Completo
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                        Correo Electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
                        Número de Teléfono
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="reason" className="block text-gray-700 text-sm font-bold mb-2">
                        Motivo de Contacto
                    </label>
                    <select
                        id="reason"
                        name="reason"
                        value={formData.reason}
                        onChange={handleChange}
                        className="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        required
                    >
                        <option value="">Selecciona un motivo</option>
                        <option value="consulta">Consulta General</option>
                        <option value="venta">Información de Ventas</option>
                        <option value="soporte">Soporte Técnico</option>
                    </select>
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                        Mensaje
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                        required
                    />
                </div>
                <div className="flex items-center justify-between">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Enviar
                    </button>
                </div>
            </form>
            <div className="mt-6 text-sm text-gray-700">
                <h3 className="font-semibold">Protección de Datos Personales</h3>
                <p className="mt-2">
                    Tus datos personales serán utilizados únicamente para procesar tus solicitudes, proporcionarte nuestros servicios y, si lo deseas, enviarte comunicaciones sobre novedades o promociones relacionadas con nuestros productos y servicios.
                </p>
                <p className="mt-2">
                    Nos comprometemos a no compartir tu información con terceros y a mantenerla segura conforme a las normativas vigentes sobre protección de datos. En cualquier momento, puedes ejercer tus derechos de acceso, rectificación, cancelación y oposición de tus datos.
                </p>
                <p className="mt-2">
                    Al enviar este formulario, confirmas que has leído y aceptas nuestra <a href="/politica-de-privacidad" className="text-blue-500 hover:text-blue-700">política de privacidad</a>.
                </p>
            </div>

        </div>
    );
};

export default ContactUs;
