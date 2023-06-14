import { Box } from '@mui/material'
import { styled } from '@mui/material/styles'
import { SubmittableExtrinsic, SubmittableExtrinsicFunction } from '@polkadot/api/types'
import { AnyTuple, ISubmittableResult } from '@polkadot/types/types'
import React, { useCallback, useEffect, useMemo, useState } from 'react'
import { useApi } from '../../contexts/ApiContext'
import { InputExtrinsic, Output } from '@polkadot/react-components'
import 'semantic-ui-css/semantic.min.css'
import { Extrinsic } from '@polkadot/react-params'
import type { RawParam } from '@polkadot/react-params/types'
import type { TypeDef } from '@polkadot/types/types'
import { getTypeDef } from '@polkadot/types/create'
// import { isUndefined } from '@polkadot/util'
// import paramComponents from './Params';

interface CallState {
  fn: SubmittableExtrinsicFunction<'promise'>
  params: {
    name: string
    type: TypeDef
  }[]
}

function getParams({
  meta
}: SubmittableExtrinsicFunction<'promise'>): { name: string; type: TypeDef }[] {
  return meta.args.map((arg): { name: string; type: TypeDef } => ({
    name: arg.name.toString(),
    type: getTypeDef(arg.type.toString())
  }))
}

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
  const [extrinsic, setCall] = useState<CallState | null>(null)
  const [values, setValues] = useState<RawParam[]>([])

  useEffect(() => {
    if (!api || !isApiReady) return

    setCall({
      fn: api.tx.system.setCode,
      params: getParams(api?.tx.system.setCode)
    })
  }, [api, isApiReady])

  useEffect((): void => {
    setValues([])
  }, [extrinsic])

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

  // eslint-disable-next-line complexity
  // useEffect((): void => {
  //   if (!extrinsic) return

  //   const isValid = values.reduce(
  //     (isValid, value): boolean =>
  //       isValid && !isUndefined(value) && !isUndefined(value.value) && value.isValid,
  //     extrinsic.params.length === values.length
  //   )

  //   let method

  //   if (isValid) {
  //     try {
  //       // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //       method = extrinsic.fn(...values.map(({ value }): any => value))
  //     } catch (error: unknown) {
  //       if (error instanceof Error) {
  //         // eslint-disable-next-line
  //           console.log('error', error)
  //         // onError && onError(error);
  //       }
  //     }
  //   } else {
  //     // eslint-disable-next-line
  //       console.log('error')
  //     // onError && onError(null);
  //   }

  //   onExtrinsicChange(method as any)
  // }, [extrinsic, onExtrinsicChange, values])

  if (!api || !isApiReady || !InputExtrinsic || !Output) return null

  return (
    <Box className={className}>
      <Extrinsic
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
