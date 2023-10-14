import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() =>{
    setTimeout(()=>{
      navigate("/")
    }, 3000)

  }, [navigate])

  return (
    <div className="Informative-seccion">
      <h1>¡Lo sentimos!</h1>
      <h2>La página ingresada no existe.</h2>
      <p>Usted será dirigido al Home en 3 segundos...</p>
    </div>
  )
}

export default NotFound
