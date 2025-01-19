%lang starknet

from starkware.cairo.common.cairo_builtins import HashBuiltin
from openzeppelin.token.erc721.library import ERC721

@external
func constructor(
    name: felt,
    symbol: felt,
    owner: felt
) -> ():
    ERC721.constructor(name=name, symbol=symbol, owner=owner)
    return ()
end

@external
func mint(
    recipient: felt,
    tokenId: felt,
    tokenURI: felt
) -> ():
    ERC721.mint(to=recipient, tokenId=tokenId, tokenURI=tokenURI)
    return ()
end
