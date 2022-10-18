import React from 'react'
import { Button, Col, Container,Row } from 'react-bootstrap'
import PropTypes from 'prop-types'

function HoneyAritcle(props) {

  const { id, title, price, img, count, handlePlusClick, handleMinusClick } = props

  return (

    <Container>
      <Row>
      <Col>
        <h5>{title}</h5>
        </Col>
      </Row>
      <Row  className="align-items-center">
        <Col>
        <div>{price} €</div>
        </Col>
        <Col>
        <img src={img} height='80px' ></img>
        </Col>
        <Col>
        <div id={'countHoney'+id}>{count}</div>
        </Col>
        <Col>
        <Button id={'plusBtnHoney'+id} variant='primary' style={{width:'40px', height:'40px'}} onClick={() => handlePlusClick(id, Number(price))}>+</Button>
        </Col>
        <Col>
        <Button id={'plusBtnHoney'+id} variant='primary' style={{width:'40px', height:'40px'}} disabled={count <= 0} onClick={() => handleMinusClick(id, Number(price))}>-</Button>
        </Col>
      </Row>
      <br></br>
    </Container>
  )
}

export default HoneyAritcle

HoneyAritcle.propTypes = {
  price: PropTypes.number
}
