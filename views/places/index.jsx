const React = require('react')
const Def = require('../default')


 /*function place() {
    return (
        <Def>
            <main>
                <h1>PLACES</h1>
            </main>
        </Def>
    )
} 

module.exports = place */

function index(data){
    let placesFormatted = data.places.map((place) => {
        return (
            <div>
                <h2>{place.name}</h2>
                <img width='480' src={place.pic} alt={place.name}></img>
            </div>
        )
    })
    return (
        <Def>
            <main>
                <h1>PLACES INDEX PAGE</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index

/* function error404() {
    return(
    <Def>
        <main>
            <h1> 404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we cannot find this page!</p>
            <img src= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw4wMuLUjH4mmiAsTxEEUISPhPtoN_UZ-8Hg&usqp=CAU' alt='ghost saying page not found'></img>
        </main>
    </Def>
    )
}

module.exports = error404 */