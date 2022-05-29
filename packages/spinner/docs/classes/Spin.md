[@idea-spinner/spinner](../README.md) / Spin

# Class: Spin

An ongoing spin of a set of simulated wheels.

## Table of contents

### Constructors

- [constructor](Spin.md#constructor)

### Properties

- [wheels](Spin.md#wheels)

### Methods

- [getStatus](Spin.md#getstatus)

## Constructors

### constructor

• **new Spin**(`parameters`)

The basic constructor.

**`example`**
```js
const spin = new Spin({
  wheels: new Map([
    ["emotion", ["sad", "happy"]],
    ["color", ["red", "blue"]],
    ["length", ["long", "short"]]
  ]),
  physics: {
    startingFrameLength: 300,
    endingFrameLength: 600,
    friction: 0.5
  }
});
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | `Object` |
| `parameters.physics` | [`SpinnerPhysics`](../interfaces/SpinnerPhysics.md) |
| `parameters.wheels` | `Map`<`string`, `string`[]\> |

#### Defined in

[Spinner/index.ts:117](https://github.com/daniellacosse/idea-spinner/blob/811f418/packages/spinner/Spinner/index.ts#L117)

## Properties

### wheels

• **wheels**: `Map`<`string`, [`Wheel`](Wheel.md)\>

#### Defined in

[Spinner/index.ts:92](https://github.com/daniellacosse/idea-spinner/blob/811f418/packages/spinner/Spinner/index.ts#L92)

## Methods

### getStatus

▸ **getStatus**(`timeOffset?`): `Object`

Get the current display of this spin.

**`example`**
```js
spin.getStatus(1000);
```

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `timeOffset` | `number` | `0` | You can optionally provide a  timeOffset to look into the future. |

#### Returns

`Object`

The display of the Spin at the current or future time.

#### Defined in

[Spinner/index.ts:141](https://github.com/daniellacosse/idea-spinner/blob/811f418/packages/spinner/Spinner/index.ts#L141)