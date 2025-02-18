import { useSubscription } from 'react-query-subscription'
import { Client, createClient, SubscribePayload } from 'graphql-ws'
import { Observable } from 'rxjs'
import {
  MultisigCallsByMultisigIdDocument,
  MultisigCallsByMultisigIdSubscription
} from '../../types-and-hooks'
import { useMemo } from 'react'
import { useNetwork } from '../contexts/NetworkContext'

interface Args {
  onUpdate: () => void
  multisigIds: string[]
}

export const useMultisigCallSubscription = ({ onUpdate, multisigIds }: Args) => {
  const { selectedNetworkInfo, selectedNetwork } = useNetwork()
  const hasSomethingToQuery = useMemo(() => multisigIds.length > 0, [multisigIds])
  const client = useMemo(
    () =>
      selectedNetworkInfo &&
      hasSomethingToQuery &&
      createClient({ url: selectedNetworkInfo.wsGraphqlUrl }),
    [hasSomethingToQuery, selectedNetworkInfo]
  )

  /**
   * @see https://github.com/enisdenjo/graphql-ws#observable
   */
  function fromWsClientSubscription<TData = Record<string, unknown>>(
    client: Client,
    payload: SubscribePayload
  ) {
    return new Observable<TData | null>((observer) =>
      client.subscribe<TData>(payload, {
        next: (data) => observer.next(data.data),
        error: (err) => observer.error(err),
        complete: () => {
          observer.complete()
        }
      })
    )
  }

  useSubscription(
    [`KeyMultisigCallsByMultisigId-${multisigIds}-${selectedNetwork}`],
    () => {
      if (!client) return new Observable<null>()

      return fromWsClientSubscription<{
        multisigCalls: MultisigCallsByMultisigIdSubscription
      }>(client, {
        query: MultisigCallsByMultisigIdDocument,
        variables: {
          multisigs: multisigIds
        }
      })
    },
    {
      onData: () => {
        onUpdate()
      },
      onError(error) {
        console.error('MultisigCallsByMultisigId subscription error', error)
      }
      // retry: (failureCount: number, error: Error) => {
      //   console.error(
      //     'Subscription MultisigCallsByMultisigId failed',
      //     failureCount,
      //     'times with error',
      //     error
      //   )
      //   // will retry until it returns falls
      //   return true
      // }
    }
  )

  // if (isError) {
  //   console.error('Subscription MultisigCallsByMultisigId error, refetching', error)
  //   refetch()
  // }

  // if (isSubsriptionLoading) {
  //     console.log('subscription loading', multisigs);
  // }

  // console.log('status', status)
  // if (isSuccess) {
  //     console.log('is success', data)
  // }
  // console.log('subscription data', data)
  //   return <div>Data: {JSON.stringify(data?.multisigCalls)}</div>;
}
