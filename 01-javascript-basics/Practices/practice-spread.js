const employee = {
  name: "Jigar",
  age: 34,
  address: {
    city: "Kuala Lumpur",
    country: "Malaysia"
  },
  skills: ["JS", "React"]
}

//ex.1
// Create new object where:
// age becomes 35
// Add salary: 100000
const upEmployee = {
    ...employee,
    age : 35,
    salary : 10000
}
console.log(upEmployee)

//ex.2 : Update city to "Ahmedabad" (without losing country)
const cityUpdateEmp = {
    ...upEmployee,
    address : {
        ...employee.address,
        city : "Ahmedabad"
    }
}
console.log(cityUpdateEmp)

//ex.3 : Add new skill "React Native" (without mutating original array)
const skillUpdate = {
    ...upEmployee,
    skills : [...upEmployee.skills,"React Native"]
}
console.log(skillUpdate)

//ex.4 : Merge below object
const extra = {
  experience: 8,
  job: "Tech Lead"
}

const employeeDetailed = {
    ...skillUpdate,
    ...extra
}
console.log(employeeDetailed)

//FINAL SPREAD ROUND – React Style
//You are building a profile screen.
//Initial state:

const profile = {
  name: "Jigar",
  age: 34,
  address: {
    city: "Kuala Lumpur",
    country: "Malaysia"
  },
  skills: ["JS", "React"],
  preferences: {
    darkMode: false,
    notifications: true
  }
}

//Ex.1 : Task 1
/*Create new object where:
age becomes 35
Add salary: 100000
Do NOT mutate original.*/

const uProfile = {
    ...profile,
    age: 35,
    salary : 100000
}
console.log(uProfile)

//Ex.2 : Task 2
/* User moves to India.
Update:
city → "Ahmedabad"
country → "India"
Without losing anything else in address. */

const migProfile = {
    ...uProfile,
    address: {
        ...uProfile.address,
        city : "Ahmedabad",
        country : "India"
    }
}
console.log(migProfile)

//Ex.3 : Task 3
/* User enables dark mode. */
const darkModeProfile = {
    ...migProfile,
    preferences : {
        ...migProfile.preferences,
        darkMode : true
    }
}
console.log(darkModeProfile)

//Ex.4 : Task 4
/* Add new skill "React Native"
WITHOUT mutating original skills array. */
const upSkillProfile = {
    ...darkModeProfile,
    skills : [
        ...darkModeProfile.skills,
        "React Native"
    ]
}
console.log(upSkillProfile)


//Ex.5 : Task 5 (Advanced Level)
// Merge below object:
const apiData = {
  isVerified: true,
  followers: 1200
}

const mergedProfile = {
    ...upSkillProfile,
    ...apiData
}
console.log(mergedProfile)