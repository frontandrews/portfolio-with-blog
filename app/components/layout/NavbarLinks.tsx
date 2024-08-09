export const NavLink = (props: any) => (
  <a className="text-gray-500 hover:text-cyan-600 dark:text-gray-300 dark:hover:text-cyan-200" {...props} />
);

export const NavLinks = (props: any) => (
  <div className="hidden space-x-8 lg:flex">
    <NavLink href="/blog">Blog</NavLink>
    <NavLink href="/projects">Projects</NavLink>
    <NavLink href="/about">About</NavLink>
  </div>
);
