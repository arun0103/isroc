<template>
    <main>
        <div class="col-12">
            <label for="password" class="form-label">New Password</label>
            <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend"><span class="bi bi-key"></span></span>
                <input type="password" name="password" class="form-control" id="password" required="" v-bind="password">
                <div class="invalid-feedback">Please enter your password!</div>
            </div>
        </div>
        <div class="col-12">
            <label for="password" class="form-label">Confirm Password</label>
            <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend"><span class="bi bi-key"></span></span>
                <input type="password" name="confirm_password" class="form-control" id="confirm_password" required="" v-bind="confirm_password">
                <div class="invalid-feedback">Please enter the same password!</div>
            </div>
        </div>
    </main>
</template>
<script>
// import { defineComponent } from '@vue/composition-api'

export default{
    setup() {
        
    },
    data() {
        return {
            password:'',
            confirm_password:''
        }
    }
}
</script>
