'use client';
import { cn } from '@/libs/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { buttonVariants } from './ui/Button';

const navContents = [
  { href: '/', label: 'Home' },
  { href: '/beauty-packages', label: 'Beauty Packages' },
  { href: '/specialists', label: 'Specialists' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const Header = () => {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <header className='fixed left-0 right-0 top-0 z-[100] flex h-20 w-full items-center border-b border-gray bg-white/90 backdrop-blur-xl'>
      <nav className='container flex items-center justify-between gap-5'>
        <Link href='/' className='text-2xl font-bold'>
          mimosa<span className='text-blue'>.</span>
        </Link>
        <ul className='flex items-center gap-5 text-lg'>
          {navContents.map((item) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className={cn(
                  'link-item',
                  pathname === item.href ? 'text-black' : 'text-black/50'
                )}
              >
                {item.label}
              </Link>
            </li>
          ))}

          <Link
            href='/sign-in'
            className={cn(buttonVariants({ variant: 'secondary' }))}
          >
            Sign in
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
