
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

type OfferProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

const OfferCard: React.FC<OfferProps> = ({ title, description, imageUrl, link }) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="h-48 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="p-4">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="p-4 pt-0">
        <Button asChild variant="outline">
          <Link to={link}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const SpecialOffers: React.FC = () => {
  const offers = [
    {
      title: "2 пиццы по цене 1",
      description: "Скидка 100% на вторую пиццу в заказе. Успейте заказать!",
      imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/promotions/two-for-one"
    },
    {
      title: "Пицца недели",
      description: "Каждую неделю новый вкус со скидкой 30%",
      imageUrl: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/promotions/pizza-of-the-week"
    },
    {
      title: "Бесплатная доставка",
      description: "При заказе от 1000 рублей доставка бесплатно",
      imageUrl: "https://images.unsplash.com/photo-1571066811602-716837d681de?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      link: "/promotions/free-delivery"
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Специальные предложения</h2>
          <p className="mt-2 text-gray-600">Вкусные акции и горячие скидки на ваши любимые блюда</p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {offers.map((offer, index) => (
            <OfferCard key={index} {...offer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
