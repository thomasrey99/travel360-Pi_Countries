import { useState, useEffect } from "react"
import {useSelector, useDispatch} from "react-redux"
import {useNavigate} from "react-router-dom"
import { postActivity } from "../../Redux/actions"
import validations from "./validations"
import "./FormActivity.css"
const FormActivity=()=>{
  const countries = useSelector((state) => state.allCountriesBackup);
  const message = useSelector((state) => state.message);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    name: "",
    season: "",
    duration: null,
    dificulty: null,
    idCountries: [],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;

    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postActivity(data));
    setData({
      name: "",
      season: "",
      duration: null,
      dificulty: null,
      idCountries: [],
    });
  };

  const handleChangeCountries = async (event) => {
    const { value, name } = event.target;
    const selectedOptions = [...data.idCountries];
    if (!selectedOptions.includes(value)) {
      const addCountryId = [...selectedOptions, value];
      setData({
        ...data,
        idCountries: addCountryId,
      });
    } else {
      const dropCountry = [...data.idCountries];
      const indexCountry = dropCountry.indexOf(value);
      dropCountry.splice(indexCountry, 1);
      setData({
        ...data,
        idCountries: dropCountry,
      });
    }
  };

  useEffect(() => {
    const validationErrors = validations(data);
    setErrors(validationErrors);
  }, [data]);
    return (
        <main className="main-form">
            <h2>Crear actividad</h2>
            <form className="form-cont" onSubmit={handleSubmit}>
                <label htmlFor="name">Actividad</label>
                <input name="name" className="input" value={data.name} onChange={handleChange}/>
                {
                    errors.longName
                    ?
                    (<label htmlFor="name" className="error">{errors.longName}</label>)
                    :
                    errors.emptyName
                    ?
                    (<label htmlFor="name" className="error">{errors.emptyName}</label>)
                    :
                    errors.invalidName
                    ?
                    (<label htmlFor="name" className="error">{errors.invalidName}</label>)
                    :" "
                }
                <label htmlFor="duration">Duracion (hs)</label>
                <input type="number" name="duration" className="input" value={data.duration} onChange={handleChange}/>
                {
                    errors.emptyDuration
                    ?
                    (<label htmlFor="duration" className="error">{errors.emptyDuration}</label>)
                    :" "
                }
                <label htmlFor="dificulty">Dificultad</label>
                <select name="dificulty" className="input" value={data.dificulty} onChange={handleChange}>
                    <option disabled selected>Seleccionar</option>
                    <option value={1} >Facil</option>
                    <option value={2} >Moderado</option>
                    <option value={3} >Intermedio</option>
                    <option value={4} >Avanzado</option>
                    <option value={5} >Extremo</option>
                </select>
                {
                    errors.emptyDificulty
                    ?
                    (<label htmlFor="dificulty" className="error">{errors.emptyDificulty}</label>)
                    : " "
                }
                <label htmlFor="season">Temporada</label>
                <select name="season" className="input" value={data.season} onChange={handleChange}>
                    <option disabled value="">Seleccionar</option>
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño</option>
                    <option value="Invierno">Invierno</option>
                    <option value="Primavera">Primavera</option>
                </select>
                {
                    errors.emptySeason
                    ?
                    (<label htmlFor="season" className="error">{errors.emptySeason}</label>)
                    : " "
                }
                <label htmlFor="idCountries">Paises</label>
                <select name="idCountries" multiple value={data.idCountries} onChange={handleChangeCountries}>

                    {
                        countries.map(({id, name}, index)=>{
                            return (
                                <option key={index} value={id}>{name}</option>
                            )
                        })
                    }
                </select>
                {
                    errors.emptyCountry
                    ?
                    (<label htmlFor="idCountries" className="error">{errors.emptyCountry}</label>)
                    :
                    " "
                }
                <button type="submit" disabled={Object.keys(errors).length!==0}>Crear</button>
            </form>
            {
                message && message==="Actividad creada con exito"
                ?
                <p className="success" id="created">{message} <span class="material-symbols-outlined">check_circle</span></p>
                :
                message && message==="La actividad ya existe"
                ?
                <p className="error" id="exist">{message} <span class="material-symbols-outlined">cancel</span></p>
                :" "
            }
        </main>
    )
}

export default FormActivity