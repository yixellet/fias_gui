import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import magnGlass from '../../../images/magnifying-glass.svg';
import styles from './Searchbar.module.css';

function Searchbar(props) {
  let navigate = useNavigate();
  const resultsList = useRef(null)
  const [string, setString] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    document.addEventListener('click', function(event) {
      if(event.target !== resultsList) {
        setResults([])
      }
    })
  })

  function handleChange(event) {
    setString(event.target.value);
    props.api.liveSearch(event.target.value, props.mode)
      .then((results) => {
        setResults(results.data)
      })
  }

  function handleChoose(object) {
    setString('');
    setResults([])
    navigate(`/${props.mode}/${object.objectid}`)
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
        <ul className={styles.results} ref={resultsList}>
          {
            results.map((result) => {
              return <li className={styles.result} key={result.objectid} onClick={() => handleChoose(result)}>
                {result.typename} {result.name}
              </li>
            })
          }
        </ul>
      }
    </form>
  );
}

export default Searchbar;
