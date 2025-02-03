import React, { useState } from "react";

const calculateWinner = (squares) => {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    for(let idx in lines){
        const [a, b, c] = lines[idx];
        if(squares[a] && squares[a]==squares[b] && squares[a]==squares[c]){
            return squares[a];
        }
    }
    return null
};

const Square = ({value, onSquareClick}) => {

    return (
        <button className="square" onClick={onSquareClick}>
            {value}
        </button>
    );
};

const TicTacToe = () => {

    const [xIsNext, setXIsNext] = useState(true); 

    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick(i){
        if(squares[i] || calculateWinner(squares)){
            return;
        }
        const nextSquares = [...squares];
        if(xIsNext==true){
            nextSquares[i] = "X";
            setXIsNext(false);
        } else{
            nextSquares[i] = "O";
            setXIsNext(true);
        }
        setSquares(nextSquares);
    };

    const winner = calculateWinner(squares);
    let status;
    if(winner){
        status = "Winner is " + winner +" 🥳 ";
    } else{
        status = "Next Player : " + (xIsNext ? 'X' : 'O');
    }

    return (
        <>
            <h3>Tic Tac Toe Game 😃</h3>
            <h5>{status}</h5>
            <br/>
            <table>
                <tr>
                    <td>
                        <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                    </td>
                    <td>
                        <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
                    </td>
                    <td>
                        <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                    </td>
                    <td>
                        <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
                    </td>
                    <td>
                        <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                    </td>
                    <td>
                        <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
                    </td>
                    <td>
                        <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
                    </td>
                </tr>
            </table>
        </>
    );
};

export default TicTacToe;