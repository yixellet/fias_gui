import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';

function Card(props) {
  let navigate = useNavigate();

  function handleClick() {
    navigate(`/${props.mode}/${props.data.objectid}`)
  }

  return (
    <article className={styles.cardContainer} onClick={handleClick}>
      <div className={styles.main}>
        <p className={styles.objectid}>{props.data.objectid}</p>
        <h3 className={styles.title}>{props.data.name} <span className={styles.typeName}>{props.data.typename.toLowerCase()}</span></h3>
        {
          props.data.parents ?
          <div className={styles.parentsLine}>
          {props.data.parents.slice(1,-1).map((parent, idx) => {
            const name = parent.split(',')[1]
            const typename = parent.split(',')[2].toLowerCase()
            return <p key={parent} className={styles.parent}>{name} {typename}{idx!==props.data.parents.length-3 ? ', ' : ''}</p>
          })}</div> :
          null
        }
        <p className={styles.objectid}>Дочерних элементов: <span className={styles.count}>{props.data.children}</span></p>
      </div>
    </article>
  );
}

export default Card;
