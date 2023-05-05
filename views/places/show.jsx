const React = require('react')
const Def = require('../default')

function show (data) {
    return(
        <Def>
            <main>
                <h1>{ data.place.name }</h1>

                <div className='showpage'>
                        <img width='480' src={data.place.pic} alt={data.place.name}></img>
                        <p>
                            Located in {data.place.city}, {data.place.state}
                        </p>
                </div>

                <div className='showpage'>
                    <div>
                        <h2 className='headingshow'>Rating</h2>
                        <h4>Not Rated</h4>  
                    </div>
                    <div>
                        <h2 className='headingshow'>Description</h2>
                            <h4>{data.place.showEstablished()}</h4>
                            <p> Serving {data.place.cuisines}</p>
                    </div>
                </div>

                    <div className='buttons'>
                        <a href={`/places/${data.id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                    </div>

                    <div className='buttons'>
                        <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
                            <button type='submit' className='btn btn-danger'>
                                Delete
                            </button>
                        </form>
                    </div>

                    <hr></hr>

                <div className='footer'>
                    <h2>Comments</h2>
                    <h4>No comments yet!</h4>
                </div>

            </main>
        </Def>
    )
}

module.exports = show

