const bcrypt = require('bcrypt')

const encryptPassword = async(password,salt) => {
  return await bcrypt.hash(password,salt)
}

const comparePassword = async(hashedPassword,password) => {
    return await bcrypt.compare(password,hashedPassword)
}
module.exports = {encryptPassword,comparePassword}