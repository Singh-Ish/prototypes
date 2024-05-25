'use client'
import Link from 'next/link'
import {
  Main,
  LinkProvider,
  Nav,
  Section,
  PageHeaders,
  WideImage,
  ButtonGroup,
  Card,
  Column,
  Container,
} from '@carletonuniversity/rds'

export default function Home() {
  return (
    <>
      <Main>
        <Section hasProse>
          {/* <WideImage
            headerType="h1"
            image="https://picsum.photos/1600/700"
            isType="image"
            title="RDS Layouts and Testing"
          >
            <p>
              Nobis voluptatem dolorum et eum doloremque cupiditate velit.
              Praesentium architecto a distinctio aut reprehenderit ducimus.
            </p>
          </WideImage> */}
          <Container maxWidth="7xl">
            <PageHeaders as="h2" header="Projects" size="md" />
            <Column maxWidth="7xl" cols="3">
              <Card>
                <Card.Header title="Events Calendar" />
                <Card.Body>
                  <Card.Excerpt text="This prototype reflects a single event view in cutheme." />
                </Card.Body>
                <Card.Footer>
                  <Link
                    className="cu-button cu-button--red cu-button--small"
                    href="/events"
                  >
                    View Prototype
                  </Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Header title="Forms" />
                <Card.Body>
                  <Card.Excerpt text="This example uses the wide image component with an optional background image." />
                </Card.Body>
                <Card.Footer>
                  <Link
                    className="cu-button cu-button--red cu-button--small"
                    href="/events/single-image"
                  >
                    View Prototype
                  </Link>
                </Card.Footer>
              </Card>
              <Card>
                <Card.Header title="RDS Component Library" />
                <Card.Body>
                  <Card.Excerpt text="When no banner image is set the components default light grey background is used." />
                </Card.Body>
                <Card.Footer>
                  {/* //link opening in new tab  */}
                  <Link
                    className="cu-button cu-button--red cu-button--small"
                    href="https://cuweb.github.io/rds/?path=/docs/get-started-introduction--docs"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Prototype
                  </Link>
                </Card.Footer>
              </Card>
            </Column>
            <p>
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              sodales at eros ac condimentum. Cras elementum rhoncus purus, sit
              amet commodo tortor placerat at. Fusce massa sem, ornare at auctor
              non, pulvinar sed arcu. Quisque eget feugiat augue, vitae
              venenatis libero. Integer consequat non quam malesuada tempus.
              Proin feugiat turpis sit amet interdum dignissim. Aliquam ut enim
              quis sapien lacinia auctor sit amet sit amet felis.{' '}
            </p>
            <p>
              Fusce nibh enim, scelerisque at purus nec, aliquet viverra erat.
              Nulla aliquam augue vel ex ultrices finibus. Duis ullamcorper
              sollicitudin fermentum. Aenean eu mattis sapien, at malesuada
              arcu. In dictum risus mi, ac suscipit purus consectetur et. Fusce
              ut libero sagittis, luctus mi sed, auctor odio. Cras in consequat
              orci. Sed malesuada nulla justo, ut porttitor enim venenatis vel.
            </p>
          </Container>
        </Section>
      </Main>
    </>
  )
}
