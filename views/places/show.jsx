const React = require('react')
const Def = require('../default')

function show () {
    return(
        <Def>
            <main>
                <h1>{ data.place.name }</h1>
                <h2>Rating</h2>
                <h3>Not Rated</h3>
                <h2>Description</h2>
                <h3>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</h3>
                <h2>Comments</h2>
                <h3>No comments yet!</h3>
            </main>
        </Def>
    )
}

module.exports = show

