import * as React from 'react';
import './Main.scss';
import ButtonDemo from '../common/ButtonDemo/ButtonDemo';
import Button from '../common/Button/Button';

const Main: React.FC = (): JSX.Element => {
  return (
    <div className="main-container">
      <h2 className="main__title">Buttons</h2>
      <div className="main__buttons">
        <ButtonDemo jsx="<Button />">
          <Button />
        </ButtonDemo>

        <ButtonDemo jsx="<Button variant='outline' />">
          <Button variant="outline" />
        </ButtonDemo>

        <ButtonDemo jsx="<Button variant='text' />">
          <Button variant="text" />
        </ButtonDemo>
      </div>
    </div>
  );
};

export default Main;
