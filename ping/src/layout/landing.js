import React,{Component} from 'react';
import logo from '../images/logo.svg';
import dash from '../images/illustration-dashboard.png';

class Layout extends Component{
    state={
        input:"",
        emailError:""
    }
    handleChange=(e)=>{
        this.setState({
            input:e.target.value
        });
   }

   //function to check the input
    validate=()=>{
        let emailError ="";
        if(!this.state.input.includes('@')&& !this.state.input.includes('.')){
            emailError="Please enter a valid email";  
        }
        if(emailError){
            this.setState({emailError:emailError});
            return false;
        }
        return true;
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        const isValid=this.validate();
        if(isValid){
            console.log(this.state);
            //clear the form
            this.setState({
                input:"",
                emailError:""
            })
        }
        
    }
    render(){
     return(
            <div className="container">
              <img src={logo} alt="" id="image"/>
              <p className="launch">  <span>We are launching </span><strong>soon!</strong></p>
              <p id="subs">Subscribe and get notified</p>
              <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder="Your email address" id="email" onChange={this.handleChange}/>
                 <button type="submit" id="submit">Notify Me</button>
                  {/* to display the error message */}
                 <div className="error">{this.state.emailError}</div>
            </form>
              <div className="dashboard">
                <img src={dash} alt="" className="img"/>
              </div>
              <div className="icons">
                <a href="#"><i className="fab fa-facebook-f fa-xs"></i></a>
                <a href="#"><i className="fab fa-twitter fa-xs"></i></a>
                <a href="#"><i className="fab fa-instagram fa-xs"></i></a>
              </div>
              <p className="copyright">&copy; Copyright Ping. All rights reserved.</p>
            </div>

        )
        }
}
export default Layout;