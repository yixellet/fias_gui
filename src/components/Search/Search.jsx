import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Parents from '../Parents/Parents';
import Navigation from '../Navigation/Navigation';
import Content from '../Content/Content';
import IsFetching from '../IsFetching/IsFetching';
import splitByLevels from '../../utils/splitByLevels';

import styles from './Search.module.css';

function Search(props) {
  let { string } = useParams();
  const [isFetching, setIsFetching] = useState(false);
  const [levels, setLevels] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    let isMounted = true;
    props.api.getLevels()
      .then((data) => {
        if (isMounted) {
          setLevels(data.data)
        }
      });
      return() => {
        isMounted = false;
      };
  }, [props.api])

  useEffect(() => {
    let isMounted = true;
    setIsFetching(true)
    props.api.search(string, props.mode)
      .then((data) => {
        if (isMounted) {
          setResults(splitByLevels(data.data, levels))
          setIsFetching(false)
        }
      });
      return() => {
        isMounted = false;
      };
  }, [string, props.api, props.mode, levels]);

  return (
    <main className={styles.container}>
      <Parents scrollY={props.scrollY} />
      <Navigation levels={results} scrollY={props.scrollY} />
      {
        results &&
        <Content mode={props.mode} 
          children={results}
          scrollY={props.scrollY} />
      }
      {
        isFetching &&
        <IsFetching />
      }
    </main>
  );
}

export default Search;
