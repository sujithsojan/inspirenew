import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './Style.css';
import { withStyles } from "@material-ui/core/styles";
import imagea from '../Image/imagea.jpg';

const styles = theme => (
    {
        textField: {
        marginTop: "-1.5%",
            paddingBottom:'2%',
            // marginLeft:'0%',
            color: "black",
            // minHeight: '40%', 
            background:'White',
            
            '& label.Mui-focused': {
            color: 'black',
            },
            '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
            },
            '& .MuiInput-underline:before': {
            borderBottomColor: 'white',
            },
            
            '&.Mui-focused fieldset': {
            borderColor: 'white',
            },
            '&& .MuiInput-root:hover::before': {
            borderColor: 'white',
            },
            '&& .MuiInputLabel-root':{
              paddingLeft: '2%'
            }, 
        },
    button:{align: 'center',
             backgroundColor: "#004040",
             color:"#FFFFFF", 
            //  width:'25%',
              height: '6%', 
              textTransform: 'none', 
              '&:hover': {
                backgroundColor: '#004040',
                borderColor: '#0062cc',
                },
                '&:active': {
                boxShadow: 'none',
                backgroundColor: '#004040',
                borderColor: '#005cbf',
                
                },
                '&:focus': {
                boxShadow: '#004040',
                },
    }

});




 class Note extends Component {
    constructor(props){
        super(props);
        this.state = {
        Caption:'',
        Text:''
      }
    }
     

    handleChange1 = event => {
        this.setState({ Caption : event.target.value });
        console.log(this.state.Caption);
      }

      handleChange2 = event => {
        this.setState({ Text : event.target.value });
        console.log(this.state.Text);
      }

    //   handleSubmit = event => {
    
    //     event.preventDefault();
    //     console.log("adding income");
    //     axios.post(`http://localhost:8081/tracker/register/addincome?EmailId=${this.props.email}&item=${this.state.item}&categoryId=${this.state.catId}&amount=${this.state.amount}&transactionDate=${this.state.date}`).then(res => {
    //       console.log("res="+res);
    //       this.setState({ open: true,amount:'',item:'',catId:'',catName:'',date:formatedDate });    })
    //   }

    render() {
        const  {classes} = this.props;
        return (
            <div style={{paddingTop:'2%'}} className = "Align-text" >
        <div className="note">
          <form onSubmit={this.handleSubmit} >
            {/* <TextField 
              id="Caption"
              label="Write your caption"
              name="Caption"
              onChange={handleChange1}
              className={classes.textField}
              fullWidth = "true"/> */}
              <TextField
                onChange={this.handleChange1}
                name="Caption" 
                type="Caption"
                label="Write your Caption"
                InputLabelProps={{required: false,}}
                value={this.state.Caption}
                fullWidth = "true"
                className={classes.textField}
                required/>
              

            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png" alt="tarento" style = {{width:'100%'}}/>

            <TextField style = {{height: '150px',}}
              id="Text"
              label=" Write your message (Max 300 letters)"
              name="Text"
              value={this.state.Text}
              required
              align='justify'
              onChange={this.handleChange2}
              InputLabelProps={{required: false,}}
              inputProps={{maxLength:300}}
              multiline = "true"
              className={classes.textField}
              rowsMax={7}
              fullWidth = "true"/>

            <div className="Space">
              <Button variant="contained" 
                className ={classes.button}
                type="submit" fullWidth = "true"
                style={{marginTop:'1%'}}>
                  Post
              </Button>
            </div>
          </form>
        </div>
      </div>
    );
    }
}
export default withStyles(styles)(Note);