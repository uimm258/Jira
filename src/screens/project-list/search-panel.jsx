import React from 'react'
import { useEffect, useState } from "react"

export const SearchPanel = ({param, setParam}) => {
    const [users, setUsers] = useState([])
    

    return <form action="">
        <div>
            <input type="text" value={param.name} onChange={e=>setParam({
                ...param,
                name: e.target.value
            })}/>
            <select value={param.personId} onChange={e.setParam({
                ...param,
                personaId: e.target.value
            })}>
                <option value={''}>Manager</option>
                {
                    users.map(user => <option key={users.id}>{users}</option>)
                }
            </select>
        </div>
    </form>
}