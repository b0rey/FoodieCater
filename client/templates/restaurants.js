import { Template } from 'meteor/templating'
import Dashboard from '../components/dashboard'

Template.restaurants.helpers({
  restaurantsComponent() {
    return { component: Dashboard }
  }
})
