
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart, CartItemSize } from '@/contexts/CartContext';
import { 
  Sheet, 
  SheetContent, 
  SheetHeader, 
  SheetTitle, 
  SheetFooter,
  SheetClose,
  SheetTrigger
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface CartDrawerProps {
  children?: React.ReactNode;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ children }) => {
  const { state, removeItem, updateQuantity, clearCart } = useCart();
  const { items, total, itemCount } = state;

  const handleQuantityChange = (id: number, size: CartItemSize, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity <= 0) {
      removeItem(id, size);
    } else {
      updateQuantity(id, size, newQuantity);
    }
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children ? (
          children
        ) : (
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <Badge variant="destructive" className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs">
                {itemCount}
              </Badge>
            )}
            <span className="sr-only">Корзина</span>
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle>Корзина</SheetTitle>
        </SheetHeader>
        
        <div className="flex-grow overflow-auto py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-4">
              <ShoppingCart className="h-16 w-16 text-gray-300 mb-4" />
              <h3 className="font-medium text-lg mb-2">Ваша корзина пуста</h3>
              <p className="text-gray-500 mb-6">Выберите пиццу из нашего меню, чтобы сделать заказ</p>
              <SheetClose asChild>
                <Button asChild>
                  <Link to="/menu">Перейти в меню</Link>
                </Button>
              </SheetClose>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex gap-4">
                  <div className="h-16 w-16 overflow-hidden rounded">
                    <img 
                      src={item.imageUrl} 
                      alt={item.name} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <div>
                        <h4 className="font-medium">{item.name}</h4>
                        <p className="text-sm text-gray-500 capitalize">
                          {item.size === 'small' && 'Маленькая'}
                          {item.size === 'medium' && 'Средняя'}
                          {item.size === 'large' && 'Большая'}
                        </p>
                      </div>
                      <p className="font-medium">{item.price} ₽</p>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2">
                      <div className="flex items-center border rounded">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-none"
                          onClick={() => handleQuantityChange(item.id, item.size, item.quantity, -1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="px-2 min-w-[2rem] text-center">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8 rounded-none"
                          onClick={() => handleQuantityChange(item.id, item.size, item.quantity, 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-8 w-8 text-red-500 hover:text-red-600 hover:bg-red-50"
                        onClick={() => removeItem(item.id, item.size)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="flex justify-end">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  onClick={clearCart}
                >
                  Очистить корзину
                </Button>
              </div>
            </div>
          )}
        </div>
        
        {items.length > 0 && (
          <>
            <Separator />
            
            <div className="py-4">
              <div className="flex justify-between mb-2">
                <span className="text-gray-500">Итого:</span>
                <span className="font-bold text-lg">{total} ₽</span>
              </div>
              
              <p className="text-xs text-gray-500 mb-4">
                *Стоимость доставки рассчитывается при оформлении заказа
              </p>
            </div>
            
            <SheetFooter>
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <Link to="/checkout">Оформить заказ</Link>
                </Button>
              </SheetClose>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
