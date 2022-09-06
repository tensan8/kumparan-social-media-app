import { ErrorState, ErrorType } from './ErrorState'

interface IResult<TData> {
  data: TData | null
  loading: boolean
  error?: ErrorState
  isSuccess: () => boolean
  isLoading: () => boolean
  isFailed: () => boolean
  setData: (data: TData) => void
  setLoading: (loading: boolean) => void
  setError: (error: ErrorState | ErrorType) => void
}

export class Result<TData> implements IResult<TData> {
  public data: TData | null
  public loading = false as boolean
  public error?: ErrorState

  constructor (data?: TData | null) {
    if (data !== null && data !== undefined) {
      this.data = data
    } else {
      this.data = null
    }
  }

  isSuccess (): boolean {
    return this.data !== undefined || this.data !== null
  }

  isLoading (): boolean {
    return this.loading
  }

  isFailed (): boolean {
    return Boolean(this.error != null)
  }

  setData (data: TData): void {
    this.data = data
  }

  setLoading (loading: boolean): void {
    this.loading = loading
  }

  setError (error: ErrorState | ErrorType): void {
    if (error instanceof ErrorState) {
      this.error = error
    } else if (typeof error === 'string') {
      this.error = new ErrorState(error)
    }
  }
}
