
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-bold text-white">ПиццаМания</h3>
            <p className="mb-4">Вкусная пицца из печи с доставкой на дом. Мы готовим только из свежих ингредиентов!</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-medium text-white">Меню</h4>
            <ul className="space-y-2">
              <li><Link to="/menu/classic" className="hover:text-orange-400">Классические пиццы</Link></li>
              <li><Link to="/menu/vegetarian" className="hover:text-orange-400">Вегетарианские</Link></li>
              <li><Link to="/menu/seafood" className="hover:text-orange-400">С морепродуктами</Link></li>
              <li><Link to="/menu/gluten-free" className="hover:text-orange-400">Без глютена</Link></li>
              <li><Link to="/menu/drinks" className="hover:text-orange-400">Напитки</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-medium text-white">Информация</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="hover:text-orange-400">О нас</Link></li>
              <li><Link to="/blog" className="hover:text-orange-400">Блог</Link></li>
              <li><Link to="/promotions" className="hover:text-orange-400">Акции</Link></li>
              <li><Link to="/delivery" className="hover:text-orange-400">Доставка</Link></li>
              <li><Link to="/faq" className="hover:text-orange-400">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="mb-4 text-lg font-medium text-white">Контакты</h4>
            <address className="not-italic">
              <div className="flex items-start mb-3 space-x-3">
                <MapPin className="flex-shrink-0 w-5 h-5 text-orange-400" />
                <span>ул. Пиццы, д. 42, г. Москва</span>
              </div>
              <div className="flex items-center mb-3 space-x-3">
                <Phone className="flex-shrink-0 w-5 h-5 text-orange-400" />
                <span>+7 (123) 456-78-90</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="flex-shrink-0 w-5 h-5 text-orange-400" />
                <span>info@pizzamania.ru</span>
              </div>
            </address>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p>© 2025 ПиццаМания. Все права защищены.</p>
            <div className="mt-4 space-x-4 md:mt-0">
              <Link to="/terms" className="hover:text-orange-400">Условия использования</Link>
              <Link to="/privacy" className="hover:text-orange-400">Политика конфиденциальности</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
