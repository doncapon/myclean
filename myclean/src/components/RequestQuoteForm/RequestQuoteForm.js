import React,{Component} from 'react'; 

 
class RequestQuoteForm extends Component{

    constructor(){
        super();
        this.state={ email:'',name:'',phone:'',subject:'',message:'',phone_err:'',email_err:'',name_err:'',subject_err:'',message_err:'',return_msg:'',flag : false }

         this.handleChangeEmail = this.handleChangeEmail.bind(this);
         this.handleChangeName = this.handleChangeName.bind(this);
         this.handleChangePhone = this.handleChangePhone.bind(this);
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

      handleChangePhone(e){
        this.setState({phone_err:  e.target.value});
          if(e.target.value === '') 
            this.setState({phone_err: 'Required Field'});
          else 
            this.setState({phone_err: ''});
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
          if(this.state.phone === '')
             this.setState({phone_err: 'Required Field'});
          if(this.state.subject === '')
             this.setState({subject_err: 'Required Field'});
         if(this.state.message === '')
             this.setState({message_err: 'Required Field'});

             if(this.state.name === '' || this.state.phone === '' || this.state.email === '' || this.state.subject === '' || this.state.message === '')
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
 
          <div>
              <div id="message">
                  {this.state.flag ? 
                  <div className="alert alert-success">
                      <strong>{this.state.return_msg}</strong>
                  </div>
                      : null}
              </div> 
              <form method="post"  name="contact-form" id="contactForm" className="form-order">
                  <div className="estimate_form_inner">
                  <h4>Request a quote</h4>
                      <div className="input-group"> 
                          <input type="text" id="user-name" value={this.state.name} onChange={this.handleChangeName} className="form-control" placeholder="Full Name" /> 
                          <span id="err">{this.state.name_err}</span>
                      </div>
                      <div className="input-group"> 
                          <input type="text" className="con-field form-control" value={this.state.email} onChange={this.handleChangeEmail} id="user-email" placeholder="Email Address" />
                          <span id="err">{this.state.email_err}</span>
                      </div>  
                      <div className="input-group"> 
                          <input type="text" id="phone" value={this.state.phone} onChange={this.handleChangePhone} className="form-control" placeholder="Phone No" />
                          <span id="err">{this.state.phone_err}</span>
                      </div>                         
                      <div className="input-group"> 
                          <input type="text" id="subject" value={this.state.subject} onChange={this.handleChangeSubject} className="form-control" placeholder="Your Subject.." />
                          <span id="err">{this.state.subject_err}</span>
                      </div> 
                      <div className="input-group input_group_full_width"> 
                          <textarea name="comments" id="comments" value={this.state.message} onChange={this.handleChangeMessage} rows="6" className="form-control" placeholder="Your Message"></textarea>
                          <span id="err">{this.state.message_err}</span>
                      </div> 
                      <input type="button" className="btn btn-primary" name="send" onClick={this.handleSubmit1} value="get a quote" /> 
                      <div id="simple-msg"></div>
                      
                  </div>
              </form> 
          </div>

        )

    }
}

 
export default RequestQuoteForm;