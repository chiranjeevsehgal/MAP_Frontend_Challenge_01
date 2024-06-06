import React, { useEffect, useState, useRef } from 'react';
import cardData from '../data.json';
import Card from '../components/Card';

const Home = () => {
  const [cards, setCards] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    setCards(cardData);
  }, []);

  return (
    <div className="relative flex items-center justify-center w-full h-screen text-gray-900 p-4 md:p-20 rounded-lg bg-gray-100 shadow-lg">
    
      <div className="flex w-full md:w-5/6 overflow-x-auto custom-scroll">
        <div className="flex transition-transform duration-500 mb-2" ref={carouselRef}>
          {cards.map((card, index) => (
            <div key={index} className="flex-shrink-0 w-80 md:w-96 h-full mr-4 md:mr-8 p-2 md:p-4">
              <Card
                imageUrl={card.imageUrl}
                type={card.type}
                title={card.title}
                rating={card.rating}
                description={card.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;