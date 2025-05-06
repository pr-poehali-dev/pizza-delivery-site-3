
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SpecialOffers from '@/components/SpecialOffers';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <section className="py-12 bg-white">
          <div className="container px-4 mx-auto text-center">
            <h2 className="mb-8 text-3xl font-bold">Почему выбирают нас</h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="p-6 transition-all rounded-lg hover:shadow-md">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white bg-orange-500 rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3.7 13.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3L11 12.4V7c0-.6.4-1 1-1s1 .4 1 1v4.6l2.7 2.7c.4.4.4 1 0 1.4z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Быстрая доставка</h3>
                <p className="text-gray-600">Доставим горячую пиццу за 30 минут или вернём деньги</p>
              </div>
              
              <div className="p-6 transition-all rounded-lg hover:shadow-md">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white bg-orange-500 rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4L9 13.2l6.6-6.6L17 8l-7 7z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Свежие ингредиенты</h3>
                <p className="text-gray-600">Используем только свежие и натуральные ингредиенты</p>
              </div>
              
              <div className="p-6 transition-all rounded-lg hover:shadow-md">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white bg-orange-500 rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm3 14.2c-.2.1-.4.2-.6.2-.3 0-.7-.2-.9-.5L10 10.9c-.1-.1-.1-.2-.2-.3V6c0-.6.4-1 1-1s1 .4 1 1v4.2l3 4.5c.3.4.1 1.1-.3 1.5z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Итальянские рецепты</h3>
                <p className="text-gray-600">Готовим по традиционным итальянским рецептам</p>
              </div>
              
              <div className="p-6 transition-all rounded-lg hover:shadow-md">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-4 text-white bg-orange-500 rounded-full">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 12V4h1c.6 0 1-.4 1-1s-.4-1-1-1H7c-.6 0-1 .4-1 1s.4 1 1 1h1v8l-4.7 7c-.2.3-.3.7-.1 1.1.1.4.5.7.9.8l7.9 2c.1 0 .3.1.4.1.4 0 .7-.2.9-.5.3-.5.1-1.1-.3-1.4L9.2 16H12c.6 0 1-.4 1-1s-.4-1-1-1H8V4h8v8c0 .6.4 1 1 1s1-.4 1-1z"></path>
                  </svg>
                </div>
                <h3 className="mb-2 text-xl font-medium">Настоящая печь</h3>
                <p className="text-gray-600">Выпекаем в настоящей дровяной печи</p>
              </div>
            </div>
          </div>
        </section>
        
        <SpecialOffers />
        
        <section className="py-12 bg-orange-50">
          <div className="container px-4 mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold">Новинки месяца</h2>
            <p className="mb-10 text-gray-600">Попробуйте наши новые вкусы и сочетания</p>
            
            <div className="grid gap-6 md:grid-cols-3">
              <div className="overflow-hidden transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1593246049226-ded77bf90326?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Четыре сыра делюкс" 
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-medium">Четыре сыра делюкс</h3>
                  <p className="mb-4 text-gray-600">Моцарелла, горгонзола, пармезан и рикотта на тонком тесте</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-orange-500">от 499 ₽</span>
                    <button className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600">В корзину</button>
                  </div>
                </div>
              </div>
              
              <div className="overflow-hidden transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Барбекю Гриль" 
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-medium">Барбекю Гриль</h3>
                  <p className="mb-4 text-gray-600">Курица, бекон, лук, соус барбекю и моцарелла</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-orange-500">от 549 ₽</span>
                    <button className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600">В корзину</button>
                  </div>
                </div>
              </div>
              
              <div className="overflow-hidden transition-all bg-white rounded-lg shadow-md hover:shadow-lg">
                <div className="h-48 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1564936281291-294551497d81?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80" 
                    alt="Веганская" 
                    className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="mb-2 text-xl font-medium">Веганская</h3>
                  <p className="mb-4 text-gray-600">Овощной микс, грибы, оливки и веганский сыр</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-orange-500">от 489 ₽</span>
                    <button className="px-4 py-2 text-white bg-orange-500 rounded-md hover:bg-orange-600">В корзину</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Testimonials />
        
        <section className="py-12 text-white bg-orange-600">
          <div className="container px-4 mx-auto text-center">
            <h2 className="mb-4 text-3xl font-bold">Закажите прямо сейчас</h2>
            <p className="mb-8 text-orange-100">Доставим вашу любимую пиццу за 30 минут или бесплатно!</p>
            <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
              <span className="text-2xl font-bold">+7 (123) 456-78-90</span>
              <button className="px-6 py-3 text-orange-600 bg-white rounded-md hover:bg-orange-100">Заказать онлайн</button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
