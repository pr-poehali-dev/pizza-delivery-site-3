
import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Типы для товаров и корзины
export type CartItemSize = 'small' | 'medium' | 'large';

export type CartItem = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  size: CartItemSize;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  total: number;
  itemCount: number;
};

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: number; size: CartItemSize } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; size: CartItemSize; quantity: number } }
  | { type: 'CLEAR_CART' };

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

// Создаем контекст
type CartContextType = {
  state: CartState;
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number, size: CartItemSize) => void;
  updateQuantity: (id: number, size: CartItemSize, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

// Редьюсер для управления состоянием корзины
function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => item.id === action.payload.id && item.size === action.payload.size
      );

      if (existingItemIndex >= 0) {
        // Если товар уже есть в корзине, увеличиваем количество
        const updatedItems = [...state.items];
        updatedItems[existingItemIndex].quantity += action.payload.quantity;

        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems),
          itemCount: calculateItemCount(updatedItems),
        };
      } else {
        // Если товара нет, добавляем новый
        const updatedItems = [...state.items, action.payload];

        return {
          ...state,
          items: updatedItems,
          total: calculateTotal(updatedItems),
          itemCount: calculateItemCount(updatedItems),
        };
      }
    }

    case 'REMOVE_ITEM': {
      const updatedItems = state.items.filter(
        item => !(item.id === action.payload.id && item.size === action.payload.size)
      );

      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        itemCount: calculateItemCount(updatedItems),
      };
    }

    case 'UPDATE_QUANTITY': {
      const { id, size, quantity } = action.payload;
      
      // Если количество 0 или меньше, удаляем товар
      if (quantity <= 0) {
        return cartReducer(state, { type: 'REMOVE_ITEM', payload: { id, size } });
      }

      const updatedItems = state.items.map(item => {
        if (item.id === id && item.size === size) {
          return { ...item, quantity };
        }
        return item;
      });

      return {
        ...state,
        items: updatedItems,
        total: calculateTotal(updatedItems),
        itemCount: calculateItemCount(updatedItems),
      };
    }

    case 'CLEAR_CART':
      return initialState;

    default:
      return state;
  }
}

// Вспомогательные функции для расчета итогов
function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateItemCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0);
}

// Провайдер контекста корзины
export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Загружаем сохраненное состояние из localStorage
  const savedCart = localStorage.getItem('cart');
  const initialCart = savedCart ? JSON.parse(savedCart) : initialState;

  const [state, dispatch] = useReducer(cartReducer, initialCart);

  // Сохраняем состояние корзины в localStorage при изменении
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  // Функции для работы с корзиной
  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    dispatch({ type: 'ADD_ITEM', payload: { ...item, quantity: 1 } });
  };

  const removeItem = (id: number, size: CartItemSize) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { id, size } });
  };

  const updateQuantity = (id: number, size: CartItemSize, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { id, size, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider value={{ state, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Хук для использования контекста корзины
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
