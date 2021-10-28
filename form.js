$(document).ready(()=>{
    
    
    $('input').on('focusin',(e)=>{
        let target=e.target;
        target.classList.add('active');
        let parent=target.parentElement;
        parent.classList.add('focus')
    })
    $('input').on('focusout',(e)=>{
        let target=e.target;
        target.classList.remove('active');
        let parent=target.parentElement;
        parent.classList.remove('focus')
    })
  class Validation{
      formValues={
          username:'',
          Password:''
      }
      ErrorValues={
          username:'',
          Password:''
      }
      getInputs(){
         this.formValues.username=document.getElementById('name').value.trim();
         this.formValues.Password=document.getElementById('pass').value.trim();
      }

      validateUsername(){
          if(this.formValues.username==''){
             this.ErrorValues.username='error';
                    
             
          }else if (this.formValues.username<3) {
              this.ErrorValues.username='error';
              
          }
          else{
              this.ErrorValues.username=''
          }
        
        }
      
      validatePassword(){
        if(this.formValues.Password==''){
            this.ErrorValues.Password='error';
                   
            
         }else if (this.formValues.Password<5) {
             this.ErrorValues.Password='error';
             
         }
         else{
             this.ErrorValues.Password=''
         }
   

      }
      alertMsg(){
          const {username,Password}=this.ErrorValues;
          if(username==''&& Password==''){
              swal('login succesful','Thank you   '+ this.formValues.username,'success');
             let formControl=document.getElementsByClassName('form_control');
             Array.from(formControl).forEach((element)=>{
                     element.getElementsByTagName('input')[0].value='';
                     
             })
          }else{
              swal('Error','userName must be >3'+'  '+'password must be >5','error')
          }

      }
    }
    
  
const formValidation=new Validation();
$('#form').on('submit',(e)=>{
   e.preventDefault();
   formValidation.getInputs();
   formValidation.validateUsername();
   formValidation.validatePassword();
   formValidation.alertMsg();
})
  

})