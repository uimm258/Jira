import React from 'react'
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useEffect, useState } from "react"

const apiURL = process.env.REACT_APP_API_URL
export const ProjectListScreen = () => {
    const [param, setParam] = useState({
        name: '',
        personId: ' '
    })
    const [list, setList] = useState([])

    useEffect(() => {
        fetch(`${apiURL}/projects`).then(async res => {
            if(res.ok){
                setList(await res.json())
            }
        })
    }, [param])

    return <div>
        <SearchPanel param={param} setParam={setParam}/>
        <List list={list}/>
    </div>
}