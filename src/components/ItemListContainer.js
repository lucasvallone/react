import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useParams } from "react-router-dom"
import ItemList from './ItemList'
import Loader from "./Loader"
import { db } from "./Firebase"
import { getDocs, collection, query, where } from "firebase/firestore"

function ItemListContainer() {
    const [productos, setProductos] = useState([])
    const [Loading, setLoading] = useState(true)
    const { categoria, favorito } = useParams()

    useEffect(() => {
        if (categoria) {
            const coleccionJuegos = collection(db, "games")
            const filtroJuegos = query(coleccionJuegos, where("categoria", "==", categoria))
            const respuestaJuegos = getDocs(filtroJuegos)

            respuestaJuegos
                .then(setLoading(true))
                .then((res) => { setProductos(res.docs.map(doc => doc.data())) })
                .catch((err) => toast.error(err))
                .finally(() => setLoading(false))
        }
        else if (favorito) {
            const coleccionJuegos = collection(db, "games")
            const filtroJuegos = query(coleccionJuegos, where("favorito", "==", Boolean(true)))
            const respuestaJuegos = getDocs(filtroJuegos)

            respuestaJuegos
                .then(setLoading(true))
                .then((res) => { setProductos(res.docs.map(doc => doc.data())) })
                .catch((err) => toast.error(err))
                .finally(() => setLoading(false))
        }
        else {
            const coleccionJuegos = collection(db, "games")
            const respuestaJuegos = getDocs(coleccionJuegos)

            respuestaJuegos
                .then(setLoading(true))
                .then((res) => { setProductos(res.docs.map(doc => doc.data())) })
                .catch((err) => toast.error(err))
                .finally(() => setLoading(false))
        }
    }, [categoria, favorito])

    return (
        <>
            {Loading ? <Loader /> : <ItemList productos={productos} />}
        </>
    )

}

export default ItemListContainer

