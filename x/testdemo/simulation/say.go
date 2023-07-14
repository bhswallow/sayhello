package simulation

import (
	"math/rand"

	"github.com/cosmos/cosmos-sdk/baseapp"
	sdk "github.com/cosmos/cosmos-sdk/types"
	simtypes "github.com/cosmos/cosmos-sdk/types/simulation"
	"test-demo/x/testdemo/keeper"
	"test-demo/x/testdemo/types"
)

func SimulateMsgSay(
	ak types.AccountKeeper,
	bk types.BankKeeper,
	k keeper.Keeper,
) simtypes.Operation {
	return func(r *rand.Rand, app *baseapp.BaseApp, ctx sdk.Context, accs []simtypes.Account, chainID string,
	) (simtypes.OperationMsg, []simtypes.FutureOperation, error) {
		simAccount, _ := simtypes.RandomAcc(r, accs)
		msg := &types.MsgSay{
			Creator: simAccount.Address.String(),
		}

		// TODO: Handling the Say simulation

		return simtypes.NoOpMsg(types.ModuleName, msg.Type(), "Say simulation not implemented"), nil, nil
	}
}
