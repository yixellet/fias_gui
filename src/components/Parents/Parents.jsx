import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Parents.module.css';

function Parents(props) {
  let navigate = useNavigate();

  function handleClick(object) {
    navigate(`/${props.mode}/${object.objectid}`)
  }

  return (
    <div className={props.scrollY === 0 ? `${styles.parents} ${styles.parentsNoScroll}` : `${styles.parents} ${styles.parentsScroll}`}>
      <h1 className={styles.parentsTitle}>
        {
          props.parents ?
          props.parents.map((g, idx) => {
            return <span onClick={()=>handleClick(g)} key={g.objectid} className={styles.parentsPart}>
                {g.name} {g.typename.toLowerCase()}{idx!==props.parents.length-1 ? ', ' : ''}
                </span>
          }) : 'Результаты поиска'
        }
      </h1>
    </div>
  );
}

export default Parents;