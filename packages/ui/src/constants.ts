import { nodesKhalaSVG } from './logos/khalaSVG'
import { chainsKusamaSVG } from './logos/kusamaSVG '
import { localSVG } from './logos/localSVG'
import { chainsPolkadotCircleSVG } from './logos/polkadot-circleSVG'
import { chainsRococoSVG } from './logos/rococoSVG'
import { phalaSVG } from './logos/phalaSVG'
import { nodesAstarPNG } from './logos/astarPNG'
import { nodesAssetHubSVG } from './logos/assetHubSVG'
import { hydradxSVG } from './logos/hydradxSVG'
// import { chainsAmplitudeSVG } from './logos/amplitudeSVG'
// import { chainsPendulumSVG } from './logos/pendulumSVG'
// import { nodesWestendColourSVG } from './logos/westend_colourSVG'
import { chainsAcalaSVG } from './logos/acalaSVG'
import { nodesBifrostSVG } from './logos/bifrostSVG'
import { nodesInterlaySVG } from './logos/interlaySVG'
import { nodesWestendColourSVG } from './logos/westend_colourSVG'
import { nodesMoonriverSVG } from './logos/moonriverSVG'
import { nodesMoonbeamSVG } from './logos/moonbeamSVG'
import { nodesJoystreamSVG } from './logos/joystreamSVG'

export const DAPP_NAME = 'Multix'
export const ICON_SIZE_LARGE = 92
export const ICON_SIZE_MEDIUM = 40
export const ICON_SIZE_SMALL = 30
export const DEFAULT_ICON_THEME = 'polkadot'

export interface NetworkInfo {
  chainId: string
  explorerNetworkName?: string
  rpcUrl: string
  wsGraphqlUrl: string
  httpGraphqlUrl: string
  logo: string
}

export const PAYMENT_INFO_ACCOUNT = '5CXQZrh1MSgnGGCdJu3tqvRfCv7t5iQXGGV9UKotrbfhkavs'

