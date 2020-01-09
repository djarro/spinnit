import React, { useState } from 'react'
import styles from './Dropzone.scss'
import Text from '../Text/Text'
import Icon from '../Icon/Icon'

const DropZone = () => {
  const [totalFiles, setTotalFiles] = useState(0)
  const [filesComplete, setFilesComplete] = useState(0)

  const handleDrop = event => {
    const { files } = event.dataTransfer
    handleFiles(files)
  }

  const handleFiles = files => {
    setTotalFiles(files.length)
    ([...files]).forEach(uploadFile)
  }

  const uploadFile = file => console.log(file)

  return (
    <div className={styles.dropZone} onDrop={handleDrop}>
      <form>
        <input
          type={'file'}
          id={'file-input'}
          className={styles.input}
          multiple
          accept={'image/*'}
          onChange={handleFiles}
        />
        <Icon name={'upload'} />
        <Text className={styles.text}>
          Drop your images here, or
          <br />
          <label htmlFor={'file-input'} className={styles.link}>browse your computer</label>
        </Text>
      </form>
    </div>
  )
}

export default DropZone
