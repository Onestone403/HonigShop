import HoneyAritcle from "./components/HoneyAritcle";
import { useState } from 'react'
import { Button, Col, Container,Row } from 'react-bootstrap'
//bilder import
import bluetenhonig from './images/bluetenhonig.png'
import waldhonig from './images/waldhonig.png'
import sommerbluetenhonig from './images/sommerbluetenhonig.png'
import beeleft from './images/beeleft.png'
import beeright from './images/beeright.png'
import honey from './images/honey.png'

function App() {

  const [countBluetenhonig, setCountBluetenhonig] = useState(0)
  const [countWaldhonig, setCountWaldhonig] = useState(0)
  const [countSommerbluetenhonig, setCountSommerbluetenhonig] = useState(0)
  const [totalCost, setTotalCost] = useState(0.0)

  function handlePlusClick(honeyId,betrag) {
    if (honeyId == 1) {
      setCountBluetenhonig(countBluetenhonig + 1)
    }
    else if (honeyId == 2) {
      setCountWaldhonig(countWaldhonig + 1)
    }
    else if (honeyId == 3) {
      setCountSommerbluetenhonig(countSommerbluetenhonig + 1)
    }
    setTotalCost(+(totalCost +betrag).toFixed(2))
  }

  function handleMinusClick(honeyId,betrag) {
    if (honeyId == 1) {
      setCountBluetenhonig(countBluetenhonig - 1)
    }
    else if (honeyId == 2) {
      setCountWaldhonig(countWaldhonig - 1)
    }
    else if (honeyId == 3) {
      setCountSommerbluetenhonig(countSommerbluetenhonig - 1)
    }
    
    setTotalCost(+(totalCost - +betrag).toFixed(2))
  }

  function Checkout(event){
    console.log(`Es wurden ${countBluetenhonig + countWaldhonig + countSommerbluetenhonig} Honige für ${totalCost} gekauft.`)
event.preventDefault();
  }

  return (
    <form onSubmit={Checkout}>
      <Container>
        <Row className="align-items-center justify-content-center"><Col className="text-center"><h1>Alles Honig?</h1></Col></Row>
        <Row className="align-items-center justify-content-center"><Col className="text-center"><img alt="Honig" src={honey} width='30%'/></Col></Row>
        <br></br>
        <Row className="justify-content-between" ><Col className="text-start"><img  alt="Biene links" src={beeleft} width="40%"/></Col><Col className="text-end"><img alt="Biene rechts" src={beeright} width="40%" /></Col></Row>
        <hr></hr>
        <Row> <HoneyAritcle id={1} title='Blütenhonig' count={countBluetenhonig} img={bluetenhonig} price={11.33} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} /> </Row>
        <Row> <HoneyAritcle id={2} title='Waldhonig' count={countWaldhonig} img={waldhonig} price={12.89} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} /> </Row>
        <Row> <HoneyAritcle id={3} title='Sommerblütenhonig' count={countSommerbluetenhonig} img={sommerbluetenhonig} price={10.13} handlePlusClick={handlePlusClick} handleMinusClick={handleMinusClick} /> </Row>
      <hr></hr>
      <Row><Col>Anzahl Honige: {countBluetenhonig + countWaldhonig + countSommerbluetenhonig}</Col></Row>
      <Row><Col>Gesamtsumme: {totalCost}€</Col></Row>
      <hr></hr>
      <Row><Col className="text-end"><Button id="btnCheckout" type="submit" disabled={countBluetenhonig + countWaldhonig + countSommerbluetenhonig < 5} variant="success">Bezahlen</Button></Col></Row>
      </Container>
    </form>
  )
}

export default App;


