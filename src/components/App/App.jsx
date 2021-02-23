import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Sidebar />
      </main>
    </>
  );
}

export default App;
