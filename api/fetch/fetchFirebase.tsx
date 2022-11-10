import {
    collection,
    getDocs,
    getDoc,
    DocumentData,
    query,
    QueryConstraint,
    DocumentReference,
    Firestore,
    getFirestore,
    doc
} from 'firebase/firestore';
import { db } from '../../config/firebase/firebaseConfig';

export interface fiterModel {
    field: string
    condition: string
    value: any
  }

export function getDocsByQuery(QueryConstraint: QueryConstraint[], collections: string): Promise<any> {
    return new Promise((resolve) => {
        getDocs(query(collection(db, collections), ...QueryConstraint))
            .then(data => {
                resolve(data.docs
                    .map(item => { return { ...item.data() } }))
            })
    })
}

export async function getDocDocumentData(DocumentData: DocumentReference<DocumentData>): Promise<any> {
    return await new Promise((resolve) => {
        getDoc(DocumentData).then((data: DocumentData) => {
            let DocumentData: any = { ...data.data() }
            return resolve(DocumentData)
        })
    })
}


export function createArrayQuery(): fiterModel[] {
    return []
}

export function createQuery(field: string, condition: string, value: any): fiterModel {
    return { field, condition, value }
}

export function getByID(collections: string,id: string): Promise<any> {
    return new Promise((resolve, rejects) => {
        getDocDocumentData(doc(getFirestore(), collections, id)).then((data) => {
            resolve(data)
        })
    })
}