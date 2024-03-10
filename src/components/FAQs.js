import React, { useState } from 'react';

const FAQs = () => {
    const [openFAQ, setOpenFAQ] = useState(null); // ID de la FAQ abierta, null si ninguna está abierta

    const toggleFAQ = (index) => {
        if (openFAQ === index) {
            setOpenFAQ(null); // Si se hace clic en la FAQ ya abierta, se cierra
        } else {
            setOpenFAQ(index); // De lo contrario, se abre la FAQ seleccionada
        }
    };

    const faqs = [
        {
            question: "¿Cómo seleccionan los productos que ofrecen?",
            answer: "Nuestro equipo de expertos en diseño de interiores busca constantemente los mejores y más innovadores productos..."
        },
        {
            question: "¿Ofrecen envíos internacionales?",
            answer: "Sí, ofrecemos envíos a numerosos países alrededor del mundo. Los costos de envío varían según el destino."
        },
        {
            question: "¿Puedo devolver un producto si no estoy satisfecho?",
            answer: "Por supuesto, los clientes pueden devolver productos dentro de los 30 días posteriores a la recepción, siempre y cuando se encuentren en su estado original."
        },
        {
            question: "¿Cómo puedo pagar mis compras?",
            answer: "Aceptamos varias formas de pago, incluyendo tarjetas de crédito, PayPal, y transferencias bancarias."
        },
        // Agrega más preguntas y respuestas aquí
    ];

    return (
        <div className="container mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
            <dl className="space-y-4">
                {faqs.map((faq, index) => (
                    <React.Fragment key={index}>
                        <dt className="text-lg font-semibold flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                            {faq.question}
                            <span className={`transform transition-transform ${openFAQ === index ? 'rotate-180' : ''}`}>&#9660;</span> {/* Flechita */}
                        </dt>
                        <dd className={`text-gray-600 transition-opacity duration-500 ease-in-out ${openFAQ === index ? 'opacity-100' : 'opacity-0 h-0 overflow-hidden'}`}>
                            {faq.answer}
                        </dd>
                    </React.Fragment>
                ))}
            </dl>
        </div>
    );
};

export default FAQs;
