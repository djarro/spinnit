import React from 'react'
import classnames from 'classnames'
import styles from './Icon.scss'

const Icon = ({ name, large, primary, children }) => {
  return (
    <i className={classnames(`icon-${name}`, styles.icon, large && styles.large, primary && styles.primary)}>
      {children}
    </i>
  )
}

export default Icon
