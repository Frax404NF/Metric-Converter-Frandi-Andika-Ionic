import { IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonInput }
from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const serviceSuhu: React.FC = () => {
    const [dari, awal] = useState("");
    const [ke, endpoint] = useState("");
    const [angka, nilai] = useState(0);
    const [hasil, total] = useState(0);

  const kalkulasi = () => {
    if (dari === "c" && ke === "f") {
      total((9 / 5) * angka + 32);
    } else if (dari === "c" && ke === "k") {
      total(angka + 273);
    } else if (dari === "c" && ke === "r") {
      total((4 / 5) * angka);
    } else if (dari === "f" && ke === "c") {
      total((5 / 9) * (angka - 32));
    } else if (dari === "f" && ke === "k") {
      total((5 / 9) * (angka - 32) + 273);
    } else if (dari === "f" && ke === "r") {
      total((4 / 9) * (angka - 32));
    } else if (dari === "k" && ke === "c") {
      total(angka - 273);
    } else if (dari === "k" && ke === "f") {
      total((9 / 5) * (angka - 273) + 32);
    } else if (dari === "k" && ke === "r") {
      total((4 / 5) * (angka - 273));
    } else if (dari === "r" && ke === "c") {
      total((5 / 4) * angka);
    } else if (dari === "r" && ke === "f") {
      total((9 / 4) * angka + 32);
    } else if (dari === "r" && ke === "k") {
      total((5 / 4) * angka + 273);
    } else {
      total(angka);
    }
  };

  return (
    <>
      <p className="result"> Dari :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="serviceSuhu"
            placeholder="Pilih satuan"
            onIonChange={(e) => awal(e.target.value)}
          >
            <IonSelectOption value="c">Celcius</IonSelectOption> <br />
            <IonSelectOption value="f">Fahrenheit</IonSelectOption> <br />
            <IonSelectOption value="k">Kelvin</IonSelectOption> <br />
            <IonSelectOption value="r">Reamur</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="result"> Ke :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="serviceSuhu"
            placeholder="Pilih satuan"
            onIonChange={(e) => endpoint(e.target.value)}
          >
            <IonSelectOption value="c">Celcius</IonSelectOption> <br />
            <IonSelectOption value="f">Fahrenheit</IonSelectOption> <br />
            <IonSelectOption value="k">Kelvin</IonSelectOption> <br />
            <IonSelectOption value="r">Reamur</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <IonInput
        label="Masukan angka"
        labelPlacement="floating"
        fill="outline"
        type="number"
        placeholder="Masukan angka"
        onIonInput={(e: any) => nilai(parseInt(e.target.value))}
      ></IonInput>
      <IonButton expand="block" color="primary" onClick={() => kalkulasi()}>
        Convert
      </IonButton>
      <p className="result"> Hasil : {hasil} {ke} </p>
    </>
  );
};

export default serviceSuhu;
