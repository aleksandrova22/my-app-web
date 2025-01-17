import Link from 'next/link';
import classes from './index.module.css'

const pages = [
  { href: '/', title: 'ГЛАВНАЯ' },
  { href: 'prog', title: 'ПРОГРАММЫ' },
  { href: 'info', title: 'ОБО МНЕ' }
];

export function Footer() {
  return <footer className={classes.footer}>
    <p>Инфа какая-то</p>
    <ul>
      {pages.map(({ href, title }) =>
        <li key={href}>
          <Link href={href}> {title} </Link>
        </li>)}
    </ul>
  </footer>;
}