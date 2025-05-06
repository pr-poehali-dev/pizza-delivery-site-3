
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-50 to-orange-100 overflow-hidden">
      <div className="container px-4 mx-auto">
        <div className="grid items-center py-12 md:py-20 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Доставка пиццы на дом —
              <span className="block text-orange-500">Быстро и вкусно!</span>
            </h1>
            <p className="max-w-[600px] text-gray-600 md:text-lg">
              Наслаждайтесь любимыми итальянскими блюдами, не выходя из дома. Мы доставим горячую, 
              только что приготовленную пиццу к вашему столу за 30 минут.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button asChild size="lg" className="text-lg px-8 bg-orange-500 hover:bg-orange-600">
                <Link to="/menu">Заказать пиццу</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link to="/promotions">Акции и скидки</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[450px] overflow-hidden rounded-xl shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Аппетитная пицца" 
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
