import styles from './navigation.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Navigation() {
  const { pathname } = useRouter();
  return (
    <>
      <div className={styles.navContainer}>
        <h1>Video Games</h1>
        <ul className={styles.listContainer}>
          <button>Login</button>
        </ul>
      </div>
      <div className={styles.tabContainer}>
        <ul>
          <li className={pathname === '/upcoming' ? styles.active : ''}>
            <Link href='/upcoming'>Upcoming</Link>
          </li>
          <li className={pathname === '/popular' ? styles.active : ''}>
            <Link href='/popular'>Popular</Link>
          </li>
          <li className={pathname === '/toprated' ? styles.active : ''}>
            <Link href='/toprated'>Top Rated</Link>
          </li>
          <li className={pathname === '/search' ? styles.active : ''}>
            <Link href='/search'>Search</Link>
          </li>
        </ul>
      </div>
    </>
  );
}
