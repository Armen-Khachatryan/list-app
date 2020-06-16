import React from 'react';
import './styles.css';
class InputList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prosList: [{ id: 1, value: '' }],
      consList: [{ id: 1, value: '' }],
      value: ''
    };
  }

  handleProsListChange = (event, index, callback) => {
    event.preventDefault();
    let prosList = this.state.prosList;
    prosList[index].id = index + 1;
    prosList[index].value = event.target.value;

    this.setState({ prosList }, () => {
      console.log('proslist', this.state.prosList[index]);
      callback();
    });
  };

  handleConsListChange = (event, index, callback) => {
    event.preventDefault();
    let consList = this.state.consList;
    consList[index].id = index + 1;
    consList[index].value = event.target.value;

    this.setState({ consList }, () => {
      callback();
    });
  };

  render() {
    return (
      <div className='flex-container'>
        <ol>
          {this.state.prosList.map((item, index) => {
            return (
              <li key={index}>
                <input
                  type='text'
                  onChange={event => {
                    this.handleProsListChange(event, index, () => {
                      let prosList = this.state.prosList;
                      if (
                        item.id === this.state.prosList.length &&
                        item.value
                      ) {
                        prosList.push({ id: item.id + 1, value: '' });
                        this.setState({ prosList });
                      }
                      if (!item.value) {
                        prosList.splice(index, 1);
                        this.setState({ prosList });
                      }
                    });
                  }}
                  value={item.value}
                ></input>
              </li>
            );
          })}
        </ol>

        <div className='vertical-line' />

        <ol>
          {this.state.consList.map((item, index) => {
            return (
              <li key={index}>
                <input
                  type='text'
                  onChange={event => {
                    this.handleConsListChange(event, index, () => {
                      let consList = this.state.consList;
                      if (
                        item.id === this.state.consList.length &&
                        item.value
                      ) {
                        consList.push({ id: item.id + 1, value: '' });
                        this.setState({ consList });
                      }
                      if (!item.value) {
                        consList.splice(index, 1);
                        this.setState({ consList });
                      }
                    });
                  }}
                  value={item.value}
                />
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
}

export default InputList;
