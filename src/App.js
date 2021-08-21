import React, { useState, useEffect, useRef } from "react";
import "./App.css";
import Gauses from "./Gauses";
import LineChart from "./LineChart";
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDtXOvG9tmXRYjDD7O3EYjzz2syivlbTAA",
  authDomain: "horno-panadero.firebaseapp.com",
  databaseURL: "https://horno-panadero-default-rtdb.firebaseio.com",
  projectId: "horno-panadero",
  storageBucket: "horno-panadero.appspot.com",
  messagingSenderId: "310370306205",
  appId: "1:310370306205:web:64ff344cc779b97dffac74",
};

const fr = (setLast, setColection) => {
  return function (snapshot) {
    let val = snapshot.val();
    if (val) {
      let arr = [];
      for (const k in val) {
        arr.push(val[k]);
      }
      setLast(arr[arr.length - 1]);
      setColection([...arr]);
    }
  };
};

function App() {
  const render = useRef(true);
  const qtyDatos = 100;

  const [temperatureLast, setTemperatureLast] = useState();
  const [temperatures, setTemperatures] = useState();

  const [hourLast, setHourLast] = useState();
  const [minuteLast, setMinuteLast] = useState();
  const [dayLast, setDayLast] = useState();
  const [monthLast, setMonthLast] = useState();
  const [yearLast, setYearLast] = useState();

  useEffect(() => {
    if (render.current) {
      firebase.initializeApp(firebaseConfig);

      let temperature = firebase
        .database()
        .ref("Nodemcu/TThermok")
        .limitToLast(qtyDatos);
      temperature.on("value", fr(setTemperatureLast, setTemperatures));

      let hour = firebase.database().ref("Nodemcu/Hora").limitToLast(1);
      hour.on("value",fr(setHourLast, () => {}));

      let minute = firebase.database().ref("Nodemcu/Minutos").limitToLast(1);
      minute.on("value",fr(setMinuteLast, () => {}));

      let day = firebase.database().ref("Nodemcu/Dia").limitToLast(1);
      day.on("value",fr(setDayLast, () => {}));

      let month = firebase.database().ref("Nodemcu/Mes").limitToLast(1);
      month.on("value",fr(setMonthLast, () => {}));

      let year = firebase.database().ref("Nodemcu/Ano").limitToLast(1);
      year.on("value",fr(setYearLast, () => {}));
    }
  }, []);

  useEffect(() => {
    if (render.current) {
      render.current = false;
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header Shadow">
        <h1>Horno Panadero</h1>
        {hourLast && minuteLast && dayLast && monthLast && yearLast && (
          <div>{`Última medición el ${dayLast}/${monthLast}/${yearLast}, a las ${hourLast}:${minuteLast}`}</div>
        )}
      </header>
      <div className="App-Gauses Shadow">
        <Gauses title="Última" value={temperatureLast ? temperatureLast : 0} />
        <Gauses
          title="Maxima"
          value={temperatures ? Math.max(...temperatures) : 0}
        />
        <Gauses
          title="Minima"
          value={temperatures ? Math.min(...temperatures) : 0}
        />
      </div>
      <div className="App-LineChart Shadow">
        <LineChart
          title="los últimos valores de la Temperatura"
          data={
            temperatures
              ? [
                  ...temperatures.map((value, index) => {
                    return [index, value];
                  }),
                ]
              : [[0, 0]]
          }
        />
      </div>
      <footer className="App-footer Shadow">
        <h5>Carlos Lazaro, 21221605</h5>
      </footer>
    </div>
  );
}

export default App;
