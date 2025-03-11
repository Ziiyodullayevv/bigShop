import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Heart, ShoppingCart, User } from 'lucide-react';
import { TiLocationOutline } from 'react-icons/ti';

export default function Header() {
  return (
    <header className='container py-10 border-b border-solid mx-auto px-[50px]'>
      <div className='flex justify-between gap-5'>
        <div className='flex gap-4'>
          <img src='logo.svg' alt='logo' />

          <div className='flex w-full min-w-lg max-w-xl items-center space-x-2'>
            <Input type='email' placeholder='Search for products' />
            <Button
              className='cursor-pointer'
              variant={'outline'}
              type='submit'
            >
              <TiLocationOutline />
              Subscribe
            </Button>
          </div>
        </div>

        <div className='flex gap-3 items-center'>
          <Heart />
          <User />
          <ShoppingCart />
        </div>
      </div>
    </header>
  );
}
