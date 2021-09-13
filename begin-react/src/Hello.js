import React, { Component } from 'react';

/**
 * CLASS COMPONENT
 */
// class Hello extends Component {
//   static defaultProps = {
//      name: '이름 없음';
//   }
//   render() {
//     const { color, isSpecial, name } = this.props
//     return <div style={{ color}}>
//       {isSpecial && <b>*</b>}
//       안녕하세요, {name}
//     </div>
//   }
// }

/**
 * FUNCTIONAL COMPONENT
 */
function Hello({ color, name, isSpecial }) {
  // console.log('props >>', props, props.name, props.color);
  console.log('props >>', color, name);
  return (
    <div style={{ color }}>
      {/* {isSpecial ? <b>*</b> : null} */}
      {isSpecial && <b>*</b>}
      안녕하세요, {name}
    </div>
  );
}

Hello.defaultProps = {
  name: '이름 없음.',
};

export default Hello;
