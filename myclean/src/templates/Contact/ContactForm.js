import React,{Component, Fragment} from 'react'; 

 
class ContactForm extends Component{

    constructor(){
        super();
        this.state={ email:'',name:'',subject:'',message:'',email_err:'',name_err:'',subject_err:'',message_err:'',return_msg:'',flag : false }

         this.handleChangeEmail = this.handleChangeEmail.bind(this);
         this.handleChangeName = this.handleChangeName.bind(this);
         this.handleChangeSubject = this.handleChangeSubject.bind(this);
         this.handleChangeMessage = this.handleChangeMessage.bind(this);
         this.handleSubmit1 = this.handleSubmit1.bind(this);
    }

    handleChangeEmail(e){
        this.setState({email:  e.target.value});
        var EmailReg =  /(\w+)\s(\w+)/;
        if(e.target.value === '') 
          this.setState({email_err: 'Required Field'});
        else if(EmailReg.test(e.target.value)) 
          this.setState({email_err: ''});
        else 
          this.setState({email_err: 'Enter Valid Email'});
      }

      handleChangeName(e){
        this.setState({name:  e.target.value});
          if(e.target.value === '') 
            this.setState({name_err: 'Required Field'});
          else 
            this.setState({name_err: ''});
      }
      handleChangeSubject(e){
        this.setState({subject:  e.target.value});
          if(e.target.value === '') 
            this.setState({subject_err: 'Required Field'});
          else 
            this.setState({subject_err: ''});
      }
      handleChangeMessage(e){
        this.setState({message:  e.target.value});
          if(e.target.message === '') 
            this.setState({message_err: 'Required Field'});
          else 
            this.setState({message_err: ''});
      }

      handleSubmit1()
      {
          if(this.state.name === '') 
              this.setState({name_err: 'Required Field'});
          if(this.state.email === '')
              this.setState({email_err: 'Required Field'});
          if(this.state.subject === '')
             this.setState({subject_err: 'Required Field'});
         if(this.state.message === '')
             this.setState({message_err: 'Required Field'});

             if(this.state.name === '' || this.state.email === '' || this.state.subject === '' || this.state.message === '')
             {
                this.setState({return_msg: 'Fill All First', flag: true });
             }
             else
             {
                this.setState({return_msg: 'Success.', flag: true});
             }
      }
    render(){

    return(
 
    <Fragment>
        <div className="contact-form"> 
            <div id="message">
                {this.state.flag ? 
                        <div className="alert alert-success">
                        <strong>{this.state.return_msg}</strong>
                        </div>
                    : null}
            </div> 
            <form method="post" id="contact-form">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="col-lg-12">
                            <input type="text" id="user-name" value={this.state.name} onChange={this.handleChangeName} className="con-field" placeholder="Full Name" /> 
                            <span id="err">{this.state.name_err}</span>
                        </div>
                        <div className="col-lg-12">
                            <input type="text" className="con-field" value={this.state.email} onChange={this.handleChangeEmail} id="user-email" placeholder="Email" />
                            <span id="err">{this.state.email_err}</span>
                        </div>
                        <div className="col-lg-12">
                            <input type="text" id="service" value={this.state.subject} onChange={this.handleChangeSubject} className="con-field" placeholder="Subject" />
                            <span id="err">{this.state.subject_err}</span>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="col-lg-12">
                            <textarea name="comments" id="user-message" value={this.state.message} onChange={this.handleChangeMessage} rows="6" className="con-field" placeholder="Your Message"></textarea>
                            <span id="err">{this.state.message_err}</span>
                            <div className="submit-area"> 
                                <button id="submit-contact" type="button" name="send" onClick={this.handleSubmit1} className="btn-alt" value="get a quote"> Send Message</button>
                                <div id="simple-msg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </Fragment> 
 
 
        )

    }
}

 
export default ContactForm;