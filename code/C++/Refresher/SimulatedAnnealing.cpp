// SimulatedAnnealing.cpp
#include "SimulatedAnnealing.h"
#include <iostream>

// Constructor
SimulatedAnnealing::SimulatedAnnealing(double initialTemp, double coolingRate, 
                                     double stepSize, int iterationsPerTemp) 
    : initialTemp(initialTemp), coolingRate(coolingRate), 
      stepSize(stepSize), iterationsPerTemp(iterationsPerTemp) {
    srand(time(0));
    currentSolution = (rand() % 2000) / 100.0 - 10.0;  // Random initial solution [-10, 10]
    currentEnergy = calculateEnergy(currentSolution);
}

// Energy function (minimize x^2)
double SimulatedAnnealing::calculateEnergy(double x) {
    return x * x;
}

// Neighbor generation
double SimulatedAnnealing::generateNeighbor(double current, double stepSize) {
    double perturbation = (rand() % 2000 - 1000) / 1000.0 * stepSize;
    return current + perturbation;
}

// SA algorithm
void SimulatedAnnealing::run() {
    double T = initialTemp;
    while (T > 1e-5) {
        for (int i = 0; i < iterationsPerTemp; i++) {
            double neighbor = generateNeighbor(currentSolution, stepSize);
            double neighborEnergy = calculateEnergy(neighbor);
            double deltaE = neighborEnergy - currentEnergy;

            if (deltaE < 0 || (rand() % 1000) / 1000.0 < exp(-deltaE / T)) {
                currentSolution = neighbor;
                currentEnergy = neighborEnergy;
            }
        }
        T *= coolingRate;
    }
}

// Getters
double SimulatedAnnealing::getSolution() const { return currentSolution; }
double SimulatedAnnealing::getEnergy() const { return currentEnergy; }
