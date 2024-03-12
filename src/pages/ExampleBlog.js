import React from 'react';

const ExampleBlog = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-10">5 Tendencias de Diseño de Interiores para este Año</h1>
      
      <div className="flex flex-wrap items-center mb-12">
        <div className="w-full md:w-1/2 md:pr-8">
          <img src="/salon.jpg" alt="Tendencias de Diseño de Interiores" className="w-full h-auto rounded-lg mb-8 shadow-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">1. Tonos Terrestres</h2>
          <p className="text-gray-700">
            La paleta de colores se inspira directamente de la naturaleza, incorporando tonos verdes, marrones, y azules para crear ambientes serenos que nos conectan con el mundo exterior. Estos colores, además de ser visualmente relajantes, promueven una sensación de bienestar y tranquilidad en el hogar. La incorporación de plantas interiores y elementos naturales como madera y piedra complementan esta tendencia, fortaleciendo la conexión con el entorno natural.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center mb-12">
        <div className="w-full md:w-1/2 md:order-2 md:pl-8">
          <h2 className="text-3xl font-bold mb-6">2. Espacios Multifuncionales</h2>
          <p className="text-gray-700">
            La pandemia ha redefinido nuestra percepción del hogar, transformándolo en un espacio polivalente donde la vida personal y profesional se entremezclan. Los diseñadores están respondiendo con soluciones creativas para espacios limitados, integrando mobiliario adaptable y zonas modulares que pueden servir como oficina, área de descanso o centro de entretenimiento según se requiera. Esta tendencia hacia la flexibilidad y adaptabilidad es clave para satisfacer las necesidades cambiantes de los habitantes modernos.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:order-1">
          <img src="/espacios-multifuncionales.jpg" alt="Espacios Multifuncionales" className="w-full h-auto rounded-lg mb-8 shadow-lg" />
        </div>
      </div>

      <div className="flex flex-wrap items-center mb-12">
        <div className="w-full md:w-1/2 md:pr-8">
          <img src="/sostenibilidad.jpg" alt="Sostenibilidad" className="w-full h-auto rounded-lg mb-8 shadow-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">3. Sostenibilidad</h2>
          <p className="text-gray-700">
            Ahora más que nunca, hay un énfasis en elegir materiales y productos que sean tanto sostenibles como duraderos. El diseño sostenible se centra en la reducción del desperdicio, la elección de materiales reciclados o de bajo impacto y la inversión en calidad y tiempo. Los consumidores están cada vez más informados y optan por marcas que priorizan la ética ambiental, impulsando así un cambio positivo en la industria del diseño de interiores.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center mb-12">
        <div className="w-full md:w-1/2 md:order-2 md:pl-8">
          <h2 className="text-3xl font-bold mb-6">4. Texturas Ricas y Táctiles</h2>
          <p className="text-gray-700">
            En un mundo inclinado hacia lo digital, las texturas ricas y táctiles ganan protagonismo como una forma de añadir dimensión y calidez a nuestros espacios. Tapices gruesos, tejidos suaves y superficies con relieve invitan al tacto y crean un ambiente acogedor. Estas texturas no solo enriquecen visualmente el espacio, sino que también mejoran la experiencia sensorial del mismo, haciendo que los interiores sean más invitantes y confortables.
          </p>
        </div>
        <div className="w-full md:w-1/2 md:order-1">
          <img src="/texturas-ricas.webp" alt="Texturas Ricas y Táctiles" className="w-full h-auto rounded-lg mb-8 shadow-lg" />
        </div>
      </div>

      <div className="flex flex-wrap items-center mb-12">
        <div className="w-full md:w-1/2 md:pr-8">
          <img src="/tecnologia-integrada.jpg" alt="Tecnología Integrada" className="w-full h-auto rounded-lg mb-8 shadow-lg" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">5. Tecnología Integrada</h2>
          <p className="text-gray-700">
            La integración de tecnología en el diseño de interiores se ha vuelto imperativa para satisfacer las demandas de conveniencia y eficiencia de la vida moderna. Soluciones inteligentes para el hogar, como la iluminación automatizada, los termostatos inteligentes y los sistemas de seguridad, se integran de manera que complementan el diseño interior sin perturbar la estética. La tecnología no solo mejora la funcionalidad del hogar, sino que también puede contribuir a la sostenibilidad mediante la optimización del uso de recursos.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExampleBlog;
