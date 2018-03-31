import React, { Component } from 'react'
import { Shops, Accounts } from '/lib/collections'
import { Components } from '@reactioncommerce/reaction-components'
import { i18next } from '/client/api'
import classNames from 'classnames'

/**
 * @summary List of restaurants
 * @memberof Foodie-cater
 * @extends {Component}
 */
class RestaurantList extends Component {
  getFirstValue = (arr = [], key) => arr[0] && arr[0][key]
  className = classNames('restaraunt-list', this.props.className)

  columnMetadata = [
    'name',
    'email',
    'city',
    'owner',
    'cuisines',
    'dishes',
    'reviews',
    'earnings'
  ].map(field => ({
    accessor: field,
    Header: i18next.t(`restaurant.${field}`)
  }))

  getData () {
    return Shops.find().map(({ _id, name, emails, addressBook }) => {
      return {
        name,
        email: this.getFirstValue(emails, 'address'),
        city: this.getFirstValue(addressBook, 'city'),
        owner: (Accounts.findOne({ shopId: _id }) || {}).name,
        cuisines: 0,
        dishes: 0,
        reviews: 0,
        earnings: '$0'
      }
    })
  }

  render() {
    return (
      <div className={this.className}>
        <Components.SortableTable
          columnMetadata={this.columnMetadata}
          data={this.getData()}
          filterType={'table'}
          noDataMessage={i18next.t('admin.table.noDataMessage')} />
      </div>
    )
  }
}

export default RestaurantList
