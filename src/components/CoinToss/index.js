// Write your code here
import {Component} from 'react'

import './index.css'

const headImgUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImgUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    imgUrl: headImgUrl,
    headCount: 0,
    tailCount: 0,
  }

  onClickButton = () => {
    const {headCount, tailCount} = this.state
    const toss = Math.floor(Math.random() * 2)

    if (toss === 0) {
      this.setState({headCount: headCount + 1, imgUrl: headImgUrl})
    } else {
      this.setState({tailCount: tailCount + 1, imgUrl: tailImgUrl})
    }
  }

  render() {
    const {imgUrl, headCount, tailCount} = this.state
    const totalCount = headCount + tailCount
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="title">Coin Toss Game</h1>
          <p className="description">Heads (or) Tails</p>
          <img src={imgUrl} className="img" alt="toss result" />
          <button
            className="toss-coin"
            type="button"
            onClick={this.onClickButton}
          >
            {' '}
            Toss Coin
          </button>
          <div className="result-container">
            <p className="count-txt">Total:{totalCount} </p>
            <p className="count-txt">Heads:{headCount}</p>
            <p className="count-txt">Tails:{tailCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
