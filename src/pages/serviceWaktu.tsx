import { IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonInput }
from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const serviceWaktu: React.FC = () => {
  const [dari, awal] = useState("");
  const [ke, endpoint] = useState("");
  const [angka, nilai] = useState(0);
  const [hasil, total] = useState(0);

  const kalkulasi = () => {
    const metrik = ["s", "m", "h"];
    const kali = [1, 60, 3600];

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
            aria-label="waktu"
            placeholder="Pilih Satuan"
            onIonChange={(e) => awal(e.target.value)}
          >
            <IonSelectOption value="s">sekon</IonSelectOption> <br />
            <IonSelectOption value="m">menit</IonSelectOption> <br />
            <IonSelectOption value="h">jam</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="result"> Ke :</p>
      <IonList inset={true}>
        <IonItem>
          <IonSelect
            aria-label="waktu"
            placeholder="Pilih Satuan"
            onIonChange={(e) => endpoint(e.target.value)}
          >
            <IonSelectOption value="s">sekon</IonSelectOption> <br />
            <IonSelectOption value="m">menit</IonSelectOption> <br />
            <IonSelectOption value="h">jam</IonSelectOption> <br />
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
      <p className="result">
        Hasil : {hasil} {ke}
      </p>
    </>
  );
};

export default serviceWaktu;
