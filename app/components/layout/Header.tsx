import { Link } from '@remix-run/react';
import { GetHeaderResult } from '~/sanity/utils/sanity.types';

const NavLink = (props: any) => (
  <a className="text-gray-500 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-200" {...props}>
    {props.children}
  </a>
);

export function Header({ data }: { data?: GetHeaderResult }) {
  if (!data?.logoUrl) return null;

  return (
    <header className="bg-blue-500 border-b border-gray-100 transition-colors duration-1000 ease-in-out dark:border-gray-900">
      <div className="container mx-auto flex items-center justify-between p-4 lg:px-12">
        <Link to="/">
          <img src={data?.logoUrl} alt="Logo" width={100} height={40} />
        </Link>
        <div className="hidden space-x-8 lg:flex">
          {data.menu?.items?.map((item) => (
            <NavLink className="text-white hover:text-neutral-300" key={item._key} href={item.link}>
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}
