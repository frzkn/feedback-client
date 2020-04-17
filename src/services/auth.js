import decode from 'jwt-decode'

function setToken(token, user) {
  localStorage.setItem('jwt', token)
  localStorage.setItem('user', user)
}

function getToken() {
  return localStorage.getItem('jwt')
}

function logout() {
  localStorage.removeItem('jwt')
  localStorage.removeItem('user')
}

function getUser() {
  return localStorage.getItem('user')
}
function isTokenExpired(token) {
  try {
    const decoded = decode(token)
    if (decoded.exp < Date.now() / 1000) return true
    else return false
  } catch (e) {
    console.log(e)
  }
}

function loggedIn() {
  const token = this.getToken()
  return !this.isTokenExpired(token) && !!token
}

export const services = {
  setToken,
  getToken,
  logout,
  isTokenExpired,
  loggedIn,
  getUser,
}
