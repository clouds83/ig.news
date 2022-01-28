import { SignInButton } from '../SignInButton/SignInButtonComp'
import styles from './header.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <span className={styles.logo}>
					easy<span>.Gate</span>
				</span>
                <nav>
                    <a href="#" className={styles.active}>Home</a>
                    <a href="#">Posts</a>
                </nav>
                <SignInButton/>
            </div>
        </header>
    )
}