import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api/types'
import { AnyTuple, ISubmittableResult } from '@polkadot/types/types'
import React, { useCallback, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { InputExtrinsic, Output } from '@polkadot/react-components'
import 'semantic-ui-css/semantic.min.css'

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
    (ext?: SubmittableExtrinsicFunction<'promise', AnyTuple>) => {
      setIsBusy(true)
      console.log('ext', ext)
      if (!ext) {
        setIsBusy(false)
        return onSetExtrinsic(undefined)
      }

      // setHexCallData(ext.method.toHex())
      // setHexCallHash(ext.method.hash.toHex())
      setIsBusy(false)

      onSetExtrinsic(ext)
    },
    [onSetExtrinsic]
  )

  const onExtrinsicError = useCallback(
    (err?: Error | null) => onSetErrorMessage(err ? err.message : ''),
    [onSetErrorMessage]
  )

  if (!api || !isApiReady || !InputExtrinsic || !Output) return null

  return (
    <Box className={className}>
      <InputExtrinsic
        api={api}
        defaultValue={api.tx.system.setCode}
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
