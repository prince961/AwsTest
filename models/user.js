const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: [true,'name is required']
    },
    emailId:{
        type: String,
        required: [true,'email is required']
    },
    phone:{
        type: String,
        required: [true,'phone is required']
    },
    bhkId:{
        type: String,
        required: [false,'BHK ID is required']
    },
    address:{
        type: String,
        required: [false,'address is not mandatory']
    },
    latitude:{
        type: String,
        required: [false,'latitude is not mandatory']
    },
    longitude:{
        type: String,
        required: [false,'longitude is not mandatory']
    },
    roomArray : 
    [{
        
        roomName:{
            type: String,
            required: [true,'roomName is required']
        },
        roomType:{
            type: String,
            required: [true,'roomType is required']
        },
        roomId:{
            type: Number,
            required: [false,'roomID is required']
        },
        pingFoxDeviceList:
        [{
            pingfoxDeviceName:{
                type: String,
                required: [true,'pingfoxDeviceName is required']
            },
            fullTopic:{
                type: String,
                required: [true,'fullTopic is required']
            },
            deviceChannels:{
                type: Number,
                required: [true,'deviceChannels is required']
            },
            internetConnection:{
                type: Boolean,
                //required: [true,'pingfoxDeviceName is required']
            },
            localConnection:{
                type: Boolean,
                //required: [true,'pingfoxDeviceName is required']
            },
            macAddress:{
                type: String,
                required: [true,'macAddress is required']
            },
            deviceList:
            [{
                relayName:{
                    type: String,
                    required: [true,'devideName is required']
                },
                relayOn:{
                    type: Boolean,
                    required: [true,'devicePowerOnStatus is required']
                },
                commonRelayTopic:{
                    type: String,
                    required: [true,'commonRelayTopic is required']
                },
                channel:{
                    type: Number,
                    required: [true,"DeviceRelayChannel is required"]
                }
            }]


        }]
    }]
    

}); 

const User = mongoose.model('userCollection',userSchema);
module.exports = User; 
