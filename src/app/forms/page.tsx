'use client'
import { Card, Column, Container, PageHeaders } from '@carletonuniversity/rds'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <PageHeaders as="h2" header="Forms Examples " size="md" />
      <Column maxWidth="7xl" cols="3">
        <Card>
          <Card.Header title="Launch Page" />
          <Card.Body>
            <Card.Excerpt text="This prototype reflects a single event view in cutheme." />
          </Card.Body>
          <Card.Footer>
            <Link
              className="cu-button cu-button--red cu-button--small"
              href="/forms/launchpage"
            >
              View Prototype
            </Link>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Header title="Single Page" />
          <Card.Body>
            <Card.Excerpt text="This example uses the wide image component with an optional background image." />
          </Card.Body>
          <Card.Footer>
            <Link
              className="cu-button cu-button--red cu-button--small"
              href="/forms/requisition/view/52082"
            >
              View Prototype
            </Link>
          </Card.Footer>
        </Card>
      </Column>

      <Container maxWidth="7xl" isGrey>
        <PageHeaders as="h2" header="Forms View / Edit" size="md" />
        <Column maxWidth="7xl" cols="3">
          <Card>
            <Card.Header title="Create a New Form" />
            <Card.Body>
              <Card.Excerpt text="This prototype reflects a single event view in cutheme." />
            </Card.Body>
            <Card.Footer>
              <a
                className="cu-button cu-button--red cu-button--small"
                href="/forms/requisition/new"
              >
                View Prototype
              </a>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Header title="Edit an Existing Form" />
            <Card.Body>
              <Card.Excerpt text="This example uses the wide image component with an optional background image." />
            </Card.Body>
            <Card.Footer>
              <a
                className="cu-button cu-button--red cu-button--small"
                href="/forms/requisition/edit/10"
              >
                View Prototype
              </a>
            </Card.Footer>
          </Card>
        </Column>
      </Container>
    </>
  )
}
