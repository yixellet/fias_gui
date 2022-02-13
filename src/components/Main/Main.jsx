import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import Parents from '../Parents/Parents';
import Navigation from '../Navigation/Navigation';
import Params from '../Params/Params';
import Content from '../Content/Content';
import Map from '../Map/Map';
import IsFetching from '../IsFetching/IsFetching';
import splitByLevels from '../../utils/splitByLevels';

import styles from './Main.module.css';

function Main(props) {
  let { objectid } = useParams();
  const [isFetching, setIsFetching] = useState(false);
  const [levels, setLevels] = useState([]);
  const [object, setObject] = useState({});
  const [params, setParams] = useState([]);
  const [geometry, setGeometry] = useState({});
  const [parents, setParents] = useState([]);
  const [children, setChildren] = useState([]);

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
    props.api.getObject(objectid)
      .then((data) => {
        if (isMounted) {
          setObject(data)
        }
      });
      return() => {
        isMounted = false;
      };
  }, [objectid, props.api]);

  useEffect(() => {
    let isMounted = true;
    props.api.getParams(objectid)
      .then((data) => {
        if (isMounted) {
          setParams(data.params)
        }
      });
      return() => {
        isMounted = false;
      };
  }, [objectid, props.api])

  useEffect(() => {
    let isMounted = true;
    props.api.getGeometry(objectid, object.level)
      .then((data) => {
        if (isMounted) {
          setGeometry(data.data)
        }
      });
      return() => {
        isMounted = false;
      };
  }, [object.level, objectid, props.api])

  useEffect(() => {
    let isMounted = true;
    props.api.getParents(objectid, props.mode)
      .then((data) => {
        if (isMounted) {
          setParents(data)
        }
      });
      return() => {
        isMounted = false;
      };
  }, [objectid, props.api, props.mode])

  useEffect(() => {
    let isMounted = true;
    setIsFetching(true)
    if (object.level === '10') {
      props.api.getHouseChildren(objectid)
        .then((data) => {
          if (isMounted) {
            setChildren(splitByLevels(data.children, levels))
            setIsFetching(false)
          }
        });
        return() => {
          isMounted = false;
        };
    } else if (object.level === '11') {
      props.api.getRooms(objectid)
        .then((data) => {
          if (isMounted) {
            setChildren(splitByLevels(data.children, levels))
            setIsFetching(false)
          }
        });
        return() => {
          isMounted = false;
        };
    } else {
      props.api.getChildren(objectid, props.mode, object.level)
        .then((data) => {
          if (isMounted) {
            setChildren(splitByLevels(data.children, levels))
            setIsFetching(false)
          }
        });
        return() => {
          isMounted = false;
        };
    }
  }, [object.level, objectid, props.api, props.mode, levels])

  return (
    <main className={styles.container}>
      <Parents parents={parents} mode={props.mode} scrollY={props.scrollY} />
      {
        children &&
        <Content mode={props.mode} 
          children={children}
          scrollY={props.scrollY} />
      }
      <div className={styles.data}>
        <Params params={params} scrollY={props.scrollY} />
        <Navigation levels={children} scrollY={props.scrollY} />
        <Map geometry={geometry} />
      </div>
      {
        isFetching &&
        <IsFetching />
      }
    </main>
  );
}

export default Main;
