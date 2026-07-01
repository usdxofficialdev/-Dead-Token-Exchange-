'use client'

import { useConnect, useConnectors } from 'wagmi'

export default function ConnectWallet() {
  const { connect } = useConnect()
  const connectors = useConnectors()

  return (
    <div className="space-y-3">
      {connectors.map((connector) => (
        <button
          key={connector.uid}
          onClick={() => connect({ connector })}
          className="w-full bg-gradient-to-r from-[#e8c547] to-[#d4a25e] text-black font-bold py-3 rounded-lg hover:shadow-lg hover:shadow-[#e8c547]/50 transition transform hover:scale-105"
        >
          Connect {connector.name}
        </button>
      ))}
    </div>
  )
}
