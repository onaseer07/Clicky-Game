import React, {Component}from 'react';
import Header from './components/header';
import Jumbotron from './components/jumbotron';
import Card from './components/card';
import Footer from './components/footer';
import Avengers from "./avengers.json";

        //shuffleArray:
const cupidShuffle = data=> (
        data.map(a => [Math.random(), a])
            .sort((a, b) => a[0] - b[0])
            .map(a => a[1]) 
    );

class App extends Component{
        constructor(props){
            super(props);

            this.state = {
                score:0,
                topScore:0,
                characters:Avengers
            }

            this.handleClick = this.handleClick.bind(this);
            // this.renderCards = this.renderCards.bind(this);
        }
        

        
        //handleOnClick:
        handleClick = (i)=> {
            const {id,name} = i.target;
            const avenger = this.state.characters;
            console.log(id,name);

            if (avenger[id].clicked) {
                this.setState({
                    characters: cupidShuffle(avenger.map((character,index)=>{
                        return(index[id]) ?  {...character, clicked:true} : character
                    }))
                });
                this.setState({score:this.state.score + 1})
                this.setState({score:this.state.topScore + 1})
            }   


        }             

    render(){
        return (
            <div className='container-fluid'>
            <Header message='Click to begin the game' currentScore={this.state.score} topScore={this.state.topScore} />
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