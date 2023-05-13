const React = require('react')
const Def = require('../default')

function show (data) {
    
    let comments = (
        <h4 className='inactive'>
            No comments yet!
        </h4>
    )

    let rating = (
        <h4 className='inactive'>
            Not Yet Rated
        </h4>
    )

    if (data.place.comments.length){
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars 
        }, 0)

        let averageRating = Math.round(sumRatings / data.place.comments.length)
        let stars =''
        for (let i = 0; i < averageRating; i++){
            stars += '⭐️'
        }
        rating = (
            <h4> {stars} </h4>
        )
    }
    //logic to show comments
    if (data.place.comments.length){
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
    }

    return(
        <Def>
            <main key=''>
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
                        {rating}
                    </div>
                    <div>
                        <h2 className='headingshow'>Description</h2>
                            <h4>{data.place.showEstablished()}</h4>
                            <p> Serving {data.place.cuisines}</p>
                    </div>
                </div>

                    <div className='buttons'>
                        <a href={`/places/${data.place.id}/edit`} className='btn btn-warning'>
                            Edit
                        </a>
                    </div>

                    <div className='buttons'>
                        <form method='POST' action={`/places/${data.place.id}?_method=DELETE`}>
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

            <hr />

                <form method='POST' action='/places/${data.place.id}/comment'>

                    <h2 className='comment'>Leave a Review!</h2>
                    <div className='row'>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <label htmlFor='author'>Author</label>
                        <input className='form-control' type='text' id='author' name='author' required />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <label htmlFor='content'>Content</label>
                        <input className='form-control' textarea id='content' name='content' required />
                    </div>
                    
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <label htmlFor='stars'>Star Rating</label>
                        <input className='form-control' type='range' min='0' max='5' id='stars' name='stars' step='0.5' required />
                    </div>
                    <div className='col-sm-6 col-md-4 col-lg-3'>
                        <label htmlFor='rant'>Rant</label>
                        <input className='form-control' type='checkbox' id='rant' name='rant'/>
                    </div>
                    </div>
                    <input className='btn btn-primary' type='submit' value='Submit Comment' />
                </form>

            </main>
        </Def>
    )
}

module.exports = show

