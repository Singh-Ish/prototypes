import { ILaunchPageData } from '@/types/hrForms'
import { addBadgeStyle } from '@/utils/commonFunction'
import { Badge, SearchForm, Section, Table } from '@carletonuniversity/rds'
import Link from 'next/link'
import { useCallback, useState } from 'react'

const LaunchPageTable = () => {
  const launchPageData: ILaunchPageData[] = [
    {
      apprId: 14823,
      proxyId: undefined,
      apprPidm: 1346104,
      myLevel: 0,
      requisition: 52082,
      requisitionGroup: 52082,
      paymentType: 'Hourly',
      eid: '101213669',
      name: 'hrtest5, hrtest5',
      jobTitle: 'Work Study Top-Up',
      beginDate: '05/14/2024',
      endDate: '05/21/2024',
      status: 'F',
      statusDesc: 'Financial Approval Completed',
      accountIndex: 'D230',
      errorList: undefined,
      researchAccount: 'N',
      currLevel: 3000,
      updateAllowed: 'N',
    },
    {
      apprId: 14823,
      proxyId: undefined,
      apprPidm: 1346104,
      myLevel: 0,
      requisition: 52113,
      requisitionGroup: 52113,
      paymentType: 'Hourly',
      eid: '101213667',
      name: 'hrtest3, hrtest3',
      jobTitle: 'Deferred exam',
      beginDate: '02/29/2024',
      endDate: '03/29/2024',
      status: 'S',
      statusDesc: 'Saved',
      accountIndex: '266001, D236',
      errorList: undefined,
      researchAccount: 'N',
      currLevel: 0,
      updateAllowed: 'Y',
    },
    {
      apprId: 14823,
      proxyId: undefined,
      apprPidm: 1346104,
      myLevel: 0,
      requisition: 52080,
      requisitionGroup: 52080,
      paymentType: 'One-Time',
      eid: '100010003',
      name: 'Laubstein, Ann',
      jobTitle: 'Work Study Top-Up (Recurring)',
      beginDate: '05/14/2024',
      endDate: '05/28/2024',
      status: 'F',
      statusDesc: 'Financial Approval Completed',
      accountIndex: 'D237',
      errorList: undefined,
      researchAccount: 'N',
      currLevel: 3000,
      updateAllowed: 'N',
    },
    {
      apprId: 14823,
      proxyId: undefined,
      apprPidm: 1346104,
      myLevel: 0,
      requisition: 52109,
      requisitionGroup: 52109,
      paymentType: 'One-Time',
      eid: '100010003',
      name: 'Laubstein, Ann',
      jobTitle: 'sample title',
      beginDate: '05/17/2024',
      endDate: '05/31/2024',
      status: 'S',
      statusDesc: 'Saved',
      accountIndex: 'D238',
      errorList: undefined,
      researchAccount: 'N',
      currLevel: 0,
      updateAllowed: 'Y',
    },
    {
      apprId: 14823,
      proxyId: undefined,
      apprPidm: 1346104,
      myLevel: 0,
      requisition: 52100,
      requisitionGroup: 52100,
      paymentType: 'One-Time',
      eid: '101213667',
      name: 'hrtest3, hrtest3',
      jobTitle: 'Deferred exam',
      beginDate: '05/04/2024',
      endDate: '05/13/2024',
      status: 'P',
      statusDesc: 'In Progress',
      accountIndex: '188026',
      errorList: undefined,
      researchAccount: 'Y',
      currLevel: 10,
      updateAllowed: 'N',
    },
    {
      apprId: 14823,
      proxyId: undefined,
      apprPidm: 1346104,
      myLevel: 0,
      requisition: 52099,
      requisitionGroup: 52099,
      paymentType: 'Hourly',
      eid: '101213667',
      name: 'hrtest3, hrtest3',
      jobTitle: 'Casual',
      beginDate: '04/29/2024',
      endDate: '05/31/2024',
      status: 'N',
      statusDesc: 'Return for Correction',
      accountIndex: '187540',
      errorList: undefined,
      researchAccount: 'Y',
      currLevel: 0,
      updateAllowed: 'Y',
    },
    {
      apprId: 14823,
      proxyId: undefined,
      apprPidm: 1346104,
      myLevel: 0,
      requisition: 52105,
      requisitionGroup: 52105,
      paymentType: 'Hourly',
      eid: '101213667',
      name: 'hrtest3, hrtest3',
      jobTitle: 'Work Study Top-Up',
      beginDate: '04/28/2024',
      endDate: '05/23/2024',
      status: 'F',
      statusDesc: 'Financial Approval Completed',
      accountIndex: '187540',
      errorList: undefined,
      researchAccount: 'Y',
      currLevel: 3000,
      updateAllowed: 'N',
    },
    {
      apprId: 14823,
      proxyId: undefined,
      apprPidm: 1346104,
      myLevel: 0,
      requisition: 52113,
      requisitionGroup: 52113,
      paymentType: 'Hourly',
      eid: '101213667',
      name: 'hrtest3, hrtest3',
      jobTitle: 'Deferred exam',
      beginDate: '02/29/2024',
      endDate: '03/29/2024',
      status: 'S',
      statusDesc: 'Saved',
      accountIndex: '266001, D236',
      errorList: undefined,
      researchAccount: 'N',
      currLevel: 0,
      updateAllowed: 'Y',
    },
  ]

  const [searchTerm, setSearchTerm] = useState('')

  const callback = useCallback(
    (message: string) => {
      setSearchTerm(message)
    },
    [setSearchTerm],
  )
  const initialTableData = launchPageData.map((item: ILaunchPageData) => {
    let badgeStyle = addBadgeStyle(item.status)

    return {
      ...item,
      statusDesc: (
        <>
          <Badge
            color={badgeStyle}
            noWordBreak
            text={item.statusDesc ? item.statusDesc : 'Unknown'}
          />
        </>
      ),
      action: (
        <>
          {item.status === 'S' || item.status === 'N' ? (
            <Link
              href={`/forms/requisition/edit/${item.requisition}`}
              className="text-cu-red-700 font-semibold cursor-pointer"
            >
              Edit
            </Link>
          ) : (
            <Link
              href={`/forms/requisition/view/${item.requisition}`}
              className="text-cu-red-700 font-semibold"
            >
              View
            </Link>
          )}
        </>
      ),
    }
  })

  let tableData = initialTableData.filter(
    (item) =>
      item.requisition !== undefined &&
      (item.requisition.toString().indexOf(searchTerm.toLowerCase()) > -1 ||
        item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1 ||
        item.jobTitle.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1),
  )

  return (
    <>
      <Section maxWidth="7xl">
        <SearchForm
          callback={callback}
          placeholder="Search / Filter by requisition number or job title"
        />
      </Section>
      {(!tableData || tableData.length === 0) && (
        <p>There are currently no requisitions to display</p>
      )}

      {tableData && tableData.length > 0 && (
        <>
          <Table
            columns={[
              {
                header: 'Requisition No',
                key: 'requisition',
                sort: {
                  sortable: true,
                },
              },
              {
                header: 'Job Title',
                key: 'jobTitle',
              },
              {
                header: 'Name',
                key: 'name',
              },
              {
                header: 'Payment Type',
                key: 'paymentType',
                sort: {
                  sortable: true,
                },
              },
              {
                header: 'Start Date',
                key: 'beginDate',
                sort: {
                  sortable: true,
                },
              },
              {
                header: 'End Date',
                key: 'endDate',
                sort: {
                  sortable: true,
                },
              },
              {
                header: 'Status',
                key: 'statusDesc',
              },
              {
                header: 'Action',
                key: 'action',
              },
            ]}
            data={tableData}
          />
        </>
      )}
    </>
  )
}

export default LaunchPageTable
