const Testimonials = () => (
    <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonios</h2>
        <div className="flex flex-wrap justify-center gap-6">
            {/* Ejemplo de un testimonio */}
            <div className="max-w-sm bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-600">"Desde que renové mi sala con productos de Hiru, todos mis amigos no dejan de preguntarme dónde los compré. ¡Increíble calidad y diseño!"</p>
                <div className="mt-4">
                    <p className="font-semibold">Ana Gómez</p>
                    <p className="text-sm text-gray-400">Cliente Satisfecha</p>
                </div>
            </div>
            <div className="max-w-sm bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-600">"La atención al detalle y el servicio al cliente de Hiru hicieron toda la diferencia. ¡Recomendado!"</p>
                <div className="mt-4">
                    <p className="font-semibold">Luis Fernández</p>
                    <p className="text-sm text-gray-400">Entusiasta del Diseño</p>
                </div>
            </div>
            <div className="max-w-sm bg-white shadow-lg rounded-lg p-6">
                <p className="text-gray-600">"Elegir articulos de Hiru, te garantiza tener una buena reputación como decorador de interiores"</p>
                <div className="mt-4">
                    <p className="font-semibold">Pedro García</p>
                    <p className="text-sm text-gray-400">Decorador de interiores</p>
                </div>
            </div>
        </div>
    </div>
);
export default Testimonials;
