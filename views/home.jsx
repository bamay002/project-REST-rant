// importing React and the Def function we created in default.jsx

const React = require('react')
const Def = require('./default')


function home() {
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img width='480' src='/images/libra.jpeg' alt='libra symbol'></img>
                    <div>
                        Photo by <a href='https://www.vecteezy.com/members/screamsilence88291710' target='_blank' >Silence Scream</a> on <a href='https://www.vecteezy.com/vector-art/4679953-illustration-vector-antique-libra-scales-ornament-monochrome-style' target='_blank' > Vecteezy</a>
                    </div>
                </div>
                <a href='/places'>
                    <button className='btn-primary'>Places Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = home