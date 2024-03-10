const MeetOurTeam = () => {
    const teamMembers = [
        {
            name: "María José",
            role: "Fundadora",
            description: "Visionaria del diseño de interiores, comprometida con la creación de espacios únicos.",
            imageUrl: "https://randomuser.me/api/portraits/women/68.jpg" // URL de imagen actualizada
        },
        {
            name: "Manuel",
            role: "Community Manager",
            description: "Conectando nuestra marca con la comunidad, llevando nuestras historias a cada rincón del mundo.",
            imageUrl: "https://randomuser.me/api/portraits/men/32.jpg" // URL de imagen actualizada
        },
        {
            name: "David",
            role: "Diseñador",
            description: "Creador de conceptos innovadores y estéticas inolvidables en el mundo del diseño de interiores.",
            imageUrl: "https://randomuser.me/api/portraits/men/83.jpg" // URL de imagen actualizada
        },
        {
            name: "Manolo",
            role: "Atención al Cliente",
            description: "Siempre listo para ayudar, garantizando la mejor experiencia para nuestros clientes.",
            imageUrl: "https://randomuser.me/api/portraits/men/46.jpg" // URL de imagen actualizada
        },
        {
            name: "Javier",
            role: "Estilista",
            description: "Experto en transformar espacios comunes en ambientes extraordinarios con su toque único.",
            imageUrl: "https://randomuser.me/api/portraits/men/90.jpg" // URL de imagen actualizada
        },
    ];

    return (
        <div className="py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Conoce a Nuestro Equipo</h2>
                <div className="flex flex-wrap justify-center gap-4">
                    {teamMembers.map((member, index) => (
                        <div key={index} className="max-w-xs bg-white shadow-lg rounded-lg p-4 text-center">
                            <img src={member.imageUrl} alt={member.name} className="w-32 h-32 object-cover rounded-full mx-auto"/>
                            <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                            <p className="text-sm text-gray-600">{member.role}</p>
                            <p className="text-gray-500 mt-2">{member.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MeetOurTeam;
