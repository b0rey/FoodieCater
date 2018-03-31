import React, { Fragment } from 'react'
import { Components } from '@reactioncommerce/reaction-components'
import RestaurantList from './restaurantList'
import RestaurantForm from './restaurantForm'

/**
 * @summary Dashboard for restaurants
 * @memberof Foodie-cater
 * @extends {Component}
 */
export default () => (
  <Fragment>
    <RestaurantList className='dashboard__list' />
    <Components.Card className='dashboard__form' >
      <Components.CardHeader
        actAsExpander={true}
        data-i18n='restaurant.action.new'
        title='Add New Restaurant'
      />
      <Components.CardBody expandable={true}>
        <RestaurantForm />
      </Components.CardBody>
    </Components.Card>
  </Fragment>
)
