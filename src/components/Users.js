import React from 'react'
import { useSearchParams, Outlet } from 'react-router-dom'

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'active';

    return (
        <div>
            <h2>User 1</h2>
            <h2>User 2</h2>
            <h2>User 3</h2>

            <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
            <button onClick={() => setSearchParams({})}>Reset Users</button>

            {
                showActiveUsers ? (
                    <h2>Showing active users</h2>
                ) : (
                    <h2>Showing all users</h2>
                )
            }

            <Outlet />
        </div>
    )
}

export default Users