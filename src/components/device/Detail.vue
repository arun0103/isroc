<template>
    <main id="main" class="main">
        <div class="animated fadeIn h-100 overflow-hidden">
            <div class="card">
                <div class="card-body">
                    <!-- Pills Tabs -->
                    <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li class="nav-item" role="presentation">
                        <button class="nav-link active" id="pills-overview-tab" data-bs-toggle="pill" data-bs-target="#pills-overview" type="button" role="tab" aria-controls="pills-overview" aria-selected="true">Overview</button>
                        </li>
                        <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-live-tab" data-bs-toggle="pill" data-bs-target="#pills-live" type="button" role="tab" aria-controls="pills-live" aria-selected="false" tabindex="-1">Live</button>
                        </li>
                        <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-maintenance-tab" data-bs-toggle="pill" data-bs-target="#pills-maintenance" type="button" role="tab" aria-controls="pills-maintenance" aria-selected="false" tabindex="-1">Maintenance</button>
                        </li>
                        <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-settings-tab" data-bs-toggle="pill" data-bs-target="#pills-settings" type="button" role="tab" aria-controls="pills-settings" aria-selected="true">Settings</button>
                        </li>
                        <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-myDevice-tab" data-bs-toggle="pill" data-bs-target="#pills-myDevice" type="button" role="tab" aria-controls="pills-myDevice" aria-selected="false" tabindex="-1">My Device</button>
                        </li>
                        <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-alarmsHistory-tab" data-bs-toggle="pill" data-bs-target="#pills-alarmsHistory" type="button" role="tab" aria-controls="pills-alarmsHistory" aria-selected="false" tabindex="-1">Alarms History</button>
                        </li>
                    </ul>
                    <div class="tab-content pt-2" id="myTabContent">
                        <div class="tab-pane fade show active" id="pills-overview" role="tabpanel" aria-labelledby="overview-tab">
                        <div class="row">
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-body" style="min-height:250px">
                                        <div class="card-title"><b>Device Status</b></div>
                                        <p style="text-align:center; font-size:22px">Running</p>
                                        <span><b>Total Volume </b>: <span id="volume_value">300 GAL</span>
                                            <br>
                                            View in
                                            <select name="volume_unit" id="volume_unit" >
                                                <option value="l">Litres</option>
                                                <option value="g" selected>Gallons</option>
                                            </select>
                                            <!-- <label for="volume_unit">Unit </label> -->
                                        </span>
                                        <br>
                                        <br>
                                       <button class="btn btn-primary" style="width:100%">Start device</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-body" style="min-height:250px">
                                        <div class="card-title"><b>Vitals</b></div>
                                        <span style="font-weight:bold">Inlet EC : </span><span class="float-right">123 &micro;S/cm </span>
                                        <br>
                                        <span style="font-weight:bold">Product EC : </span><span class="float-right">100 &micro;S/cm</span>
                                        <br>
                                        <br>
                                        <span style="font-weight:bold">Inlet Flow : </span><span class="float-right vitals_value">5 gal/min </span>
                                        <br>
                                        <span style="font-weight:bold">Product Flow : </span><span class="float-right vitals_value">10 gal/min</span>
                                        <br>View in
                                            <select name="vitals_unit" id="vitals_unit" >
                                                <option value="lpm">L/min</option>
                                                <option value="gpm" selected>GAL/min</option>
                                            </select>
    
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-body" style="min-height:250px">
                                        <div class="card-title"><b>Live Pressure Drop</b></div>
                                        <span style="font-weight:bold">RO Membrane </span><span class="float-right pressure_value">123 bar </span>
                                        <br>
                                        <span style="font-weight:bold">Safety Filter </span><span class="float-right pressure_value">100 bar</span>
                                        <br>
                                        <span style="font-weight:bold">Pre-Filtration </span><span class="float-right pressure_value"> 1 bar </span>
                                        <br>View in
                                            <select name="pressure_unit" id="pressure_unit" >
                                                <option value="psi">psi</option>
                                                <option value="bar" selected>bar</option>
                                            </select>
    
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-3">
                                <div class="card">
                                    <div class="card-body" style="min-height:250px">
                                        <div class="card-title"><b>Notifications</b></div>
                                        <p style="text-align:center; color:green">No Alarms</p>
                                        <br>
    
    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title" style="text-align: center;font-weight: bold;font-size: 22px;">
                                <select name="view_type" id="view_type" class="form" style="width:175px;margin:0 auto;text-align:center">
                                    <option value="daily">Daily Stats</option>
                                    <option value="monthly">Monthly Stats</option>
                                </select>
                            </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <button id="btn-ec_removal" class="btn btn-primary">EC Removal</button>
                                        <button id="btn-water_recovery" class="btn btn-secondary">Water Recovery</button>
                                        <br>
                                        <br>
                                        <label for="" style="font-weight:bold">01/01/2023</label>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                        <br>
                                        <label for="" style="font-weight:bold">01/01/2023</label>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                        <br>
                                        <label for="" style="font-weight:bold">01/01/2023</label>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                        <br>
                                        <label for="" style="font-weight:bold">01/01/2023</label>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                        <br>
                                        <label for="" style="font-weight:bold">01/01/2023</label>
                                        <div class="progress">
                                            <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <button id="btn-ec_removal" class="btn btn-primary">Volume</button>
                                        <button id="btn-water_recovery" class="btn btn-secondary">Product EC</button>
                                        <br>
                                        <br>
                                        <!-- Bar Chart -->
                                        <canvas id="barChart" style="max-height: 400px; display: block; box-sizing: border-box; height: 295px;" width="443" height="295"></canvas>
                                        <!-- <script>
                                            document.addEventListener("DOMContentLoaded", () => {
                                            new Chart(document.querySelector('#barChart'), {
                                                type: 'bar',
                                                data: {
                                                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                                datasets: [{
                                                    label: 'Bar Chart',
                                                    data: [65, 59, 80, 81, 56, 55, 40],
                                                    backgroundColor: [
                                                    'rgba(255, 99, 132, 0.2)',
                                                    'rgba(255, 159, 64, 0.2)',
                                                    'rgba(255, 205, 86, 0.2)',
                                                    'rgba(75, 192, 192, 0.2)',
                                                    'rgba(54, 162, 235, 0.2)',
                                                    'rgba(153, 102, 255, 0.2)',
                                                    'rgba(201, 203, 207, 0.2)'
                                                    ],
                                                    borderColor: [
                                                    'rgb(255, 99, 132)',
                                                    'rgb(255, 159, 64)',
                                                    'rgb(255, 205, 86)',
                                                    'rgb(75, 192, 192)',
                                                    'rgb(54, 162, 235)',
                                                    'rgb(153, 102, 255)',
                                                    'rgb(201, 203, 207)'
                                                    ],
                                                    borderWidth: 1
                                                }]
                                                },
                                                options: {
                                                scales: {
                                                    y: {
                                                    beginAtZero: true
                                                    }
                                                }
                                                }
                                            });
                                            });
                                        </script> -->
                                        <!-- End Bar CHart -->
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div class="tab-pane fade" id="pills-live" role="tabpanel" aria-labelledby="live-tab">
                        Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
                        </div>
                        <div class="tab-pane fade" id="pills-maintenance" role="tabpanel" aria-labelledby="maintenance-tab">
                        Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
                        </div>
                        <div class="tab-pane fade" id="pills-settings" role="tabpanel" aria-labelledby="settings-tab">
                        Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.
                        </div>
                        <div class="tab-pane fade" id="pills-myDevice" role="tabpanel" aria-labelledby="myDevice-tab">
                        Nesciunt totam et. Consequuntur magnam aliquid eos nulla dolor iure eos quia. Accusantium distinctio omnis et atque fugiat. Itaque doloremque aliquid sint quasi quia distinctio similique. Voluptate nihil recusandae mollitia dolores. Ut laboriosam voluptatum dicta.
                        </div>
                        <div class="tab-pane fade" id="pills-alarmsHistory" role="tabpanel" aria-labelledby="alarmsHistory-tab">
                        Saepe animi et soluta ad odit soluta sunt. Nihil quos omnis animi debitis cumque. Accusantium quibusdam perspiciatis qui qui omnis magnam. Officiis accusamus impedit molestias nostrum veniam. Qui amet ipsum iure. Dignissimos fuga tempore dolor.
                        </div>
                    </div><!-- End Pills Tabs -->
    
                </div>
              </div>
            <!-- <nav class="mb-0 selector-breadcrumb" aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <div class="col-sm-6 col-lg-3">
                        <div class="no-bottom-margin form-group">
                            <input id="date-input" name="date-input" placeholder="From date" type="datetime-local" class="form-control" value="2022-11-11T00:00:00">
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-3">
                        <div class="no-bottom-margin form-group">
                            <input id="date-input" name="date-input" placeholder="To date" type="datetime-local" class="form-control" value="2022-11-18T23:59:59">
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-2">
                        <div id="aggregationForm" class="no-bottom-margin form-group">
                            <select name="aggregation" id="aggregation" class="form-control">
                                <option value="second">Raw</option>
                                <option value="hour">Hourly</option>
                                <option value="day">Daily</option>
                                <option value="week">Weekly</option>
                                <option value="month">Monthly</option>
                                <option value="year">Yearly</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-2">
                        <div id="presetForm" class="no-bottom-margin form-group">
                            <select name="preset" id="preset" class="form-control">
                                <option value="">Presets...</option>
                                <option value="24h">Last 24h</option>
                                <option value="48h">Last 48h</option>
                                <option value="7d">Last 7 days</option>
                                <option value="30d">Last 30 days</option>
                                <option value="12m">Last 12 months</option>
                                <option value="today">Today</option>
                                <option value="yesterday">Yesterday</option>
                                <option value="this-week">This week</option>
                                <option value="last-week">Last week</option>
                                <option value="this-month">This month</option>
                                <option value="last-month">Last month</option>
                                <option value="this-year">This year</option>
                                <option value="last-year">Last year</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-sm-12 col-lg-2">
                        <div id="searchButton" class="no-bottom-margin text-center form-group">
                            <button type="button" class="btn-block btn btn-primary">
                            <i class="bi bi-arrow-repeat"> Reload</i>
                            </button>
                        </div>
                    </div>
                </ol>
            </nav> -->
            <!-- <div class="m-0 mb-sm-1 alert alert-warning alert-dismissible fade show" role="alert">
            <button type="button" class="close" aria-label="Close" style="float:right">
                <span aria-hidden="true">??</span>
            </button>
            Important: all times are displayed in the asset's local time (America/Chicago).
        </div> -->
        <!-- <div class="row">
            <div class="col">
                <div class="card"> -->
                    <!--  DailyChart mx-sm-4 my-0 my-sm-2 -->
                    <!-- <div class="card-header bg-blue">
                    <i class="bi bi-graph-up"></i> Gen 3 Option 4 Prototype 1
                        <i class="bi bi-file-export"></i>
                        <i class="bi bi-camera-alt"></i>
                        <button type="button" class="float-right p-0 mx-3 btn">
                            <i class="bi bi-download"></i> CSV
                        </button>
                    </div>
                    <div class="card-header-no-bg-no-border card-header">
                        <div aria-label="Metric Selection" role="toolbar" class="float-right ml-3 btn-toolbar" style="margin-left:5px">
                            <div aria-label="First group" role="group" class="btn-group">
                                <div class="input-group-prepend">
                                    <span class="input-group-text min-width-auto">Measure</span>
                                </div>
                                <button type="button" class="btn btn-outline-primary active">Pressure</button>
                                <button type="button" class="btn btn-outline-primary">Pressure Drop</button>
                            </div>
                        </div>
                        <div class="float-right my-0"> </div>
                            <div aria-label="Grouping Toolbar" role="toolbar" class="float-right btn-toolbar">
                                <div aria-label="Grouping Button Group" role="group" class="btn-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text min-width-auto">Group by</span>
                                    </div>
                                    <button type="button" class="btn btn-outline-primary active">Stream Direction</button>
                                </div>
                            </div>
                        </div>
                        <div class="card-body"> -->
    
                            <!-- Line Chart -->
                            <!-- <canvas id="lineChart" style="max-height: 400px; display: block; box-sizing: border-box; height: 221px; width: 443px;" width="443" height="221"></canvas>
                            <script>
                                document.addEventListener("DOMContentLoaded", () => {
                                new Chart(document.querySelector('#lineChart'), {
                                    type: 'line',
                                    data: {
                                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                                    datasets: [{
                                        label: 'Pressure',
                                        data: [65, 59, 80, 81, 56, 55, 40],
                                        fill: false,
                                        borderColor: 'rgb(75, 192, 192)',
                                        tension: 0.1
                                    }]
                                    },
                                    options: {
                                    scales: {
                                        y: {
                                        beginAtZero: true
                                        }
                                    }
                                    }
                                });
                                });
                            </script> -->
                            <!-- End Line CHart -->
                        <!-- </div>
                    </div>
                    <div class="card-footer">
                        <div class="text-center row">
                            <div class="mb-sm-2 mb-0 col-4"><div>
                                <div class="text-muted">Min per day</div>
                                <strong>Infinity bar</strong>
                            </div>
                        </div>
                        <div class="mb-sm-2 mb-0 col-4"><div>
                            <div class="text-muted">Max per day</div>
                            <strong>0.00 bar</strong>
                        </div>
                    </div>
                    <div class="mb-sm-2 mb-0 col-4"><div>
                        <div class="text-muted">Average per day</div>
                        <strong>0.00 bar</strong>
                        <div class="text-muted">(excluding zeros)</div>
                    </div> -->
                <!-- </div>
            </div>
        </div> -->
    </div>
    
    <!-- <div class="animated fadeIn">
        <div class="row">
            <div class="col">
                <div class="card">
                    <div class="card-header">
                        <i class="fa fa-warehouse"></i> Your consumables
                        <button type="button" class="react-bs-table-csv-btn btn btn-default float-right p-0 btn-link">
                            <i class="fas fa-download"></i> CSV
                        </button>
                    </div>
                    <div class="card-body">
                        <div>
                            <label for="search-bar-0" class="search-label">
                                <span id="search-bar-0-label" class="sr-only">Search this table</span>
                                <input id="search-bar-0" type="text" aria-labelledby="search-bar-0-label" class="form-control " placeholder="Search" value="">
                            </label>
                            <button type="button" class="float-right btn btn-primary">Add a new consumable</button>
                            <span class="float-right p-2">0 consumables found</span>
                            <div class="react-bootstrap-table table-responsive consumables-table">
                                <table class="table table-striped table-hover table-sm">
                                    <thead>
                                        <tr>
                                            <th tabindex="0" aria-label="Name sortable" class="sortable">
                                                Name<span class="order-4"></span>
                                            </th>
                                            <th tabindex="0" aria-label="Type sortable" class="sortable d-none d-md-table-cell">
                                                Type<span class="order-4"></span>
                                            </th>
                                            <th tabindex="0" aria-label="Installation sortable" class="sortable d-none d-md-table-cell">
                                                Installation<span class="order-4"></span>
                                            </th>
                                            <th tabindex="0" aria-label="Expiry sortable" class="sortable">
                                                Expiry<span class="order-4"></span>
                                            </th>
                                            <th tabindex="0" aria-label="Flow Quantity sortable" class="sortable">
                                                Flow Quantity<span class="order-4"></span>
                                            </th>
                                            <th tabindex="0" aria-label="Pressure sortable" class="sortable">
                                                <span style="display: flex;">Pressure
                                                    <span class="">
                                                        <i class="far fa-question-circle mx-1" id="icon-with-tooltip-179894905"></i>
                                                    </span>
                                                    <span class="order-4"></span>
                                                </span>
                                            </th>
                                            <th tabindex="0" aria-label="Predicted Capacity Overflow sortable" class="sortable">
                                                Predicted Capacity Overflow<span class="order-4"></span>
                                            </th>
                                            <th tabindex="0" aria-label="Last Activity sortable" class="sortable d-none d-md-table-cell">
                                                <span style="display: flex;">Last Activity
                                                    <span class=""><i class="far fa-question-circle mx-1" id="icon-with-tooltip--1792127366"></i>
                                                </span>
                                                <span class="order-4"></span>
                                            </span>
                                        </th>
                                        <th tabindex="0"></th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        <div class="row react-bootstrap-table-pagination">
                            <div class="col-md-6 col-xs-6 col-sm-6 col-lg-6">
                                <span class="react-bs-table-sizePerPage-dropdown dropdown" style="visibility: visible;">
                                    <button id="pageDropDown" type="button" class="btn btn-default btn-secondary dropdown-toggle" data-toggle="dropdown" aria-expanded="false">15 </button>
                                    <ul class="dropdown-menu " role="menu" aria-labelledby="pageDropDown">
                                        <a href="#" tabindex="-1" role="menuitem" class="dropdown-item" data-page="15">15 items per page</a>
                                        <a href="#" tabindex="-1" role="menuitem" class="dropdown-item" data-page="50">50 items per page</a>
                                        <a href="#" tabindex="-1" role="menuitem" class="dropdown-item" data-page="100">100 items per page</a>
                                        <a href="#" tabindex="-1" role="menuitem" class="dropdown-item" data-page="1000">All items</a>
                                    </ul>
                                </span>
                            </div>
                            <div class="react-bootstrap-table-pagination-list col-md-6 col-xs-6 col-sm-6 col-lg-6">
                                <ul class="pagination react-bootstrap-table-page-btns-ul"></ul>
                            </div>
                        </div>
                    </div>
                    <button type="button" class="mt-3 btn btn-primary">Add a new consumable</button>
                </div>
            </div>
        </div>
    </div> -->
   
    
        <section class="section">
    
    
        </section>
    
    </main><!-- End #main -->
</template>