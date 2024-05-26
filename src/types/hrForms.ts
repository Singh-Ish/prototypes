export interface ILaunchPageData {
  accountIndex: string
  apprId: number
  apprPidm: number
  beginDate: string
  currLevel: string | number
  eid: string
  endDate: string
  errorList?: string
  jobTitle: string
  myLevel: number
  name: string
  paymentType: string
  proxyId?: number
  requisition?: number
  requisitionGroup?: number
  researchAccount: string
  status: string
  statusDesc: string
  updateAllowed: string
}

export interface ILaunchPageFilter {
  status?: string
  jobType?: number
  proxy?: number
  startDate: null
  endDate: null
}

export interface ILaunchPageFilterDates {
  status?: string
  jobType?: number
  proxy?: number
  startDate: string
  endDate: string
}
