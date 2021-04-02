import React,{Component} from 'react'; 

/*Baclground Image*/
import quotelBg from '../../assets/images/work_bg.jpg' 

 
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
 
 
    <section className="estimat_sectn estimat_sec_v2" id="quote" style={{backgroundImage: `url("${quotelBg}")`}} >     
        <div className="container"> 
                <div className="row estimat_warp_v2"> 
                        <div className="col-md-4 col-sm-12">
                            <div className="base_header_2 base_header">
                                <h3>Request quote</h3> 
                                <p>Subjects to ecstatic children he could be leave upa as built match dejection after agreeable attention set suspected led</p> 
                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <div id="message">
                                {this.state.flag ? 
                                     <div className="alert alert-success">
                                     <strong>{this.state.return_msg}</strong>
                                     </div>
                                 : null}
                            </div> 
                            <form method="post" id="contactForm" className="form-order">
                                <div className="estimate_form_inner">
                                    <div className="input-group"> 
                                        <input type="text" id="user-name" value={this.state.name} onChange={this.handleChangeName} className="form-control" placeholder="Full Name" /> 
                                        <span id="err">{this.state.name_err}</span>
                                    </div>
                                    <div className="input-group"> 
                                        <input type="text" className="form-control" value={this.state.email} onChange={this.handleChangeEmail} id="user-email" placeholder="Email" />
                                        <span id="err">{this.state.email_err}</span>
                                    </div>                            
                                    <div className="input-group"> 
                                        <input type="text" id="service" value={this.state.subject} onChange={this.handleChangeSubject} className="form-control" placeholder="Interest Of Service" />
                                        <span id="err">{this.state.subject_err}</span>
                                    </div> 
                                    <div className="input-group input_group_full_width"> 
                                        <textarea name="comments" id="user-message" value={this.state.message} onChange={this.handleChangeMessage} rows="6" className="form-control" placeholder="Your Message"></textarea>
                                        <span id="err">{this.state.message_err}</span>
                                    </div> 
                                    <button type="button" name="send" onClick={this.handleSubmit1} className="btn btn-primary" value="get a quote"> get a quote </button>
                                    <div id="simple-msg"></div>
                                </div>     
                            </form>
                        </div> 
                </div>
            </div> 
        </section>

 
        )

    }
}

 
export default ContactForm;