export const networkList = {
  'ggx-sydney': {
    chainId: 'ggx-sydney',
    explorerNetworkName: 'ggx-sydney',
    rpcUrl: 'wss://sydney-archive.dev.ggxchain.io:9944',
    wsGraphqlUrl: 'wss://multix.dev.ggxchain.io/graphql/graphql',
    httpGraphqlUrl: 'https://multix.dev.ggxchain.io/graphql/graphql',
    logo: chainsPolkadotCircleSVG
  } as NetworkInfo,
  polkadot: {
    chainId: 'polkadot',
    explorerNetworkName: 'polkadot',
    rpcUrl: 'wss://rpc.polkadot.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: chainsPolkadotCircleSVG
  } as NetworkInfo,
  kusama: {
    chainId: 'kusama',
    explorerNetworkName: 'kusama',
    rpcUrl: 'wss://kusama-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: chainsKusamaSVG
  } as NetworkInfo,
  'assethub-dot': {
    chainId: 'assethub-polkadot',
    explorerNetworkName: 'assethub-polkadot',
    rpcUrl: 'wss://polkadot-asset-hub-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: nodesAssetHubSVG
  } as NetworkInfo,
  'assethub-ksm': {
    chainId: 'assethub-kusama',
    explorerNetworkName: 'assethub-kusama',
    rpcUrl: 'wss://kusama-asset-hub-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: nodesAssetHubSVG
  } as NetworkInfo,
  acala: {
    chainId: 'acala',
    explorerNetworkName: 'acala',
    rpcUrl: 'wss://acala-rpc-3.aca-api.network/ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: chainsAcalaSVG
  } as NetworkInfo,
  // amplitude: {
  //   chainId: 'amplitude',
  //   explorerNetworkName: 'amplitude',
  //   rpcUrl: 'wss://rpc-amplitude.pendulumchain.tech',
  //   wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
  //   httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
  //   logo: chainsAmplitudeSVG
  // } as NetworkInfo,
  astar: {
    chainId: 'astar',
    explorerNetworkName: 'astar',
    rpcUrl: 'wss://rpc.astar.network',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: nodesAstarPNG
  } as NetworkInfo,
  'bifrost-dot': {
    chainId: 'bifrost-polkadot',
    explorerNetworkName: 'bifrost',
    rpcUrl: 'wss://bifrost-polkadot.api.onfinality.io/public-ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: nodesBifrostSVG
  } as NetworkInfo,
  hydradx: {
    chainId: 'hydradx',
    explorerNetworkName: 'hydradx',
    rpcUrl: 'wss://hydradx-rpc.dwellir.com',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: hydradxSVG
  } as NetworkInfo,
  interlay: {
    chainId: 'interlay',
    explorerNetworkName: 'interlay',
    rpcUrl: 'wss://interlay.api.onfinality.io/public-ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: nodesInterlaySVG
  } as NetworkInfo,
  khala: {
    chainId: 'khala',
    explorerNetworkName: 'khala',
    rpcUrl: 'wss://khala-api.phala.network/ws',
    wsGraphqlUrl: 'wss:///squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https:///squid.subsquid.io/multix-large/v/v7/graphql',
    logo: nodesKhalaSVG
  } as NetworkInfo,
  // pendulum: {
  //   chainId: 'pendulum',
  //   explorerNetworkName: 'pendulum',
  //   rpcUrl: 'wss://rpc-pendulum.prd.pendulumchain.tech',
  //   wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
  //   httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
  //   logo: chainsPendulumSVG
  // } as NetworkInfo,
  moonbeam: {
    chainId: 'moonbeam',
    explorerNetworkName: 'moonbeam',
    rpcUrl: 'wss://moonbeam.api.onfinality.io/public-ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: nodesMoonbeamSVG
  } as NetworkInfo,
  moonriver: {
    chainId: 'moonriver',
    explorerNetworkName: 'moonriver',
    rpcUrl: 'wss://moonriver.api.onfinality.io/public-ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: nodesMoonriverSVG
  } as NetworkInfo,
  phala: {
    chainId: 'phala',
    explorerNetworkName: 'phala',
    rpcUrl: 'wss://api.phala.network/ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: phalaSVG
  } as NetworkInfo,
  'rhala testnet': {
    chainId: 'rhala',
    explorerNetworkName: '',
    rpcUrl: 'wss://subbridge-test.phala.network/rhala/ws',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: nodesKhalaSVG
  } as NetworkInfo,
  rococo: {
    chainId: 'rococo',
    explorerNetworkName: 'rococo',
    rpcUrl: 'wss://rococo-rpc.polkadot.io',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: chainsRococoSVG
  } as NetworkInfo,
  // westend: {
  //   chainId: 'westend',
  //   explorerNetworkName: 'westend',
  //   rpcUrl: 'wss://westend-rpc.polkadot.io',
  //   wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
  //   httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
  //   logo: nodesWestendColourSVG
  // } as NetworkInfo,
  joystream: {
    chainId: 'joystream',
    explorerNetworkName: 'joystream',
    rpcUrl: 'wss://rpc.joystream.org',
    wsGraphqlUrl: 'wss://squid.subsquid.io/multix-large/v/v7/graphql',
    httpGraphqlUrl: 'https://squid.subsquid.io/multix-large/v/v7/graphql',
    logo: nodesJoystreamSVG
  },
  local: {
    chainId: import.meta.env.VITE_CHAIN_ID,
    explorerNetworkName: import.meta.env.VITE_NETWORK_NAME as 'kusama',
    rpcUrl: import.meta.env.VITE_WS_PROVIDER,
    wsGraphqlUrl: import.meta.env.VITE_GRAPHQL_WS_PROVIDER,
    httpGraphqlUrl: import.meta.env.VITE_GRAPHQL_HTTP_PROVIDER,
    logo: localSVG
  }
}

export const polkadotNetworksAndParachains = [
  'ggx-sydney',
  'polkadot',
  'assethub-dot',
  'acala',
  'astar',
  'bifrost-dot',
  'hydradx',
  'interlay',
  'moonbeam',
  'phala'
]
export const kusamaNetworksAndParachains = ['kusama', 'assethub-ksm', 'khala', 'moonriver']
export const soloChains = ['joystream']
export const testChains = ['rococo', 'rhala testnet', 'local']

export type SupportedNetworks = keyof typeof networkList

/**
 * Methods
 */
export const POLKADOT_SIGNING_METHODS = {
  POLKADOT_SIGN_TRANSACTION: 'polkadot_signTransaction',
  POLKADOT_SIGN_MESSAGE: 'polkadot_signMessage'
}
