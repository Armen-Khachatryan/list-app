import React from 'react';
import './styles.css';
class InputList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prosList: [{ id: 1, value: '' }],
      consList: [],
      value: ''
    };
  }

  handleChange = (event, index) => {
    event.preventDefault();
    // this.setState({ [event.target.name]: event.target.value });
    let prosList = this.state.prosList;
    prosList[index]['id'] = index + 1;
    prosList[index]['value'] = event.target.value;

    this.setState({ prosList }, () => {
      console.log('proslist', this.state.prosList[index]);
    });
  };

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column'
            //   justifyContent: 'space-between'
          }}
        >
          {/* <div
            style={{
              display: 'flex',
              margin: '10px 0px 20px 30px',
              flexDirection: 'column'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '20px'
              }}
            >
              <p>1</p>
              <input
                // name={item.value}
                style={{ marginLeft: '20px' }}
                onChange={this.handleChange}
                // value={this.state.value}
                onFocus={() => {
                  let prosList = this.state.prosList;
                  prosList.push('a');
                  this.setState({ prosList });
                }}
              ></input>
            </div>
          </div> */}
          {this.state.prosList.map((item, index) => {
            return (
              <div
                key={index}
                style={{
                  display: 'flex',
                  margin: '10px 0px 20px 30px',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row'
                    // marginTop: '20px'
                  }}
                >
                  <p>{index + 1}</p>
                  <input
                    style={{ marginLeft: '20px' }}
                    onChange={event => {
                      this.handleChange(event, index);
                    }}
                    value={item.value}
                    // onFocus={() => {
                    //   if (item.id === this.state.prosList.length) {
                    //     let prosList = this.state.prosList;
                    //     prosList.push({ id: index + 1, value: '' });
                    //     this.setState({ prosList });
                    //   }
                    //   console.log('it!!', item, this.state.prosList.length);
                    // }}
                    onFocus={() => {
                      console.log('it!!!', item.id, this.state.prosList.length);
                      if (item.id === this.state.prosList.length) {
                        let prosList = this.state.prosList;
                        prosList.push({ id: item.id + 1, value: '' });
                        this.setState({ prosList });
                      }
                    }}
                  ></input>
                </div>
              </div>
            );
          })}
        </div>

        <div
          style={{
            width: 1,
            backgroundColor: 'gray',
            margin: '0px 0px 0px 8.75vw'
          }}
        ></div>

        {/* <div
          style={{
            display: 'flex',
            flexDirection: 'column'
            //   justifyContent: 'space-between'
          }}
        >
          <div
            style={{
              display: 'flex',
              margin: '10px 0px 20px 30px',
              flexDirection: 'column'
            }}
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginTop: '20px'
              }}
            >
              <p>1</p>
              <input
                style={{ marginLeft: '20px' }}
                onChange={this.handleChange}
                // value={this.state.value}
                onFocus={() => {
                  let consList = this.state.consList;
                  consList.push('a');
                  this.setState({ consList });
                }}
              ></input>
            </div>
          </div>
          {this.state.consList.map(item => {
            return (
              <div
                style={{
                  display: 'flex',
                  margin: '10px 0px 20px 30px',
                  flexDirection: 'column'
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row'
                    // marginTop: '20px'
                  }}
                >
                  <p>1</p>
                  <input
                    name={item.value}
                    style={{ marginLeft: '20px' }}
                    // value={this.state.value}
                    // onDragStart={this.handleChange}
                    onFocus={() => {
                      let consList = this.state.consList;
                      consList.push('a');
                      this.setState({ consList });
                    }}
                  ></input>
                </div>
              </div>
            );
          })}
        </div> */}
      </div>
    );
  }
}

export default InputList;
