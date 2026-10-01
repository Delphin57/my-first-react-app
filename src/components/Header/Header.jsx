import styles from './Header.module.css';
import Nav from '../Nav/Nav.jsx';
import articles from '../data/articles.js';

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <h1 className={styles.title}>React Blog</h1>
          <span className={styles.counter}>Статей: {articles.length}</span>
        </div>
        <Nav />
      </div>
    </header>
  );
}

export default Header;