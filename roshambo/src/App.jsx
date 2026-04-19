import { useState } from "react";
import "./App.css";
import Header from "./Header.jsx";
import questionImg from "./assets/question-mark.PNG";
import PlayerThrow from "./PlayerThrow.jsx";
import Scoreboard from "./Scoreboard.jsx";
import paperImg from "./assets/paper.PNG";
import rockImg from "./assets/rock.PNG";
import scissorsImg from "./assets/scissors.PNG";
import ComputerThrow from "./ComputerThrow.jsx";

function App() {
  const Choices = [
    { name: "Rock", img: rockImg },
    { name: "Paper", img: paperImg },
    { name: "Scissors", img: scissorsImg },
  ];
  const [isDeciding, setIsDeciding] = useState(false);
  const [PlayerScore, setPlayerScore] = useState(0);
  const [ComputerScore, setComputerScore] = useState(0);
  const msgDefault = "Awaiting Player Input";
  const [gameMessage, setGameMessage] = useState(msgDefault);

  const resetScore = () => {
    setPlayerScore(0);
    setComputerScore(0);
    setComputerChoice({
      name: "Unknown",
      image: questionImg,
    });
    setGameMessage(msgDefault);
  };

  const playGame = (playerChoice) => {
    if (isDeciding) return;
    setIsDeciding(true);
    //computer random selection here
    let count = 0;
    const shuffleInterval = setInterval(() => {
      const tempChoice = Choices[count % Choices.length];
      setComputerChoice({
        name: tempChoice.name,
        image: tempChoice.img,
      });
      count++;
      if (count > 18) {
        clearInterval(shuffleInterval);
        const randomChoice = Math.floor(Math.random() * Choices.length);
        const compChoice = Choices[randomChoice];
        setComputerChoice({
          name: compChoice.name,
          image: compChoice.img,
        });
        const result = DetermineWinner(playerChoice, compChoice.name);
        if (result == "Win") {
          setPlayerScore((prev) => prev + 1);
          setGameMessage("You Won the Round!");
        } else if (result == "Lose") {
          setComputerScore((prev) => prev + 1);
          setGameMessage("The Computer Won the Round!");
        } else if (result == "Tie") {
          setGameMessage("The Round was a Tie!");
        } else {
        }

        setIsDeciding(false);
      }
    }, 166);
  };
  // game logic
  const DetermineWinner = (player, computer) => {
    if (player === computer) {
      return "Tie";
    }
    /*     if (
      (player == "Rock" && computer == "Scissors") ||
      (player == "Paper" && computer == "Rock") ||
      (player == "Scissors" && computer == "Paper")
    ) {
      return "Win";
    } else return "Lose"; */
    const combination = `${player}-${computer}`;
    switch (combination) {
      case "Rock-Scissors":
      case "Paper-Rock":
      case "Scissors-Paper":
        return "Win";
      default:
        return "Lose";
    }
  };

  const [computerChoice, setComputerChoice] = useState({
    name: "Unknown",
    image: questionImg,
  });

  return (
    <>
      <Header />
      <ComputerThrow choice={computerChoice} />
      <Scoreboard
        playerScore={PlayerScore}
        computerScore={ComputerScore}
        gameMessage={gameMessage}
        onReset={resetScore}
      />
      <PlayerThrow Choices={Choices} onSelect={playGame} />
    </>
  );
}

export default App;
