export enum ErrorType {
  NOT_FOUND = 'NOT_FOUND',
  UNAUTHORIZED = 'UNAUTHORIZED',
  UNKNOWN = 'UNKNOWN',
  BAD_REQUEST = 'BAD_REQUEST',
  FORBIDDEN = 'FORBIDDEN',
  INTERNAL_ERROR = 'INTERNAL_ERROR',
  LOCKED = 'LOCKED',
  PRECONDITION_FAILED = 'PRECONDITION_FAILED',
}

export enum UnknownBadRequest {
  UNKNOWN = 'UNKNOWN',
}

export type ErrorDetail =
  | UnknownBadRequest
  | ErrorType

type DetailMap = Map<ErrorType, ErrorDetail>

interface IErrorState {
  type: ErrorType
  detail?: ErrorDetail

  setType: (type: ErrorType) => void
  setState: (type: ErrorType, detail?: ErrorDetail) => void

  isNotFound: () => boolean
  isUnauthorized: () => boolean
  isUnknown: () => boolean
  isBadRequest: () => boolean
}

export class ErrorState implements IErrorState {
  public type
  _detailMap: DetailMap

  constructor (type: ErrorType = ErrorType.UNKNOWN, detail?: ErrorDetail) {
    this.type = type
    this._detailMap = new Map<ErrorType, ErrorDetail>(
      detail !== null && detail !== undefined ? [[type, detail]] : undefined
    )
  }

  get detail (): ErrorDetail | undefined {
    return this._detailMap.get(this.type)
  }

  setType (type: ErrorType): void {
    this.type = type
  }

  setState (type: ErrorType, detail?: ErrorDetail): void {
    this.type = type
    if (detail !== null && detail !== undefined) {
      this._detailMap.set(type, detail)
    }
  }

  isNotFound (): boolean {
    return this.type === ErrorType.NOT_FOUND
  }

  isUnauthorized (): boolean {
    return this.type === ErrorType.UNAUTHORIZED
  }

  isUnknown (): boolean {
    return this.type === ErrorType.UNKNOWN
  }

  isBadRequest (): boolean {
    return this.type === ErrorType.BAD_REQUEST
  }

  isForbidden (): boolean {
    return this.type === ErrorType.FORBIDDEN
  }
}
