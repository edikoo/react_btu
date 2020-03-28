import React from 'react';
import PropTypes from 'prop-types';
import CarItem from './CarItem';


let id = 100;
const carList = [
    { name: "BMW", id: id++ },
    { name: "MERCEDES", id: id++ },
    { name: "Audi", id: id++ },
    { name: "Opel", id: id++ },
    { name: "Lada", id: id++ }
]

class Cars extends React.Component {

    componentDidMount() {
        console.log("[Cars.js] componentDidMount")
    }

    componentDidUpdate() {
        console.log("[Cars.js] componentDidUpdate")
    }

    componentWillMount() {
        console.log("[Cars.js] componentWillMount")
    }

    handleremoval(user) {
        console.log('[Cars.js] handeemoval')
        console.log(user)
    }

    render() {
        const {cars} = this.state;
        return (
            <div>
                <h2>
                    Cars.js
                </h2>
                {cars.length > 0 ? cars.map(car => <CarItem key={car.id} car={car} handleremoval={this.handleremoval} />) : null}
            </div>
        )
    }

}

export default Cars;