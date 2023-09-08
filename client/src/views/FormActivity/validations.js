const validations=(data)=>{
    let errors={}
    const regex=/^[A-Za-z\s]+$/u
    const {name, season, duration, dificulty, idCountries}=data
    if(name.length>20){
        errors.longName="EL nombre no puede tener mas de 20 letras"
    }
    if(name.length===0){
        errors.emptyName="Debe incluir el nombre de la actividad"
    }
    if(!regex.test(name)){
        errors.invalidName="El nombre solo puede tener letras de la A-Z"
    }
    if(!season){
        errors.emptySeason="Debe agregar una estacion a la actividad"
    }
    if(!duration){
        errors.emptyDuration="Debe agregar una duracion a la actividad"
    }
    if(!dificulty){
        errors.emptyDificulty="Debe agregar una dificultad"
    }
    if(idCountries.length===0){
        errors.emptyCountry="Debe asociar paises a la actividad"
    }
    return errors
}

export default validations