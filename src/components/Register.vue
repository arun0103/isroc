<style>
  .error{
    color:red;
    display: block;
  }
</style>
<template>
    <main>
        <div class="container">
    
          <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
    
                  <div class="d-flex justify-content-center py-4">
                    <a href="#" class="logo d-flex align-items-center w-auto">
                      <img src="@/assets/logo.png" alt="" style="width:20px">
                      <span class="d-none d-lg-block">IS Admin</span>
                    </a>
                  </div><!-- End Logo -->
    
                  <div class="card mb-3">
    
                    <div class="card-body">
    
                      <div class="pb-2">
                        <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                        <p class="text-center small">Enter your personal details to create account</p>
                      </div>
    
                      <form class="row g-3 needs-validation" autocomplete="off" novalidate="" >
                        <div class="col-12">
                          <label for="yourName" class="form-label">Your Name</label>
                          <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend"><span class="bi bi-person"></span></span>
                            <input type="text" name="name" class="form-control" id="yourName" required v-model="name">
                          </div>
                          <div class="error" v-show="this.error_name !=''">Please enter your name.</div>
                        </div>
        
                        <div class="col-12">
                          <label for="userEmail" class="form-label">Your Email</label>
                          <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend"><span class="bi bi-envelope"></span></span>
                            <input type="email" name="userEmail" class="form-control" id="userEmail" autocomplete="new-email" required v-model="email"><br>
                          </div>
                          <div class="error" v-show="this.error_email !=''">
                            <p>{{this.error_email}}</p>
                          </div>
                        </div>
    
                        <div class="col-12">
                          <label for="userPassword" class="form-label">Password</label>
                          <div class="input-group has-validation">
                            <span class="input-group-text" id="inputGroupPrepend"><span class="bi bi-key"></span></span>
                            <input type="password" name="userPassword" class="form-control" id="userPassword" autocomplete="new-password" required v-model="password">
                          </div>
                          <div class="error" v-show="this.error_password !=''">Your password must be atleast 8 characters.</div>
                        </div>
    
                        <div class="col-12">
                          <div class="form-check">
                            <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required v-model="check_terms">
                            <label class="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                            <div class="invalid-feedback">You must agree before submitting.</div>
                          </div>
                        </div>
                        <div class="col-12">
                          <button :disabled="!check_terms" class="btn btn-primary w-100" type="submit" @click.prevent="registerUser">Create Account</button>
                        </div>
                        <div class="col-12">
                          <p class="small mb-0">Already have an account? <router-link  to="/login"> Log in</router-link></p>
                        </div>
                      </form>
    
                    </div>
                  </div>
    
                  <div class="credits">
                    Code by <a href="#">Arun Amatya</a>
                  </div>
    
                </div>
              </div>
            </div>
    
          </section>
    
        </div>
      </main>
      
</template>
<script >
import axios from 'axios'
import router from '../router'
import jwt_decode from 'jwt-decode'
export default{
  
  data() {
    return {
      email: '',
      password:'',
      name:'',
      error_email:'',
      error_name:'',
      error_password:'',
      check_terms: 0,
      status : false
    }
  },
  methods: {
    handleRegister(user) {
      this.message = "";
      this.successful = false;
      this.loading = true;

      this.$store.dispatch("auth/register", user).then(
        (data) => {
          this.message = data.message;
          this.successful = true;
          this.loading = false;
        },
        (error) => {
          this.message =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          this.successful = false;
          this.loading = false;
        }
      );
    },
    async registerUser(){
      // if(this.validateUserDetails()){
        console.log("user details validated: true")
        const response = await axios.post('/register', {
          name: this.name,
          email: this.email,
          password: this.password
        })
        .then(function(response){
          this.status = false;
          // Store the JWT token in local storage or a cookie
          const token = response.data.access_token;
          localStorage.setItem('token', response.data.access_token)
          const decoded = jwt_decode(token, { header: true });
          localStorage.setItem('user', JSON.stringify(decoded));
          router.push({ name: 'home' });
        }).catch(error=>{
          this.status = true
          // console.log(error.response.data)
          let errors = error.response.data
          console.log(errors)
          if(errors?.name){
            console.log("Name error: "+errors['name'])
            this.error_name = errors['name']
          }else
            this.error_name = ''
          if(errors?.email){
            this.error_email = errors['email']
            console.log("Email error: "+this.error_email)
            if(this.error_email == "The email field is required.")
              this.error_email = "Please enter your valid email."
            else if(this.error_email == "The email has already been taken.")
              this.error_email = "This email is already registered in our server."
          }else
            this.error_email = ''
          if(errors?.password)
            this.error_password = errors['password']
          else
            this.error_password = ''
        })
        
    
      // }else{
      //   console.log("Invalid user details found")
      //   Swal.fire("Failed","Invalid details!","error")
      //   // console.log(error)
      // }
      
    },
    byDefault(){
      console.log('byDefaultCalled')
      this.error_email = '';
      this.error_name =''
      this.error_password = ''
    },
    validateUserDetails(){
      console.log('Validating details...')
      let name = this.name;
      let email = this.email;
      let password = this.password;
      let validate= true;
      if(email==null){
        validate = false;
        this.error_email = 'Please enter a valid email.'
      }
      if(password ==null || password.length <8){
        validate = false;
        this.error_password = 'The length of a password must be atleast 8 characters.'
      }
      if(name == null){
        validate = false;
        this.error_name = 'Please enter your name.'
      }
      return validate;
    }
  },
  mounted(){
    this.byDefault();
  }
}
</script>
