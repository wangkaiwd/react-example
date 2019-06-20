import React, { useRef, useState } from 'react';
import { Button, Col, Input, Row } from 'antd';
// 受控组件和非受控组件
const App: React.FC = (props) => {
  const [noControlValue, setNoControlValue] = useState();
  const [controlValue, setControlValue] = useState();
  const inputElement = useRef<HTMLInputElement>(null); // HTMLInputElement 泛型约束
  const onClick = () => {
    if (inputElement.current) { // 必须先判断current存在，才能获取value属性
      console.log(inputElement.current.value);
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setControlValue(value);
  };
  return (
    <Row gutter={16} type="flex">
      <Col>
        <input
          defaultValue={noControlValue}
          placeholder="no control component"
          ref={inputElement}
        />
      </Col>
      <Col>
        <Input
          value={controlValue}
          placeholder="control component"
          onChange={onChange}
        />
      </Col>
      <Button type="primary" onClick={onClick}>Click</Button>
    </Row>
  );
};

export default App;
