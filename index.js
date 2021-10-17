// import Vue from 'vue'

'use strict';

new Vue({
    el: '#app',
    data: {
        vehicleName: '',
        vehicleType: '',
        vehicleModel: '',
        licencePlate: '',
        lastRegistration: '',
        registrationSubmition: ''
    },
    methods: {
        submitForm: function(e) {
            var postData = {
                vehicleName: this.vehicleName,
                vehicleType: this.vehicleType,
                vehicleModel: this.vehicleModel,
                licencePlate: this.licencePlate,
                lastRegistration: this.lastRegistration,
                registrationSubmition: this.registrationSubmition,
            }
            // alert(JSON.stringify(postData));

            // e.preventDefault();
        }
    }
})