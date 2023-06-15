import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import React, { useCallback, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { Extrinsic } from '@polkadot/react-params'
import 'semantic-ui-css/semantic.min.css'

interface Props {
  extrinsicIndex?: string
  className?: string
  onSetExtrinsic: (ext: SubmittableExtrinsic<'promise'> | undefined) => void
  onSetErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

const ManualExtrinsic = ({ className, onSetExtrinsic, onSetErrorMessage }: Props) => {
  const { api, isApiReady } = useApi()
  const [hexCallData, setHexCallData] = useState('')
  const [hexCallHash, setHexCallHash] = useState('')

  console.log('hexCallData', hexCallData)
  console.log('hexCallHash', hexCallHash)

  const onExtrinsicChange = useCallback(
    (ext?: SubmittableExtrinsic<'promise'>) => {
      if (!api || !isApiReady) return

      console.log('ext', ext)
      if (!ext) {
        return onSetExtrinsic(undefined)
      }

      setHexCallData(api.createType('Call', ext.method).toHex())
      setHexCallHash(ext.hash.toHex())

      onSetExtrinsic(ext)
    },
    [api, isApiReady, onSetExtrinsic]
  )

  if (!api || !isApiReady) return null

  return (
    <Box className={className}>
      <Extrinsic
        api={api}
        defaultValue={api.tx.system.setCode}
        label="submit the following extrinsic"
        onChange={onExtrinsicChange}
        // onError={onExtrinsicError}
      />
      {/* <Output
        label="encoded call data"
        value={hexCallData}
        withCopy
      />
      <Output
        label="encoded call hash"
        value={hexCallHash}
        withCopy
      /> */}
    </Box>
  )
}

export default styled(ManualExtrinsic)``
