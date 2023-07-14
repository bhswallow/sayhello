/* eslint-disable */
import _m0 from "protobufjs/minimal";

export const protobufPackage = "testdemo.testdemo";

export interface MsgSay {
  creator: string;
  word: string;
}

export interface MsgSayResponse {
}

function createBaseMsgSay(): MsgSay {
  return { creator: "", word: "" };
}

export const MsgSay = {
  encode(message: MsgSay, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== "") {
      writer.uint32(10).string(message.creator);
    }
    if (message.word !== "") {
      writer.uint32(18).string(message.word);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSay {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSay();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.word = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSay {
    return {
      creator: isSet(object.creator) ? String(object.creator) : "",
      word: isSet(object.word) ? String(object.word) : "",
    };
  },

  toJSON(message: MsgSay): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.word !== undefined && (obj.word = message.word);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSay>, I>>(object: I): MsgSay {
    const message = createBaseMsgSay();
    message.creator = object.creator ?? "";
    message.word = object.word ?? "";
    return message;
  },
};

function createBaseMsgSayResponse(): MsgSayResponse {
  return {};
}

export const MsgSayResponse = {
  encode(_: MsgSayResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSayResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSayResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgSayResponse {
    return {};
  },

  toJSON(_: MsgSayResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSayResponse>, I>>(_: I): MsgSayResponse {
    const message = createBaseMsgSayResponse();
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  Say(request: MsgSay): Promise<MsgSayResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Say = this.Say.bind(this);
  }
  Say(request: MsgSay): Promise<MsgSayResponse> {
    const data = MsgSay.encode(request).finish();
    const promise = this.rpc.request("testdemo.testdemo.Msg", "Say", data);
    return promise.then((data) => MsgSayResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
