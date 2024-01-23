## Blast
- Comp site: https://blast.io/en/bigbang
## Aave
Docs:
- https://docs.aave.com/developers/v/2.0/
Code:
- https://github.com/aave/protocol-v2
- https://github.com/aave/interface
Setting up local envs:
- `aave/protocol-v2`:  [[Deploying Locally]]
## Pyth
- https://pyth.network/
- https://docs.pyth.network/documentation
- Example AMM w/ Pyth oracle: https://github.com/pyth-network/pyth-crosschain/tree/main/target_chains/ethereum/examples/oracle_swap

## Chainlink
- https://docs.chain.link/

## Price Feeds
- https://data.chain.link/
- https://pyth.network/price-feeds

**Architecture**
- supports fallback oracle: defaults to chainlink, falls back to "fallback" oracle
- multi-chain using Portal, compatible with multiple bridging systems

**Major features**
- Portal
- E-mode
- Isolation mode

**Tooling**
- Docker
- Hardhat