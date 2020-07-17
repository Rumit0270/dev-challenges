import * as React from 'react';

import './Inputs.scss';
import ComponentDemo from '../common/ComponentDemo/ComponentDemo';
import Input from '../common/Input/Input';

const Inputs: React.FC = (): JSX.Element => {
  return (
    <div className="inputs-container">
      <h2 className="inputs__title">Inputs</h2>
      <div className="inputs-demo-container">
        <ComponentDemo jsx="<Input />">
          <Input />
        </ComponentDemo>

        <ComponentDemo jsx="<Input error />">
          <Input error />
        </ComponentDemo>

        <ComponentDemo jsx="<Input disabled />">
          <Input disabled />
        </ComponentDemo>
        <div className="inputs-category">
          <ComponentDemo jsx="<Input helperText='Some interesting text' />">
            <Input helperText="Some interesting text" />
          </ComponentDemo>

          <ComponentDemo jsx="<Input helperText='Some interesting text' error />">
            <Input helperText="Some interesting text" error />
          </ComponentDemo>
        </div>

        <div className="inputs-category">
          <ComponentDemo jsx="<Input startIcon='phone' />">
            <Input startIcon="phone" />
          </ComponentDemo>

          <ComponentDemo jsx="<Input endIcon='https' />">
            <Input endIcon="https" />
          </ComponentDemo>
        </div>

        <ComponentDemo jsx="<Input value='text' />">
          <Input value="text" />
        </ComponentDemo>

        <div className="inputs-category">
          <ComponentDemo jsx="<Input inputSize='sm' />">
            <Input inputSize="sm" />
          </ComponentDemo>

          <ComponentDemo jsx="<Input inputSize='md' />">
            <Input inputSize="md" />
          </ComponentDemo>
        </div>

        <ComponentDemo jsx="<Input fullWidth />">
          <Input fullWidth />
        </ComponentDemo>

        <ComponentDemo jsx="<Input multiline />">
          <Input multiline rows={4} />
        </ComponentDemo>
      </div>
    </div>
  );
};

export default Inputs;
