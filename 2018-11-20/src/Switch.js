import React from 'react';
import {Route, Switch} from 'react-router-dom';

import FoodGroupSection from './FoodGroupSection';
import Main404 from './Main404';
import MainErrorBoundary from './MainErrorBoundary';
import MainHome from './MainHome';
import MineralSection from './MineralSection';
import VitaminSection from './VitaminSection';
/*
import MineralsSection from './MineralsSection';
import VitaminsSection from './VitaminsSection';
*/

import {foodGroups, title} from './content';

class Main extends React.Component {
  render() {
    const {isWaiting, hasError, foods, minerals, vitamins} = this.props;
    return (
      <Switch>
        <Route
          path="/"
          exact
          render={() => <MainHome isWaiting={isWaiting} hasError={hasError} />}
        />
        <Route
          path="/food-groups/:foodGroup"
          render={({match}) => {
            const foodGroup = match.params.foodGroup;
            const index = foodGroups.indexOf(foodGroup);
            return index !== -1 ? (
              <MainErrorBoundary
                isWaiting={isWaiting}
                hasError={hasError}
                className={`foodGroups ${foodGroup}`}
                title={`${foodGroup} ${title}`}
              >
                <FoodGroupSection
                  key={`food-groups/${foodGroup}`}
                  foodGroup={foodGroup}
                  foods={foods[index]}
                  minerals={minerals}
                  vitamins={vitamins}
                />
              </MainErrorBoundary>
            ) : (
              <Main404 isWaiting={isWaiting} hasError={hasError} />
            );
          }}
        />
        {/*
        <Route
          path="/minerals"
          exact
          render={() => (
            <MainErrorBoundary
              isWaiting={isWaiting}
              hasError={hasError}
              className={`minerals`}
              title={`minerals ${title}`}
            >
              <MineralsSection minerals={minerals} />
            </MainErrorBoundary>
          )}
        />
        */}
        <Route
          path="/minerals/:mineral"
          render={({match}) => {
            const mineralId = match.params.mineral;
            const mineral = minerals.find(({id}) => id === mineralId);
            return mineral ? (
              <MainErrorBoundary
                isWaiting={isWaiting}
                hasError={hasError}
                className={`mineral`}
                title={`mineral ${mineralId} ${title}`}
              >
                <MineralSection mineral={mineral} />
              </MainErrorBoundary>
            ) : (
              <Main404 isWaiting={isWaiting} hasError={hasError} />
            );
          }}
        />
        {/*
        <Route
          path="/vitamins"
          exact
          render={() => (
            <MainErrorBoundary
              isWaiting={isWaiting}
              hasError={hasError}
              className={`vitamins`}
              title={`vitamins ${title}`}
            >
              <VitaminsSection vitamins={vitamins} />
            </MainErrorBoundary>
          )}
        />
        */}
        <Route
          path="/vitamins/:vitamin"
          render={({match}) => {
            const vitaminId = match.params.vitamin;
            const vitamin = vitamins.find(({id}) => id === vitaminId);
            return vitamin ? (
              <MainErrorBoundary
                isWaiting={isWaiting}
                hasError={hasError}
                className={`vitamin`}
                title={`vitamin ${vitaminId} ${title}`}
              >
                <VitaminSection vitamin={vitamin} />
              </MainErrorBoundary>
            ) : (
              <Main404 isWaiting={isWaiting} hasError={hasError} />
            );
          }}
        />
        {/*
        <Route
          render={() => <Main404 isWaiting={isWaiting} hasError={hasError} />}
        />
        */}
      </Switch>
    );
  }
}

export default Main;
