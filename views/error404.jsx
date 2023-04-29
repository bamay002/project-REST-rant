const React = require('react')
const Def = require('./default')

function error404 () {
    return(
    <Def>
        <main>
            <h1> 404: PAGE NOT FOUND</h1>
            <p>Oops, sorry, we cannot find this page!</p>
            <div>
                <img width='480' src='/images/404image.jpeg' alt='ghost saying page not found'></img>
                <div>
                Photo by <a href='https://www.impactplus.com/blog/author/liz-murphy' target='_blank' >Liz Murphy</a> on <a href='https://www.impactplus.com/blog/best-404-error-page-examples' target='_blank' > Impactplus</a>
                </div>
            </div>
        </main>
    </Def>
    )
}

module.exports = error404