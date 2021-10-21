import React from 'react'
import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { useEffect, useState } from "react"

const apiURL = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])
    const [list, setList] = useState([])
    const [param, setParam] = useState({
        name: '',
        personId: ' '
    })

    useEffect(() => {
        fetch(`${apiURL}/projects`).then(async res => {
            if(res.ok){
                setList(await res.json())
            }
        })
    }, [param])

    useEffect(() => {
        fetch(`${apiURL}/users`).then(async res => {
            if(res.ok){
                setUsers(await res.json())
            }
        })
    })

    return <div>
        <SearchPanel users={users} param={param} setParam={setParam}/>
        <List users={users} list={list}/>
    </div>
}