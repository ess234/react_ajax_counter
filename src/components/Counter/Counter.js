import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {reciveValue} from '../../actions';
import style from './Counter.css';
import {Spinner} from '../';

class Counter extends React.Component {
  //클릭할때 Ajax요청
  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  // 컴포넌트 초기 AJAX요청은 ComponentDidMount에서 !!
  componentDidMount() {
      let getNumber = () => {
      axios.get('/counter').then(response => {
        this.props.onRecive(response.data.number);
        setTimeout(getNumber, 1000*5); //5초마다 서버와 동기화
      });
    }
      setTimeout(getNumber, 1000);
  }

  render () {
    const number = (
      <div className={style.number} ref={ref => {this.element = ref}}>
        {this.props.value}
      </div>
    );

    const spinner = (
      <Spinner/>
    );

    return (
      <div className={style.container} onClick={this.onClick}>
        <div className={style.center}>
          {(this.props.value == -1) ? spinner : number}
        </div>
      </div>
    )
  }

  componentDidUpdate() {
        this.element.classList.remove(style.bounce);
        this.element.offsetWidth; // Triggers reflow; enables restart animation
        this.element.classList.add(style.bounce);
    }

  onClick() {
    axios.post('/counter').then(response => {
      this.props.onRecive(response.data.number);
    });
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onRecive: (value) => {
      dispatch(reciveValue(value));
    }
  }
}

//Redux 연동
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
