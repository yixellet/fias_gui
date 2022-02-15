import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import magnGlass from '../../../images/magnifying-glass.svg';
import styles from './Searchbar.module.css';

function Searchbar(props) {
  let navigate = useNavigate();
  const [string, setString] = useState('');
  const [results, setResults] = useState([]);

  function handleChange(event) {
    setString(event.target.value);
    props.api.liveSearch(event.target.value, props.mode)
      .then((results) => {
        setResults(results.data)
      })
  }

  function handleChoose(event) {
    setString('');
    setResults([])
  }

  function handleSubmit(event) {
    event.preventDefault();
    navigate(`/${props.mode}/search/${string}`)
    setString('');
    setResults([])
  }


  return (
    <form className={styles.container} name="search" onSubmit={handleSubmit}>
      <div className={styles.wrapper}>
        <input className={styles.text} type="text" name="string" value={string} onChange={handleChange} autoComplete='off' />
        <button className={styles.submit}>
          <img className={styles.magn_glass} src={magnGlass} alt='Искать' />
        </button>
      </div>
      {
        results.length > 0 &&
        <ul className={styles.results}>
          {
            results.map((result) => {
              return <li className={styles.result} key={result.objectid} >
                <Link to={`/${props.mode}/${result.objectid}`} className={styles.link} onClick={handleChoose}>
                {result.typename} {result.name}</Link>
              </li>
            })
          }
        </ul>
      }
    </form>
  );
}

export default Searchbar;
