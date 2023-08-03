

type Props = {}

const Link = (
private _value : string;
public get value() : string {
    return this._value;
}
public set value(v : string) {
    this._value = v;
}
) => {
  return (
    <div>Link</div>
  )
}

export default Link