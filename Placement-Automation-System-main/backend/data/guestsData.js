import bcrypt from "bcryptjs";
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
    mobileNo: 1234567890,
    dateOfBirth: new Date(2001, 0, 1),
    collegeRegistrationNo: "ABCD123",
    branch: "MECH",
    currentYear: 4,
    division: 7,
    rollNo: 12345,
    flatNo: 5,
    street: "High street",
    area: "Eastwood",
    city: "Austin",
    pincode: 110110,
    higherSecondayEducation: "TWELTH_ONLY",
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
      activeBacklog: false,
      passiveBacklog: false,
      startYear: 2019,
      endYear: 2020,
    },
    secondYear: {
      cgpaSem1: 9,
      cgpaSem2: 8,
      activeBacklog: false,
      passiveBacklog: false,
      startYear: 2020,
      endYear: 2021,
    },
    thirdYear: {
      cgpaSem1: 9,
      cgpaSem2: 8,
      activeBacklog: false,
      passiveBacklog: false,
      startYear: 2021,
      endYear: 2022,
    },
    fourthYear: {
      cgpaSem1: 9,
      cgpaSem2: 8,
      activeBacklog: false,
      passiveBacklog: false,
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
    mobileNo: 987653210,
    dateOfBirth: new Date(2002, 0, 1),
    collegeRegistrationNo: "EFGH123",
    branch: "CIVIL",
    currentYear: 4,
    division: 8,
    rollNo: 12346,
    flatNo: 4,
    street: "Down street",
    area: "Long beach",
    city: "Miami",
    pincode: 210120,
    higherSecondayEducation: "TWELTH_ONLY",
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
      activeBacklog: false,
      passiveBacklog: false,
      startYear: 2019,
      endYear: 2020,
    },
    secondYear: {
      cgpaSem1: 8,
      cgpaSem2: 7,
      activeBacklog: false,
      passiveBacklog: false,
      startYear: 2020,
      endYear: 2021,
    },
    thirdYear: {
      cgpaSem1: 8,
      cgpaSem2: 7,
      activeBacklog: false,
      passiveBacklog: false,
      startYear: 2021,
      endYear: 2022,
    },
    fourthYear: {
      cgpaSem1: 8,
      cgpaSem2: 7,
      activeBacklog: false,
      passiveBacklog: false,
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
    mobileNo: 1234598760,
    dateOfBirth: new Date(2001, 0, 1),
    collegeRegistrationNo: "ABCD123",
    branch: "CHEM",
    currentYear: 4,
    division: 3,
    rollNo: 12347,
    flatNo: 5,
    street: "White street",
    area: "Midtown",
    city: "Chicago",
    pincode: 450510,
    higherSecondayEducation: "TWELTH_ONLY",
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
      activeBacklog: false,
      passiveBacklog: false,
      startYear: 2019,
      endYear: 2020,
    },
    secondYear: {
      cgpaSem1: 7,
      cgpaSem2: 7,
      activeBacklog: false,
      passiveBacklog: false,
      startYear: 2020,
      endYear: 2021,
    },
    thirdYear: {
      cgpaSem1: 7,
      cgpaSem2: 7,
      activeBacklog: false,
      passiveBacklog: false,
      startYear: 2021,
      endYear: 2022,
    },
    fourthYear: {
      cgpaSem1: 7,
      cgpaSem2: 7,
      activeBacklog: false,
      passiveBacklog: false,
      startYear: 2022,
      endYear: 2023,
    },
  },
];

export default guests;