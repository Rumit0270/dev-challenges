import * as React from 'react';
import './Buttons.scss';
import ComponentDemo from '../common/ComponentDemo/ComponentDemo';
import Button from '../common/Button/Button';

const Buttons: React.FC = (): JSX.Element => {
  return (
    <div className="buttons-container">
      <h2 className="buttons__title">Buttons</h2>
      <div className="buttons-demo-container">
        <ComponentDemo jsx="<Button />">
          <Button />
        </ComponentDemo>

        <ComponentDemo jsx="<Button variant='outline' />">
          <Button variant="outline" />
        </ComponentDemo>

        <ComponentDemo jsx="<Button variant='text' />">
          <Button variant="text" />
        </ComponentDemo>

        <ComponentDemo jsx="<Button disableShadow />">
          <Button disableShadow />
        </ComponentDemo>

        <div className="buttons--category">
          <ComponentDemo jsx="<Button disabled />">
            <Button disabled />
          </ComponentDemo>
          <ComponentDemo jsx="<Button variant='text' disabled />">
            <Button variant="text" disabled />
          </ComponentDemo>
        </div>

        <div className="buttons--category">
          <ComponentDemo jsx="<Button startIcon='local_grocery_store' />">
            <Button startIcon="local_grocery_store" />
          </ComponentDemo>
          <ComponentDemo jsx="<Button endIcon='local_grocery_store' />">
            <Button endIcon="local_grocery_store" />
          </ComponentDemo>
        </div>

        <div className="buttons--category">
          <ComponentDemo jsx="<Button size='sm' />">
            <Button size="sm" />
          </ComponentDemo>
          <ComponentDemo jsx="<Button size='md' />">
            <Button size="md" />
          </ComponentDemo>
          <ComponentDemo jsx="<Button size='lg' />">
            <Button size="lg" />
          </ComponentDemo>
        </div>

        <div className="buttons--category">
          <ComponentDemo jsx="<Button color='default' />">
            <Button color="default" />
          </ComponentDemo>

          <ComponentDemo jsx="<Button color='primary' title='Primary' />">
            <Button color="primary" title="Primary" />
          </ComponentDemo>

          <ComponentDemo jsx="<Button color='secondary' title='Secondary' />">
            <Button color="secondary" title="Secondary" />
          </ComponentDemo>

          <ComponentDemo jsx="<Button color='danger' title='Danger' />">
            <Button color="danger" title="Danger" />
          </ComponentDemo>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
