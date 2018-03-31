import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { Components } from '@reactioncommerce/reaction-components'
import { Accounts } from '/lib/collections'


/**
 * @summary Form of restaurant
 * @memberof Foodie-cater
 * @extends {Component}
 */
class RestaurantForm extends Component {
  state = { name: '', owner: '', email: '' }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()

    const { name, owner, email } = this.state
    const user = Accounts.findOne({ name: owner }) || Meteor.user()
    const data = { name, emails: { address: email } }

    return Meteor.call('shop/createShop', user.userId, data)
  }

  render() {
    return (
      <form className='restaurant-form'>
        <Components.TextField
          i18nKeyLabel='restaurant.field.name'
          label='Name'
          name='name'
          id='restaurant-form-name'
          type='text'
          placeholder="John Smith"
          value={this.state.name}
          onChange={this.onChange}
        />
        <Components.TextField
          i18nKeyLabel='restaurant.field.owner'
          label='Owner'
          name='owner'
          id='restaurant-form-owner'
          type='text'
          placeholder="John Smith"
          value={this.state.owner}
          onChange={this.onChange}
        />
        <Components.TextField
          i18nKeyLabel='restaurant.field.email'
          label='Email'
          name='email'
          id='restaurant-form-email'
          type='text'
          placeholder="johnsmith@localhost"
          value={this.state.email}
          onChange={this.onChange}
        />
        <Components.Button
          status='primary'
          buttonType='submit'
          onClick={this.handleSubmit}
          bezelStyle='solid'
          i18nKeyLabel='restaurant.action.add'
          label='Add Restaurant'
        />
      </form>
    )
  }
}

export default RestaurantForm
