
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

// Типы данных
type PizzaCategory = 'all' | 'classic' | 'vegetarian' | 'seafood' | 'spicy' | 'gourmet';

type Pizza = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  category: PizzaCategory;
  ingredients: string[];
  isVegan?: boolean;
  isSpicy?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  sizes: {
    small: number;
    medium: number;
    large: number;
  };
};

const Menu: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<PizzaCategory>('all');
  const [pizzas, setPizzas] = useState<Pizza[]>([]);
  const [filteredPizzas, setFilteredPizzas] = useState<Pizza[]>([]);

  // Имитация загрузки данных с API
  useEffect(() => {
    // В реальном приложении здесь был бы запрос к API
    const mockPizzas: Pizza[] = [
      {
        id: 1,
        name: 'Маргарита',
        description: 'Классическая пицца с томатным соусом, моцареллой и базиликом',
        price: 399,
        imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'classic',
        ingredients: ['Томатный соус', 'Моцарелла', 'Базилик', 'Оливковое масло'],
        isBestseller: true,
        sizes: {
          small: 399,
          medium: 549,
          large: 699,
        }
      },
      {
        id: 2,
        name: 'Пепперони',
        description: 'Пицца с томатным соусом, моцареллой и острыми колбасками пепперони',
        price: 449,
        imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'classic',
        ingredients: ['Томатный соус', 'Моцарелла', 'Пепперони'],
        isSpicy: true,
        isBestseller: true,
        sizes: {
          small: 449,
          medium: 599,
          large: 749,
        }
      },
      {
        id: 3,
        name: 'Вегетарианская',
        description: 'Пицца с томатным соусом, овощами и сыром',
        price: 429,
        imageUrl: 'https://images.unsplash.com/photo-1511689841500-48167d0feb57?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'vegetarian',
        ingredients: ['Томатный соус', 'Моцарелла', 'Болгарский перец', 'Грибы', 'Лук', 'Маслины'],
        isVegan: true,
        sizes: {
          small: 429,
          medium: 579,
          large: 729,
        }
      },
      {
        id: 4,
        name: 'Морская',
        description: 'Пицца с морепродуктами, томатным соусом и моцареллой',
        price: 549,
        imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'seafood',
        ingredients: ['Томатный соус', 'Моцарелла', 'Креветки', 'Мидии', 'Кальмары', 'Лимон'],
        sizes: {
          small: 549,
          medium: 699,
          large: 849,
        }
      },
      {
        id: 5,
        name: 'Диавола',
        description: 'Острая пицца с томатным соусом, салями, перцем чили и моцареллой',
        price: 479,
        imageUrl: 'https://images.unsplash.com/photo-1593504049359-74330189a345?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'spicy',
        ingredients: ['Томатный соус', 'Моцарелла', 'Салями', 'Халапеньо', 'Перец чили'],
        isSpicy: true,
        sizes: {
          small: 479,
          medium: 629,
          large: 779,
        }
      },
      {
        id: 6,
        name: 'Четыре сыра',
        description: 'Пицца с четырьмя видами сыра: моцарелла, пармезан, горгонзола и рикотта',
        price: 499,
        imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'gourmet',
        ingredients: ['Сливочный соус', 'Моцарелла', 'Пармезан', 'Горгонзола', 'Рикотта'],
        sizes: {
          small: 499,
          medium: 649,
          large: 799,
        }
      },
      {
        id: 7,
        name: 'Трюфельная',
        description: 'Изысканная пицца с трюфельным соусом, грибами и моцареллой',
        price: 599,
        imageUrl: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'gourmet',
        ingredients: ['Трюфельный крем', 'Моцарелла', 'Грибы', 'Руккола', 'Пармезан'],
        isNew: true,
        sizes: {
          small: 599,
          medium: 749,
          large: 899,
        }
      },
      {
        id: 8,
        name: 'Гавайская',
        description: 'Пицца с томатным соусом, моцареллой, ветчиной и ананасом',
        price: 459,
        imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80',
        category: 'classic',
        ingredients: ['Томатный соус', 'Моцарелла', 'Ветчина', 'Ананас'],
        sizes: {
          small: 459,
          medium: 609,
          large: 759,
        }
      }
    ];

    setPizzas(mockPizzas);
    setFilteredPizzas(mockPizzas);

    // Проверяем наличие параметра категории в URL
    const categoryParam = searchParams.get('category');
    if (categoryParam) {
      setActiveCategory(categoryParam as PizzaCategory);
    }
  }, [searchParams]);

  // Фильтрация пицц по категории и поисковому запросу
  useEffect(() => {
    let result = [...pizzas];
    
    // Фильтрация по категории
    if (activeCategory !== 'all') {
      result = result.filter(pizza => pizza.category === activeCategory);
    }
    
    // Фильтрация по поисковому запросу
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(
        pizza => 
          pizza.name.toLowerCase().includes(searchLower) || 
          pizza.description.toLowerCase().includes(searchLower) ||
          pizza.ingredients.some(ing => ing.toLowerCase().includes(searchLower))
      );
    }
    
    setFilteredPizzas(result);
    
    // Обновление URL с параметром категории
    if (activeCategory !== 'all') {
      setSearchParams({ category: activeCategory });
    } else {
      setSearchParams({});
    }
  }, [activeCategory, searchTerm, pizzas, setSearchParams]);

  const handleCategoryChange = (category: PizzaCategory) => {
    setActiveCategory(category);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const addToCart = (pizza: Pizza) => {
    // Здесь будет логика добавления в корзину
    alert(`Пицца "${pizza.name}" добавлена в корзину`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Меню пиццы</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="md:col-span-2">
              <Input
                type="search"
                placeholder="Поиск по названию или ингредиентам..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full"
              />
            </div>
            
            <div className="flex space-x-4">
              <Button
                variant={activeCategory === 'all' ? 'default' : 'outline'}
                onClick={() => handleCategoryChange('all')}
                className="flex-1"
              >
                Все
              </Button>
              <Button
                variant={activeCategory === 'vegetarian' ? 'default' : 'outline'}
                onClick={() => handleCategoryChange('vegetarian')}
                className="flex-1"
              >
                <Icon name="Leaf" className="mr-2 h-4 w-4" />
                Вегетарианские
              </Button>
              <Button
                variant={activeCategory === 'spicy' ? 'default' : 'outline'}
                onClick={() => handleCategoryChange('spicy')}
                className="flex-1"
              >
                <Icon name="Flame" className="mr-2 h-4 w-4" />
                Острые
              </Button>
            </div>
          </div>
          
          <Tabs defaultValue="all" value={activeCategory} onValueChange={(value) => handleCategoryChange(value as PizzaCategory)}>
            <TabsList className="mb-6 w-full justify-start overflow-auto">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="classic">Классические</TabsTrigger>
              <TabsTrigger value="vegetarian">Вегетарианские</TabsTrigger>
              <TabsTrigger value="seafood">С морепродуктами</TabsTrigger>
              <TabsTrigger value="spicy">Острые</TabsTrigger>
              <TabsTrigger value="gourmet">Гурме</TabsTrigger>
            </TabsList>
            
            {/* Содержимое каждой вкладки одинаковое, но фильтруется по категории */}
            <TabsContent value="all" className="mt-0">
              {filteredPizzas.length === 0 ? (
                <div className="text-center py-12">
                  <Icon name="Search" className="mx-auto h-12 w-12 text-gray-400 mb-4" />
                  <h3 className="text-xl font-medium mb-2">Пиццы не найдены</h3>
                  <p className="text-gray-500">Попробуйте изменить параметры поиска</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredPizzas.map(pizza => (
                    <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={addToCart} />
                  ))}
                </div>
              )}
            </TabsContent>
            
            {/* Остальные вкладки повторяют содержимое первой, т.к. фильтрация уже происходит в useEffect */}
            <TabsContent value="classic" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPizzas.map(pizza => (
                  <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={addToCart} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="vegetarian" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPizzas.map(pizza => (
                  <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={addToCart} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="seafood" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPizzas.map(pizza => (
                  <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={addToCart} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="spicy" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPizzas.map(pizza => (
                  <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={addToCart} />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="gourmet" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPizzas.map(pizza => (
                  <PizzaCard key={pizza.id} pizza={pizza} onAddToCart={addToCart} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

// Компонент карточки пиццы
const PizzaCard: React.FC<{ pizza: Pizza; onAddToCart: (pizza: Pizza) => void }> = ({ pizza, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState<'small' | 'medium' | 'large'>('medium');
  
  const handleSizeChange = (size: 'small' | 'medium' | 'large') => {
    setSelectedSize(size);
  };
  
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={pizza.imageUrl} 
          alt={pizza.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute top-2 right-2 flex flex-col gap-2">
          {pizza.isNew && (
            <Badge className="bg-blue-500">Новинка</Badge>
          )}
          {pizza.isBestseller && (
            <Badge className="bg-orange-500">Хит продаж</Badge>
          )}
          {pizza.isVegan && (
            <Badge className="bg-green-500">Вегетарианская</Badge>
          )}
          {pizza.isSpicy && (
            <Badge className="bg-red-500">Острая</Badge>
          )}
        </div>
      </div>
      
      <CardHeader className="pb-0">
        <CardTitle>{pizza.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="pt-2 flex-grow">
        <p className="text-gray-600 mb-4">{pizza.description}</p>
        <div className="text-sm text-gray-500 mb-4">
          <p className="font-medium">Ингредиенты:</p>
          <p>{pizza.ingredients.join(', ')}</p>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-4">
          <Button
            variant={selectedSize === 'small' ? 'default' : 'outline'}
            onClick={() => handleSizeChange('small')}
            className="text-xs py-1 h-auto"
          >
            Маленькая
          </Button>
          <Button
            variant={selectedSize === 'medium' ? 'default' : 'outline'}
            onClick={() => handleSizeChange('medium')}
            className="text-xs py-1 h-auto"
          >
            Средняя
          </Button>
          <Button
            variant={selectedSize === 'large' ? 'default' : 'outline'}
            onClick={() => handleSizeChange('large')}
            className="text-xs py-1 h-auto"
          >
            Большая
          </Button>
        </div>
      </CardContent>
      
      <CardFooter className="border-t pt-4">
        <div className="flex justify-between items-center w-full">
          <div className="text-lg font-bold text-orange-500">
            {pizza.sizes[selectedSize]} ₽
          </div>
          <Button 
            onClick={() => onAddToCart(pizza)}
            className="bg-orange-500 hover:bg-orange-600"
          >
            В корзину
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Menu;
