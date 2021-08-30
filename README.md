# Skynet Hcakathon Fork
# Deployment to skynet:
<a href="https://0009of0edpvfc019p26389r73c9j57spl3vvqf9lr1casce1knoeuho.siasky.net/">Link to the deployment on skynet</a>


Deployed siasky.net url:
```
0009of0edpvfc019p26389r73c9j57spl3vvqf9lr1casce1knoeuho.siasky.net
```


# Add to homescreen 





# Explanation of Reefswap UI:
# Reefswap UI

An open source interface for Reefswap -- a protocol for decentralized exchange of Reef tokens.

- Website: https://reefswap.com/pool
- Reef Documentation: https://docs.reef.finance/docs/prologue/introduction/

The Reefswap interface supports, swapping tokens, adding liquidity and binding Polkadot address with Ethereum EVM.

## Developer guide

### Installation

Cloning the project and installing the dependencies.

```bash
git clone git@github.com:reef-defi/reefswap-ui.git
cd reefswap-ui
yarn
```

### Run

Run `yarn start` and visit `localhost:3000`

### Build docker container

```bash
cd reefswap-ui
docker build -t reefswap-ui .
```

### Run with docker

```bash
docker run -p 80:80 reefswap-ui
```

Visit application on `localhost`.
