package keeper

import (
	"test-demo/x/testdemo/types"
)

var _ types.QueryServer = Keeper{}
