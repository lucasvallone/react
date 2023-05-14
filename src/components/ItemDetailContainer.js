import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import ItemDetail from './ItemDetail'
import Loader from "./Loader"
import { useParams } from "react-router-dom"
import { db } from "./Firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

function ItemDetailContainer() {
  const [FirebaseDB, setFirebaseDB] = useState([])
  const [Loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {

    const coleccionJuegos = collection(db, "games")
    const filtroJuego = query(coleccionJuegos, where("id", "==", Number(id)))
    const respuestaJuegos = getDocs(filtroJuego)

    respuestaJuegos
      .then((res) => {
        const detalleJuego = res.docs.map(doc => doc.data())
        setFirebaseDB(detalleJuego[0])
      })
      .catch((err) => toast.error(err))
      .finally(() => setLoading(false))
  }, [id])

  return (
    <>
      {Loading ? <Loader /> : <ItemDetail database={FirebaseDB} />}
    </>
  )
}

export default ItemDetailContainer