class Team extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            shots: 0,
            score: 0,
        };

        this.shotSound = new Audio('./assets/audio/Swoosh.wav')
        this.scoreSound = new Audio('./assets/audio/Swish.wav')

    }






    shotHandler = () => {
        let score = this.state.score;

        this.shotSound.play()

        if (Math.random() > 0.5) {
            score += 1;

            this.scoreSound.play()


        }

        this.setState((state, props) => ({
            shots: state.shots + 1,
            score,
        }));
    };

    render() {
        return (
            <div className="Team">
                <h2>{this.props.name}</h2>

                <div className="identity">
                    <img src={this.props.logo} alt={this.props.name} />
                </div>
                <div>
                    <strong>shots:</strong> {this.state.shots}
                </div>
                <div>
                    <strong>score:</strong> {this.state.score}
                </div>
                <button onClick={this.shotHandler}>shoot!</button>
            </div>
        );
    }
}
function App(props) {
    return (
        <div className="App">
            <div className="stats">
                <Team name="NYC Spartan-Warriors" logo="./sports/assets/images/spartan-warriors.jpg" />

                <div className="versus">
                    <h1>VS</h1>
                </div>

                <Team name="NJ Wolves" logo="./sports/assets/images/wolves.jpg" />
            </div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));