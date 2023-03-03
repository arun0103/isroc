<style scoped>
 .float-right{
    float:right;
 }
</style>
<template>
    <main  class="main" id="main">
        <div class="container">
        
            <div class="card">
                <div class="card-header">
                    <i class="bi bi-cpu"></i> {{"Add New Device Details"}}
                </div>
                <div class="card-body">
                    <div class="row g-3 p-1">
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
                    </div>

                </div>
                
                <div class="card-footer">
                    <button type="button" class="btn btn-secondary" @click="goBack">Cancel</button>
                    <button type="button" class="btn btn-primary mr-auto float-right" @click="create">Save</button>
                </div>
            </div>
                        
        </div>
    </main>
</template>
<script>
import router from '@/router'
import axios from 'axios'
export default{
    data(){
        return{
            device:{
                serial_number: '',
                device_number: '',
                name: ''
            }
        }
    },
    methods:{
        create(){
            console.log("attempt to create")
            //validate serial number and device number
            // let validated = true;
            // if(this.device.serial_number!=0){
            //     validated = false;
            //     console.log("Invalid serial number"+this.device.serial_number)
            // }
            // if(this.device.device_number.length <0){
            //     validated = false;
            // }
            // // check validated and create 
            // if(validated){
                console.log("Validated")
                const addDevice = axios.post('/device/new',{
                    serial_number: this.device.serial_number,
                    device_number: this.device.device_number
                }).catch(error=>{
                    console.log(error)
                }).then(response=>{
                    console.log(response.data.device)
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'New Device has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
            // }else{
            //     console.log("invalid")
            // }
        },
        goBack(){
            router.push({name:'home'})
        }
    }
}
</script>