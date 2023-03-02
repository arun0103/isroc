<style scoped>
    /* for removing arrows in number inputs */
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
    /*end*/
    .full-width{
        width:80vw;
    }
    @media (min-width: 425px) {
        .full-width {
            width:84vw;
        }
    }
    @media (min-width: 768px) {
        .full-width {
            width:90vw;
        }
    }
    @media (min-width: 1200px) {
        .full-width {
            width:79vw;
        }
    }
    .layer-2{
        top: 55px !important;
        z-index:3;
        background-color: white;
    }

    .pl-2{
        padding-left:10px;
    }
    .dropdown-menu{
        z-index: 100;
    }
    /* .counts{
        width:40px;
        display:flex;
        justify-content:center
    }
    .counts .col{
        display:flex;
    }*/

    .float-right{
        float:right;
    }
</style>
<template>
    <main class="main" id="main">
       
        <div class="row">
            <div class="col-sm-12 col-md-12">
                <div class="card" style="background-color:white">
                    <div class="card-header sticky-top layer-2">
                        <div class="row mb-2">
                            <div class="col d-flex justify-content-center">
                                <div id="btn-onlineDevices" class="btn btn-success">
                                    Online <span class="badge bg-white text-success">{{ online_devices_count }}</span>
                                </div>
                            </div>
                            <div class="col d-flex justify-content-center">
                                <span id="btn-offlineDevices" class="btn btn-danger">
                                    Offline <span class="badge bg-white text-danger">{{ offline_devices_count }}</span>
                                </span>
                            </div>
                            <div class="col d-flex justify-content-center">
                                <span id="btn-warningDevices" class="btn btn-warning">
                                    Warning <span class="badge bg-white text-warning">{{ warning_devices_count }}</span>
                                </span>
                            </div>
                        </div>
                        <h5 class="card-title"><i class="fa fa-sink"></i>
                            All Devices [{{ devices.length }}]
                            <button @click="openAddDeviceModal" id="btn_add_new_device" class="btn btn-sm btn-primary" style="float:right">Add new</button>
                        </h5>
                        <label for="search-bar-0" class="search-label">
                            <span id="search-bar-0-label" class="sr-only">Search this table</span>
                            <input id="search-bar-0" type="text" aria-labelledby="search-bar-0-label" class="form-control full-width" placeholder="Search" v-model="filter">
                        </label>
                    </div>
                    <div class="card-body">
                        <div class="row" >
                            <div class="card-group col-md-4" v-for="(device,key) in filteredDevices" :key="key">
                                <div class="card">
                                    <div class="card-header">
                                        <h5>
                                            <router-link  :to='{name:"device_detail",params:{id:device.id}}'><span id="device_name">{{ device.name == null?"No Name": device.name }}</span></router-link>
                                            
                                            <div class="dropdown float-right">
                                                <button
                                                class="btn btn-primary dropdown-toggle"
                                                type="button" id="dropdownMenuButton-actions"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false">
                                                <i class="link_asset_detail bi bi-vector-pen"></i>
                                                </button>
                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton-actions" role="menu">
                                                    <li class="dropdown-item list-group-item" @click="editDeviceName(device)">Edit Device Name</li>
                                                    <li class="dropdown-item list-group-item">Assign</li>
                                                    <li class="dropdown-item list-group-item">Settings</li>
                                                    <li class="dropdown-item list-group-item" @click="deleteDevice(device.id)">Delete Device</li>
                                                    <!-- <li v-for="option in options" :key="option">
                                                        <a class="dropdown-item" @click="value = option" href="javascript:void(0)" style="border-bottom:1px black;">{{option}}</a>
                                                    </li> -->
                                                </ul>
                                            </div>
                                        </h5>


                                        <i>Device ID : <span id="device_id">{{ device.device_number }}</span></i><br>
                                        <i>Type : <span>HPC</span></i>
                                    </div>
                                    <div class="card-body">
                                        <div class="row" style="padding-top:5px">
                                            <div class="col-md-5 col-sm-6">
                                                Connection
                                            </div>
                                            <div class="col-md-7 col-sm-6">
                                                <i class="ri ri-wifi-fill fa-lg" style="color:green"></i><span> {{device.status}}</span>
                                            </div>
                                        </div>
                                        <div class="row" style="padding-top:5px">
                                            <div class="col-md-5">
                                                Status
                                            </div>
                                            <div class="col-md-7">
                                                <i class="bi bi-shield-fill-exclamation fa-lg" style="color:#ffc107"> </i><span class="info_status" > Low Flow</span>
                                            </div>
                                        </div>
                                        <div class="row" style="padding-top:5px">
                                            <div class="col-md-5">
                                                Activation Date
                                            </div>
                                            <div class="col-md-7">
                                                <i class="bi bi-shield-fill-exclamation fa-lg" style="color:red"> </i><span class="info_status" style="color:red"> Not Activated </span>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="card-footer">
                                        <div class="row" style="padding-top:5px">
                                            <div class="col-md-5">
                                                Distributor
                                            </div>
                                            <div class="col-md-7">
                                                {{ device.distributor_id == null ? "N/A" : device.distributor_id }}
                                            </div>
                                        </div>
                                        <div class="row" style="padding-top:5px">
                                            <div class="col-md-5">
                                                Client
                                            </div>
                                            <div class="col-md-7">
                                                {{ device.client_id == null ? "N/A" : device.client_id }}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div> 
            <!-- <div>
                <b-button v-b-modal.modal-1>Launch demo modal</b-button>
            
                <b-modal id="modal-1" title="BootstrapVue">
                <p class="my-4">Hello from modal!</p>
                </b-modal>
            </div> -->
        </div>
       


        <div id="modal-addNewDevice" v-show="openAddModelClicked" class="modal fade"  >
            <div class="modal-dialog modal-fullscreen">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Add New Device</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col">
                                <div class="card">
                                    <div class="card-header">
                                        <i class="bi bi-cpu"></i> {{"Device Details"}}
                                    </div>
                                    <form class="row g-3 p-1">

                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input v-model="device.serial_number" type="number" class="form-control" id="pcb_serial_number" placeholder="PCB Serial Number">
                                                <label for="pcb_serial_number">PCB Serial Number <span class="mandatory">*</span></label>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-floating">
                                                <input v-model="device.device_number" type="text" class="form-control" id="device_serial_number" placeholder="Device Serial Number">
                                                <label for="device_serial_number">Device Serial Number <span class="mandatory">*</span></label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary mr-auto" @click="create">Save</button>
                    </div>
                </div>
            </div>
        </div>

    </main>

