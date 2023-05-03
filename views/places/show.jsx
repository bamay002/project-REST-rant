const React = require('react')
const Def = require('../default')

function show (data) {
    return(
        <Def>
            <main>
                <h1>{ data.place.name }</h1>

                <div className='showpage'>
                    <img width='480' src={data.place.pic} alt={data.place.name}></img>
                </div>

                <div className='showpage'>
                    <div>
                        <h2 className='headingshow'>Rating</h2>
                        <p>Not Rated</p>  
                    </div>
                    <div>
                        <h2 className='headingshow'>Description</h2>
                        <p>Located in {data.place.city}, {data.place.state} and serving {data.place.cuisines}</p>
                    </div>
                </div>

                    <div>
                        <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                        <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                            <button type='submit' className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>
                <div className='footer'>
                    <h2>Comments</h2>
                    <p>No comments yet!</p>
                </div>
            </main>
        </Def>
    )
}

module.exports = show

