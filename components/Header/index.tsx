import Link from 'next/link';
import styles from './Header.module.scss';

export const NAV_LINKS: { label: string; href: string }[] = [
  { label: 'Posts', href: '/' },
  { label: 'Create', href: '/new' },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navLinks}>
        <ul>
          {NAV_LINKS.map((i) => (
            <li key={i.href}>
              <Link href={i.href}>{i.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
