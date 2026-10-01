import styles from './App.module.css';
import Header from './components/Header/Header.jsx';
import ArticleList from './components/ArticleList/ArticleList.jsx';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <main>
        <ArticleList />
      </main>
    </div>
  );
}

export default App;
