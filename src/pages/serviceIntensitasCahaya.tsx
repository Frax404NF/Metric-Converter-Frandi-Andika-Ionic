import { IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonInput}
from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const serviceIntensitasCahaya: React.FC = () => {
    const [dari, awal] = useState("");
    const [ke, endpoint] = useState("");
    const [angka, nilai] = useState(0);
    const [hasil, total] = useState(0);

    const kalkulasi = () => {
      const satuan = ["cd", "lm/m²", "lux", "foot-candle"];
      const kali = [1, 1 / (683 * Math.PI), 1 / (100 * Math.PI), 1 / 0.0929];
      const a = satuan.findIndex((i) => i === dari);
      const b = satuan.findIndex((i) => i === ke);

      if (a - b < 0) {
        total(angka / kali[Math.abs(a - b)]);
      } else {
        total(angka * kali[Math.abs(a - b)]);
      }
  };

  return (
    <>
      <p className="result"> Dari :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="intensitas cahaya"
            placeholder="Pilih Satuan"
            onIonChange={(e) => awal(e.target.value)}
          >
            <IonSelectOption value="cd">Candela</IonSelectOption> <br />
            <IonSelectOption value="lm/m²">
              Lumens per square meter
            </IonSelectOption>{" "}
            <br />
            <IonSelectOption value="lux">Lux</IonSelectOption> <br />
            <IonSelectOption value="foot-candle">
              Foot-candle
            </IonSelectOption>{" "}
            <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="result">Ke :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="intensitas cahaya"
            placeholder="Pilih Satuan"
            onIonChange={(e) => endpoint(e.target.value)}
          >
            <IonSelectOption value="cd">Candela</IonSelectOption> <br />
            <IonSelectOption value="lm/m²">
              Lumens per square meter
            </IonSelectOption>{" "}
            <br />
            <IonSelectOption value="lux">Lux</IonSelectOption> <br />
            <IonSelectOption value="foot-candle">
              Foot-candle
            </IonSelectOption>{" "}
            <br />
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
      <p className="result">  Hasil : {hasil} {ke} </p>
    </>
  );
};

export default serviceIntensitasCahaya;
