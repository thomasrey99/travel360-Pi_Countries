import { useState } from "react";
import { filter, order, getAllCountries } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import "./Filter-Order.css";

const FilterOrder = ({ activities }) => {
  const dispatch = useDispatch();

  const continents = ["South America", "Africa", "Antarctica", "Europe", "North America", "Asia", "Oceania"];

  const [continent, setContinent] = useState("");
  const [activity, setActivity] = useState("");
  const [selectedOrder, setSelectedOrder] = useState("Order"); // Estado para el valor seleccionado en "order"

  const handleClear = () => {
    dispatch(getAllCountries());
    setSelectedOrder("Order"); 
    setActivity("Actividad")
    setContinent("Continente")
  };

  const handleChangeContinent = (event) => {
    setContinent(event.target.value);
    dispatch(
      filter({
        continentFilter: event.target.value,
        activityFilter: activity,
      })
    );
  };

  const handleOrder = (event) => {
    setSelectedOrder(event.target.value); // Actualiza el estado de "order"
    dispatch(order(event.target.value));
  };

  const handleChangeActivity = (event) => {
    setActivity(event.target.value);
    setSelectedOrder("Order"); // Restablece el valor de "order" a "Order"
    dispatch(
      filter({
        continentFilter: continent,
        activityFilter: event.target.value,
      })
    );
  };

  return (
    <div className="section-allCountries">
      <div className="order-filter">
        <div className="all-button" onClick={handleClear}>
          <p>Limpiar</p>
        </div>
        <div className="select-cont">
          <select onChange={handleOrder} value={selectedOrder}>
            <option disabled value="Order">Order</option>
            <option value="a-z">a-z</option>
            <option value="z-a">z-a</option>
            <option value="population">Population</option>
          </select>
        </div>
        <div className="select-cont">
          <select value={activity} onChange={handleChangeActivity}>
            <option disabled value="Actividad">Actividad</option>
            <option value="">Todos</option>
            {activities.map(({ name }, index) => {
              return (
                <option key={index} value={name}>
                  {name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="select-cont">
          <select value={continent} onChange={handleChangeContinent}>
            <option disabled value="Continente">Continente</option>
            <option value="">Todos</option>
            {continents.map((continent, index) => {
              return (
                <option key={index} value={continent}>
                  {continent}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterOrder;
