import Link from 'next/link';
import classes from './index.module.css'

const pages = [
  { href: '/', title: 'ГЛАВНАЯ' },
  { href: 'prog', title: 'ПРОГРАММЫ' },
  { href: 'info', title: 'ОБО МНЕ' },

];

export function Header() {
  return <nav className={classes.nav}>

    <div id='logo'> logo
      {/* <img src="logo.png" alt="logo" /> */}
    </div>
    <div id='nav'>
      {pages.map(({ href, title }) =>
        <span key={href}>
          <Link href={href}> {title} </Link>
        </span>)}
    </div>
  </nav>;
}