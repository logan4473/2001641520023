function compareTrains(trainA, trainB) {
  if (trainA.price.sleeper < trainB.price.sleeper) return -1;
  else if (trainA.price.sleeper > trainB.price.sleeper) return 1;
  const trainATime =
    trainA.departureTime.Hour * 60 +
    trainA.departureTime.Minutes +
    trainA.delayedBy;
  const trainBTime =
    trainB.departureTime.Hour * 60 +
    trainB.departureTime.Minutes +
    trainB.delayedBy;
  if (trainATime < trainBTime) return 1;
  else if (trainATime > trainBTime) return -1;
  return 0;
}

function sortTrains(trains) {
  trains.sort(compareTrains);
  return trains;
}

function filterTrains(trains) {
  trains.filter(
    (train) => train.departureTime.Hour * 60 + train.departureTime.Minutes > 30
  );
  return trains;
}

module.exports = { sortTrains, compareTrains, filterTrains };
