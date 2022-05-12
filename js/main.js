class GameSquare{
    constructor(name){
        this._name = name
        this._value = ''
    }
    get name(){
        return this._name
    }

    get value(){
        return this._value 
    }

    makeX(n){
        //set value = 'X' and to write a big X to the dom
        this._value='X'
        let square=('#s'+n)
        console.log(`square is ${square}`)
        document.querySelector(square).innerText=(`X`)
        document.querySelector('h2').innerText=(`Player Two's Turn`)
        if (isThereWinner()){
            document.querySelector('h2').innerText=(`Player One Wins!`)
        }
    }

    makeO(n){
        //set value = 'O' and to write a big O to the dom
        this._value='O'
        let square=('#s'+n)
        console.log(`square is ${square}`)
        document.querySelector(square).innerText=(`O`)
        document.querySelector('h2').innerText=(`Player One's Turn`)
        if (isThereWinner()){
            document.querySelector('h2').innerText=(`Player Two Wins!`)
        }   
    }
    clear(){
        //Clear any X or O, set value to '' and clear dom
        this._value = ''
        document.querySelector('#'+this._name).innerText=(``)
    }
}

//create 9 new gameSquares for the game
let s0 = new GameSquare('s0')
let s1 = new GameSquare('s1')
let s2 = new GameSquare('s2')
let s3 = new GameSquare('s3')
let s4 = new GameSquare('s4')
let s5 = new GameSquare('s5')
let s6 = new GameSquare('s6')
let s7 = new GameSquare('s7')
let s8 = new GameSquare('s8')

let gameSquares = [s0,s1,s2,s3,s4,s5,s6,s7,s8]

//function to check if either player has won
function isThereWinner(){
    if ( (s0.value===s1.value&&s0.value===s2.value&&s0.value!='') || (s3.value===s4.value&&s3.value===s5.value&&s5.value!='') ||
         (s6.value===s7.value&&s6.value===s8.value&&s8.value!='') || (s0.value===s3.value&&s0.value===s6.value&&s6.value!='') || 
         (s1.value===s4.value&&s1.value===s7.value&&s7.value!='') || (s2.value===s5.value&&s2.value===s8.value&&s8.value!='') || 
         (s0.value===s4.value&&s0.value===s8.value&&s8.value!='') ){
        return true
    }else{
        return false
    }
}

let turnCount=1
document.querySelector('#s0').addEventListener('click',function() { selectSquare(0); })
document.querySelector('#s1').addEventListener('click',function() { selectSquare(1); })
document.querySelector('#s2').addEventListener('click',function() { selectSquare(2); })
document.querySelector('#s3').addEventListener('click',function() { selectSquare(3); })
document.querySelector('#s4').addEventListener('click',function() { selectSquare(4); })
document.querySelector('#s5').addEventListener('click',function() { selectSquare(5); })
document.querySelector('#s6').addEventListener('click',function() { selectSquare(6); })
document.querySelector('#s7').addEventListener('click',function() { selectSquare(7); })
document.querySelector('#s8').addEventListener('click',function() { selectSquare(8); })
document.querySelector('#reset').addEventListener('click',reset)

function selectSquare(n){
    //use turn count to determine if we're adding an X or O. For odd turnCount number add X, and for even number add O
    if( gameSquares[n].value=='' && !isThereWinner() ){
        turnCount+=1
        turnCount%2==0 ? gameSquares[n].makeX(n) : gameSquares[n].makeO(n)
    }else {
        return
    }
}

function reset(){
    for(square of gameSquares){
        square.clear()
    }
    document.querySelector('h2').innerText=(`Let's Play Again!`)
    turnCount=1
}