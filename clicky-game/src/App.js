import React, {Component}from 'react';
import Header from './components/header';
import Jumbotron from './components/jumbotron';
import Card from './components/card';
import Footer from './components/footer';
import Avengers from "./avengers.json";

class App extends Component{
    
    //define state:
    state = {
        score:0,
        topScore:0,
        characters:Avengers,
    }
    //handleOnClick:
    handleClick = ()=> {
        
        //create a shuffle function to shuffle this.state.characters
        // const trackArray = [];
        // const idValue = this.attr('id');
        // trackArray.push(idValue);
        
        //create a blank tracking array(TA)
        //If id exists in TA {restartGame}
            //else { push the id in TA
            //update the score state by 1 & shuffle array
        //}
    }
    
    restartGame = ()=> {
        //setState(score = 0)
        //setState(topscore)
    }
    
    render(){
        return (
            <div className='container-fluid'>
            <Header message='Click to begin the game'/>
            <Jumbotron gameName='Clicky Game' rules="Click on an image to earn points, but don't click on any more than once!"/>
            <div id='cards' className='container'>
            {this.state.characters.map(e=>{
                return <Card key={e.id} id={e.id} name={e.name} url={e.image} handleClick={this.handleClick}/>
            })}
            </div>
        
            <Footer />
            </div>
        );
    }

}


export default App;