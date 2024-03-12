import React from 'react';

const BlogCard = ({ title, summary, imageUrl, blogUrl }) => {
    const handleClick = () => {
        window.location.href = blogUrl;
    };

    return (
        <div className="cursor-pointer bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300 ease-in-out" onClick={handleClick}>
            <img src={imageUrl} alt={title} className="w-full h-64 object-contain object-center rounded-md mb-4"/>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{summary}</p>
        </div>
    );
};

export default BlogCard;
