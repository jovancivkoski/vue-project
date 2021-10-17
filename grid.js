// import Vue from 'vue'

'use strict';

new Vue({
    el: '#grid',
    data: {
        vehicles: [
            {
               "vehicleName":"vehicle",
               "vehicleType":"Car",
               "plateNumber":"SK-1234-AB",
               "model":"Audi"
            },
            {
               "vehicleName":"vehicle-2",
               "vehicleType":"Van",
               "plateNumber":"SK-5555-AB",
               "model":"Mercedes"
            },
            {
               "vehicleName":"vehicle-3",
               "vehicleType":"Truck",
               "plateNumber":"ST-9852-AB",
               "model":"BMW"
            },
            {
               "vehicleName":"vehicle-4",
               "vehicleType":"Trailer",
               "plateNumber":"PP-7412-AB",
               "model":"Citroen"
            },
            {
               "vehicleName":"vehicle-5",
               "vehicleType":"Container",
               "plateNumber":"SK-3654-AB",
               "model":"Opel"
            }
         ],
        test: 'work'
    },
    methods: {
        editItem: function(item, index) {
           let editedItem = {
            "vehicleName":"test vehicle",
            "vehicleType":"Car",
            "plateNumber":"OH 1234 AC",
            "model":"Golf"
           }

           this.vehicles.splice(index, 1, editedItem);
        },
        deleteItem: function(item, index) {
            this.vehicles.splice(index, 1) 
        }
    }
})