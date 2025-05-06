import React from 'react';
import { Link } from 'react-router-dom';
import { User, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import CartDrawer from '@/components/CartDrawer';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b shadow-sm">
      <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
                <span className="sr-only">Меню</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[280px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link to="/" className="text-lg font-medium transition-colors hover:text-primary">Главная</Link>
                <Link to="/menu" className="text-lg font-medium transition-colors hover:text-primary">Меню</Link>
                <Link to="/about" className="text-lg font-medium transition-colors hover:text-primary">О нас</Link>
                <Link to="/contacts" className="text-lg font-medium transition-colors hover:text-primary">Контакты</Link>
                <Link to="/blog" className="text-lg font-medium transition-colors hover:text-primary">Блог</Link>
                <Link to="/promotions" className="text-lg font-medium transition-colors hover:text-primary">Акции</Link>
              </nav>
            </SheetContent>
          </Sheet>
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-orange-500">ПиццаМания</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">Главная</Link>
          <Link to="/menu" className="text-sm font-medium transition-colors hover:text-primary">Меню</Link>
          <Link to="/about" className="text-sm font-medium transition-colors hover:text-primary">О нас</Link>
          <Link to="/contacts" className="text-sm font-medium transition-colors hover:text-primary">Контакты</Link>
          <Link to="/blog" className="text-sm font-medium transition-colors hover:text-primary">Блог</Link>
          <Link to="/promotions" className="text-sm font-medium transition-colors hover:text-primary">Акции</Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <CartDrawer />
          <Link to="/profile">
            <User className="w-5 h-5" />
            <span className="sr-only">Профиль</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;