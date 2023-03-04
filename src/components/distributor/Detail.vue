<template>
    <main class="main" id="main">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <i class="ri ri-bank-line"></i> {{"Distbutor Details"}}
                        <button type="button" id="btn-edit_distributor" class="btn btn-secondary float-right p-0" @click="onEditDistributorDetailClicked">
                            <i class="bi bi-brush"></i> Edit
                        </button>
                    </div>
                    <!-- Floating Labels Form -->
                    <form>
                        <div class="row g-3 p-1">
                            <div class="col-md-4">
                                <div class="form-floating">
                                    <input type="text" class="form-control" v-model="companyName" id="distributorComapnyName" placeholder="Company Name" :disabled="!editMode">
                                    <label for="distributorComapnyName">Company Name</label>
                                </div>
                            </div>
                            <div class="col-md-5">
                                <div class="form-floating">
                                    <input type="email" class="form-control" v-model="companyEmail" id="distributorEmail" placeholder="Email" :disabled="!editMode">
                                    <label for="distributorEmail">Company Email</label>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-floating">
                                    <input type="number" class="form-control" v-model="companyContactNumber" id="distributorContactNumber" placeholder="Contact" :disabled="!editMode">
                                    <label for="distributorContactNumber">Contact #</label>
                                </div>
                            </div>
                        </div>
                        <div class="row g-3 p-1">
                            <div class="col-md-3">
                                <div class="form-floating mb-3">
                                    <select class="form-select" v-model="country" id="select_country" aria-label="Select country" :disabled="!editMode">
                                        <option selected="">Nepal</option>
                                        <option value="1">America</option>
                                        <option value="2">Australia</option>
                                        <option value="3">England</option>
                                    </select>
                                    <label for="select_country">Country</label>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-floating mb-3">
                                    <select class="form-select" v-model="state" id="select_state" aria-label="Select state" :disabled="!editMode">
                                        <option selected="">1</option>
                                        <option value="1">2</option>
                                        <option value="2">Bagmati</option>
                                        <option value="3">4</option>
                                    </select>
                                    <label for="select_state">State</label>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-floating">
                                    <input type="text" class="form-control" v-model="city" id="city" placeholder="City" :disabled="!editMode">
                                    <label for="city">City</label>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-floating">
                                    <input type="text" class="form-control" v-model="address_line_1" id="address_line_1" placeholder="Address Line 1" :disabled="!editMode">
                                    <label for="address_line_1">Address Line 1</label>
                                </div>
                            </div>
                        </div>
                        <div class="row g-3 p-1" style="margin-top:-30px">
                            <div class="col-md-9">
                                <div class="form-floating">
                                    <input type="text" class="form-control" v-model="address_line_2" id="address_line_2" placeholder="APT/SUITE, OTHERS" :disabled="!editMode">
                                    <label for="address_line_2">APT/SUITE, OTHERS</label>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="form-floating">
                                    <input type="number" class="form-control" v-model="zip_code" id="zip_code" placeholder="Zip Code"  :disabled="!editMode">
                                    <label for="zip_code">Zip Code</label>
                                </div>
                            </div>
                        </div>
                        <div class="card-footer" v-show="editMode">
                            <!-- <div class="text-center action_buttons"> -->
                                <button id="btn-cancel_update" type="cancel" class="btn btn-secondary" @click="cancelEditDistributorClicked">Cancel</button>
                                <button id="btn-update_distributor" type="button" class="btn btn-primary float-right" @click="updateDistributorClicked">Update</button>
                            <!-- </div> -->
                        </div>

                    </form><!-- End floating Labels Form -->
                </div>
            </div>
        </div>

        <div class="row g-3 p-1">
            <div class="col" style="margin:0px">
                <div class="card">
                    <div class="card-body">
                        <div class="card-title">
                        <ul class="nav nav-tabs nav-tabs-bordered" id="borderedTab" role="tablist">
                            <li class="nav-item" role="presentation">
                                <button class="nav-link active" id="devices-tab" data-bs-toggle="tab" data-bs-target="#bordered-devices" type="button" role="tab" aria-controls="devices" aria-selected="true">Devices</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="collaborators-tab" data-bs-toggle="tab" data-bs-target="#bordered-collaborators" type="button" role="tab" aria-controls="collaborators" aria-selected="false" tabindex="-1">Collaborators</button>
                            </li>
                            <li class="nav-item" role="presentation">
                                <button class="nav-link" id="clients-tab" data-bs-toggle="tab" data-bs-target="#bordered-clients" type="button" role="tab" aria-controls="clients" aria-selected="false" tabindex="-1">Clients</button>
                            </li>
                        </ul>
                        </div>
                        <div class="tab-content pt-2" id="borderedTabContent">
                            <div class="tab-pane fade show active" id="bordered-devices" role="tabpanel" aria-labelledby="devices-tab">
                                <div>
                                    <label for="search-bar-0" class="search-label">
                                        <span id="search-bar-0-label" class="sr-only">Search devices</span>
                                        <input id="search-bar-0" type="text" aria-labelledby="search-bar-0-label" class="form-control " placeholder="Search" value="">
                                    </label>
                                    <span class="float-right p-2">2 devices found</span>
                                    <div class="react-bootstrap-table table-responsive" style="width:100%">
                                        <table class="table table-striped table-hover table-sm" style="font-size:14px !important">
                                            <thead>
                                                <tr>
                                                    <th data-field="code" data-sortable="true">Device Name</th>
                                                    <th data-field="id" data-sortable="true">Device ID</th>
                                                    <th data-field="value1" data-sortable="true">Client </th>
                                                    <th data-field="value2" data-sortable="true">Type</th>
                                                    <th data-field="activation-date" data-sortable="true">Activation Date</th>
                                                    <th data-field="connection" data-sortable="true" style="text-align:center">Connection</th>
                                                    <th data-field="status" data-sortable="true" style="text-align:center">Status</th>
                                                    <th data-field="info" data-sortable="false"></th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                <tr class="align-middle">
                                                    <td><a >Innovatek Prototype 1 </a></td>
                                                    <td>1</td>
                                                    <td><a href="">ABC</a></td>
                                                    <td>HPC</td>
                                                    <td>1/12/2021</td>
                                                    <td style="text-align:center"><i class="ri ri-wifi-fill fa-lg" style="color:green"></i><span hidden>Online</span> </td>
                                                    <td style="text-align:center">
                                                        <i class="bi bi-shield-fill-exclamation fa-lg" style="color:#ffc107"></i><span class="info_status" hidden>Warning</span>
                                                    </td>
                                                    <td>
                                                        <a href=""><i class="link_asset_detail bi bi-vector-pen"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="bordered-collaborators" role="tabpanel" aria-labelledby="collaborators-tab">
                                <div>
                                    <label for="search-bar-1" class="search-label">
                                        <span id="search-bar-1-label" class="sr-only">Search collaborators</span>
                                        <input id="search-bar-1" type="text" aria-labelledby="search-bar-1-label" class="form-control" placeholder="Search" value="">
                                    </label>
                                    <span class="float-right p-2">2 collaborators found</span>
                                    <div class="react-bootstrap-table table-responsive" style="width:100%">
                                        <table class="table table-striped table-hover table-sm" style="font-size:14px !important">
                                            <thead>
                                                <tr>
                                                    <th data-field="code" data-sortable="true">Name</th>
                                                    <th data-field="id" data-sortable="true">ID</th>
                                                    <th data-field="value1" data-sortable="true">Client </th>
                                                    <th data-field="value2" data-sortable="true">Type</th>
                                                    <th data-field="activation-date" data-sortable="true">Activation Date</th>
                                                    <th data-field="connection" data-sortable="true">Connection</th>
                                                    <th data-field="status" data-sortable="true" style="text-align:center">Status</th>
                                                    <th data-field="info" data-sortable="false" style="text-align:center"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="align-middle">
                                                    <td><a>Innovatek Prototype 1 </a></td>
                                                    <td>1</td>
                                                    <td><a href="">ABC</a></td>
                                                    <td>HPC</td>
                                                    <td>1/12/2021</td>
                                                    <td style="text-align:center"><i class="ri ri-wifi-fill fa-lg" style="color:green"></i><span hidden>Online</span> </td>
                                                    <td style="text-align:center"><i class="bi bi-shield-fill-exclamation fa-lg" style="color:#ffc107"></i><span class="info_status" hidden>Warning</span></td>
                                                    <td><a href=""><i class="link_asset_detail bi bi-vector-pen"></i></a></td>
                                                </tr>
                                            </tbody>

                                        </table>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-pane fade" id="bordered-clients" role="tabpanel" aria-labelledby="clients-tab">
                                <div>
                                    <label for="search-bar-2" class="search-label">
                                        <span id="search-bar-2-label" class="sr-only">Search clients</span>
                                        <input id="search-bar-2" type="text" aria-labelledby="search-bar-2-label" class="form-control " placeholder="Search" value="">
                                    </label>
                                    <span class="float-right p-2">2 clients found</span>
                                    <div class="react-bootstrap-table table-responsive" style="width:100%">
                                        <table class="table table-striped table-hover table-sm" style="font-size:14px !important">
                                            <thead>
                                                <tr>
                                                    <th data-field="code" data-sortable="true">Device Name</th>
                                                    <th data-field="id" data-sortable="true">Device ID</th>
                                                    <th data-field="value1" data-sortable="true">Client </th>
                                                    <th data-field="value2" data-sortable="true">Type</th>
                                                    <th data-field="activation-date" data-sortable="true">Activation Date</th>
                                                    <th data-field="connection" data-sortable="true"  style="text-align:center">Connection</th>
                                                    <th data-field="status" data-sortable="true" style="text-align:center">Status</th>
                                                    <th data-field="info" data-sortable="false" style="text-align:center"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr class="align-middle">
                                                    <td><a>Innovatek Prototype 1 </a></td>
                                                    <td>1</td>
                                                    <td><a href="">ABC</a></td>
                                                    <td>HPC</td>
                                                    <td>1/12/2021</td>
                                                    <td style="text-align:center"><i class="ri ri-wifi-fill fa-lg" style="color:green"></i><span hidden>Online</span> </td>
                                                    <td style="text-align:center">
                                                        <i class="bi bi-shield-fill-exclamation fa-lg" style="color:#ffc107"></i><span class="info_status" hidden>Warning</span>
                                                    </td>
                                                    <td>
                                                        <a href=""><i class="link_asset_detail bi bi-vector-pen"></i></a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="Toastify"></div>
    </main>

</template>

<script>
    import axios from 'axios'
    export default {
        data() {
            return {
                companyName: 'Innovatek Solutions',
                companyEmail: 'contact@isadmin.com',
                companyContactNumber: '987654321',
                country: 'America',
                state: 'Texas',
                city: 'Dallas',
                address_line_1: '123 strret',
                address_line_2: '41-B, ABC Complex',
                zip_code: '1010',
                editMode: false
            }
        },
        methods:{
            old_values : [],
            onEditDistributorDetailClicked(){
                console.log("Edit Distributor Clicked!")
                this.editMode = true
                this.old_values =[
                    companyName => this.companyName,

                ]
                console.log(this.old_values)

            },
            cancelEditDistributorClicked(){
                this.editMode = false
                console.log(this.old_values)
            }
        },
        setup(){
            axios.post('me').then(response=>{
                console.log(response.data)
            })
        }
    };
    
</script>
