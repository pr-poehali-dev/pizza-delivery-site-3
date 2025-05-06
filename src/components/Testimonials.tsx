
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import Icon from '@/components/ui/icon';

type TestimonialProps = {
  text: string;
  author: string;
  rating: number;
};

const TestimonialCard: React.FC<TestimonialProps> = ({ text, author, rating }) => {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <div className="flex mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <Icon 
              key={i} 
              name="Star" 
              className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <blockquote className="mb-4 italic text-gray-700">"{text}"</blockquote>
        <p className="font-medium text-right">— {author}</p>
      </CardContent>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Лучшая пицца в городе! Доставили горячей, с хрустящей корочкой, как я люблю. Определенно буду заказывать еще.",
      author: "Алексей М.",
      rating: 5
    },
    {
      text: "Очень удобный сайт для заказа. Быстрая доставка и вкусная пицца. Особенно понравилась 'Пепперони'!",
      author: "Мария К.",
      rating: 5
    },
    {
      text: "Заказывали большую компанией на день рождения. Все были в восторге! Пицца приехала вовремя и была очень вкусной.",
      author: "Дмитрий П.",
      rating: 4
    },
    {
      text: "Впервые попробовала их фирменную пиццу и осталась очень довольна. Тесто тонкое, начинки много. Рекомендую!",
      author: "Елена С.",
      rating: 5
    },
    {
      text: "Удобная доставка, можно отслеживать заказ. Пицца всегда приезжает горячей. Любимая пиццерия нашей семьи.",
      author: "Сергей В.",
      rating: 4
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-bold">Что говорят наши клиенты</h2>
          <p className="mt-2 text-gray-600">Отзывы от довольных любителей пиццы</p>
        </div>
        
        <Carousel className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                <div className="h-full p-1">
                  <TestimonialCard {...testimonial} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center mt-6">
            <CarouselPrevious className="static relative translate-y-0 mr-2" />
            <CarouselNext className="static relative translate-y-0" />
          </div>
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