</template>

<script>
import axios from 'axios';
import router from '@/router'
    export default {

        methods:{
            // open a model on button click
            openAddDeviceModal(){
                console.log("open vue modal")
                this.openAddModelClicked = true;
                router.push({name:'device_new'})
            },
            // creates a new device in the database
            async create(){
                await axios.post('/device/new',this.device).then(response=>{
                    // this.$router.push({name:"deviceList"})
                    Swal.fire("Success","Device added!","success")
                    this.getDevices();
                    $('#modal-addNewDevice').modal('hide')
                }).catch(error=>{
                    console.log(error)
                    Swal.fire("Failed","Device add failed!","error")
                })
            },
            // gets all the devices from the database
            async getDevices(){
                this.online_devices_count =0;
                this.offline_devices_count =0;
                this.warning_devices_count =0;
                await axios.get('/device').then(response=>{
                    // console.log(response)
                    this.devices = response.data
                    this.devices.forEach(device =>{
                        // console.log(device)
                        if(device.latest_log == null){
                            device.status = "Offline"
                            this.offline_devices_count++
                        }else if(device.latest_log.created_at != device.latest_log.updated_at){
                            device.status = "Online"
                            this.online_devices_count++
                        }else{
                            device.status = "Warning"
                            this.warning_devices_count++
                        }

                    });
                }).catch(error=>{
                    console.log(error)
                    this.devices = []
                })
            },
            async editDeviceName(device){
                console.log("Edit device clicked of id : "+ device.id)
                let device_name = "";

                device_name  = await Swal.fire({
                    title: 'Rename Device',
                    input: 'text',
                    inputLabel: 'Enter new device name for '+device.name,
                    inputValue: device_name,
                    showCancelButton: true,
                    inputValidator: (value) => {
                        if (!value) {
                            return 'You need to write something!'
                        }
                    }
                })

                if (device_name) {
                    console.log(device.id);
                    console.log(device_name.value)
                    if(device_name.value !=undefined){
                        await axios.put(`/device/${device.id}/editDeviceName/${device_name.value}`).then(response=>{
                            // this.$router.push({name:"device_detail"})
                            this.getDevices()
                            Swal.fire(`Your new device name is ${device_name.value}`)
                        }).catch(error=>{
                            console.log(error)
                            this.devices = []
                        })
                    }
                }
            },
            deleteDevice(id){
                if(confirm("Are you sure to delete this device ?")){
                    this.axios.delete(`/device/${id}`).then(response=>{
                        this.getDevices()
                        Swal.fire("Success","Device deleted!",'success')
                    }).catch(error=>{
                        console.log(error)
                    })
                }
            }
        },
        data() {
            return {
                online_devices_count: 0,
                offline_devices_count: 0,
                warning_devices_count: 0,
                message: 'Code by Arun Amatya',
                device_name :"",
                device:{
                    'serial_number':"",
                    'device_number':""
                },
                devices:[],
                filter:'',
                openAddModelClicked: false,

            }
        },
        mounted(){
            console.log("ready")
            // get authenticated user details
            // const user = axios.post('/me').then(response=>{
            //     console.log(response)
            // })
            // console.log(user)
            // var table = $('.table').DataTable({'sDom': 't'});

            // #search-bar-0 is a <input type="text"> element
            // $('#search-bar-0').on( 'keyup', function () {
            //     // console.log("searching");
            //     table.search( this.value ).draw();
            // } );
            $('#btn_add_new_device').on('click',function(){
                console.log("MODAL OPEN jquery")
                // document.getElementById('modal-addNewDevice').show()
                // $('#modal-addNewDevice').modal()
            })
            // $('#btn-onlineDevices').on('click',function(){
            //     console.log("Online Devices")
            //     $('#search-bar-0').val("online")
            //     table.search( "online" ).draw();
            // })
            // $('#btn-offlineDevices').on('click',function(){
            //     console.log("Offline Devices")
            //     $('#search-bar-0').val("offline")
            //     table.search( "offline" ).draw();
            // })
            // $('#btn-warningDevices').on('click',function(){
            //     console.log("Warning Devices")
            //     $('#search-bar-0').val("warning")
            //     table.search( "warning" ).draw();
            // })

            this.getDevices();


        },
        computed: {
            filteredDevices() {
            return this.devices.filter(device => {
                const filter = this.filter.toUpperCase();
                const hasIdMatch = device.device_number.includes(filter);
                const hasNameMatch = device.name !=null ? device.name.toUpperCase().includes(filter):"";

                return hasIdMatch || hasNameMatch;
            })
            }
        },

    };
    // Vue.component("modal", {
    //     template: "#modal-addNewDevice"
    // });
</script>
