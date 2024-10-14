import Grid from "@/pages/components/Grid";
import Keyboard from "@/pages/components/Keyboard";

export default function Home() {

    const keyPressed = (key) => {
        console.log(key);
    }

    return (
        <div className="game-container">
            <h1>Wordle!</h1>
            <Grid />
            <Keyboard onKeyPress={keyPressed}/>
        </div>
    );
}
