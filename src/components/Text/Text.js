import React from 'react'
import styles from './Text.scss'
import classnames from 'classnames'

const Text = ({ children, className, ...props }) => {
  return <p className={classnames(styles.text, className)} {...props}>{children}</p>
}

export default Text
