import react from 'react'
import { useParams } from 'react-router-dom'

function profile() {

    const {username}=useParams()
return (
    <div>
        <h1>{username}</h1>
    </div>
)
}
export default profile     