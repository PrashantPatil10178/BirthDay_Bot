const mongoose = require("mongoose");
const FriendsSchema = new mongoose.Schema(
  {
    Full: {
      type: String,
      require: true,
      trim: true,
      index: true,
    },
    Number: {
      type: Number,
      require: true,
    },
    Message: {
      type: String,
    },
  },
  { timestamps: true }
);

const data = [
  {
    Full: "ABUJ ISHWARI RAMBHAU",
    Number: "",
    Message:
      "🎉 Happy Birthday Ishwari! Wishing you a day filled with love, laughter, and unforgettable moments! 🎂",
  },
  {
    Full: "ANUSSHKA PRAKASH TELI",
    Number: "",
    Message:
      "🎊 Happy Birthday Anusshka! May your day be as bright and beautiful as you are! 🌟",
  },
  {
    Full: "ATTAR ZOHA ZAKIRHUSEN",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Zoha! May your special day be as sweet and delightful as you are! 🍭",
  },
  {
    Full: "BARI KAMLESH NANASAHEB",
    Number: "",
    Message:
      "🎂 Happy Birthday Kamlesh! Wishing you a day filled with love, laughter, and wonderful surprises! 🎁",
  },
  {
    Full: "BELVALKAR SARTHAK HARSHAD",
    Number: "",
    Message:
      "🎉 Happy Birthday Sarthak! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "BHAGAT ATHARV RAJESH",
    Number: "",
    Message:
      "🎁 Happy Birthday Atharv! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "BHALEKAR YASH RAVINDRA",
    Number: "",
    Message:
      "🎊 Happy Birthday Yash! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "BHAMARE NIKHIL RAMESH",
    Number: "",
    Message:
      "🥳 Happy Birthday Nikhil! Wishing you a day filled with love, laughter, and cherished memories! 🎉",
  },
  {
    Full: "BHUYAN ALOK ANANTA",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Alok! May your special day be filled with happiness and joy! 🎁",
  },
  {
    Full: "BONDRE ABHIRAJ RAMBHAU",
    Number: "",
    Message:
      "🎂 Happy Birthday Abhiraj! Wishing you a day filled with love, laughter, and memorable moments! 🎉",
  },
  {
    Full: "CHAVHAN VIPUL PURUSHOTTAM",
    Number: "",
    Message:
      "🎉 Happy Birthday Vipul! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "DARIYAN MUKESH NAAGAR",
    Number: "",
    Message:
      "🎁 Happy Birthday Mukesh! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "DEORE SAKSHAM TUSHAR",
    Number: "",
    Message:
      "🎊 Happy Birthday Saksham! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "DIGHE AJINKYA SHRAVAN",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Ajinkya! May your special day be filled with happiness and joy! 🎁",
  },
  {
    Full: "GAJBHIYE TUSHAR NAMDEO",
    Number: "",
    Message:
      "🎂 Happy Birthday Tushar! Wishing you a day filled with love, laughter, and memorable moments! 🎉",
  },
  {
    Full: "GAMPAWAR ARYAN VIJAY",
    Number: "",
    Message:
      "🎉 Happy Birthday Aryan! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "GARJE SATWIK SANJAY",
    Number: "",
    Message:
      "🎁 Happy Birthday Satwik! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "GAYKAR SIMRAN MANESH",
    Number: "",
    Message:
      "🎊 Happy Birthday Simran! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "GEDAM SAHIL MILIND",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Sahil! May your special day be filled with happiness and joy! 🎁",
  },
  {
    Full: "GONJARI SNEHA MANIK",
    Number: "",
    Message:
      "🎂 Happy Birthday Sneha! Wishing you a day filled with love, laughter, and memorable moments! 🎉",
  },
  {
    Full: "HAJARE OM KAILAS",
    Number: "",
    Message:
      "🎉 Happy Birthday Om! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "HAKE KAJAL HIRAMAN",
    Number: "",
    Message:
      "🎁 Happy Birthday Kajal! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "HIWRALE SHRADDHA LAXMAN",
    Number: "",
    Message:
      "🎊 Happy Birthday Shraddha! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "HOMAVAZIR DANISH FARHAD",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Danish! May your special day be filled with happiness and joy! 🎁",
  },
  {
    Full: "JADHAV OM DHANANJAY",
    Number: "",
    Message:
      "🎂 Happy Birthday Om! Wishing you a day filled with love, laughter, and memorable moments! 🎉",
  },
  {
    Full: "JADHAV PRACHI VINAYAK",
    Number: "",
    Message:
      "🎉 Happy Birthday Prachi! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "JADHAV ROHIT GOPAL",
    Number: "",
    Message:
      "🎁 Happy Birthday Rohit! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "JOSHI SHRADHA SURENDRA",
    Number: "",
    Message:
      "🎊 Happy Birthday Shradha! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "KIRAN KUSHWAHA",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Kiran! May your special day be filled with happiness and joy! 🎁",
  },
  {
    Full: "LOLAGE YUVRAJ SATISH",
    Number: "",
    Message:
      "🎂 Happy Birthday Yuvraj! Wishing you a day filled with love, laughter, and memorable moments! 🎉",
  },
  {
    Full: "LONARE SARA SURESH",
    Number: "",
    Message:
      "🎉 Happy Birthday Sara! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "LONDHE ADITI SANDEEP",
    Number: "",
    Message:
      "🎁 Happy Birthday Aditi! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "MAHAJAN OM SUNIL",
    Number: "",
    Message:
      "🎊 Happy Birthday Om! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "MAHANAVAR VEDANT SOMNATH",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Vedant! May your special day be filled with happiness and joy! 🎁",
  },
  {
    Full: "MALWADKAR SUMIT ANANT",
    Number: "",
    Message:
      "🎂 Happy Birthday Sumit! Wishing you a day filled with love, laughter, and memorable moments! 🎉",
  },
  {
    Full: "MANGDE KIRAN BABASAHEB",
    Number: "",
    Message:
      "🎉 Happy Birthday Kiran! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "MEDANKAR DIPIKA PRAVIN",
    Number: "",
    Message:
      "🎁 Happy Birthday Dipika! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "MEHTA VED PRITISH",
    Number: "",
    Message:
      "🎊 Happy Birthday Ved! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "MIRZA MOHAMMAD AQDAS",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Mirza! May your special day be filled with happiness and joy! 🎁",
  },
  {
    Full: "MISAL YASHRAJ RAMESH",
    Number: "",
    Message:
      "🎂 Happy Birthday Yashraj! Wishing you a day filled with love, laughter, and memorable moments! 🎉",
  },
  {
    Full: "MORE MAYURESH POPAT",
    Number: "",
    Message:
      "🎉 Happy Birthday Mayuresh! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "NAPHADE SHRIYA VAIBHAV",
    Number: "",
    Message:
      "🎁 Happy Birthday Shriya! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "NAUKARKAR PRAJWAL DARSHAN",
    Number: "",
    Message:
      "🎊 Happy Birthday Prajwal! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "NIMBALKAR AAKANKSHA TANAJI",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Aakanksha! May your special day be filled with happiness and joy! 🎁",
  },
  {
    Full: "NIMBARTE SUMEDH SUBODH",
    Number: "",
    Message:
      "🎂 Happy Birthday Sumedh! Wishing you a day filled with love, laughter, and memorable moments! 🎉",
  },
  {
    Full: "OVHAL OMKAR DADARAO",
    Number: "",
    Message:
      "🎉 Happy Birthday Omkar! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "PANCHMUKHE PIYUSH ANIL",
    Number: "",
    Message:
      "🎁 Happy Birthday Piyush! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "PARIHAR JANHAVI BHAIRAV",
    Number: "",
    Message:
      "🎊 Happy Birthday Janhavi! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "PATIL NIRANJANA MANGESH",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Niranjana! May your special day be filled with happiness and joy! 🎁",
  },
  {
    Full: "PATIL PRANAV PRAKASH",
    Number: "",
    Message:
      "🎂 Happy Birthday Pranav! Wishing you a day filled with love, laughter, and memorable moments! 🎉",
  },
  {
    Full: "PATIL PRASHANT ANIL",
    Number: "",
    Message:
      "🎉 Happy Birthday Prashant! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "PATIL SAURABH SOMNATH",
    Number: "",
    Message:
      "🎁 Happy Birthday Saurabh! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "PATIL SHREYAS SANJAY",
    Number: "",
    Message:
      "🎊 Happy Birthday Shreyas! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "RAI SAURABH KRISHNANAND",
    Number: "+917721000794",
    Message:
      "🎈 Warmest birthday wishes to Saurabh! May your special day be filled with happiness and joy! 🎁",
  },
  {
    Full: "RATHOD TUSHAR ANIL",
    Number: "",
    Message:
      "🎂 Happy Birthday Tushar! Wishing you a day filled with love, laughter, and memorable moments! 🎉",
  },
  {
    Full: "SAHIL HANWATE",
    Number: "",
    Message:
      "🎉 Happy Birthday Sahil! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "SAWANT AMEY ANANT",
    Number: "",
    Message:
      "🎁 Happy Birthday Amey! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "SAWSAKADE PIYUSH RAJU",
    Number: "",
    Message:
      "🎊 Happy Birthday Piyush! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "SHAIKH UMAR ANWAR",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Umar! May your special day be filled with happiness and joy! 🎁",
  },
  {
    Full: "SHETTY PRATHVISH SHIVARAMA",
    Number: "",
    Message:
      "🎂 Happy Birthday Prathvish! Wishing you a day filled with love, laughter, and memorable moments! 🎉",
  },
  {
    Full: "SHINDE NIKHIL AJIT",
    Number: "",
    Message:
      "🎉 Happy Birthday Nikhil! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "SHINGADE POOJA VINOD",
    Number: "",
    Message:
      "🎁 Happy Birthday Pooja! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "SHRIGOD CHIRAG YOGESH",
    Number: "",
    Message:
      "🎊 Happy Birthday Chirag! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "SONAR NEHA SUNIL",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Neha! May your special day be filled with happiness and joy! 🎁",
  },
  {
    Full: "SUJIT SHERKAR",
    Number: "",
    Message:
      "🎂 Happy Birthday Sujit! Wishing you a day filled with love, laughter, and memorable moments! 🎉",
  },
  {
    Full: "SWAMI ASHIRWAD SHIVAYYA",
    Number: "",
    Message:
      "🎉 Happy Birthday Ashirwad! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "TAKALKAR PIYUSH KIRTIKUMAR",
    Number: "",
    Message:
      "🎁 Happy Birthday Piyush! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "TANYOUSH PADEY",
    Number: "",
    Message:
      "🎊 Happy Birthday Tanyoush! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "TEJAS BHAULAL PATIL",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Tejas! May your special day be filled with happiness and joy! 🎁",
  },
  {
    Full: "THORBOLE SHRADDHA SHRIPAD",
    Number: "",
    Message:
      "🎂 Happy Birthday Shraddha! Wishing you a day filled with love, laughter, and memorable moments! 🎉",
  },
  {
    Full: "THUBE HARISH AJAY",
    Number: "",
    Message:
      "🎉 Happy Birthday Harish! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "UTTEKAR SIDDHI SURESH",
    Number: "",
    Message:
      "🎁 Happy Birthday Siddhi! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "VINAY LAXMAN BASARGEKAR",
    Number: "",
    Message:
      "🎊 Happy Birthday Vinay! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "WAGH SHANTANU JITENDRA",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Shantanu! May your special day be filled with happiness and joy! 🎁",
  },
  {
    Full: "WARISHE NIDHI RAVINDRA",
    Number: "",
    Message:
      "🎂 Happy Birthday Nidhi! Wishing you a day filled with love, laughter, and memorable moments! 🎉",
  },
  {
    Full: "YASH KISHOR CHAVHAN",
    Number: "",
    Message:
      "🎉 Happy Birthday Yash! May your day be as amazing and fantastic as you are! 🚀",
  },
  {
    Full: "YASHRAJ DHAMALE",
    Number: "",
    Message:
      "🎁 Happy Birthday Yashraj! Wishing you a day filled with joy, laughter, and special moments! 🎈",
  },
  {
    Full: "DIGHE GAURI SHAMKANT",
    Number: "",
    Message:
      "🎊 Happy Birthday Gauri! May your day be as bright and wonderful as you are! 🌟",
  },
  {
    Full: "SAVI DHIRENDRA DHOBLE",
    Number: "",
    Message:
      "🎈 Warmest birthday wishes to Savi! May your special day be filled with happiness and joy! 🎁",
  },
];

const Friend = mongoose.model("friend", FriendsSchema);

module.exports = Friend;
