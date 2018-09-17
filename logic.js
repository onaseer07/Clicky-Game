

var game = {

    
    setScore: 0,
    photoArray: [1,2,3,4],
    trackingArray:[],
    message:'Click an image to begin',
    startGame: () => {
        this.setScore = 0,
        this.photoArray,
        this.trackingArray,
        this.message
    },
    rightGuess: ()=>{
        this.setScore++,
        this.shuffleArray()
    }
};
// }






//  Create function to shuffle array
// shuffle = function(){
//     ...
// }

// //create a trackingArray to store values of index that user clicked on using (this.attr('data-id))
// //each time user clicks system checks to see if the value exists in trackingArray
//     //if it does exists then wrongGuess() + startGame()
//         //else rightGuess()     
// // on click (.className) invoke the shuffle method

// */