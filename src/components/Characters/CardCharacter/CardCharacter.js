import React from 'react';
import './CardCharacter.css';

const CardCharacter = ({ index, name, img, species, status, type }) => {
  return (
    <div key={index} className="max-w-sm w-1/4 lg:max-w-full lg:flex p-1">
      <div
        className="h-16 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title={name}
      >
        <img src={img} />
      </div>
      <div className="w-full border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <p className="text-sm text-gray-600 flex items-center">
            Status: {status}
          </p>
          <div className="text-gray-900 font-bold text-xl mb-2">{name}</div>
          <p className="text-gray-700 text-base">Estado: {status}</p>
          <p className="text-gray-700 text-base">Especie: {species}</p>
          <p className="text-gray-700 text-base">
            Type: {type ? type : 'Ninguno'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;
