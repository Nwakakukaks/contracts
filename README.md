# Collection of DEFI Contracts

## 1. Core contracts

-> _XSwap ERC20 Token_ - Token for pool management , LP Tokens, minted and burned to maintain the liquidity ownership

-> _XSwap PAIR_ - This Contract handles , the swapping , minting , and burning for the Token pair

-> _XSwap Factory_ - Manages and Creates the variour pair contracts

-> _Lending Pool_ - Lending / Borrowing Pool for a token , manages both operations

-> _Staking Pool_ - Staking Pool to stake tokens and earn rewards

## 2. Frontends ( Periphery ) Contracts

-> _XSwap Router_ - Contract that interacts with Factory and Pair contracts for Swapping and quotes for Swapping

-> _XSwap Price Oracle_ - Fetch the price of the tokens on-Chain from the Tokens pair pool

-> _Lending Router_ - Contract interacting with Factory and pool contract to facilitate Lending and Borrowing service

-> _Staking Router_ - Contract enabling Staking and rewards services on the platform

## 3. Others Contract

-> _WXDC Token_ - XDC Wrapper ERC20 token

-> _Stablecoin_ - USDX stablecoin backed by XDC

-> _ETH Wrapper_ - ETH Wrapper token

-> _Token_ - ERC20 token contract used for deploying all the tokens

## 4. Extras

-> Contracts Also includes all the interfaces , libraries used for the project

## NOTE : Swapping contracts are ready for Mainnet Deployement . The contracts are properly audited , gas optimized and quailty approved .

## NOTE : LENDING and STAKING contracts Not fit for mainnet, No Audit has been done for these contracts. Issues maybe present.
