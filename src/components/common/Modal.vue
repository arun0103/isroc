<template>
    <main  class="main" id="main">
        <div class="container">

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
        }
    }
}
</script>