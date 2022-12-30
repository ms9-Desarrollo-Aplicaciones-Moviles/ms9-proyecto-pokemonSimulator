
import './DifficultyMenu.css';
import React from 'react';

class DifficultyMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedOption: 'easy',
      message: null,
    };
  }

  handleKeyDown = (event) => {
    if (event.keyCode === 38) {
      // Flecha hacia arriba
      this.setState((prevState) => {
        if (prevState.selectedOption === 'easy') {
          return { selectedOption: 'hard' };
        } else if (prevState.selectedOption === 'medium') {
          return { selectedOption: 'easy' };
        } else if (prevState.selectedOption === 'hard') {
          return { selectedOption: 'medium' };
        }
      });
    } else if (event.keyCode === 40) {
      // Flecha hacia abajo
      this.setState((prevState) => {
        if (prevState.selectedOption === 'easy') {
          return { selectedOption: 'medium' };
        } else if (prevState.selectedOption === 'medium') {
          return { selectedOption: 'hard' };
        } else if (prevState.selectedOption === 'hard') {
          return { selectedOption: 'easy' };
        }
      });
    } else if (event.keyCode === 13) {
      // Enter
      this.setState({
        message: `Dificultad seleccionada: ${this.state.selectedOption}`,
      });
    }
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <div className="difficulty-menu">
        <h1>Selecciona la dificultad:</h1>
        <p>
          {this.state.selectedOption === 'easy' && '🟢 Fácil'}
          {this.state.selectedOption === 'medium' && '🟡 Medio'}
          {this.state.selectedOption === 'hard' && '🔴 Difícil'}
        </p>
        {this.state.message && <p>{this.state.message}</p>}
      </div>
    );
  }
}
export default DifficultyMenu;