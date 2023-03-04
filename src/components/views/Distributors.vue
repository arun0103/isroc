
<style>
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
</style>
<template>
    <main id="main" class="main">
        <div class="row">
            <div class="col-sm-12 col-md-12">
                <div class="card">
                <div class="card-body">
                    <h5 class="card-title"><i class="fa fa-bank"></i> All Distributors</h5>
                    <div class="row">
                        <div class="col-md-4 col-sm-12">
                            <label for="search-bar-0" class="search-label" style="width:100%">
                                <span id="search-bar-0-label" class="sr-only">Search this table</span>
                                <input id="search-bar-0" type="text" aria-labelledby="search-bar-0-label" class="form-control" placeholder="Search" value="">
                            </label>
                        </div>
                        <div class="col-md-5 col-sm-12 float-right">
                            <span class="float-right p-2">1 distributor(s) found</span>
                        </div>
                        <div class="col-md-3 col-sm-12 float-right">
                            <button id="btn_add_new_distributor" class="btn btn-primary" style="width:100%">Add new distributor</button>
                        </div>
    
                        <div class="react-bootstrap-table table-responsive" style="width:100%">
                            <table class="table table-striped table-hover table-sm" style="font-size:14px !important">
                                <thead>
                                    <tr>
                                        <th data-field="id" data-sortable="true">ID</th>
                                        <th data-field="code" data-sortable="true">Name</th>
                                        <th data-field="email" data-sortable="true">Email</th>
                                        <th data-field="address" data-sortable="true">Address</th>
                                        <th data-field="clients_number" data-sortable="true"># Client </th>
                                        <th data-field="devices_number" data-sortable="true"># Devices</th>
                                        <th data-field="activation-date" data-sortable="true">Last Active</th>
                                        <th data-field="options" data-sortable="false"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <!-- <tr class="align-middle" id="row_add_new_distributor" hidden>
                                        <td>###</td>
                                        <td>
                                            <div class="form-floating mb-12">
                                                <input type="email" class="form-control" id="new_distributor_name" placeholder="Company Name" style="width:100%">
                                                <label for="floatingInput">Company Name</label>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="form-floating mb-12">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="###"  style="width:100%">
                                            <label for="floatingInput">Company Email</label>
                                            </div>
                                        </td>
                                        <td colspan="2">
                                            <div class="form-floating mb-12">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="###"  style="width:100%">
                                            <label for="floatingInput">APP/Suite/Other</label>
                                            </div>
                                            <div class="form-floating mb-12">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="###"  style="width:100%">
                                            <label for="floatingInput">Address Line 1</label>
                                            </div>
                                            <div class="form-floating mb-12">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="###"  style="width:100%">
                                            <label for="floatingInput">City</label>
                                            </div>
                                            <div class="form-floating mb-12">
                                            <input type="email" class="form-control" id="floatingInput" placeholder="###"  style="width:100%">
                                            <label for="floatingInput">Country</label>
                                            </div>
                                        </td>
    
                                        <td>
                                            <div class="form-floating mb-12">
                                                <input type="email" class="form-control" id="floatingInput" placeholder="###"  style="width:100%">
                                                <label for="floatingInput">Company Phone</label>
                                            </div>
                                        </td>
                                        <td>
                                            <a href=""><i class="bi bi-file-text" aria-hidden="true"></i> Save</a>
                                        </td>
                                        <td>
                                            <a href=""><i class="bi bi-cross" aria-hidden="true"></i> Cancel</a>
                                        </td>
                                    </tr> -->
                                    <tr class="align-middle">
                                        <td>1</td>
                                        <td><router-link to="/distributor/detail/1">Dummy Distributor </router-link> </td>
                                        <td>dummy@distributor.com</td>
                                        <td>123 street, Abc City, Nepal</td>
                                        <td><a href="">2</a></td>
                                        <td><a href="">0</a></td>
                                        <td>1/12/2021</td>
                                        <td>
                                            <a href=""><i class="link_asset_detail bi bi-vector-pen"></i></a>
                                        </td>
                                    </tr>
    
                                </tbody>
                            </table>
                        </div>
                        <!-- </div> -->
                    </div>
                </div>
    
                </div>
            </div>
        </div>
    </main><!-- End #main -->
    
    <div class="modal fade" id="modal-addNewDistributor" tabindex="-1" aria-hidden="true" style="display: none;">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Add New Distributor</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-header">
                                <i class="ri ri-bank-line"></i> {{"Company Details"}}
                            </div>
                            <!-- Floating Labels Form -->
                        <form>
                            <div class="row g-3 p-1">
                                <div class="col-md-4">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="distributorComapnyName" placeholder="Company Name" value="">
                                        <label for="distributorComapnyName">Company Name <span class="mandatory">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="distributorEmail" placeholder="Email" value="">
                                        <label for="distributorEmail">Company Email <span class="mandatory">*</span></label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-floating">
                                        <input type="number" class="form-control" id="distributorContactNumber" placeholder="Contact" value="">
                                        <label for="distributorContactNumber">Contact #</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row g-3 p-1">
                                <div class="col-md-3">
                                    <div class="form-floating mb-3">
                                        <select class="form-select" id="select_country" aria-label="Select country">
                                            <option value="" hidden>-</option>
                                            <option value="0">Nepal</option>
                                            <option value="1">America</option>
                                            <option value="2">Australia</option>
                                            <option value="3">England</option>
                                        </select>
                                        <label for="select_country">Country</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-floating mb-3">
                                        <select class="form-select" id="select_state" aria-label="Select state">
                                            <option value="" hidden>-</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">Bagmati</option>
                                            <option value="4">4</option>
                                        </select>
                                        <label for="select_state">State</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="city" placeholder="City" value="">
                                        <label for="city">City</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="address_line_1" placeholder="Address Line 1" value="">
                                        <label for="address_line_1">Address Line 1</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row g-3 p-1" style="margin-top:-30px">
                                <div class="col-md-9">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="address_line_2" placeholder="APT/SUITE, OTHERS" value="">
                                        <label for="address_line_2">APT/SUITE, OTHERS</label>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-floating">
                                        <input type="number" class="form-control" id="zip_code" placeholder="Zip Code" value="">
                                        <label for="zip_code">Zip Code</label>
                                    </div>
                                </div>
                            </div>
                            <!-- <div class="card-footer">
                                <div class="text-center action_buttons" style="float:right;margin:0px 10px 10px 10px" hidden>
                                    <button id="btn-cancel_update" type="cancel" class="btn btn-secondary">Cancel</button>
                                    <button id="btn-update_distributor" type="button" class="btn btn-primary">Update</button>
                                </div>
                            </div> -->
    
                        </form><!-- End floating Labels Form -->
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary mr-auto">Save</button>
            </div>
            </div>
        </div>
    </div>
    
</template>



<!-- <script>
    $('.link_asset_detail').on('click',function(){
        let id = $(this).closest('tr').attr('id');
        console.log(id)

    })

</script>
<script>
    $(document).ready(function(){
        console.log("ready")
        var table = $('.table').DataTable({'sDom': 't'});

        // #myInput is a <input type="text"> element
        $('#search-bar-0').on( 'keyup', function () {
            console.log("searching");
            table.search( this.value ).draw();
        } );
        $('#btn_add_new_distributor').on('click', function(){
            console.log("add new distributor clicked")
            $('#modal-addNewDistributor').modal('show');
        })
    });
</script> -->
