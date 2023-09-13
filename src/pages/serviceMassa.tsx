import { IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonInput}
from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const serviceMassa: React.FC = () => {
    const [dari, awal] = useState("");
    const [ke, endpoint] = useState("");
    const [angka, nilai] = useState(0);
    const [hasil, total] = useState(0);

    const kalkulasi = () => {
      const metrik = ["mg", "cg", "dg", "g", "dag", "hg", "kg"];
      const kali = [1, 10, 100, 1000, 10000, 100000, 1000000];

      const a = metrik.findIndex((i) => i === dari);
      const b = metrik.findIndex((i) => i === ke);

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
            aria-label="massa"
            placeholder="Pilih Satuan"
            onIonChange={(e) => awal(e.target.value)}
          >
            <IonSelectOption value="mg">mililigram</IonSelectOption> <br />
            <IonSelectOption value="cg">centigram</IonSelectOption> <br />
            <IonSelectOption value="dg">dekagram</IonSelectOption> <br />
            <IonSelectOption value="g">gram</IonSelectOption> <br />
            <IonSelectOption value="dag">dekagram</IonSelectOption> <br />
            <IonSelectOption value="hg">hektagram</IonSelectOption> <br />
            <IonSelectOption value="kg">kilogram</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="result"> Ke :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="massa"
            placeholder="Pilih Satuan"
            onIonChange={(e) => endpoint(e.target.value)}
          >
            <IonSelectOption value="mg">mililigram</IonSelectOption> <br />
            <IonSelectOption value="cg">centigram</IonSelectOption> <br />
            <IonSelectOption value="dg">dekagram</IonSelectOption> <br />
            <IonSelectOption value="g">gram</IonSelectOption> <br />
            <IonSelectOption value="dag">dekagram</IonSelectOption> <br />
            <IonSelectOption value="hg">hektagram</IonSelectOption> <br />
            <IonSelectOption value="kg">kilogram</IonSelectOption> <br />
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

export default serviceMassa;
