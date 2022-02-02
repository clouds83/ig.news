import Link from 'next/link'
import { useRouter } from 'next/router';
import { SignInButton } from '../SignInButton/SignInButtonComp'
import styles from './header.module.scss'

export function Header() {

    const asPath = useRouter().asPath;

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <span className={styles.logo}>
                    ig.news
                </span>
                <nav>
                    <Link href="/">
                        <a className={asPath === '/' ? styles.active: ''}>Home</a>
                    </Link>
                    <Link href="/posts">
                        <a className={asPath === '/posts' ? styles.active: ''}>Posts</a>
                    </Link>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}