%lang starknet

@view
struct Mp3Metadata {
    uri: felt,
}

@external
func constructor{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}() -> ():
    return ()
end

@external
func mint{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    recipient: felt,
    token_id: felt,
    uri: felt,
):
    emit(
        event = {
            name: 'Mint',
            keys: [recipient, token_id],
            data: [uri],
        }
    )
    return ()
end

@view
func get_metadata{syscall_ptr: felt*, pedersen_ptr: HashBuiltin*, range_check_ptr}(
    token_id: felt,
) -> (metadata: Mp3Metadata):
    return (metadata = Mp3Metadata(uri = token_id))
end
