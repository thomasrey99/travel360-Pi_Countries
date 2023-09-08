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

  const [dataCreated, setDataCreated]=useState({})

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
    setDataCreated(data)
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
    const {value} = event.target;
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
  const close=()=>{
    setDataCreated({})
  }
  useEffect(() => {
    const validationErrors = validations(data);
    setErrors(validationErrors);
  }, [data]);
    return (
        <main className="main-form">
            <div className="section-left">
              <h2 className="title-make">Crear actividad</h2>
              {
                Object.keys(dataCreated).length!==0
                ?
                <div className="alert">
                  <h3>
                    {message ==="Actividad creada con exito" ?(<span className="succes">{message}! <span class="material-symbols-outlined">check_circle</span></span>): message==="La actividad ya existe" ? (<span className="exist">{message}! <span class="material-symbols-outlined">cancel</span></span>):""}
                  </h3>
                  <p>Actividad: {dataCreated.name}</p>
                  <p>Temporada: {dataCreated.season}</p>
                  <p>Duracion: {dataCreated.duration} hs</p>
                  <p>Dificultad: {
                    dataCreated.dificulty==="1"?"Facil" : dataCreated.dificulty==="2"?"Moderado":dataCreated.dificulty==="3"?"Intermedio":dataCreated.dificulty==="4"?"Avanzado":dataCreated.dificulty==="5"?"Extremo":""
                  }</p>
                  <div className="close" onClick={close}><span>x</span></div>
                </div>
                :
                ""
              }
            </div>
            <form className="form-cont" onSubmit={handleSubmit}>
                <label htmlFor="name" className="label-desc">Actividad</label>
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
                <label htmlFor="duration" className="label-desc">Duracion (hs)</label>
                <input type="number" name="duration" className="input" value={data.duration} onChange={handleChange}/>
                {
                    errors.emptyDuration
                    ?
                    (<label htmlFor="duration" className="error">{errors.emptyDuration}</label>)
                    :" "
                }
                <label htmlFor="dificulty" className="label-desc">Dificultad</label>
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
                <label htmlFor="season" className="label-desc">Temporada</label>
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
                <label htmlFor="idCountries" className="label-desc">Paises</label>
                <select name="idCountries" multiple value={data.idCountries} onChange={handleChangeCountries} className="input-country">

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
                <button type="submit" disabled={Object.keys(errors).length!==0} id={Object.keys(errors).length!==0 ? "disabled": ""}>Crear</button>
            </form>
        </main>
    )
}

export default FormActivity