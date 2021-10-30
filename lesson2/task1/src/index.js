import { printProfile } from './profile'

const userData = {
  name: 'Serhey',
  age: 17
}

const profile = {
  ...userData,
  company: 'NotEvil Company'
}

printProfile(profile)