import {AccordionItem, AccordionHeader,Accordion  } from 'reactstrap';
import {
    Button, Badge, Card, CardBody, CardTitle, CardSubtitle, CardText
  } from 'reactstrap';
  import Teste from '../Teste/index.js'
  import BarraLogado from '../navbar/barraLogado.js';


export function Initi() {
    return(
        
        <>
        <BarraLogado/>
        <Teste/>
        <div>
        <Card>
          <CardBody>
            <CardTitle tag="h5">
              Card title
            </CardTitle>
            <CardSubtitle
              className="mb-2 text-muted"
              tag="h6"
            >
              Card subtitle
            </CardSubtitle>
            <CardText>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </CardText>
            <Button href="https://google.com">
              Button
            </Button>
          </CardBody>
        </Card>
  </div>
        </>
        
    )
}