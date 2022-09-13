interface IResult<TData> {
  data: TData | null
  setData: (data: TData) => void
}

export class Result<TData> implements IResult<TData> {
  public data: TData | null

  constructor (data?: TData) {
    this.data = data ?? null
  }

  setData (data: TData): void {
    this.data = data
  }
}
