<template>
    <main id="main" class="main">
      <div class="container">
        <section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
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
                      <h5 class="card-title text-center pb-0 fs-4">Reset Password</h5>
                      <p class="text-center small">Confirm your email</p>
                    </div>
  
                    <form class="row g-3 needs-validation" novalidate @submit.prevent="reset">
  
                      <div class="col-12">
                        
                        <div class="input-group has-validation">
                          <span class="input-group-text" id="inputGroupPrepend"><span class="bi bi-envelope"></span></span>
                          <input type="text" name="email" class="form-control" id="email" required="" v-bind="email">
                          <div class="invalid-feedback">Please enter your email.</div>
                        </div>
                      </div>
  
                      <div class="col-12">
                        <button class="btn btn-primary w-100" type="submit">Submit</button>
                      </div>
                    </form>
  
                  </div>
                </div>
  
                <div class="credits">
                  Code by <a href="#">Arun Amatya</a>
                </div>
              </div>
            </div>
          </section>
        </div>
    </main>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default{
   
    data() {
        return {
            email : '',

        }
    },
    setup() {
        const reset = async () => {
          try {
              const response = await axios.post('/reset', {
                  email: email.value,
              });
                console.log(response)
                // check if token exists 

            //   const token = response.data.access_token;
            //   //   console.log(token);
            //   localStorage.setItem('token',token);
            //   const decoded = jwt_decode(token, { header: true });
            //   localStorage.setItem('user', JSON.stringify(decoded));
              router.push({ name: 'reset_password' });
          } catch (error) {
              if(error.response.status == 401)
              console.log("Unauthorized")
              Swal.fire("Sorry","Unauthorized credentials","error")
              console.error(error);
          }
      };
    }
}
</script>
