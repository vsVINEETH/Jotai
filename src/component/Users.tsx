import React from 'react'
import { userAtom } from '../state/atom'
import { useAtom } from 'jotai'
const Users: React.FC = () => {
    const [users] = useAtom(userAtom);
    if(users.state === 'loading'){
        return(<div>loading</div>)
    };
    if (users.state === "hasError"){ 
        const error = users.error as Error;
        return(
            <div>Error:{error.message}</div>
        )
    };

   if(users.state === 'hasData'){
    return (
        <div>
            {JSON.stringify(users.data)}
        </div>
    )
    };
  return (
    <div>Users</div>
  )
}


export default Users