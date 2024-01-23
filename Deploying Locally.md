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
