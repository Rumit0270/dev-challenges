import * as React from 'react';
import './Buttons.scss';
import ButtonDemo from '../common/ButtonDemo/ButtonDemo';
import Button from '../common/Button/Button';

const Buttons: React.FC = (): JSX.Element => {
  return (
    <div className="buttons-container">
      <h2 className="buttons__title">Buttons</h2>
      <div className="buttons-demo-container">
        <ButtonDemo jsx="<Button />">
          <Button />
        </ButtonDemo>

        <ButtonDemo jsx="<Button variant='outline' />">
          <Button variant="outline" />
        </ButtonDemo>

        <ButtonDemo jsx="<Button variant='text' />">
          <Button variant="text" />
        </ButtonDemo>

        <ButtonDemo jsx="<Button disableShadow />">
          <Button disableShadow />
        </ButtonDemo>

        <div className="buttons--category">
          <ButtonDemo jsx="<Button disabled />">
            <Button disabled />
          </ButtonDemo>
          <ButtonDemo jsx="<Button variant='text' disabled />">
            <Button variant="text" disabled />
          </ButtonDemo>
        </div>

        <div className="buttons--category">
          <ButtonDemo jsx="<Button startIcon='local_grocery_store' />">
            <Button startIcon="local_grocery_store" />
          </ButtonDemo>
          <ButtonDemo jsx="<Button endIcon='local_grocery_store' />">
            <Button endIcon="local_grocery_store" />
          </ButtonDemo>
        </div>

        <div className="buttons--category">
          <ButtonDemo jsx="<Button size='sm' />">
            <Button size="sm" />
          </ButtonDemo>
          <ButtonDemo jsx="<Button size='md' />">
            <Button size="md" />
          </ButtonDemo>
          <ButtonDemo jsx="<Button size='lg' />">
            <Button size="lg" />
          </ButtonDemo>
        </div>

        <div className="buttons--category">
          <ButtonDemo jsx="<Button color='default' />">
            <Button color="default" />
          </ButtonDemo>

          <ButtonDemo jsx="<Button color='primary' title='Primary' />">
            <Button color="primary" title="Primary" />
          </ButtonDemo>

          <ButtonDemo jsx="<Button color='secondary' title='Secondary' />">
            <Button color="secondary" title="Secondary" />
          </ButtonDemo>

          <ButtonDemo jsx="<Button color='danger' title='Danger' />">
            <Button color="danger" title="Danger" />
          </ButtonDemo>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
