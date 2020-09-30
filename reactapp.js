class Team extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shotsTaken: 0,
            score: 0,
        };
        this.scoreSound = new Audio('.sports/assets/audio/Swish.mp3');
        this.missSound = new Audio('.sports/assets/audio/Missed.mp3');
        this.name = props.name;
        this.logo = props.logo;
    }

    shotEvent = (event) => {
        let score = this.state.score;

        if (Math.random() > 0.5) {
            score += 1;

            this.scoreSound.play();
        } else {
            this.missSound.play();
        }
        this.setState((state, props) => ({
            shotsTaken: state.shotsTaken + 1,
            score,
        }));
    };


    render() {
        let shotPercentageStrong;

        if (this.state.shotsTaken) {
            const scorePercentage =
                (this.state.score / this.state.shotsTaken) * 100;
            shotPercentageStrong = (
                <strong>Score Percentage {scorePercentage}%</strong>
            );
        }
        return (
            <div id="stats">
                <h2>{this.name}</h2>
                <img src={this.logo} alt={this.name} />
                <br />
                <strong>Shots Taken {this.state.shotsTaken}</strong>
                <br />
                <strong>Score {this.state.score}</strong>
                <br />
                {shotPercentageStrong}
                <br />
                <button onClick={this.shotEvent}>Shoot</button>
            </div>
        );
    }
}

function Game(props) {
    return (
        <div id="Scoreboard">
            <h1>Welcome to {props.venue}</h1>
            <div id="teams">
                <Team name="NYC Spartan-Warriors" logo="./sports/assets/images/spartan-warriors.jpg" />
                <h2>VS</h2>
                <Team name="NJ Wolves" logo="./sports/assets/images/wolves.jpg" />
            </div>
        </div>
    );
}

function App(props) {
    return <Game venue="The spectrum Center" />;
}


ReactDOM.render(<App />, document.getElementById("root"));