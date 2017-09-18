import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Modal } from 'antd'
import ReactHtmlParser from 'react-html-parser'
import './SingleDomain.styl'

class SingleDomain extends Component {
  constructor (props) {
    super(props)
    this.state = {
      domain: null
    }
  }

  componentWillMount () {
    if (this.props.data) {
      this.setState((state, props) => {
        return {
          domain: props.data
        }
      })
    } else {
      this.setState({
        domain: {
          id: 0,
          name: 'test',
          price: 0,
          wallet: '0x00000000000000000000000000',
          categories: ['category'],
          description: '<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt laudantium, nemo neque eaque quia esse quibusdam rerum voluptas! Porro et quidem incidunt omnis praesentium eos dolore explicabo, ducimus consectetur natus.</p>',
          link: location.href,
          img: 'https://smaulgld.com/wp-content/uploads/2017/05/Ethereum.jpg',
          status: 'publish'
        }
      })
    }
  }

  render () {
    return (
      <Modal
        className='domain-info-modal'
        width={400}
        visible
        title='Domain Info:'
        onCancel={this.props.onCancel}
        footer={false}
      >
        <div className='single-domain'>
          <img width='100px' src={this.state.domain.img} alt={'Ethereum domain ' + this.state.domain.name} />
          <h2>{this.state.domain.name}</h2>
          <p>{this.state.domain.price} ETH</p>
          <p>{this.state.domain.wallet}</p>
          <ul>
            {
              this.state.domain.categories.map(
                (item, index) => <li key={index}>{item}</li>
              )
            }
          </ul>
          {ReactHtmlParser(this.state.domain.description)}
        </div>
      </Modal>
    )
  }
}

SingleDomain.propTypes = {
  data: PropTypes.object,
  onCancel: PropTypes.func
}

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => ({

})

const component = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleDomain)

export default component
