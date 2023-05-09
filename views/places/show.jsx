const React = require('react')
const Def = require('../default')

function show (data) {
    
    let comments = (
        <h4 className='inactive'>
            No comments yet!
        </h4>
    )

    //logic to show comments
    if (data.place.comments.length)(
        comments = data.place.comments.map(c => {
            return(
                <div className='border'>
                    <h2 className='rant'>
                        {c.rant ? 'Rant! 😡' : 'Rave! 😍'}
                    </h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    )

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

                    <hr />

                <div className='footer'>
                    <h2>Comments</h2>
                    {comments}
                </div>

            </main>
        </Def>
    )
}

module.exports = show

