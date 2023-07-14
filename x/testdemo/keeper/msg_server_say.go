package keeper

import (
	"context"

	sdk "github.com/cosmos/cosmos-sdk/types"
	"test-demo/x/testdemo/types"
)

func (k msgServer) Say(goCtx context.Context, msg *types.MsgSay) (*types.MsgSayResponse, error) {
	ctx := sdk.UnwrapSDKContext(goCtx)

	// TODO: Handling the message
	_ = ctx

	return &types.MsgSayResponse{}, nil
}
