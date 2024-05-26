'use client'

import { addBadgeStyle } from '@/utils/commonFunction'
import { Description, PageHeaders, Table } from '@carletonuniversity/rds'
import moment from 'moment'

const singleRequisitionData = {
  job: {
    nzbjobrRequisitionNumber: 52082,
    nzbjobrRequisitionGroup: 52082,
    nzbjobrPidm: 1346194,
    nzbjobrPosn: '007WST',
    nzbjobrAccountIndexCode: null,
    nzbjobrApproverLevel: 3000,
    nzbjobrApproverModule: 'CASJOBS',
    nzbjobrAssistFacultyInd: null,
    nzbjobrStatus: 'F',
    nzbjobrBeginDate: '05/14/2024',
    nzbjobrEndDate: '05/21/2024',
    nzbjobrDuties: null,
    nzbjobrEndEffectiveDate: null,
    nzbjobrEstimatedWeeks: 10,
    nzbjobrHourlyRate: 100,
    nzbjobrHoursPerWeek: 10,
    nzbjobrJob: null,
    nzbjobrJobLevelEquivalent: null,
    nzbjobrJobNumber: null,
    nzbjobrJobTitle: null,
    nzbjobrJobType: 16,
    nzbjobrOneTimeComments: null,
    nzbjobrOrganizationCode: '394',
    nzbjobrPaymentInd: null,
    nzbjobrPaymentType: 'H',
    nzbjobrResearchInd: 'N',
    nzbjobrSourceDeductionsInd: null,
    nzbjobrStartEffectiveDate: null,
    nzbjobrSuff: null,
    nzbjobrTimeEntryInd: 'Y',
    nzbjobrTotalAmountDue: 10000,
    nzbjobrTotalHours: 100,
    nzbjobrVacationPayInd: null,
    nzbjobrVaccineRequiredInd: null,
    nzbjobrActivityDate: '05/14/2024 14:26:50',
    nzbjobrUserId: 'BHOOMIPIPALIA',
  },
  department: 'Academic Advising Centre',
  foaps: [
    {
      nzrjlabRequisitionNumber: 52082,
      nzrjlabAccountIndexCode: 'D230',
      nzrjlabFundCode: '100000',
      nzrjlabOrgnCode: '230',
      nzrjlabAcctCode: '611025',
      nzrjlabProgCode: '1100',
      nzrjlabActvCode: '0021',
      nzrjlabPercent: 100,
      nzrjlabUserId: 'HRTESTHRTEST1',
      nzrjlabActivityDate: '05/14/2024 09:43:43',
    },
  ],
  bannerIds: ['101213669'],
  status: {
    status: 'F',
    statusDescription: 'Financial Approval Complete',
  },
}
const SingleRequisition = () => {
  let badgeStyle

  if (singleRequisitionData.status) {
    badgeStyle = addBadgeStyle(singleRequisitionData.status.status)
  }
  const paymentType = {
    key: 'Hourly',
    value: 'H',
  }

  const EmployeeDetailsTableData = [
    {
      employeeID: 101213669,
      firstName: 'hrtest5',
      lastName: 'hrtest5',
      registered_student: 'No',
    },
  ]

  const JobDetailsTableData = [
    {
      account: '611025',
      activity: '0021',
      allocation: 100,
      fund: '100000',
      id: 0,
      index: 'D230',
      org: '230',
      program: '1100',
    },
  ]

  const decisionDetailData = [
    {
      date: '05/14/2024',
      approver: 'Pipalia, Bhoomi',
      role: 'Owner',
      decision: 'Approved',
      comments: 'null',
    },
    {
      date: '05/14/2024',
      approver: 'HRTest1, HRTest1',
      role: 'Submitter Not Owner',
      decision: 'Approved',
      comments: 'nullnull',
    },
  ]
  return (
    <>
      <PageHeaders
        as="h1"
        header={`Single Requisition Page Sample`}
        size="md"
      />
      <PageHeaders as="h2" header="Job Details" size="sm" noUnderline />
      <Description>
        {singleRequisitionData?.status && badgeStyle && (
          <Description.Meta term="Status" hasBorder isSmall useColumns>
            {singleRequisitionData.status.statusDescription}
          </Description.Meta>
        )}
        <Description.Meta term="Title" hasBorder isSmall useColumns>
          {singleRequisitionData?.job?.nzbjobrJobTitle
            ? singleRequisitionData?.job?.nzbjobrJobTitle
            : '-'}
        </Description.Meta>

        <Description.Meta term="Department" hasBorder isSmall useColumns>
          {singleRequisitionData?.department}
        </Description.Meta>
        <Description.Meta term={`Start Date`} hasBorder isSmall useColumns>
          {moment(singleRequisitionData?.job?.nzbjobrBeginDate).format(
            'dddd, MMMM Do, YYYY',
          )}
        </Description.Meta>
        <Description.Meta term="End Date" hasBorder isSmall useColumns>
          {moment(singleRequisitionData?.job?.nzbjobrEndDate).format(
            'dddd, MMMM Do, YYYY',
          )}
        </Description.Meta>
        <Description.Meta term="Payment Type" hasBorder isSmall useColumns>
          {paymentType.key}
        </Description.Meta>

        {(singleRequisitionData?.job.nzbjobrPaymentType === 'O' ||
          singleRequisitionData?.job.nzbjobrPaymentType === 'R') && (
          <>
            <Description.Meta term="Total Hours" hasBorder isSmall useColumns>
              {singleRequisitionData?.job?.nzbjobrTotalHours
                ? singleRequisitionData?.job?.nzbjobrTotalHours
                : '-'}
            </Description.Meta>
            <Description.Meta
              term="Total Amount Due"
              hasBorder
              isSmall
              useColumns
            >
              {singleRequisitionData?.job?.nzbjobrTotalAmountDue
                ? '$' + singleRequisitionData?.job?.nzbjobrTotalAmountDue
                : '-'}
            </Description.Meta>
            <Description.Meta
              term="Hourly Rate of Pay"
              hasBorder
              isSmall
              useColumns
            >
              {singleRequisitionData?.job?.nzbjobrHourlyRate
                ? '$' + singleRequisitionData?.job?.nzbjobrHourlyRate
                : '-'}
            </Description.Meta>
          </>
        )}

        {singleRequisitionData?.job.nzbjobrPaymentType === 'H' && (
          <>
            <Description.Meta
              term="Estimated Hours(per week)"
              hasBorder
              isSmall
              useColumns
            >
              {singleRequisitionData?.job?.nzbjobrHoursPerWeek
                ? singleRequisitionData?.job?.nzbjobrHoursPerWeek
                : '-'}
            </Description.Meta>
            <Description.Meta
              term="Estimated Number of weeks"
              hasBorder
              isSmall
              useColumns
            >
              {singleRequisitionData?.job?.nzbjobrEstimatedWeeks
                ? singleRequisitionData?.job?.nzbjobrEstimatedWeeks
                : '-'}
            </Description.Meta>
            <Description.Meta
              term="Hourly Rate of Pay"
              hasBorder
              isSmall
              useColumns
            >
              {singleRequisitionData?.job?.nzbjobrHourlyRate
                ? '$' + singleRequisitionData?.job?.nzbjobrHourlyRate
                : '-'}
            </Description.Meta>
            <Description.Meta
              term="Estimated Total Hours"
              hasBorder
              isSmall
              useColumns
            >
              {singleRequisitionData?.job?.nzbjobrTotalHours
                ? singleRequisitionData?.job?.nzbjobrTotalHours
                : '-'}
            </Description.Meta>
            <Description.Meta
              term="Estimated Total Amount Due"
              hasBorder
              isSmall
              useColumns
            >
              {singleRequisitionData?.job?.nzbjobrTotalAmountDue
                ? '$' + singleRequisitionData?.job?.nzbjobrTotalAmountDue
                : '-'}
            </Description.Meta>
          </>
        )}
      </Description>
      <PageHeaders as="h3" header="Employee Details" size="sm" noUnderline />
      <Table
        columns={[
          {
            header: 'Employee ID',
            key: 'employeeID',
            sort: {
              sortable: true,
            },
          },
          {
            header: 'First Name',
            key: 'firstName',
            sort: {
              sortable: true,
            },
          },
          {
            header: 'Last Name',
            key: 'lastName',
            sort: {
              sortable: true,
            },
          },
          {
            header: 'Registered Student?',
            key: 'registered_student',
          },
        ]}
        data={EmployeeDetailsTableData}
      />
      <PageHeaders as="h3" header="Funding Details" size="sm" noUnderline />
      <Table
        columns={[
          {
            header: 'Index#',
            key: 'index',
            sort: {
              sortable: true,
            },
          },
          {
            header: 'Fund',
            key: 'fund',
            sort: {
              sortable: true,
            },
          },
          {
            header: 'Org',
            key: 'org',
            sort: {
              sortable: true,
            },
          },
          {
            header: 'Account',
            key: 'account',
            sort: {
              sortable: true,
            },
          },
          {
            header: 'Program',
            key: 'program',
            sort: {
              sortable: true,
            },
          },

          {
            header: 'Activity',
            key: 'activity',
            sort: {
              sortable: true,
            },
          },
          {
            header: 'Allocation',
            key: 'allocation',
            sort: {
              sortable: true,
            },
          },
        ]}
        data={JobDetailsTableData}
      />
      <PageHeaders as="h3" header="Decision Details" size="sm" noUnderline />
      <Table
        columns={[
          {
            header: 'Date',
            key: 'date',
            sort: {
              sortable: true,
            },
          },
          {
            header: 'Approver',
            key: 'approver',
            sort: {
              sortable: true,
            },
          },
          {
            header: 'Role',
            key: 'role',
            sort: {
              sortable: true,
            },
          },
          {
            header: 'Decision',
            key: 'decision',
            sort: {
              sortable: true,
            },
          },
          {
            header: 'Comments',
            key: 'comments',
            sort: {
              sortable: true,
            },
          },
        ]}
        data={decisionDetailData}
      />
    </>
  )
}

export default SingleRequisition
