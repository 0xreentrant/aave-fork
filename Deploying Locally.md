## Directions

![[Whiteboards/4. Using dev correctly.excalidraw]]

First, in one window:
$ docker compose up

In another window:
docker compose exec contracts-env bash

Then:
npm run hardhat node

In yet another window:
docker compose exec contracts-env bash

Then:
npm run hardhat -- console --network hardhat

Then: 
await hre.run('aave:dev') 

## .env

```
# Mnemonic, only first address will be used

MNEMONIC="bubble steel explain code vacuum march fabric useful tiny wing illness thunder"

  

# Add Alchemy or Infura provider keys, alchemy takes preference at the config level

ALCHEMY_KEY="D_mgqLurmZLLRrXfgF3VaUXc-5bERZGm"

INFURA_KEY=""

  
  

# Optional Etherscan key, for automatize the verification of the contracts at Etherscan

ETHERSCAN_KEY="SX72AY11PDKSIYZ9RS95ICMHTD4AWQKZWZ"

  

# Optional, if you plan to use Tenderly scripts

TENDERLY_PROJECT="blast-aave"

TENDERLY_USERNAME="reentrant"

TENDERLY_FORK_ID="504ebd7f-8c72-4281-b324-ac3202fafe8d"

TENDERLY_KEY="Xy-TP-DuEzTPeZxA7b9Ygw9rz4AOeMRk"

TENDERLY_HEAD_ID=""

  

#devnets

TENDERLY_URL="https://rpc.vnet.tenderly.co/devnet/blast-aave/773938c6-b693-40f1-8f9f-2abe6c23a102"

TENDERLY_PRIVATE_KEY="0xxprv9zHDaqiYdvDKkc4LpYrETWZgH3fzGtAgLAXp7oigzyuwL1bcUmWGy5QmL2g9qBR9McMHokrRFJ4caV9bLymFWp7CjfZaFfZPRMRXVVP1kPo"

  

# misc

DEFENDER_API_KEY=""

ETHERSCAN_NETWORK=""

DEFENDER_SECRET_KEY=""
```