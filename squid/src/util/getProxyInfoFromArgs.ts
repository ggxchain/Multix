import { EventItem } from '@subsquid/substrate-processor/lib/interfaces/dataSelection'
import { getProxyTypeFromRaw } from './getProxyTypeFromRaw'
import { getProxyAccountId } from './getProxyAccountId'
import { Ctx, dataEvent } from '../main'
import { ProxyType } from '../types/v9111'
import { JsonLog } from './JsonLog'
import { encodeId } from './accountEncoding'

interface Params {
  item: EventItem<'Proxy.ProxyAdded' | 'Proxy.ProxyRemoved', (typeof dataEvent)['data']>
  chainId: string
  ctx: Ctx
}
export const getProxyInfoFromArgs = ({ item, chainId, ctx }: Params) => {
  let delegator: Uint8Array | undefined
  let delegatee: Uint8Array | undefined
  let proxyType: ProxyType
  let delay: number = 0

  const args = item.event.args

  if (Array.isArray(args)) {
    ;[delegator, delegatee, proxyType, delay] = args
  } else if (args.delegator) {
    ;({ delegator, delegatee, proxyType, delay } = item.event.args)
  } else {
    ctx.log.error(`The proxy could not be determined ${JsonLog(item)}`)
    return
  }
  const _delegator = (delegator && encodeId(delegator)) || ''
  const _delegatee = (delegatee && encodeId(delegatee)) || ''
  const _type = getProxyTypeFromRaw(proxyType.__kind)
  const _delay = Number(delay)
  const _id = getProxyAccountId(_delegatee, _delegator, _type, _delay, chainId)

  return {
    id: _id,
    delegator: _delegator,
    delegatee: _delegatee,
    type: _type,
    delay: _delay
  }
}
