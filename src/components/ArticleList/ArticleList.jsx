import styles from './ArticleList.module.css';
import ArticleCard from '../ArticleCard/ArticleCard.jsx';
import articles from '../data/articles.js';

function ArticleList() {
  return (
    <section className={styles.list}>
      {articles.map(article => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </section>
  );
}

export default ArticleList;
