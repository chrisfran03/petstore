import './home.scss'
import { Button } from "@mui/material"
import { useNavigate } from 'react-router-dom'
import dog from "../../assets/images/dog.jpg"

const Home = () => {
    const redirect = useNavigate();
    return (
        <div className="home">
            <h1>Welcome to Pet Store</h1>
            <Button variant='outlined' color='primary' onClick={() => redirect("/products")} >Products List</Button>
            <img src={dog} alt="dog" />

        </div>
    )
}

export default Home