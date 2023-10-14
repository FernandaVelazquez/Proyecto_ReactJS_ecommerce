import { useNavigate } from "react-router-dom";
import { useEffect } from "react";


const FAQs = () => {
  const navigate = useNavigate();

  useEffect(() =>{
    setTimeout(()=>{
      navigate("/")
    }, 3000)

  }, [navigate])

  return (
    <div className="Informative-seccion">
       <h1>¡Lo sentimos!</h1>
    <h2>Esta sección está en construcción.</h2>
    <p>Pronto podrás acceder a esta sección y toda la información.</p>
      <p>Mientras, Usted será dirigido al Home en 3 segundos...</p>
    </div>
  )
}

export default FAQs