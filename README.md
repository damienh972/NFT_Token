# Create your own NFT_Token    


&nbsp;


With this repo, you will be able to create your own "NFT collectible token" on ganache tesnet or any network using remix ide. 


NFT token is a new standart token who include an unique id for an unique virtual asset like cryptokitties's or axie infinity's NFT :fire:  

learn more at: https://www.ledger.com/academy/what-are-nft#:~:text=%E2%80%93%20Non%2Dfungible%20tokens%20(or,such%20as%20TRON%20and%20NEO  


&nbsp;

We're using OpenZeppelin contracts which provide secure audited smartcontracts.  
More at : https://openzeppelin.com


# Get started  

First, install truffle `npm install truffle -g`


## (Test environment) Deploy with Ganache :  


&nbsp;


1. Clone the repo into new folder.

2. In your terminal,go to folder's root and enter `$npm install` or `$yarn add`, this will import all node_modules from package.json

3. Replace **name** and **symbol** in contract constructor by your choice.

4. Open Ganache (you can download Ganache here https://www.trufflesuite.com/ganache) , and connect it to your metamask browser.

5. In your terminal, go to folder's root and enter `truffle migrate`, this will compile and deploy contract on ganache.  

&nbsp;  

## Deploy with Remix :

1. Copy code on https://github.com/damienh972/NFT_Token/blob/main/contracts/NFT.sol and paste in Remix ide.  


2. Replace imports by :

`import "https://github.com/OpenZeppelin/openzeppelin-contracts/contracts/token/ERC721/ERC721.sol";`  

`import "https://github.com/OpenZeppelin/openzeppelin-contracts/contracts/utils/Counters.sol";`  
                        
3. Set your ENVIRONMENT and enter **name** and **symbol** to deploy NFT contract.  


4. Use addItem function in your deployed contract with : 
  - Your public address on metamask.  
  - Your token URI (ex. "https://burst.shopifycdn.com/photos/cute-dog-in-blanket.jpg?width=1000&format=pjpg&exif=0&iptc=0").  
 
5. In your metasmask, add a new token with contract address deployed before!:sunglasses:
                        
              
