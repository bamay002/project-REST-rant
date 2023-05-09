const db = require('../model')

//TO USE AWAIT, WE NEED AN ASYNC FUNCTION
async function seed(){
    //Get the place
    let place = await db.Place.findOne({ name: 'Cravez' })

    //Create a fake sample comment
    let comment = await db.Comment.create({
        author: 'Beast Ernie',
        rant: false,
        stars: 5.0,
        content: 'Wow, simply amazing! Highly recommended'
    })

    //Add that comment to the place's comment array
    place.comments.push(comment.id)

    //Save the place now that it has a comment
    await place.save()

    //Exit the program
    process.exit()
}   

seed() 