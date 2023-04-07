import bcrypt from "bcryptjs";
import { HIGHER_SECONDARY_EDUCATION_TYPES } from "../constants/studentConstants.js";
const guests = [
  {
    name: {
      firstName: "John",
      middleName: "Ed",
      lastName: "Snow",
    },
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),

    alternateEmail: "john.alt@example.com",
    mobileNumber: 1234567890,
    dateOfBirth: new Date(2001, 0, 1),
    collegeRegistrationNumber: "ABCD1234",
    branch: "MECH",
    gender: "MALE",
    currentYear: 4,
    division: 7,
    rollNumber: 12345,
    aadharNumber: 657734348989,
    panNumber: "ABC123GBK",
    prnNumber: "7896789K",
    permanentAddress: {
      flatNumber: 5,
      street: "High street",
      area: "Eastwood",
      city: "Austin",
      pincode: 110110,
      district: "Austin",
      state: "Texas",
    },
    temporaryAddress: {
      flatNumber: 5,
      street: "High street",
      area: "Eastwood",
      city: "Austin",
      pincode: 110110,
      district: "Austin",
      state: "Texas",
    },

    higherSecondayEducation: HIGHER_SECONDARY_EDUCATION_TYPES.TWELTH,
    thirdYearCompleted: true,
    tenth: {
      startYear: 2016,
      passingYear: 2017,
      board: "SSC",
      markingScheme: "PERCENTAGE",
      scoredMarks: 450,
      totalMarks: 500,
    },
    twelth: {
      startYear: 2018,
      passingYear: 2019,
      board: "HSC",
      markingScheme: "PERCENTAGE",
      scoredMarks: 400,
      totalMarks: 500,
    },

    firstYear: {
      cgpaSem1: 9,
      cgpaSem2: 8,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 2019,
      endYear: 2020,
    },
    secondYear: {
      cgpaSem1: 9,
      cgpaSem2: 8,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 2020,
      endYear: 2021,
    },
    thirdYear: {
      cgpaSem1: 9,
      cgpaSem2: 8,
      activeBacklog: 1,
      passiveBacklog: 1,
      startYear: 2021,
      endYear: 2022,
    },
    fourthYear: {
      cgpaSem1: 9,
      cgpaSem2: 8,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 2022,
      endYear: 2023,
    },
  },
  {
    name: {
      firstName: "Jane",
      middleName: "Ed",
      lastName: "Doe",
    },
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),

    alternateEmail: "jane.alt@example.com",
    mobileNumber: 987653210,
    dateOfBirth: new Date(2002, 0, 1),
    collegeRegistrationNumber: "EFGH1234",
    gender: "FEMALE",
    branch: "CIVIL",
    currentYear: 4,
    division: 8,
    rollNumber: 12346,
    aadharNumber: 345698763457,
    panNumber: "TYU987TGO",
    prnNumber: "34509878A",
    permanentAddress: {
      flatNumber: 4,
      street: "Down street",
      area: "Long beach",
      city: "Miami",
      pincode: 210120,
      district: "Miami",
      state: "Florida",
    },
    temporaryAddress: {
      flatNumber: 4,
      street: "Down street",
      area: "Long beach",
      city: "Miami",
      pincode: 210120,
      district: "Miami",
      state: "Florida",
    },

    higherSecondayEducation: HIGHER_SECONDARY_EDUCATION_TYPES.TWELTH,
    thirdYearCompleted: true,
    tenth: {
      startYear: 2016,
      passingYear: 2017,
      board: "SSC",
      markingScheme: "PERCENTAGE",
      scoredMarks: 400,
      totalMarks: 500,
    },
    twelth: {
      startYear: 2018,
      passingYear: 2019,
      board: "HSC",
      markingScheme: "PERCENTAGE",
      scoredMarks: 300,
      totalMarks: 500,
    },

    firstYear: {
      cgpaSem1: 8,
      cgpaSem2: 7,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 2019,
      endYear: 2020,
    },
    secondYear: {
      cgpaSem1: 8,
      cgpaSem2: 7,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 2020,
      endYear: 2021,
    },
    thirdYear: {
      cgpaSem1: 8,
      cgpaSem2: 7,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 2021,
      endYear: 2022,
    },
    fourthYear: {
      cgpaSem1: 8,
      cgpaSem2: 7,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 2022,
      endYear: 2023,
    },
  },
  {
    name: {
      firstName: "Ron",
      middleName: "Ed",
      lastName: "Anderson",
    },
    email: "ron@example.com",
    password: bcrypt.hashSync("123456", 10),

    alternateEmail: "ron.alt@example.com",
    mobileNumber: 1234598760,
    dateOfBirth: new Date(2001, 0, 1),
    collegeRegistrationNumber: "ABCD4321",
    branch: "CHEM",
    gender: "MALE",
    currentYear: 4,
    division: 3,
    rollNumber: 12347,
    aadharNumber: 178447833833,
    panNumber: "POG456TYH",
    prnNumber: "34577712T",
    permanentAddress: {
      flatNumber: 5,
      street: "White street",
      area: "Midtown",
      city: "Chicago",
      pincode: 450510,
      district: "Chicago",
      state: "Illinois",
    },
    temporaryAddress: {
      flatNumber: 5,
      street: "White street",
      area: "Midtown",
      city: "Chicago",
      pincode: 450510,
      district: "Chicago",
      state: "Illinois",
    },

    higherSecondayEducation: HIGHER_SECONDARY_EDUCATION_TYPES.TWELTH,
    thirdYearCompleted: true,
    tenth: {
      startYear: 2016,
      passingYear: 2017,
      board: "SSC",
      markingScheme: "PERCENTAGE",
      scoredMarks: 350,
      totalMarks: 500,
    },
    twelth: {
      startYear: 2018,
      passingYear: 2019,
      board: "HSC",
      markingScheme: "PERCENTAGE",
      scoredMarks: 450,
      totalMarks: 500,
    },

    firstYear: {
      cgpaSem1: 7,
      cgpaSem2: 7,
      activeBacklog: 1,
      passiveBacklog: 1,
      startYear: 2019,
      endYear: 2020,
    },
    secondYear: {
      cgpaSem1: 7,
      cgpaSem2: 7,
      activeBacklog: 1,
      passiveBacklog: 1,
      startYear: 2020,
      endYear: 2021,
    },
    thirdYear: {
      cgpaSem1: 7,
      cgpaSem2: 7,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 2021,
      endYear: 2022,
    },
    fourthYear: {
      cgpaSem1: 7,
      cgpaSem2: 7,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 2022,
      endYear: 2023,
    },
  },
  {
    name: {
      firstName: "Shawn",
      middleName: "Greg",
      lastName: "Simpson",
    },
    email: "shawn@example.com",
    password: bcrypt.hashSync("123456", 10),

    alternateEmail: "shawn.alt@example.com",
    mobileNumber: 7483399298,
    dateOfBirth: new Date(2001, 0, 1),
    collegeRegistrationNumber: "PDJD7272",
    branch: "CIVIL",
    gender: "MALE",
    currentYear: 4,
    division: 5,
    rollNumber: 51574,
    aadharNumber: 362658120438,
    panNumber: "ADJ462PDS",
    prnNumber: "47217819F",
    permanentAddress: {
      flatNumber: 5,
      street: "Green street",
      area: "Smalltown",
      city: "Chicago",
      pincode: 450520,
      district: "Chicago",
      state: "Illinois",
    },
    temporaryAddress: {
      flatNumber: 5,
      street: "Green street",
      area: "Smalltown",
      city: "Chicago",
      pincode: 450520,
      district: "Chicago",
      state: "Illinois",
    },

    higherSecondayEducation: HIGHER_SECONDARY_EDUCATION_TYPES.TWELTH,
    thirdYearCompleted: true,
    tenth: {
      startYear: 2016,
      passingYear: 2017,
      board: "SSC",
      markingScheme: "PERCENTAGE",
      scoredMarks: 380,
      totalMarks: 500,
    },
    twelth: {
      startYear: 2018,
      passingYear: 2019,
      board: "HSC",
      markingScheme: "PERCENTAGE",
      scoredMarks: 420,
      totalMarks: 500,
    },

    firstYear: {
      cgpaSem1: 7.3,
      cgpaSem2: 7.5,
      activeBacklog: 1,
      passiveBacklog: 1,
      startYear: 2019,
      endYear: 2020,
    },
    secondYear: {
      cgpaSem1: 7,
      cgpaSem2: 6.7,
      activeBacklog: 1,
      passiveBacklog: 1,
      startYear: 2020,
      endYear: 2021,
    },
    thirdYear: {
      cgpaSem1: 6.4,
      cgpaSem2: 6.2,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 2021,
      endYear: 2022,
    },
    fourthYear: {
      cgpaSem1: 6,
      cgpaSem2: 6,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 2022,
      endYear: 2023,
    },
  },
  {
    name: {
      firstName: "Alex",
      middleName: "Manny",
      lastName: "Smith",
    },
    email: "alex@example.com",
    password: bcrypt.hashSync("123456", 10),

    alternateEmail: "alex.alt@example.com",
    mobileNumber: 9872125446,
    dateOfBirth: new Date(2001, 5, 1),
    collegeRegistrationNumber: "FSHN5728",
    branch: "COMP",
    gender: "MALE",
    currentYear: 4,
    division: 9,
    rollNumber: 91748,
    aadharNumber: 362658120439,
    panNumber: "ADJ462PDP",
    prnNumber: "47217819G",
    permanentAddress: {
      flatNumber: 1,
      street: "Grey street",
      area: "Smalltown",
      city: "Austin",
      pincode: 362838,
      district: "Austin",
      state: "Texas",
    },
    temporaryAddress: {
      flatNumber: 1,
      street: "Grey street",
      area: "Smalltown",
      city: "Austin",
      pincode: 362838,
      district: "Austin",
      state: "Texas",
    },

    higherSecondayEducation: HIGHER_SECONDARY_EDUCATION_TYPES.TWELTH,
    thirdYearCompleted: true,
    tenth: {
      startYear: 2016,
      passingYear: 2017,
      board: "SSC",
      markingScheme: "PERCENTAGE",
      scoredMarks: 380,
      totalMarks: 500,
    },
    twelth: {
      startYear: 2018,
      passingYear: 2019,
      board: "HSC",
      markingScheme: "PERCENTAGE",
      scoredMarks: 420,
      totalMarks: 500,
    },

    firstYear: {
      cgpaSem1: 7.3,
      cgpaSem2: 7.5,
      activeBacklog: 1,
      passiveBacklog: 1,
      startYear: 2019,
      endYear: 2020,
    },
    secondYear: {
      cgpaSem1: 7,
      cgpaSem2: 6.7,
      activeBacklog: 1,
      passiveBacklog: 1,
      startYear: 2020,
      endYear: 2021,
    },
    thirdYear: {
      cgpaSem1: 6.4,
      cgpaSem2: 6.2,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 2021,
      endYear: 2022,
    },
    fourthYear: {
      cgpaSem1: 6,
      cgpaSem2: 6,
      activeBacklog: 0,
      passiveBacklog: 0,
      startYear: 2022,
      endYear: 2023,
    },
  },
];

export default guests;
