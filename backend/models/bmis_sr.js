import mongoose from 'mongoose';

const official = new mongoose.Schema({
    sPosition: { type: String, required: true },
    completeName: { type: String, required: true },
    pcontact: { 
        type: String, 
        required: true,
        match: /^(\+63|0)[0-9]{10}$/
    },
    paddress: { type: String, required: true },
    termStart: { type: Date, required: true },
    termEnd: { type: Date, required: true },
    status: { 
        type: String, 
        required: true,
        enum: ['Active', 'Inactive']
    }
});

const zone = new mongoose.Schema({
    zone: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 }
});

const resident = new mongoose.Schema({
    lname: { type: String, required: true },
    fname: { type: String, required: true },
    mname: { type: String },
    bdate: { type: String, required: true },
    bplace: { type: String, required: true },
    age: { type: Number, required: true, min: 0 },
    barangay: { type: String, required: true, default: 'San Roque' },
    zone: { type: String, required: true },
    totalhousehold: { type: Number, required: true, min: 1 },
    differentlyabledperson: { type: String },
    relationtohead: { type: String, required: true },
    maritalstatus: { 
        type: String, 
        required: true,
        enum: ['Single', 'Married', 'Widowed', 'Separated', 'Divorced']
    },
    bloodtype: { 
        type: String,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']
    },
    civilstatus: { 
        type: String, 
        required: true,
        enum: ['Single', 'Married', 'Widowed', 'Separated', 'Divorced']
    },
    occupation: { type: String },
    monthlyincome: { type: Number, min: 0 },
    householdnum: { type: Number, required: true },
    lengthofstay: { type: Number, required: true, min: 0 },
    religion: { type: String },
    nationality: { type: String, required: true, default: 'Filipino' },
    gender: { 
        type: String, 
        required: true,
        enum: ['Male', 'Female', 'Other']
    },
    skills: { type: String },
    igpitID: { type: Number },
    philhealthNo: { type: Number },
    highestEducationalAttainment: { type: String },
    houseOwnershipStatus: { 
        type: String,
        required: true,
        enum: ['Owned', 'Rented', 'Living with Parents/Relatives', 'Other']
    },
    landOwnershipStatus: { 
        type: String,
        required: true,
        enum: ['Owned', 'Rented', 'Other']
    },
    dwellingtype: { type: String },
    waterUsage: { type: String, required: true },
    lightningFacilities: { type: String, required: true },
    sanitaryToilet: { type: String, required: true },
    formerAddress: { type: String },
    remarks: { type: String },
    image: { type: String },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 }
});

const permit = new mongoose.Schema({
    residentid: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Resident',
        required: true 
    },
    businessName: { type: String, required: true },
    businessAddress: { type: String, required: true },
    typeOfBusiness: { type: String, required: true },
    orNo: { type: Number, required: true, unique: true },
    samount: { type: Number, required: true, min: 0 },
    dateRecorded: { type: Date, required: true, default: Date.now },
    recordedBy: { type: String, required: true },
    status: { 
        type: String, 
        required: true,
        enum: ['Pending', 'Approved', 'Disapproved']
    }
});

const staff = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 }
});

const blotter = new mongoose.Schema({
    yearRecorded: { type: String, required: true },
    dateRecorded: { type: Date, required: true, default: Date.now },
    complainant: { type: String, required: true },
    cage: { type: Number, required: true, min: 0 },
    caddress: { type: String, required: true },
    ccontact: { 
        type: Number, 
        required: true,
        match: /^(\+63|0)[0-9]{10}$/
    },
    personToComplain: { type: String, required: true },
    page: { type: Number, required: true, min: 0 },
    paddress: { type: String, required: true },
    pcontact: { 
        type: Number,
        required: true,
        match: /^(\+63|0)[0-9]{10}$/
    },
    complaint: { type: String, required: true },
    actionTaken: { type: String, required: true },
    sStatus: { 
        type: String, 
        required: true,
        enum: ['Active', 'Settled', 'Scheduled', 'Dismissed']
    },
    locationOfIncidence: { type: String, required: true },
    recordedby: { type: String, required: true }
});

const clearance = new mongoose.Schema({
    clearanceNo: { type: Number, required: true, unique: true },
    residentid: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Resident',
        required: true 
    },
    findings: { type: String, required: true },
    purpose: { type: String, required: true },
    orNo: { type: Number, required: true, unique: true },
    samount: { type: Number, required: true, min: 0 },
    dateRecorded: { type: Date, required: true, default: Date.now },
    recordedBy: { type: String, required: true },
    status: { 
        type: String, 
        required: true,
        enum: ['Pending', 'Approved', 'Disapproved']
    }
});

const user = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 8 },
    type: { 
        type: String, 
        required: true,
        enum: ['Admin', 'Resident', 'Zone Leader']
    }
});

const household = new mongoose.Schema({
    householdno: { type: Number, required: true, unique: true },
    zone: { type: String, required: true },
    totalhouseholdmembers: { type: Number, required: true, min: 1 },
    headoffamily: { type: String, required: true }
});

export const Official = mongoose.model('Official', official);
export const Zone = mongoose.model('Zone', zone);
export const Resident = mongoose.model('Resident', resident);
export const Permit = mongoose.model('Permit', permit);
export const Staff = mongoose.model('Staff', staff);
export const Blotter = mongoose.model('Blotter', blotter);
export const Clearance = mongoose.model('Clearance', clearance);
export const User = mongoose.model('User', user);
export const Household = mongoose.model('Household', household);