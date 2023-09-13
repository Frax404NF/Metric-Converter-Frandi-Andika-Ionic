import { IonList, IonItem, IonSelect, IonSelectOption, IonButton, IonInput } 
from "@ionic/react";
import "./Home.css";
import { useState } from "react";

const serviceJumlahZat: React.FC = () => {
    const [dari, awal] = useState("");
    const [ke, endpoint] = useState("");
    const [angka, nilai] = useState(0);
    const [hasil, total] = useState(0);

    const kalkulasi = () => {
      const satuan = ["mol", "mol/L", "mol/m³", "mol/g"];
      const kali = [1, 1 / 1000, 1 / 1000000, 1 / 1000000000];

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
            aria-label="jumlah zat"
            placeholder="Pilih Satuan"
            onIonChange={(e) => awal(e.target.value)}
          >
            <IonSelectOption value="mol">Mol</IonSelectOption> <br />
            <IonSelectOption value="mol/L">Mol per liter</IonSelectOption>{" "}
            <br />
            <IonSelectOption value="mol/m³">
              Mol per meter kubik
            </IonSelectOption>{" "}
            <br />
            <IonSelectOption value="mol/g">Mol per gram</IonSelectOption> <br />
          </IonSelect>
        </IonItem>
      </IonList>

      <p className="result"> Ke :</p>
      <IonList>
        <IonItem>
          <IonSelect
            aria-label="jumlah zat"
            placeholder="Pilih Satuan"
            onIonChange={(e) => endpoint(e.target.value)}
          >
            <IonSelectOption value="mol">Mol</IonSelectOption> <br />
            <IonSelectOption value="mol/L">Mol per liter</IonSelectOption>{" "}
            <br />
            <IonSelectOption value="mol/m³">
              Mol per meter kubik
            </IonSelectOption>{" "}
            <br />
            <IonSelectOption value="mol/g">Mol per gram</IonSelectOption> <br />
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
      <IonButton
        className="tombol"
        expand="block"
        color="primary"
        onClick={() => kalkulasi()}
      >
        Convert
      </IonButton>
      <p className="result"> Hasil : {hasil} {ke} </p>
    </>
  );
};

export default serviceJumlahZat;
