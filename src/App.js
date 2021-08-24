import './App.css';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      phone: '',
      email: '',
      bio: '',
      dob: '',
      gender: ''
    }
  }
  validate = (event) => {
    var error = document.getElementById('error');
    if (this.state.name === "") {
      error.innerHTML = 'Name is required';
      event.preventDefault();
    }
    else if ((/[\W]/.test(this.state.name))) {
      error.innerHTML = 'Name doesn\'t contain special char';
      event.preventDefault();
    }
    else if (!(/^[A-Za-z\d_]{1,20}$/.test(this.state.name))) {
      error.innerHTML = 'Name Should be in less than 20 char';
      event.preventDefault();
    }
    else if (!(/([\d]){10}/.test(this.state.phone)) && this.state.phone !== "") {
      error.innerHTML = 'Phone No Invalid';
      event.preventDefault();
    }
    else if (this.state.email === "") {
      error.innerHTML = 'Email is required';
      event.preventDefault();
    }
    else if (!(/(^[\w.]+)@([\w]+)\.([\w]+)/.test(this.state.email))) {
      error.innerHTML = 'Invalid Email';
      event.preventDefault();
    }
    else if (!(/([\w._]){2,300}/.test(this.state.bio)) && this.state.bio !== "") {
      error.innerHTML = 'Bio must be less than 60 words';
      event.preventDefault();
    }
    else if (this.state.dob === "") {
      error.innerHTML = 'Date of birth is required';
      event.preventDefault();
    }
    else if (this.state.gender === "") {
      error.innerHTML = 'Gender is required';
      event.preventDefault();
    }
    else {
      error.innerHTML = "Successfully stored in local storage";
      error.style.color = 'green';

      localStorage.setItem('name', this.state.name);
      localStorage.setItem('phone', this.state.phone);
      localStorage.setItem('email', this.state.email);
      localStorage.setItem('bio', this.state.bio);
      localStorage.setItem('bob', this.state.dob);
      localStorage.setItem('gender', this.state.gender);

      event.preventDefault();
    }

  }
  getData = (e) => {
    var nam = e.target.name;
    var val = e.target.value;
    console.log(val);
    this.setState({
      [nam]: val
    })
    console.log(this.state.name)
  }

  render() {
    return (
      <>
        <h1 className='heading'>Opensense Labs Task</h1>
        <div className="outer">
          <form>
            <div id="input">
              <h3>Student Form</h3><br />
              <span id="error"></span> <br />
              <input type="text" placeholder="Name" name="name" autocomplete="OFF" onBlur={this.getData} /><br /> <br />

              <input type="text" placeholder="Phone" name="phone" autocomplete="OFF" onBlur={this.getData} /><br /><br />

              <input type="text" placeholder="Email" name="email" autocomplete="OFF" onBlur={this.getData} /><br /><br />

              <input type="text" placeholder="Bio" name="bio" autocomplete="OFF" onBlur={this.getData} /><br /><br />

              <span> Birth Date &nbsp; &nbsp; &nbsp;:</span> <input type="date" id="b_date" name="dob" onBlur={this.getData} /><br /> <br />

              <span>Gender</span>

              <input type="radio" id="male" name="gender" value="male" onClick={this.getData} /> <label for="male">Male</label> <br />

              &nbsp; &nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp;<input type="radio" id="female" name="gender" value="female" onClick={this.getData} /> <label for="female">Female</label>

            </div> <br />
            <input type="submit" value="Submit" id="sub" onClick={this.validate} />
            <input type="reset" value="Reset" id="res" />
          </form>
        </div>

      </>
    );
  }
}

export default App;