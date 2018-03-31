import { Reaction } from '/server/api'

Reaction.registerPackage({
  label: 'Foodie Cater',
  name: 'foodie-cater',
  icon: 'fa fa-cutlery',
  autoEnable: true,
  settings: {
    name: 'Marketplace',
    enabled: true,
    public: {
      somePublicSetting: true
    }
  },
  registry: [{
    label: 'Restaurants',
    name: 'restaurants',
    icon: 'fa fa-cutlery',
    route: '/dashboard/restaurants',
    provides: ['dashboard'],
    template: 'restaurants',
    priority: 0
  }]
})
