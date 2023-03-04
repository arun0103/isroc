<style scoped>
  .isAdmin{
    color:black;
    background-color: red;
    display: none;
  }
</style>
<template markRaw>
  <div>
    <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top d-flex align-items-center">
      <i class="bi bi-list toggle-sidebar-btn" style="margin-left:-10px;margin-top:-10px;" @click="onMenuClicked"></i>
      <div class="d-flex align-items-center justify-content-between" style="margin-left:10px">
        <a href="#" class="logo d-flex align-items-center">
          <img src="@/assets/logo.png" alt="ISADMIN" style="width:20px">
          <span class="d-none d-lg-block">IS Admin</span>
        </a>
      </div><!-- End Logo -->

      <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">

          <li class="nav-item dropdown">

            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i class="bi bi-bell"></i>
              <span class="badge bg-primary badge-number">4</span>
            </a><!-- End Notification Icon -->

            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications" aria-labelledBy="dropdown-notification">
              <li class="dropdown-header">
                You have 4 new notifications
                <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li class="notification-item">
                <i class="bi bi-exclamation-circle text-warning"></i>
                <div>
                  <h4>Lorem Ipsum</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>30 min. ago</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider">
              </li>

              <li class="notification-item">
                <i class="bi bi-x-circle text-danger"></i>
                <div>
                  <h4>Atque rerum nesciunt</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>1 hr. ago</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider">
              </li>

              <li class="notification-item">
                <i class="bi bi-check-circle text-success"></i>
                <div>
                  <h4>Sit rerum fuga</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>2 hrs. ago</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider">
              </li>

              <li class="notification-item">
                <i class="bi bi-info-circle text-primary"></i>
                <div>
                  <h4>Dicta reprehenderit</h4>
                  <p>Quae dolorem earum veritatis oditseno</p>
                  <p>4 hrs. ago</p>
                </div>
              </li>

              <li>
                <hr class="dropdown-divider">
              </li>
              <li class="dropdown-footer">
                <a href="#">Show all notifications</a>
              </li>

            </ul><!-- End Notification Dropdown Items -->

          </li><!-- End Notification Nav -->

          <li class="nav-item dropdown">

            <!-- <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i class="bi bi-chat-left-text"></i>
              <span class="badge bg-success badge-number">3</span>
            </a> -->
            <!-- End Messages Icon -->

            <!-- <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow messages">
              <li class="dropdown-header">
                You have 3 new messages
                <a href="#"><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li class="message-item">
                <a href="#">
                  <img src="assets/img/messages-1.jpg" alt="" class="rounded-circle">
                  <div>
                    <h4>Maria Hudson</h4>
                    <p>Velit asperiores et ducimus soluta repudiandae labore officia est ut...</p>
                    <p>4 hrs. ago</p>
                  </div>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li class="dropdown-footer">
                <a href="#">Show all messages</a>
              </li>

            </ul> -->
            <!-- End Messages Dropdown Items -->

          </li>
          <!-- End Messages Nav -->
          

          <li class="nav-item dropdown pe-3">

            <a class="nav-link nav-profile d-flex align-items-center pe-0" href="#" data-bs-toggle="dropdown">
              <span class="d-block d-md-block dropdown-toggle ps-2">{{loggedInUser.name}}</span>
            </a><!-- End Profile Iamge Icon -->

            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow profile">
              <li class="dropdown-header">
                <h6>{{loggedInUser.name}}</h6>
                <span>{{loggedInUser.email}}</span>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                  <i class="bi bi-person"></i>
                  <span>My Profile</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="users-profile.html">
                  <i class="bi bi-gear"></i>
                  <span>Account Settings</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="pages-faq.html">
                  <i class="bi bi-question-circle"></i>
                  <span>Need Help?</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>

              <li>
                <a class="dropdown-item d-flex align-items-center" href="#" @click="logout">
                  <i class="bi bi-box-arrow-right"></i>
                  <span>Sign Out</span>
                </a>
              </li>

            </ul><!-- End Profile Dropdown Items -->
          </li><!-- End Profile Nav -->

        </ul>
      </nav><!-- End Icons Navigation -->

    </header><!-- End Header -->

      
    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar" v-show="!mobileView || menuClicked">
      <ul class="sidebar-nav" id="sidebar-nav">
            <li class="nav-item">
                <router-link to="/devices"><a class="nav-link"><i class="bi bi-cpu"></i> Devices</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/distributors"><a class="nav-link"><i class="fa fa-bank"></i> Distributors</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/members"><a class="nav-link"><i class="bi bi-people"></i> Members</a></router-link>
            </li>
            <li class="nav-item">
                <router-link to="/clients"><a class="nav-link"><i class="bi bi-diagram-3"></i> Clients</a></router-link>
            </li>

            <li class="nav-item">
                <a class="nav-link" href="#">
                    <i class="bi bi-geo-alt"></i>
                    <span>Map</span>
                </a>
            </li>
      </ul>
    </aside><!-- End Sidebar-->

    <slot />

    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
      <div class="copyright">&copy; Copyright <strong><span>ISADMIN</span></strong>. All Rights Reserved</div>
      <div class="credits">Code by <a href="#">Arun Amatya</a></div>
    </footer><!-- End Footer -->
  </div>
  
  <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
</template>
  
<script>
//   import AppLayoutLinks from '@/layouts/AppLayoutLinks'
  import { computed } from 'vue';
  import router from '@/router';
  import axios from 'axios';
  export default {
    name: "AppLayoutHome",
    // components: {
    // //   AppLayoutLinks
    // }
    mounted(){
      console.log("Home layout ready")
      if(window.innerHeight > window.innerWidth){
        //mobile view or landscape
        this.mobileView = true
      }
      // get authenticated user details
      const user = axios.post('/me').then(response=>{
          // console.log(response.data)
          this.loggedInUser = response.data
      }).catch(error =>{
        router.push('login');
      })
    },
    data(){
      return{
        loggedInUser : [],
        isAdmin:true,
        mobileView:false,
        menuClicked:false,
      }
    },
    setup() {
      const user = computed(() => JSON.parse(localStorage.getItem('user')));
      
  
      const logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        router.push({ name: 'login' });
      };
  
      return {
        user,
        logout
      };
    },
    methods:{
      onMenuClicked(){
        this.menuClicked = true
        console.log("Ham menu clicked")
      }
    }
  }
</script>
  
<style scoped>
  @import "../../assets/style.css";
  /* for removing arrows in number inputs*/
        /* Chrome, Safari, Edge, Opera */
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
        }

        /* Firefox */
        input[type=number] {
        appearance: textfield;
        -moz-appearance: textfield;
        }
    /*/end*/
    .footer {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        height: 70px;
        font-size: 12px;
        background:white;
    }
    .fa-microchip:before {
        content: "\f2db";
    }
    body{
        min-width:100vw;
        min-height:100vh;
    }
    a:hover{
        text-decoration : none;
        color:blue;
    }
    .float-right{
        float:right;
    }
    .bg-blue{
        background: #167495;
        color: white;
    }
    /************Arun */
    .mandatory{
        color:red;
        /* float:right; */
    }
    form label{
      color:grey;
    }
    aside ul li a{
        color:white;
    }
    aside ul li a:hover{
        color:blue !important;
    }
    /* .sr-only{
        position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
    } */
  
</style>