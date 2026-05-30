import React from 'react'
import {getAiringTodays} from '../movies/Movie'
import { useEffect, useState } from 'react'

export const useAiringToday = () => {
    const [air, setAir] = useState([])
    const [loadings, setLoading] = useState(true)

    useEffect(() => {
        async function load() {
            const data = await getAiringTodays()
            setAir(data)
            setLoading(false)
        }
        load()
    }, [])

    return { air, loadings }
}
