package types

import (
	sdk "github.com/cosmos/cosmos-sdk/types"
	sdkerrors "github.com/cosmos/cosmos-sdk/types/errors"
)

const TypeMsgSay = "say"

var _ sdk.Msg = &MsgSay{}

func NewMsgSay(creator string, word string) *MsgSay {
	return &MsgSay{
		Creator: creator,
		Word:    word,
	}
}

func (msg *MsgSay) Route() string {
	return RouterKey
}

func (msg *MsgSay) Type() string {
	return TypeMsgSay
}

func (msg *MsgSay) GetSigners() []sdk.AccAddress {
	creator, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		panic(err)
	}
	return []sdk.AccAddress{creator}
}

func (msg *MsgSay) GetSignBytes() []byte {
	bz := ModuleCdc.MustMarshalJSON(msg)
	return sdk.MustSortJSON(bz)
}

func (msg *MsgSay) ValidateBasic() error {
	_, err := sdk.AccAddressFromBech32(msg.Creator)
	if err != nil {
		return sdkerrors.Wrapf(sdkerrors.ErrInvalidAddress, "invalid creator address (%s)", err)
	}
	return nil
}
