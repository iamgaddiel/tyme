import {getDoc, getDocs, collection, doc, addDoc} from 'firebase/firestore';
import { db } from './db';




const prescriptionCollection = collection(db, 'prescriptions');


export const savePrescription = async (prescriptions: any) => {
    try {
        const savedDoc = (await addDoc(prescriptionCollection, prescriptions)).id
        return savedDoc;
    } catch (error) {
        console.log('There was a error saving document', error)
    }
}


export const getAllPrescriptions = async () => {
   const prescriptionDocs = await getDocs(prescriptionCollection);
   const prescriptions = prescriptionDocs.docs.map( doc => doc.data());
   return prescriptions;
}


export const getPrescription = async (prescriptionsId: string) => {
    const prescriptionDocRef = doc(db, 'prescriptions', prescriptionsId)
    const prescription = (await getDoc(prescriptionDocRef)).data();
    return prescription;
}


export const deletePrescription = async (prescriptions: string) => {
    // ... save prescriptions
}



