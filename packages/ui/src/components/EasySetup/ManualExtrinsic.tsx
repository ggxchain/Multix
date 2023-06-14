import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SubmittableExtrinsic } from '@polkadot/api/types'
import { ISubmittableResult } from '@polkadot/types/types'
import React, { useCallback, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { Extrinsic, Output } from '@polkadot/react-components'
import { Call } from '@polkadot/types/interfaces'

interface Props {
  extrinsicIndex?: string
  className?: string
  onSetExtrinsic: (ext: SubmittableExtrinsic<'promise', ISubmittableResult> | undefined) => void
  onSetErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

const ManualExtrinsic = ({
  className,
  onSetExtrinsic,
  onSetErrorMessage,
  extrinsicIndex
}: Props) => {
  const { api, isApiReady } = useApi()
  const [isBusy, setIsBusy] = useState(false)
  const [hexCallData, setHexCallData] = useState('')
  const [hexCallHash, setHexCallHash] = useState('')

  console.log('hexCallData', hexCallData)

  const onExtrinsicChange = useCallback(
    (ext?: Call | undefined) => {
      setIsBusy(true)

      if (!ext) {
        setIsBusy(false)
        return onSetExtrinsic(undefined)
      }

      setHexCallData(ext.method.toHex())
      setHexCallHash(ext.method.hash.toHex())
      setIsBusy(false)

      onSetExtrinsic(ext)
    },
    [onSetExtrinsic]
  )

  const onExtrinsicError = useCallback(
    (err?: Error | null) => onSetErrorMessage(err ? err.message : ''),
    [onSetErrorMessage]
  )

  if (!api || !isApiReady) return null

  return (
    <Box className={className}>
      <Extrinsic
        defaultValue={api.createType('Call', api.tx.system.setCode) as any}
        label="submit the following extrinsic"
        onChange={onExtrinsicChange}
        // onError={onExtrinsicError}
      />
      <Output
        label="encoded call data"
        value={hexCallData}
        withCopy
      />

      <Output
        label="encoded call hash"
        value={hexCallHash}
        withCopy
      />
    </Box>
  )
}

export default styled(ManualExtrinsic)``
